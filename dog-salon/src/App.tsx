import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';

function App() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden text-[#5d4037]"
      style={{
        backgroundColor: '#fff7f2',
        backgroundImage: `
          radial-gradient(circle at 14% 10%, rgba(255, 232, 205, 0.95) 0%, transparent 34%),
          radial-gradient(circle at 88% 22%, rgba(255, 215, 225, 0.72) 0%, transparent 32%),
          radial-gradient(circle at 18% 58%, rgba(232, 218, 255, 0.48) 0%, transparent 38%),
          radial-gradient(circle at 82% 86%, rgba(255, 239, 220, 0.88) 0%, transparent 36%),
          linear-gradient(
            180deg,
            #fffaf5 0%,
            #fff1ed 32%,
            #f9efff 66%,
            #fff7ef 100%
          )
        `
      }}
    >
      {/* Světlý salonní glow přes střed */}
      <div 
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 z-0 w-[1500px] h-[950px] opacity-60 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, transparent 68%)'
        }}
      />

      {/* Teplé rozostření vlevo */}
      <div 
        className="absolute top-[28%] -left-[240px] z-0 w-[560px] h-[560px] rounded-full blur-3xl opacity-35 pointer-events-none"
        style={{
          background: 'rgba(255, 201, 181, 0.75)'
        }}
      />

      {/* Jemné levandulové rozostření vpravo */}
      <div 
        className="absolute bottom-[10%] -right-[240px] z-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-32 pointer-events-none"
        style={{
          background: 'rgba(221, 207, 255, 0.78)'
        }}
      />

      {/* Decentní motiv tlapek v pozadí */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]">
        <span className="absolute top-[12%] left-[7%] text-6xl rotate-[-18deg]">🐾</span>
        <span className="absolute top-[32%] right-[9%] text-5xl rotate-[16deg]">🐾</span>
        <span className="absolute top-[61%] left-[10%] text-5xl rotate-[12deg]">🐾</span>
        <span className="absolute bottom-[12%] right-[16%] text-6xl rotate-[-10deg]">🐾</span>
      </div>

      {/* Jemný světlý přechod nahoře pro čistý start stránky */}
      <div 
        className="absolute top-0 left-0 right-0 z-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)'
        }}
      />

      <div className="relative z-10">
        <Hero />
        <Gallery />
        <Pricing />
      </div>
    </div>
  );
}

export default App;