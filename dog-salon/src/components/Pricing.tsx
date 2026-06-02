import { Scissors, Sparkles, Plus, Info, Clock, MapPin, Phone, PawPrint, CalendarDays, Heart } from 'lucide-react';

const dentalServices = [
  { name: 'Vstupní ošetření + dentální hygiena', price: '1 500 Kč' },
  { name: 'Opakovaná dentální hygiena (do 6 měsíců)', price: '750 Kč' },
];

const extraServices = [
  { name: 'Čištění a depilace uší', price: '100 Kč' },
  { name: 'Čištění análních žláz', price: '100 Kč' },
  { name: 'Ostříhání drápků', price: '100 Kč' },
  { name: 'Vyholení čumáku, tlapek, bříška a jiné úpravy', price: '500 - 1 000 Kč' },
  { name: 'Trimování', price: 'dle plemene' },
];

const completeService = [
  { name: 'Yorkshire terrier', price: '750 - 950 Kč' },
  { name: 'Čivava', price: '650 - 1 200 Kč' },
  { name: 'Maltézský psík', price: '850 - 1 500 Kč' },
  { name: 'Boloňský psík', price: '850 - 1 500 Kč' },
  { name: 'Jezevčík', price: '850 - 1 500 Kč' },
  { name: 'Bišon', price: '950 - 1 500 Kč' },
  { name: 'Coton de Tulear', price: '950 - 1 800 Kč' },
  { name: 'Jack Russell terrier', price: '950 - 1 200 Kč' },
  { name: 'Knírač malý / střední', price: '950 - 1 800 Kč' },
  { name: 'Kokršpaněl', price: '950 - 1 200 Kč' },
  { name: 'Pudl toy / trpasličí / střední', price: '950 - 1 800 Kč' },
  { name: 'Shih-tzu', price: '950 - 1 500 Kč' },
  { name: 'West highland white terrier', price: '950 - 1 500 Kč' },
  { name: 'Samojed / Čau-čau', price: '1 500 - 2 500 Kč' },
  { name: 'Velká plemena', price: '2 000 - 3 500 Kč' },
  { name: 'Odholení kočky — klidné', price: '750 - 1 000 Kč' },
];

const PriceRow = ({ name, price }) => (
  <div className="group flex justify-between items-center gap-4 py-3 border-b border-rose-100/50 last:border-0">
    <span className="text-[#5d4037] font-semibold text-[15px] leading-snug group-hover:text-[#f43f5e] transition-colors">
      {name}
    </span>
    <span className="text-[#f43f5e] font-black whitespace-nowrap text-[15px]">
      {price}
    </span>
  </div>
);

