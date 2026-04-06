import type { FC } from "react";

export const MissionLogs: FC = () => {
  return (
    <section id="terminal" className="py-24 bg-surface-container-lowest overflow-hidden relative">
      <div className="container mx-auto px-6">
        <h2 className="font-headline font-black text-5xl text-white uppercase italic text-center mb-20">MISSION LOGS</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 transform -translate-x-1/2 hidden md:block"></div>
          {/* Milestone 1 */}
          <div className="relative flex items-center justify-between mb-24 flex-col md:flex-row">
            <div className="w-full md:w-5/12 text-center md:text-right">
              <p className="font-headline font-bold text-primary mb-1">PHASE 01</p>
              <h4 className="font-headline font-black text-2xl text-white uppercase italic mb-2">Initial Access</h4>
              <p className="text-on-surface-variant text-sm">Online qualifiers to filter the elite. Solve the enigma or get left behind.</p>
            </div>
            <div className="z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center my-4 md:my-0 shadow-[0_0_15px_rgba(255,159,74,1)]">
              <span className="material-symbols-outlined text-on-primary">login</span>
            </div>
            <div className="w-full md:w-5/12 hidden md:block"></div>
          </div>
          {/* Milestone 2 */}
          <div className="relative flex items-center justify-between mb-24 flex-col md:flex-row">
            <div className="w-full md:w-5/12 hidden md:block"></div>
            <div className="z-10 w-12 h-12 bg-secondary rounded-full flex items-center justify-center my-4 md:my-0 shadow-[0_0_15px_rgba(255,104,167,1)]">
              <span className="material-symbols-outlined text-on-secondary">hub</span>
            </div>
            <div className="w-full md:w-5/12 text-center md:text-left">
              <p className="font-headline font-bold text-secondary mb-1">PHASE 02</p>
              <h4 className="font-headline font-black text-2xl text-white uppercase italic mb-2">Regional Run</h4>
              <p className="text-on-surface-variant text-sm">On-ground station hacking. 4 cities, 48 hours. Secure the regional title.</p>
            </div>
          </div>
          {/* Milestone 3 */}
          <div className="relative flex items-center justify-between flex-col md:flex-row">
            <div className="w-full md:w-5/12 text-center md:text-right">
              <p className="font-headline font-bold text-tertiary mb-1">PHASE 03</p>
              <h4 className="font-headline font-black text-2xl text-white uppercase italic mb-2">Global Override</h4>
              <p className="text-on-surface-variant text-sm">The championship finals. Top teams from all stations compete for the ultimate bounty.</p>
            </div>
            <div className="z-10 w-12 h-12 bg-tertiary rounded-full flex items-center justify-center my-4 md:my-0 shadow-[0_0_15px_rgba(255,231,146,1)]">
              <span className="material-symbols-outlined text-on-tertiary">language</span>
            </div>
            <div className="w-full md:w-5/12 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
