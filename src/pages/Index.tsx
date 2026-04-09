import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+7 (978) 456-42-17";
const PHONE_HREF = "tel:+79784564217";
const TELEGRAM = "https://t.me/povpartner";
const EMAIL = "povpartner@mail.ru";
const LAWYER_PHOTO = "https://cdn.poehali.dev/projects/5f091524-28cf-4100-b80e-cf5725f65b41/files/9ddd204d-09ab-46b8-bf16-5646be890167.jpg";

const services = [
  { icon: "Briefcase", title: "Арбитражные споры", desc: "Представительство в арбитражных судах по коммерческим спорам любой сложности" },
  { icon: "Heart", title: "Семейные споры", desc: "Развод, раздел имущества, алименты, определение места жительства детей" },
  { icon: "FileText", title: "Исполнительное производство", desc: "Взыскание долгов, работа с ФССП, обжалование действий приставов" },
  { icon: "ShieldCheck", title: "Защита прав потребителя", desc: "Некачественный товар, услуги, возврат средств, компенсации" },
  { icon: "Copyright", title: "Защита авторских прав", desc: "Регистрация, защита интеллектуальной собственности, споры о плагиате" },
  { icon: "Users", title: "Трудовые споры", desc: "Незаконное увольнение, невыплата зарплаты, восстановление на работе" },
  { icon: "Car", title: "Автоюрист", desc: "ДТП, страховые выплаты, лишение прав, возмещение ущерба" },
  { icon: "Home", title: "Споры о недвижимости", desc: "ДДУ, купля-продажа, аренда, соседские споры, признание права собственности" },
  { icon: "Clock", title: "Пенсионные споры", desc: "Назначение пенсии, перерасчёт, оспаривание решений ПФР" },
];

const cases = [
  { amount: "2 400 000 ₽", title: "Взыскание по ДДУ", desc: "Неустойка с застройщика за просрочку сдачи объекта" },
  { amount: "1 800 000 ₽", title: "Трудовой спор", desc: "Восстановление на работе + компенсация морального вреда" },
  { amount: "950 000 ₽", title: "Защита потребителя", desc: "Возврат средств за некачественный ремонт квартиры" },
];

const reviews = [
  { name: "Марина К.", text: "Илья Валентинович помог нам вернуть деньги от застройщика. Профессионально, честно, без лишних обещаний. Очень рекомендую!" },
  { name: "Александр Д.", text: "Обращался по трудовому спору. Быстро разобрались, всё объяснил понятно. Суд выиграли. Работой доволен." },
  { name: "Светлана П.", text: "Помог с разделом имущества при разводе. Держал в курсе на каждом этапе. Человечный и грамотный юрист." },
];

function CallbackModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-4 p-8 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
          <Icon name="X" size={20} />
        </button>
        {sent ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "var(--gold)" }}>
              <Icon name="Check" size={28} color="white" />
            </div>
            <h3 className="font-cormorant text-2xl text-navy font-semibold mb-2">Заявка отправлена!</h3>
            <p className="text-gray-500 font-golos">Илья Валентинович свяжется с вами в ближайшее время.</p>
          </div>
        ) : (
          <>
            <h3 className="font-cormorant text-2xl font-semibold text-navy mb-1">Обратный звонок</h3>
            <p className="text-gray-500 text-sm font-golos mb-6">Оставьте номер — перезвоним в течение 15 минут</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm font-golos focus:outline-none focus:border-[#B68B40] transition-colors"
              />
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm font-golos focus:outline-none focus:border-[#B68B40] transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 rounded font-golos font-semibold text-white text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--navy)" }}
              >
                Жду звонка
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Index() {
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });
  const [formSent, setFormSent] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#about", label: "О компании" },
    { href: "#cases", label: "Практика" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-cream font-golos">
      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex flex-col leading-tight">
              <span className="font-cormorant text-lg font-bold text-navy">Поварчук и Партнеры</span>
              <span className="text-[10px] text-gray-400 font-golos uppercase tracking-widest">Юридические услуги</span>
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-navy font-golos transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <a
                href={PHONE_HREF}
                className="hidden sm:flex items-center gap-2 font-golos font-semibold text-sm"
                style={{ color: "var(--gold)" }}
              >
                <Icon name="Phone" size={15} />
                {PHONE}
              </a>
              <button
                onClick={() => setCallbackOpen(true)}
                className="hidden sm:block px-4 py-2 rounded text-white text-sm font-golos font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--navy)" }}
              >
                Обратный звонок
              </button>
              {/* Mobile burger */}
              <button className="lg:hidden p-2 text-navy" onClick={() => setMenuOpen(!menuOpen)}>
                <Icon name={menuOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="block text-sm text-gray-700 py-2 font-golos" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="flex items-center gap-2 py-2 font-golos font-semibold text-sm" style={{ color: "var(--gold)" }}>
              <Icon name="Phone" size={15} />
              {PHONE}
            </a>
            <button
              onClick={() => { setCallbackOpen(true); setMenuOpen(false); }}
              className="w-full py-3 rounded text-white text-sm font-golos font-semibold"
              style={{ backgroundColor: "var(--navy)" }}
            >
              Обратный звонок
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="pt-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1A2A4F 0%, #263666 60%, #1A2A4F 100%)" }}>
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-white" style={{ transform: "translate(30%, -30%)" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white" style={{ transform: "translate(-30%, 30%)" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "var(--gold)" }}></div>
                <span className="text-xs uppercase tracking-widest font-golos" style={{ color: "var(--gold)" }}>Юридическая помощь</span>
              </div>
              <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Поварчук<br />
                <span className="italic font-light" style={{ color: "var(--gold-light)" }}>Илья Валентинович</span>
              </h1>
              <p className="text-blue-100 text-base lg:text-lg mb-4 font-golos leading-relaxed max-w-lg">
                Юридическая помощь гражданам и бизнесу. Бесплатный первичный анализ. Работа официально с договором.
              </p>
              <p className="text-blue-200 text-sm mb-8 font-golos italic">
                «Репутация и честное отношение к клиенту — основа моей практики»
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setCallbackOpen(true)}
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded text-navy font-golos font-semibold text-sm transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <Icon name="Phone" size={16} />
                  Получить консультацию
                </button>
                <a
                  href="https://yandex.ru/maps/org/povarchuk_i_partnery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded border font-golos text-sm text-white transition-all hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.3)" }}
                >
                  <Icon name="Star" size={16} />
                  Читать отзывы
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12">
                {[
                  { n: "10+", label: "лет практики" },
                  { n: "500+", label: "дел выиграно" },
                  { n: "98%", label: "довольных клиентов" },
                ].map((s) => (
                  <div key={s.n}>
                    <div className="font-cormorant text-3xl font-bold" style={{ color: "var(--gold)" }}>{s.n}</div>
                    <div className="text-blue-200 text-xs font-golos">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="animate-fade-in-delay-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl opacity-20" style={{ background: "var(--gold)", filter: "blur(24px)" }}></div>
                <img
                  src={LAWYER_PHOTO}
                  alt="Поварчук Илья Валентинович — юрист"
                  className="relative rounded-2xl w-full max-w-sm object-cover shadow-2xl"
                  style={{ maxHeight: "480px" }}
                />
                {/* Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--navy)" }}>
                      <Icon name="Shield" size={14} color="white" />
                    </div>
                    <div>
                      <div className="text-navy text-xs font-golos font-semibold">Официальный договор</div>
                      <div className="text-gray-400 text-[10px]">ИНН 910403132709</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest font-golos mb-3" style={{ color: "var(--gold)" }}>Мой метод</p>
            <h2 className="font-cormorant text-4xl font-bold text-navy">Мой подход к каждому делу</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "MessageCircle", step: "01", title: "Первичный анализ", desc: "Удобная консультация в мессенджере, по телефону или WhatsApp — без формальностей, в удобное для вас время" },
              { icon: "FileSearch", step: "02", title: "Профессиональная оценка", desc: "Изучаю документы, определяю перспективы спора и честно рассказываю, стоит ли браться за дело" },
              { icon: "Scale", step: "03", title: "Полное сопровождение", desc: "Веду дело от подготовки документов до вступления решения суда в законную силу" },
            ].map((item) => (
              <div key={item.step} className="relative p-8 rounded-xl border border-gray-100 hover:border-[#B68B40] transition-colors group">
                <div className="absolute top-6 right-6 font-cormorant text-5xl font-bold text-gray-100 group-hover:text-[#B68B40]/20 transition-colors select-none">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: "var(--navy)" }}>
                  <Icon name={item.icon} size={22} color="white" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm font-golos leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Online consultation callout */}
          <div className="mt-10 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 justify-between" style={{ backgroundColor: "var(--cream)" }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: "var(--gold)" }}>
                <Icon name="Video" size={22} color="white" />
              </div>
              <div>
                <div className="font-golos font-semibold text-navy">Онлайн-консультация в реальном времени</div>
                <div className="text-sm text-gray-500 font-golos">Telegram, WhatsApp, телефонный звонок — выберите удобный способ</div>
              </div>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded text-white text-sm font-golos font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#229ED9" }}
              >
                <Icon name="Send" size={14} />
                Telegram
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 px-4 py-2.5 rounded text-white text-sm font-golos font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--navy)" }}
              >
                <Icon name="Phone" size={14} />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest font-golos mb-3" style={{ color: "var(--gold)" }}>Направления</p>
            <h2 className="font-cormorant text-4xl font-bold text-navy">Юридические услуги</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <button
                key={s.title}
                onClick={() => setCallbackOpen(true)}
                className="service-card text-left bg-white rounded-xl p-6 border border-gray-100 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors group-hover:bg-navy"
                  style={{ backgroundColor: "var(--cream)" }}>
                  <Icon name={s.icon} size={20} color="#1A2A4F" />
                </div>
                <h3 className="font-cormorant text-lg font-semibold text-navy mb-2 group-hover:text-[#B68B40] transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm font-golos leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-golos" style={{ color: "var(--gold)" }}>
                  Получить консультацию <Icon name="ArrowRight" size={12} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

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

            {/* Mini contacts card */}
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
                onClick={() => setCallbackOpen(true)}
                className="mt-6 w-full py-3.5 rounded font-golos font-semibold text-navy text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Жду звонка — перезвоните мне
              </button>
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
              <div key={c.title} className="bg-white rounded-xl p-7 border border-gray-100 hover:border-[#B68B40] transition-colors">
                <div className="font-cormorant text-3xl font-bold mb-1" style={{ color: "var(--gold)" }}>{c.amount}</div>
                <div className="font-golos font-semibold text-navy mb-2">{c.title}</div>
                <div className="text-sm text-gray-500 font-golos">{c.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://vc.ru"
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
              <div key={r.name} className="bg-cream rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Icon key={i} name="Star" size={14} color="#B68B40" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm font-golos leading-relaxed mb-4 italic">«{r.text}»</p>
                <div className="font-golos font-semibold text-navy text-sm">{r.name}</div>
              </div>
            ))}
          </div>

          {/* External review links */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {[
              { icon: "Star", label: "Яндекс.Бизнес", sub: "Читать все отзывы", href: "https://yandex.ru/maps/org", color: "#FC3F1D" },
              { icon: "ShoppingBag", label: "Авито", sub: "Отзывы на Авито", href: "https://avito.ru", color: "#00AAFF" },
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

            {/* Form */}
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
                    className="w-full py-4 rounded-lg font-golos font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "var(--navy)" }}
                  >
                    Отправить заявку
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

      {/* Floating call button (mobile) */}
      <a
        href={PHONE_HREF}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-40 sm:hidden transition-transform hover:scale-110"
        style={{ backgroundColor: "var(--gold)" }}
        aria-label="Позвонить"
      >
        <Icon name="Phone" size={22} color="white" />
      </a>

      {/* Callback modal */}
      {callbackOpen && <CallbackModal onClose={() => setCallbackOpen(false)} />}
    </div>
  );
}