export const Pricing = () => {
  return (
    <>
      {/* CENÍK */}
      <section id="cenik" className="relative py-28 px-6 lg:px-12 bg-transparent scroll-mt-12 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-24 right-[-160px] w-[420px] h-[420px] rounded-full bg-rose-100/50 blur-[110px]" />
          <div className="absolute bottom-24 left-[-160px] w-[420px] h-[420px] rounded-full bg-amber-100/50 blur-[110px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/65 backdrop-blur-md border border-white/80 px-5 py-2 rounded-full text-[#8d6e63] text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm">
              <PawPrint size={14} className="text-[#f43f5e] fill-[#f43f5e]" />
              <span>Péče na míru každému pejskovi</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#5d4037] mb-5 uppercase tracking-tighter">
              Ceník služeb
            </h2>

            <p className="text-lg md:text-xl text-[#8d6e63] font-medium max-w-2xl mx-auto leading-relaxed">
              Ceny jsou orientační. Výsledná cena se odvíjí od velikosti pejska, stavu srsti,
              plstí, případných blech a náročnosti úpravy.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white/62 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 shadow-[0_24px_70px_rgba(93,64,55,0.08)] border border-white/75 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/70 via-transparent to-rose-50/70" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-[52px] h-[52px] rounded-3xl bg-[#5d4037]/7 flex items-center justify-center text-[#5d4037]">
                      <Scissors size={25} />
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-[#5d4037] uppercase tracking-tight">
                        Kompletní servis
                      </h3>
                      <p className="text-[#8d6e63] font-semibold text-sm mt-1">
                        střih, koupel, fénování i základní péče
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex w-12 h-12 rounded-3xl bg-white/70 border border-white items-center justify-center shadow-sm">
                    <Heart size={20} className="text-rose-300 fill-rose-300" />
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-[#fff7ed]/80 text-[#8d6e63] p-5 rounded-3xl text-sm font-semibold mb-8 border border-amber-100/60 shadow-sm">
                  <Info size={19} className="shrink-0 mt-0.5 text-[#f43f5e]" />
                  <p className="leading-relaxed">
                    Kompletní servis zahrnuje koupání, fénování, střih, rozčesávání,
                    stříhání drápků, depilaci a čištění oušek i análních žlázek.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
                  {completeService.map((item, index) => (
                    <PriceRow key={index} name={item.name} price={item.price} />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-white/62 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-9 shadow-[0_24px_70px_rgba(93,64,55,0.08)] border border-white/75 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/70 via-transparent to-purple-50/60" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-[52px] h-[52px] rounded-3xl bg-[#f43f5e]/10 flex items-center justify-center text-[#f43f5e]">
                      <Sparkles size={25} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-[#5d4037] uppercase tracking-tight">
                        Dentální hygiena
                      </h3>
                      <p className="text-[#8d6e63] font-semibold text-sm mt-1">
                        ultrazvukem bez narkózy
                      </p>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-[#8d6e63] mb-6 leading-relaxed">
                    Provádí se ultrazvukovým kartáčkem CleanyTeeth bez narkózy či sedativ.
                    Ošetření je bezbolestné a šetrné.
                  </p>

                  <div className="flex flex-col">
                    {dentalServices.map((item, index) => (
                      <PriceRow key={index} name={item.name} price={item.price} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white/62 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-9 shadow-[0_24px_70px_rgba(93,64,55,0.08)] border border-white/75 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/70 via-transparent to-amber-50/60" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-[52px] h-[52px] rounded-3xl bg-[#8d6e63]/10 flex items-center justify-center text-[#8d6e63]">
                      <Plus size={25} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-[#5d4037] uppercase tracking-tight">
                        Samostatné úkony
                      </h3>
                      <p className="text-[#8d6e63] font-semibold text-sm mt-1">
                        drobná péče podle potřeby
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {extraServices.map((item, index) => (
                      <PriceRow key={index} name={item.name} price={item.price} />
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href="tel:+420705997677"
                className="group bg-[#f43f5e] text-white rounded-[2.5rem] p-7 shadow-xl shadow-rose-200/60 hover:bg-[#5d4037] transition-all"
              >
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-white/75 mb-2">
                      Nejste si jistí cenou?
                    </p>
                    <p className="text-2xl font-black tracking-tight">
                      Zavolejte a domluvíme se
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-3xl bg-white/18 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone size={25} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT, OTEVÍRACÍ DOBA A PATIČKA */}
      <section id="kontakt" className="relative py-28 px-6 lg:px-12 bg-transparent scroll-mt-12 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-white/55 blur-[110px]" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
          <div className="lg:col-span-5 bg-white/62 backdrop-blur-xl rounded-[2.5rem] p-7 md:p-10 shadow-[0_24px_70px_rgba(93,64,55,0.08)] border border-white/75">
            <div className="inline-flex items-center gap-2 bg-[#f43f5e]/10 px-4 py-2 rounded-full text-[#f43f5e] text-[11px] font-black uppercase tracking-widest mb-6">
              <CalendarDays size={14} />
              <span>Objednávky telefonicky</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#5d4037] mb-5 uppercase tracking-tighter">
              Kde nás najdete
            </h2>

            <p className="text-[#8d6e63] font-medium mb-9 leading-relaxed">
              Ozvěte se nám a domluvte si ideální čas návštěvy. Salon funguje pouze
              dle telefonických objednávek, aby měl každý pejsek dostatek klidu.
            </p>
            
            <div className="space-y-5">
              <div className="flex gap-4 items-center bg-white/55 border border-white/70 rounded-3xl p-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-[#f43f5e] shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#8d6e63]">
                    Adresa salonu
                  </h4>
                  <p className="text-lg font-black text-[#5d4037]">
                    Češkova 1790, Pardubice
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-white/55 border border-white/70 rounded-3xl p-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-[#f43f5e] shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#8d6e63]">
                    Telefon pro objednávky
                  </h4>
                  <a href="tel:+420705997677" className="text-lg font-black text-[#5d4037] hover:text-[#f43f5e] transition-colors">
                    +420 705 997 677
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-white/55 border border-white/70 rounded-3xl p-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-[#f43f5e] shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#8d6e63]">
                    Provozní doba
                  </h4>
                  <p className="text-lg font-black text-[#5d4037]">
                    Pouze dle telefonických objednávek
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative w-full h-[420px] rounded-[2.5rem] overflow-hidden border-[10px] border-white/70 shadow-[0_24px_70px_rgba(93,64,55,0.10)] bg-white/50">
              <iframe
                src="https://www.google.com/maps?q=%C4%8Ce%C5%A1kova%201790%2C%20Pardubice&output=embed"
                className="w-full h-full border-0 grayscale opacity-90 contrast-105"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa salonu Eliška stříhá"
              />

              <div className="absolute left-5 bottom-5 right-5 bg-white/82 backdrop-blur-xl border border-white/80 rounded-3xl p-5 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-[#5d4037] font-black text-lg">
                      Eliška stříhá
                    </p>
                    <p className="text-[#8d6e63] font-semibold text-sm">
                      Češkova 1790, Pardubice
                    </p>
                  </div>

                  <a
                    href="tel:+420705997677"
                    className="inline-flex items-center justify-center gap-2 bg-[#5d4037] text-white px-5 py-3 rounded-2xl font-black text-sm uppercase hover:bg-[#f43f5e] transition-colors"
                  >
                    <Phone size={16} />
                    Zavolat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-rose-100/70 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-[#8d6e63] relative z-10">
          <p>© {new Date().getFullYear()} Eliška stříhá. Všechna práva vyhrazena.</p>
          <p className="italic flex items-center gap-2">
            <PawPrint size={14} className="text-[#f43f5e] fill-[#f43f5e]" />
            S láskou pečujeme o ty, které milujete.
          </p>
        </footer>
      </section>
    </>
  );
};