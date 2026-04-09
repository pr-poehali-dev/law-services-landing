"""
Вспомогательная функция: получить chat_id последнего написавшего боту пользователя. v3
"""
import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    headers = {"Access-Control-Allow-Origin": "*"}

    token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    if not token:
        return {"statusCode": 500, "headers": headers, "body": {"error": "no token"}}

    url = f"https://api.telegram.org/bot{token}/getUpdates"
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read())

    chats = []
    for update in data.get("result", []):
        msg = update.get("message") or update.get("my_chat_member", {})
        chat = msg.get("chat", {})
        if chat.get("id"):
            chats.append({
                "chat_id": chat["id"],
                "username": chat.get("username"),
                "first_name": chat.get("first_name"),
            })

    return {"statusCode": 200, "headers": headers, "body": {"chats": chats}}