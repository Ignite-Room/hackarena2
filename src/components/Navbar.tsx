import type { FC } from "react";

export const Navbar: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 max-w-full bg-black/80 backdrop-blur-md dark:bg-black/90 border-b-2 border-fuchsia-500/50">
      <div className="flex items-center gap-2 flex-shrink-0">
        <a href="https://igniteroom.in" target="_blank" rel="noopener noreferrer">
          <img
            alt="Ignite Room Logo"
            className="h-10 md:h-14 w-auto flex-shrink-0 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform"
            src="/logo.png"
          />
        </a>
      </div>
      <nav className="hidden md:flex items-center gap-10">
        <a
          className="text-cyan-400 border-b-2 border-cyan-400 pb-2 text-sm md:text-base font-bold font-headline uppercase tracking-widest hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all"
          href="#arena"
        >
          Arena
        </a>
        <a
          className="text-fuchsia-500/80 hover:text-fuchsia-400 transition-all text-sm md:text-base font-bold font-headline uppercase tracking-widest hover:-translate-y-0.5 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]"
          href="#stations"
        >
          Stations
        </a>
        <a
          className="text-fuchsia-500/80 hover:text-fuchsia-400 transition-all text-sm md:text-base font-bold font-headline uppercase tracking-widest hover:-translate-y-0.5 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]"
          href="#leaderboard"
        >
          XP-Leaderboard
        </a>
        <a
          className="text-fuchsia-500/80 hover:text-fuchsia-400 transition-all text-sm md:text-base font-bold font-headline uppercase tracking-widest hover:-translate-y-0.5 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]"
          href="#terminal"
        >
          Terminal
        </a>
      </nav>
      <div className="flex items-center gap-2 md:gap-6 flex-shrink border-l border-white/10 pl-2 md:border-none md:pl-0">
        <div className="bg-surface-container-high px-2 md:px-4 py-1.5 md:py-2 rounded-sm border border-fuchsia-500/30 flex items-center shrink min-w-0">
          <img
            alt="HackArena 2.0"
            className="h-8 md:h-10 object-contain drop-shadow-[0_0_8px_rgba(217,70,239,0.4)]"
            src="/images/Heading 1.png"
          />
        </div>
        <span className="material-symbols-outlined text-fuchsia-500/80 cursor-pointer hover:text-fuchsia-400 hover:scale-110 transition-transform text-2xl md:text-3xl shrink-0">
          leaderboard
        </span>
      </div>
    </header>
  );
};
