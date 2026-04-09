import Icon from "@/components/ui/icon";
import { PHONE_HREF, TELEGRAM, LAWYER_PHOTO, services } from "./constants";

interface HeroApproachServicesProps {
  onCallbackOpen: () => void;
}

export default function HeroApproachServices({ onCallbackOpen }: HeroApproachServicesProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1A2A4F 0%, #263666 60%, #1A2A4F 100%)" }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-white" style={{ transform: "translate(30%, -30%)" }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white" style={{ transform: "translate(-30%, 30%)" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                  onClick={onCallbackOpen}
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

            <div className="animate-fade-in-delay-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl opacity-20" style={{ background: "var(--gold)", filter: "blur(24px)" }}></div>
                <img
                  src={LAWYER_PHOTO}
                  alt="Поварчук Илья Валентинович — юрист"
                  className="relative rounded-2xl w-full max-w-lg object-cover shadow-2xl"
                  style={{ maxHeight: "580px" }}
                />
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
                onClick={onCallbackOpen}
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
    </>
  );
}