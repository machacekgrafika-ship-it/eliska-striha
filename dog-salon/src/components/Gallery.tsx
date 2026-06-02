import { Sparkles, Heart, Scissors, PawPrint } from 'lucide-react';
import pred1 from '../assets/pred1.jpg';
import po1 from '../assets/po1.jpg';
import pred2 from '../assets/pred2.jpg';
import po2 from '../assets/po2.jpg';

const transformations = [
  {
    id: 1,
    breed: 'Maltézský psík',
    before: pred1,
    after: po1,
    desc: 'Kompletní střih, koupel a šetrné vyčesání plstí.',
  },
  {
    id: 2,
    breed: 'Yorkshire terrier',
    before: pred2,
    after: po2,
    desc: 'Zkrácení srsti, úprava hlavičky a čištění oušek.',
  },
];

export const Gallery = () => (
  <section id="promeny" className="relative py-28 px-6 lg:px-12 bg-transparent scroll-mt-12 overflow-hidden">
    {/* Jemné dekorace v pozadí sekce */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-24 left-[-120px] w-[320px] h-[320px] rounded-full bg-rose-100/45 blur-[90px]" />
      <div className="absolute bottom-10 right-[-140px] w-[380px] h-[380px] rounded-full bg-amber-100/45 blur-[100px]" />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-white/65 backdrop-blur-md border border-white/80 px-5 py-2 rounded-full text-[#8d6e63] text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm">
          <Scissors size={14} className="text-[#f43f5e]" strokeWidth={2.5} />
          <span>Ukázky péče v salonu</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-[#5d4037] mb-5 uppercase tracking-tighter">
          Proměny před a po
        </h2>

        <p className="text-lg md:text-xl text-[#8d6e63] font-medium max-w-2xl mx-auto leading-relaxed">
          Každý pejsek potřebuje individuální přístup. Odchází od nás nejen krásnější,
          ale hlavně spokojený, voňavý a bez zbytečného stresu.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {transformations.map((item) => (
          <article
            key={item.id}
            className="group relative bg-white/62 backdrop-blur-xl rounded-[2.5rem] p-5 lg:p-7 shadow-[0_24px_70px_rgba(93,64,55,0.08)] border border-white/75 overflow-hidden"
          >
            {/* Jemný vnitřní glow */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/60 via-transparent to-rose-50/60 opacity-80" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-9 h-9 rounded-2xl bg-[#f43f5e]/10 flex items-center justify-center">
                      <Sparkles size={17} className="text-[#f43f5e]" />
                    </div>

                    <span className="text-xl lg:text-2xl font-black text-[#5d4037] uppercase tracking-tight">
                      {item.breed}
                    </span>
                  </div>

                  <p className="text-sm lg:text-base font-medium text-[#8d6e63] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="hidden sm:flex w-10 h-10 rounded-2xl bg-white/70 border border-white items-center justify-center shadow-sm">
                  <Heart size={18} className="text-rose-300 fill-rose-300" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] rounded-[1.7rem] overflow-hidden bg-[#f8ebe4] shadow-inner">
                  <img
                    src={item.before}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    alt={`${item.breed} před úpravou`}
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#5d4037]/55 to-transparent" />

                  <div className="absolute bottom-4 left-4 bg-[#5d4037]/88 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
                    Před
                  </div>
                </div>

                <div className="relative aspect-[4/5] rounded-[1.7rem] overflow-hidden bg-[#f8ebe4] shadow-md ring-4 ring-white/65">
                  <img
                    src={item.after}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    alt={`${item.breed} po úpravě`}
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f43f5e]/55 to-transparent" />

                  <div className="absolute bottom-4 left-4 bg-[#f43f5e]/92 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
                    Po
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-2xl bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm">
                    <PawPrint size={19} className="text-[#f43f5e] fill-[#f43f5e]" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md border border-white/80 rounded-3xl px-6 py-4 shadow-sm text-[#8d6e63] font-semibold text-sm md:text-base">
          <PawPrint size={18} className="text-[#f43f5e] fill-[#f43f5e]" />
          <span>Každá proměna je přizpůsobená srsti, povaze a potřebám pejska.</span>
        </div>
      </div>
    </div>
  </section>
);