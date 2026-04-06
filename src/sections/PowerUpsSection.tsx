import type { FC } from "react";

export const PowerUpsSection: FC = () => {
  return (
    <section className="py-24 bg-surface-container-low relative overflow-hidden">
      {/* Mystery Boxes Scattered */}
      <img alt="Mystery Box 1" className="absolute top-10 left-10 w-16 opacity-30 animate-pulse pointer-events-none" src="/images/Super_Mystery_Box 1.png" />
      <img alt="Spray Can" className="absolute bottom-10 right-20 w-24 opacity-40 animate-floating pointer-events-none" src="/images/Jakespraycan.png" />
      <img alt="Coin" className="absolute top-1/2 right-10 w-16 opacity-20 rotate-12 pointer-events-none" src="/images/e9dd8201-a51a-4523-ad0f-43b4f3ec8e95.png" />
      
      <div className="container mx-auto px-6 text-center mb-16 relative z-10">
        <h2 className="font-headline font-black text-4xl text-white uppercase italic tracking-tighter">THE POWER-UP STACK</h2>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/20">
          {/* Mentors */}
          <div className="bg-surface-container p-10 hover:bg-surface-container-high transition-colors text-center group">
            <div className="w-16 h-16 bg-primary/20 rounded-sm flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,159,74,0.2)]">
              <span className="material-symbols-outlined text-primary text-4xl">groups</span>
            </div>
            <h4 className="font-headline font-bold text-white uppercase text-xl mb-4">Top Mentors</h4>
            <p className="text-on-surface-variant text-sm font-body">Direct uplinks to industry titans and seasoned hackers.</p>
          </div>
          {/* Bounty Drops */}
          <div className="bg-surface-container p-10 hover:bg-surface-container-high transition-colors text-center group">
            <div className="w-16 h-16 bg-secondary/20 rounded-sm flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,104,167,0.2)]">
              <span className="material-symbols-outlined text-secondary text-4xl">payments</span>
            </div>
            <h4 className="font-headline font-bold text-white uppercase text-xl mb-4">Bounty Drops</h4>
            <p className="text-on-surface-variant text-sm font-body">Exclusive cash prizes and hidden rewards for critical bugs.</p>
          </div>
          {/* VC Incubation */}
          <div className="bg-surface-container p-10 hover:bg-surface-container-high transition-colors text-center group">
            <div className="w-16 h-16 bg-tertiary/20 rounded-sm flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,231,146,0.2)]">
              <span className="material-symbols-outlined text-tertiary text-4xl">rocket_launch</span>
            </div>
            <h4 className="font-headline font-bold text-white uppercase text-xl mb-4">VC Launchpad</h4>
            <p className="text-on-surface-variant text-sm font-body">Pitch your override to the world's leading investors.</p>
          </div>
          {/* Hiring */}
          <div className="bg-surface-container p-10 hover:bg-surface-container-high transition-colors text-center group">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-sm flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(52,211,153,0.2)]">
              <span className="material-symbols-outlined text-emerald-400 text-4xl">work</span>
            </div>
            <h4 className="font-headline font-bold text-white uppercase text-xl mb-4">Hiring Nexus</h4>
            <p className="text-on-surface-variant text-sm font-body">Instant recruitment by elite dev teams and security firms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
