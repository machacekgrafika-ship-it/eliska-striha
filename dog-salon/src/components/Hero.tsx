import { useState } from 'react';
import { PawPrint, CalendarDays, Menu, Phone, MapPin, Sparkles, Heart, X } from 'lucide-react';
import eliskaHafani from '../assets/eliska-hafani.png';

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <section className="relative min-h-[88vh] flex items-center pt-28 pb-10 overflow-hidden bg-transparent">
      {/* Navigační menu */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="bg-white/55 backdrop-blur-xl border border-white/70 shadow-[0_18px_60px_rgba(93,64,55,0.08)] rounded-[28px] px-5 lg:px-7 py-4">
            <div className="flex justify-between items-center">
              <a href="#" onClick={closeMenu} className="flex items-center gap-3 font-black text-2xl text-[#5d4037] tracking-tighter">
                <div className="w-11 h-11 rounded-2xl bg-[#f43f5e]/10 flex items-center justify-center">
                  <PawPrint className="text-[#f43f5e] fill-[#f43f5e]" size={24} />
                </div>

                <span>
                  Eliška
                  <span className="text-[#f43f5e] font-serif lowercase italic font-normal tracking-normal"> stříhá</span>
                </span>
              </a>

              <nav className="hidden md:flex items-center gap-8 font-black text-[13px] uppercase tracking-wider text-[#8d6e63]">
                <a href="#promeny" className="hover:text-[#f43f5e] transition-colors">Proměny</a>
                <a href="#cenik" className="hover:text-[#f43f5e] transition-colors">Ceník</a>
                <a href="#kontakt" className="hover:text-[#f43f5e] transition-colors">Kontakt</a>
              </nav>

              <a
                href="tel:+420705997677"
                className="hidden sm:flex items-center gap-2 bg-[#5d4037] text-white px-5 py-3 rounded-2xl font-black text-sm uppercase tracking-tight hover:bg-[#f43f5e] transition-all shadow-lg shadow-[#5d4037]/10"
              >
                <Phone size={16} />
                705 997 677
              </a>

              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden text-[#5d4037] bg-white/70 rounded-2xl p-2"
                aria-label={isMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden mt-5 pt-5 border-t border-rose-100/70">
                <nav className="flex flex-col gap-3 font-black text-sm uppercase tracking-wider text-[#8d6e63]">
                  <a
                    href="#promeny"
                    onClick={closeMenu}
                    className="bg-white/65 rounded-2xl px-4 py-3 hover:text-[#f43f5e] transition-colors"
                  >
                    Proměny
                  </a>

                  <a
                    href="#cenik"
                    onClick={closeMenu}
                    className="bg-white/65 rounded-2xl px-4 py-3 hover:text-[#f43f5e] transition-colors"
                  >
                    Ceník
                  </a>

                  <a
                    href="#kontakt"
                    onClick={closeMenu}
                    className="bg-white/65 rounded-2xl px-4 py-3 hover:text-[#f43f5e] transition-colors"
                  >
                    Kontakt
                  </a>

                  <a
                    href="tel:+420705997677"
                    onClick={closeMenu}
                    className="mt-2 flex items-center justify-center gap-2 bg-[#f43f5e] text-white rounded-2xl px-4 py-4 shadow-lg shadow-rose-200/60"
                  >
                    <Phone size={17} />
                    Zavolat 705 997 677
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Jemné dekorace v hero části */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[12%] right-[5%] w-[520px] h-[520px] bg-rose-100/55 rounded-full blur-[120px]" />
        <div className="absolute bottom-[8%] left-[-8%] w-[420px] h-[420px] bg-amber-100/50 rounded-full blur-[110px]" />
        <div className="absolute top-[28%] left-[48%] w-[280px] h-[280px] bg-purple-100/35 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 mt-8">
        <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/80 px-5 py-2 rounded-full text-[#8d6e63] text-[11px] font-black uppercase tracking-widest mb-8 shadow-sm">
            <MapPin size={14} className="text-[#f43f5e]" strokeWidth={2.5} />
            <span>Pardubice • Češkova 1790</span>
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-[#5d4037] leading-[0.95] mb-8 tracking-tighter uppercase">
            Laskavá péče <br />
            <span className="text-[#f43f5e] font-serif lowercase italic font-light tracking-normal block mt-3">
              pro vaše chlupáče
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-[#8d6e63] mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium text-balance">
            Moderní střihy, koupání, péče o srst i kosmetická dentální hygiena bez narkózy.
            V klidném prostředí, s trpělivostí a individuálním přístupem ke každému pejskovi.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
            <a
              href="tel:+420705997677"
              className="group bg-[#f43f5e] text-white px-9 py-5 rounded-3xl font-black text-lg hover:bg-[#5d4037] transition-all shadow-xl shadow-rose-200/70 flex items-center gap-3 scale-100 hover:scale-[1.03] uppercase tracking-tight"
            >
              <CalendarDays size={23} />
              Objednat termín
            </a>

            <a
              href="#cenik"
              className="bg-white/70 backdrop-blur-md text-[#5d4037] border border-white/80 px-9 py-5 rounded-3xl font-black text-lg hover:bg-white transition-all shadow-lg shadow-[#5d4037]/5 flex items-center gap-3 uppercase tracking-tight"
            >
              <Sparkles size={22} className="text-[#f43f5e]" />
              Zobrazit ceník
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0">
            <div className="bg-white/55 backdrop-blur-md border border-white/70 rounded-3xl px-5 py-4 shadow-sm">
              <p className="text-[#f43f5e] font-black text-lg">Bez stresu</p>
              <p className="text-[#8d6e63] text-sm font-semibold">klidný přístup</p>
            </div>

            <div className="bg-white/55 backdrop-blur-md border border-white/70 rounded-3xl px-5 py-4 shadow-sm">
              <p className="text-[#f43f5e] font-black text-lg">Dentální hygiena</p>
              <p className="text-[#8d6e63] text-sm font-semibold">bez anestezie</p>
            </div>

            <div className="bg-white/55 backdrop-blur-md border border-white/70 rounded-3xl px-5 py-4 shadow-sm">
              <p className="text-[#f43f5e] font-black text-lg">Pardubice</p>
              <p className="text-[#8d6e63] text-sm font-semibold">Češkova 1790</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center items-center">
          <div className="absolute -top-6 left-0 lg:-left-3 z-20 bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl px-5 py-4 shadow-xl shadow-[#5d4037]/10 rotate-[-4deg]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center">
                <Heart size={20} className="text-[#f43f5e] fill-[#f43f5e]" />
              </div>
              <div>
                <p className="text-[#5d4037] font-black text-sm uppercase leading-none">Péče s láskou</p>
                <p className="text-[#8d6e63] text-xs font-bold mt-1">pro malé i velké hafany</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[390px] aspect-[0.96/1] rounded-[42%_46%_56%_30%/45%_42%_50%_55%] overflow-hidden border-[10px] border-white/90 shadow-2xl shadow-rose-200/40 transform lg:rotate-3 bg-white/40">
            <img
              src={eliskaHafani}
              alt="Eliška stříhá - péče o pejsky"
              className="w-full h-full object-cover"
              style={{
                objectPosition: '54% center',
                transform: 'scale(1.18)',
              }}
            />
          </div>

          <div className="absolute -bottom-5 right-10 lg:right-6 z-20 bg-[#5d4037] text-white rounded-[28px] px-6 py-5 shadow-xl shadow-[#5d4037]/20 rotate-[3deg]">
            <div className="flex items-center gap-3">
              <PawPrint className="w-8 h-8 text-[#ffd7df] fill-[#ffd7df]" />
              <div>
                <p className="font-black text-sm uppercase leading-none">Objednávky</p>
                <p className="text-white/75 text-xs font-bold mt-1">telefonicky</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-12 right-2 z-0 text-[#5d4037] opacity-10">
            <PawPrint className="w-32 h-32" fill="currentColor" strokeWidth={0.5} />
          </div>
        </div>
      </div>
    </section>
  );
};