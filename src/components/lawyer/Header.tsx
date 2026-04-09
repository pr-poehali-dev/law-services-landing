import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PHONE, PHONE_HREF, navLinks } from "./constants";

const SEND_LEAD_URL = "https://functions.poehali.dev/a891f966-5f82-4ff0-9f72-1c3098e4fbff";

function CallbackModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, source: "callback" }),
      });
    } finally {
      setLoading(false);
      setSent(true);
    }
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
                disabled={loading}
                className="w-full py-3 rounded font-golos font-semibold text-white text-sm transition-all hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: "var(--navy)" }}
              >
                {loading ? "Отправляем..." : "Жду звонка"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

interface HeaderProps {
  onCallbackOpen: () => void;
  callbackOpen: boolean;
  onCallbackClose: () => void;
}

export default function Header({ onCallbackOpen, callbackOpen, onCallbackClose }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex flex-col leading-tight">
              <span className="font-cormorant text-lg font-bold text-navy">Поварчук и Партнеры</span>
              <span className="text-[10px] text-gray-400 font-golos uppercase tracking-widest">Юридические услуги</span>
            </div>

            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-navy font-golos transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

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
                onClick={onCallbackOpen}
                className="hidden sm:block px-4 py-2 rounded text-white text-sm font-golos font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--navy)" }}
              >
                Обратный звонок
              </button>
              <button className="lg:hidden p-2 text-navy" onClick={() => setMenuOpen(!menuOpen)}>
                <Icon name={menuOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>
        </div>

      </header>

      {/* Оверлей с blur */}
      <div
        className="lg:hidden fixed inset-0 z-40 transition-all duration-400"
        style={{
          backdropFilter: menuOpen ? "blur(8px)" : "blur(0px)",
          backgroundColor: menuOpen ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0)",
          pointerEvents: menuOpen ? "auto" : "none",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.4s cubic-bezier(0.25,0.46,0.45,0.94), backdrop-filter 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Боковая панель */}
      <div
        className="lg:hidden fixed top-0 left-0 h-full w-72 z-50 flex flex-col"
        style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "4px 0 32px rgba(0,0,0,0.15)",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex flex-col leading-tight">
            <span className="font-cormorant text-lg font-bold text-navy">Поварчук и Партнеры</span>
            <span className="text-[10px] text-gray-400 font-golos uppercase tracking-widest">Юридические услуги</span>
          </div>
          <button onClick={() => setMenuOpen(false)} className="p-1 text-gray-500">
            <Icon name="X" size={20} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 gap-1 flex-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 py-3 font-golos border-b border-gray-100 hover:text-navy transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="px-6 pb-8 space-y-3">
          <a href={PHONE_HREF} className="flex items-center gap-2 py-2 font-golos font-semibold text-sm" style={{ color: "var(--gold)" }}>
            <Icon name="Phone" size={15} />
            {PHONE}
          </a>
          <button
            onClick={() => { onCallbackOpen(); setMenuOpen(false); }}
            className="w-full py-3 rounded text-white text-sm font-golos font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--navy)" }}
          >
            Обратный звонок
          </button>
        </div>
      </div>

      {callbackOpen && <CallbackModal onClose={onCallbackClose} />}
    </>
  );
}