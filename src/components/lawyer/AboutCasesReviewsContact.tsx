import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PHONE, PHONE_HREF, TELEGRAM, EMAIL, cases, reviews } from "./constants";

const SEND_LEAD_URL = "https://functions.poehali.dev/a891f966-5f82-4ff0-9f72-1c3098e4fbff";

interface AboutCasesReviewsContactProps {
  onCallbackOpen: () => void;
}

export default function AboutCasesReviewsContact({ onCallbackOpen }: AboutCasesReviewsContactProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });
  const [formSent, setFormSent] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "form" }),
      });
    } finally {
      setFormLoading(false);
      setFormSent(true);
    }
  };

  return (
    <>
      {/* ── ABOUT ── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest font-golos mb-3" style={{ color: "var(--gold)" }}>Обо мне</p>
              <h2 className="font-cormorant text-4xl font-bold text-navy mb-6">Почему выбирают меня</h2>
              <p className="text-gray-600 font-golos leading-relaxed mb-6">
                Меня зовут <strong>Поварчук Илья Валентинович</strong>. Я объективно оценю вашу ситуацию и предложу только те услуги, которые действительно приведут к решению проблемы. Я ценю ваше время и доверие.
              </p>
              <p className="text-gray-600 font-golos leading-relaxed mb-8">
                Работаю официально, с заключением договора и предоставлением закрывающих документов. Вы всегда знаете, за что платите.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "FileCheck", text: "Официальный договор на каждый вид услуг" },
                  { icon: "MessageSquare", text: "На связи в мессенджерах — отвечаю быстро" },
                  { icon: "TrendingUp", text: "Честная оценка перспектив перед началом работы" },
                  { icon: "BadgeCheck", text: "Закрывающие документы после завершения дела" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: "var(--gold)" }}>
                      <Icon name={item.icon} size={15} color="white" />
                    </div>
                    <span className="text-sm text-gray-700 font-golos">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 8px 20px -8px rgba(0,0,0,0.2)",
                  transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 30px -15px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 20px -8px rgba(0,0,0,0.2)";
                }}
              >
                <img
                  src="https://cdn.poehali.dev/files/05d74c33-dcb6-40dd-9ee0-d8470af725a0.png"
                  alt="Поварчук Илья Валентинович — юрист в офисе"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "340px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>

            <div className="rounded-2xl p-8 text-white" style={{ background: "linear-gradient(135deg, #1A2A4F 0%, #263666 100%)" }}>
              <h3 className="font-cormorant text-2xl font-semibold mb-2">Связаться прямо сейчас</h3>
              <p className="text-blue-200 text-sm font-golos mb-8">Выберите удобный способ онлайн-консультации</p>

              <div className="space-y-4">
                <a href={PHONE_HREF} className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--gold)" }}>
                    <Icon name="Phone" size={18} color="white" />
                  </div>
                  <div>
                    <div className="text-white font-golos font-semibold">{PHONE}</div>
                    <div className="text-blue-200 text-xs font-golos">Позвонить сейчас</div>
                  </div>
                  <Icon name="ArrowRight" size={16} color="#B68B40" className="ml-auto" />
                </a>

                <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#229ED9" }}>
                    <Icon name="Send" size={18} color="white" />
                  </div>
                  <div>
                    <div className="text-white font-golos font-semibold">@povpartner</div>
                    <div className="text-blue-200 text-xs font-golos">Написать в Telegram</div>
                  </div>
                  <Icon name="ArrowRight" size={16} color="#B68B40" className="ml-auto" />
                </a>

                <a href="https://max.ru/im?phone=79784564217" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#0077FF" }}>
                    <Icon name="MessageCircle" size={18} color="white" />
                  </div>
                  <div>
                    <div className="text-white font-golos font-semibold">Max</div>
                    <div className="text-blue-200 text-xs font-golos">Написать сообщение в Max</div>
                  </div>
                  <Icon name="ArrowRight" size={16} color="#B68B40" className="ml-auto" />
                </a>

                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--gold)" }}>
                    <Icon name="Mail" size={18} color="white" />
                  </div>
                  <div>
                    <div className="text-white font-golos font-semibold">{EMAIL}</div>
                    <div className="text-blue-200 text-xs font-golos">Написать письмо</div>
                  </div>
                  <Icon name="ArrowRight" size={16} color="#B68B40" className="ml-auto" />
                </a>
              </div>

              <button
                onClick={onCallbackOpen}
                className="mt-6 w-full py-3.5 rounded font-golos font-semibold text-navy text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Жду звонка — перезвоните мне
              </button>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASES ── */}
      <section id="cases" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest font-golos mb-3" style={{ color: "var(--gold)" }}>Результаты</p>
            <h2 className="font-cormorant text-4xl font-bold text-navy">Судебная практика</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {cases.map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#B68B40] transition-colors flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[11px] font-golos font-medium text-gray-400 uppercase tracking-wider">{c.number}</span>
                  <span className="text-[11px] font-golos px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--cream)", color: "var(--gold)" }}>{c.tag}</span>
                </div>
                <div>
                  <div className="font-cormorant text-2xl font-bold leading-tight" style={{ color: "var(--gold)" }}>{c.amount}</div>
                  <div className="font-golos font-semibold text-navy mt-0.5">{c.title}</div>
                </div>
                <p className="text-sm text-gray-500 font-golos leading-relaxed flex-1">{c.desc}</p>
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <Icon name="CheckCircle" size={14} color="#B68B40" />
                  <span className="text-xs font-golos text-gray-500">{c.result}</span>
                </div>
                <div className="text-[11px] text-gray-400 font-golos">{c.court}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://vc.ru/id1663201"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-golos font-medium transition-colors"
              style={{ color: "var(--navy)" }}
            >
              <Icon name="ExternalLink" size={15} />
              Наши статьи на VC.RU
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest font-golos mb-3" style={{ color: "var(--gold)" }}>Клиенты</p>
            <h2 className="font-cormorant text-4xl font-bold text-navy">Отзывы</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {reviews.map((r) => (
              <div key={r.name} className="bg-cream rounded-xl p-6 flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Icon key={i} name="Star" size={14} color="#B68B40" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm font-golos leading-relaxed mb-4 italic flex-1">«{r.text}»</p>
                <div>
                  <div className="font-golos font-semibold text-navy text-sm">{r.name}</div>
                  <div className="text-xs text-gray-400 font-golos mt-0.5">{r.source}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {[
              { icon: "Star", label: "Яндекс.Бизнес", sub: "Читать все отзывы", href: "https://yandex.ru/maps/org/povarchuk_i_partnyory/7292132270/reviews/?ll=33.485610%2C44.581079&z=17", color: "#FC3F1D" },
              { icon: "ShoppingBag", label: "Авито", sub: "Отзывы на Авито", href: "https://www.avito.ru/brands/9a3c45fd92904ef892d74f00ffca87ed", color: "#00AAFF" },
            ].map((pl) => (
              <a
                key={pl.label}
                href={pl.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#B68B40] transition-colors bg-white"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: pl.color }}>
                  <Icon name={pl.icon} size={18} color="white" />
                </div>
                <div>
                  <div className="font-golos font-semibold text-navy text-sm">{pl.label}</div>
                  <div className="text-gray-400 text-xs font-golos">{pl.sub}</div>
                </div>
                <Icon name="ExternalLink" size={14} color="#B68B40" className="ml-auto" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="py-20" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest font-golos mb-3" style={{ color: "var(--gold)" }}>Консультация</p>
              <h2 className="font-cormorant text-4xl font-bold text-white mb-4">Получите консультацию юриста</h2>
              <p className="text-blue-200 font-golos text-sm leading-relaxed mb-8">
                Опишите свою ситуацию — Илья Валентинович лично свяжется с вами и даст честную оценку перспектив.
              </p>
              <div className="space-y-5">
                {[
                  { icon: "Clock", text: "Ответ в течение 15 минут в рабочее время" },
                  { icon: "Lock", text: "Полная конфиденциальность вашей информации" },
                  { icon: "BadgeCheck", text: "Первичный анализ ситуации бесплатно" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <Icon name={item.icon} size={16} color="#B68B40" />
                    <span className="text-blue-100 text-sm font-golos">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              {formSent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "var(--gold)" }}>
                    <Icon name="Check" size={28} color="white" />
                  </div>
                  <h3 className="font-cormorant text-2xl text-navy font-semibold mb-2">Заявка отправлена!</h3>
                  <p className="text-gray-500 font-golos text-sm">Илья Валентинович свяжется с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-golos text-gray-500 mb-1.5 uppercase tracking-wide">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванович"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-golos focus:outline-none focus:border-[#B68B40] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-golos text-gray-500 mb-1.5 uppercase tracking-wide">Телефон *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-golos focus:outline-none focus:border-[#B68B40] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-golos text-gray-500 mb-1.5 uppercase tracking-wide">Суть вопроса</label>
                    <textarea
                      rows={4}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Кратко опишите вашу ситуацию..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-golos focus:outline-none focus:border-[#B68B40] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-4 rounded-lg font-golos font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "var(--navy)" }}
                  >
                    {formLoading ? "Отправляем..." : "Отправить заявку"}
                  </button>
                  <p className="text-center text-[11px] text-gray-400 font-golos">
                    Нажимая «Отправить», вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="lg:col-span-2">
              <div className="font-cormorant text-xl font-bold text-white mb-1">Поварчук и Партнеры</div>
              <div className="text-xs text-gray-500 mb-4 font-golos">ИНН 910403132709</div>
              <p className="text-sm font-golos leading-relaxed text-gray-400 max-w-xs">
                Профессиональная юридическая помощь гражданам и бизнесу. Работаем официально с договором.
              </p>
            </div>
            <div>
              <div className="text-white font-golos font-semibold text-sm mb-4">Контакты</div>
              <div className="space-y-2">
                <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-golos hover:text-white transition-colors">
                  <Icon name="Phone" size={13} /> {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm font-golos hover:text-white transition-colors">
                  <Icon name="Mail" size={13} /> {EMAIL}
                </a>
                <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-golos hover:text-white transition-colors">
                  <Icon name="Send" size={13} /> @povpartner
                </a>
              </div>
            </div>
            <div>
              <div className="text-white font-golos font-semibold text-sm mb-4">Соцсети и отзывы</div>
              <div className="space-y-2">
                {[
                  { label: "ВКонтакте", href: "https://vk.com" },
                  { label: "Telegram", href: TELEGRAM },
                  { label: "Одноклассники", href: "https://ok.ru" },
                  { label: "Яндекс.Бизнес", href: "https://yandex.ru/maps" },
                  { label: "Авито", href: "https://avito.ru" },
                  { label: "Статьи VC.RU", href: "https://vc.ru" },
                ].map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                    className="block text-sm font-golos hover:text-white transition-colors">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs font-golos text-gray-500">© 2024 Поварчук и Партнеры. Все права защищены.</p>
            <p className="text-xs font-golos text-gray-600">Регистрация домена: Nethouse</p>
          </div>
        </div>
      </footer>
    </>
  );
}