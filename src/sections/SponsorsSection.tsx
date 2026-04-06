import type { FC } from "react";

const sponsorsList = [
  { name: "Daytona", src: "/sponsors/Daytona.png" },
  { name: "Master's Union", src: "/sponsors/MastersUnion.png" },
  { name: "v0 by Vercel", src: "/sponsors/V0%20by%20Vercel.webp" },
  { name: "Para AI", src: "/sponsors/get_para_ai.jpeg" },
  { name: "GitHub", src: "/sponsors/github.png" },
  { name: "Mozilla AI", src: "/sponsors/mozilla_ai.jpeg" },
  { name: "Trae AI", src: "/sponsors/trae_ai.png" },
];

export const SponsorsSection: FC = () => {
  return (
    <section className="py-32 bg-black border-y border-outline-variant/20 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-16">
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-fuchsia-500 hidden sm:block"></span>
          <p className="font-headline font-black text-white text-lg md:text-xl uppercase tracking-widest bg-zinc-900/50 backdrop-blur-sm px-6 py-2 border border-zinc-700/50 rounded-sm">
            Powered By System Core & Allies
          </p>
          <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-cyan-500 hidden sm:block"></span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {sponsorsList.map((sponsor, idx) => (
            <div 
              key={idx} 
              className="group relative w-36 h-24 md:w-56 md:h-32 cursor-pointer [perspective:1000px]"
            >
              {/* Card Container for 3D flip */}
              <div className="w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] relative">
                
                {/* --- FRONT SIDE --- */}
                <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center p-6 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]">
                  {/* Cyberpunk Animated Corners */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-fuchsia-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-fuchsia-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>

                  {/* Glowing backplate line */}
                  <div className="absolute -bottom-[1px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>

                  {/* Sponsor Image */}
                  <img 
                    className="max-w-full max-h-full object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] rounded-sm" 
                    alt={sponsor.name} 
                    src={sponsor.src} 
                  />
                </div>

                {/* --- BACK SIDE --- */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-4 bg-zinc-900 border border-fuchsia-500/50 rounded-sm shadow-[0_0_20px_rgba(217,70,239,0.3)]">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(217,70,239,0.05)_25%,rgba(217,70,239,0.05)_50%,transparent_50%,transparent_75%,rgba(217,70,239,0.05)_75%,rgba(217,70,239,0.05)_100%)] bg-[length:10px_10px] opacity-20 pointer-events-none"></div>
                  
                  <span className="font-headline font-black text-white text-sm md:text-base uppercase tracking-wider text-center drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                    {sponsor.name}
                  </span>
                  <span className="font-mono font-bold text-fuchsia-400 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1 text-center">
                    X IgniteRoom
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
