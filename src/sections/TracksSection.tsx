import type { FC } from "react";

export const TracksSection: FC = () => {
  return (
    <section id="tracks" className="py-24 relative overflow-hidden backdrop-blur-sm bg-black/40">
      <div className="absolute inset-0 pointer-events-none border-t border-b border-fuchsia-500/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-cyan-400"></span>
            <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">PROTOCOL OVERRIDE</span>
          </div>
          <h2 className="font-headline font-black text-4xl md:text-6xl text-white uppercase italic -skew-x-6 tracking-tighter">
            OPEN INNOVATION <br/> <span className="text-fuchsia-500">NO RESTRICTIONS</span>
          </h2>
          <p className="text-zinc-400 font-mono text-sm md:text-base max-w-2xl mt-6 leading-relaxed border-l-2 border-zinc-700 pl-4">
            Format restriction disabled. HackArena 2.0 operates strictly on an open innovation protocol. We do not confine hackers to predefined tracks. Bring your most aggressive and experimental <span className="text-cyan-400">Generative & Agentic AI</span> concepts. Identify the vulnerability. Architect the solution. Deploy it. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* STN-01 */}
          <div className="bg-gradient-to-br from-zinc-900 via-surface-container to-zinc-900 border border-fuchsia-500/30 p-8 hover:bg-zinc-800 transition-all duration-500 hover:-translate-y-2 group shadow-[0_4px_20px_rgba(217,70,239,0.05)] hover:shadow-[0_10px_30px_rgba(217,70,239,0.2)]">
            <span className="font-label text-xs text-fuchsia-500 tracking-widest uppercase mb-4 block flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
              DIRECTIVE_01
            </span>
            <h3 className="font-headline font-black text-3xl text-white italic mb-4">IDENTIFY</h3>
            <p className="text-zinc-400 mb-8 font-mono text-sm leading-relaxed">Scan the modern landscape. Find a critical inefficiency, failure point, or untapped market gap. You choose the battlefield.</p>
            <div className="flex items-center justify-between text-fuchsia-500 opacity-60 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-4xl">radar</span>
              <span className="font-mono font-bold text-[10px] uppercase tracking-[0.2em] group-hover:tracking-[0.4em] transition-all">Scan Network</span>
            </div>
          </div>

          {/* STN-02 */}
          <div className="bg-gradient-to-br from-zinc-900 via-surface-container to-zinc-900 border border-cyan-500/30 p-8 hover:bg-zinc-800 transition-all duration-500 hover:-translate-y-2 group shadow-[0_4px_20px_rgba(6,182,212,0.05)] hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)]">
            <span className="font-label text-xs text-cyan-400 tracking-widest uppercase mb-4 block flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              DIRECTIVE_02
            </span>
            <h3 className="font-headline font-black text-3xl text-white italic mb-4">WEAPONIZE AI</h3>
            <p className="text-zinc-400 mb-8 font-mono text-sm leading-relaxed">Leverage massive LLMs, multimodal generation, and autonomous agents. Build systems that think, react, and scale.</p>
            <div className="flex items-center justify-between text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-4xl">memory</span>
              <span className="font-mono font-bold text-[10px] uppercase tracking-[0.2em] group-hover:tracking-[0.4em] transition-all">Compile Core</span>
            </div>
          </div>

          {/* STN-03 */}
          <div className="bg-gradient-to-br from-zinc-900 via-surface-container to-zinc-900 border border-yellow-500/30 p-8 hover:bg-zinc-800 transition-all duration-500 hover:-translate-y-2 group shadow-[0_4px_20px_rgba(234,179,8,0.05)] hover:shadow-[0_10px_30px_rgba(234,179,8,0.2)]">
            <span className="font-label text-xs text-yellow-500 tracking-widest uppercase mb-4 block flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
              DIRECTIVE_03
            </span>
            <h3 className="font-headline font-black text-3xl text-white italic mb-4">DEPLOY</h3>
            <p className="text-zinc-400 mb-8 font-mono text-sm leading-relaxed">Package your prototype. Execute the grand deployment on-stage in front of elite judges. Let the world witness your creation.</p>
            <div className="flex items-center justify-between text-yellow-500 opacity-60 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-4xl">rocket_launch</span>
              <span className="font-mono font-bold text-[10px] uppercase tracking-[0.2em] group-hover:tracking-[0.4em] transition-all">Execute Override</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
