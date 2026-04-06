import type { FC } from "react";

export const JoinSquadSection: FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative bg-surface-container overflow-hidden rounded-sm border-2 border-secondary/30">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-10" alt="Technical data lines" src={`${baseUrl}images/static-assets-upload17131968561535003824.webp`} />
          </div>
          {/* Player Characters as 'Squad' */}
          <div className="absolute left-0 bottom-0 w-32 md:w-48 z-20 pointer-events-none -translate-x-4">
            <img alt="Player 1" className="w-full drop-shadow-lg" src={`${baseUrl}images/Tricky1 1.png`} />
          </div>
          <div className="absolute right-0 bottom-0 w-32 md:w-56 z-20 pointer-events-none translate-x-4">
            <img alt="Player 2" className="w-full drop-shadow-lg" src={`${baseUrl}images/Fresh1 1.png`} />
          </div>
          <div className="relative z-10 p-12 md:p-20 text-center max-w-3xl mx-auto">
            <h2 className="font-headline font-black text-5xl md:text-7xl text-white uppercase italic tracking-tighter mb-8 leading-none">SECURE YOUR ACCESS</h2>
            <p className="text-on-surface-variant text-lg mb-12 font-body">Registration for the Mumbai station ends in 4 days. Only 50 slots remaining for the Elite Tier.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="https://unstop.com/college-fests/hackarena-20-indraprastha-institute-of-information-technology-iiit-delhi-446261" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-secondary text-on-secondary font-headline font-black uppercase italic tracking-widest text-xl neon-glow-secondary hover:scale-105 transition-transform z-30 inline-block text-center">
                Secure Access
              </a>
            </div>
            <p className="mt-8 font-label text-[10px] text-secondary-dim uppercase tracking-[0.3em]">Warning: unauthorized entries will be terminated.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
