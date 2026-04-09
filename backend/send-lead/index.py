"""
Отправка заявки с сайта юриста на email и в Telegram.
Принимает POST с полями: name, phone, comment, source (callback|form).
"""
import json
import os
import smtplib
import urllib.request
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


TELEGRAM_CHAT_ID = "1063450491"
FROM_EMAIL = "povpartner@mail.ru"
TO_EMAIL = "povpartner@mail.ru"
SMTP_HOST = "smtp.mail.ru"
SMTP_PORT = 465


def send_telegram(token: str, text: str):
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = json.dumps({
        "chat_id": TELEGRAM_CHAT_ID,
        "text": text,
        "parse_mode": "HTML"
    }).encode("utf-8")
    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    urllib.request.urlopen(req, timeout=10)


def send_email(password: str, subject: str, body: str):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = FROM_EMAIL
    msg["To"] = TO_EMAIL
    msg.attach(MIMEText(body, "html", "utf-8"))
    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
        server.login(FROM_EMAIL, password)
        server.sendmail(FROM_EMAIL, TO_EMAIL, msg.as_string())


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
    except Exception:
        return {"statusCode": 400, "headers": headers, "body": {"error": "invalid json"}}

    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    comment = body.get("comment", "").strip()
    source = body.get("source", "form")

    if not name or not phone:
        return {"statusCode": 400, "headers": headers, "body": {"error": "name and phone required"}}

    source_label = "Обратный звонок" if source == "callback" else "Форма на сайте"

    tg_text = (
        f"📩 <b>Новая заявка — {source_label}</b>\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📞 <b>Телефон:</b> {phone}\n"
    )
    if comment:
        tg_text += f"💬 <b>Вопрос:</b> {comment}\n"

    email_body = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #1A2A4F; border-bottom: 2px solid #B68B40; padding-bottom: 10px;">
        Новая заявка — {source_label}
      </h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px 0; color: #666; width: 120px;">Имя:</td><td style="padding: 8px 0; font-weight: bold; color: #1A2A4F;">{name}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Телефон:</td><td style="padding: 8px 0; font-weight: bold; color: #1A2A4F;"><a href="tel:{phone}" style="color: #B68B40;">{phone}</a></td></tr>
        {"<tr><td style='padding: 8px 0; color: #666; vertical-align: top;'>Вопрос:</td><td style='padding: 8px 0; color: #1A2A4F;'>" + comment + "</td></tr>" if comment else ""}
      </table>
      <p style="margin-top: 24px; font-size: 12px; color: #999;">Заявка отправлена с сайта Поварчук и Партнеры</p>
    </div>
    """

    errors = []

    tg_token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    if tg_token:
        try:
            send_telegram(tg_token, tg_text)
        except Exception as e:
            errors.append(f"telegram: {e}")

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    if smtp_password:
        try:
            send_email(smtp_password, f"Заявка с сайта: {name} — {phone}", email_body)
        except Exception as e:
            errors.append(f"email: {e}")

    if errors:
        return {"statusCode": 207, "headers": headers, "body": {"ok": True, "warnings": errors}}

    return {"statusCode": 200, "headers": headers, "body": {"ok": True}}