import type { FC } from "react";
import { Link } from "react-router-dom";
import { IggyChatbot } from "../components/IggyChatbot";

export const FAQPage: FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-background text-on-background font-body relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/40 via-background to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Subway Character Overlay */}
      <img src={`${baseUrl}images/jolien1_png.png`} alt="Jolien" className="fixed -right-20 -bottom-20 h-[500px] opacity-10 pointer-events-none z-0 object-contain animate-floating hidden lg:block" />
      <img src={`${baseUrl}images/32.png`} alt="Surfer" className="fixed -left-20 top-40 h-[300px] opacity-5 pointer-events-none z-0 object-contain hidden lg:block" />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b-2 border-fuchsia-500/30 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={`${baseUrl}logo.png`} alt="Ignite Room" className="h-10 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
            <span className="font-headline font-bold text-fuchsia-500 text-lg uppercase tracking-tighter italic group-hover:text-fuchsia-400 transition-colors">
              HackArena 2.0
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm font-mono text-cyan-400 uppercase tracking-widest hover:text-cyan-300 transition-colors flex items-center gap-2 group"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to Arena
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 pt-28 pb-20 max-w-4xl relative z-10">
        <main className="w-full">
          <div className="mb-12 text-center md:text-left">
            <p className="font-mono text-[10px] text-fuchsia-500 uppercase tracking-widest mb-3 animate-pulse">// INIT_FAQ.sys_node_active</p>
            <h1 className="font-headline font-black text-5xl md:text-7xl text-white uppercase italic tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">Questions</span>
            </h1>
            <p className="font-mono text-sm text-zinc-500 uppercase tracking-widest max-w-md">
              Encrypted knowledge base. Decode your doubts below.
            </p>
          </div>

          <div className="space-y-4">
            <details className="bg-surface-container/50 backdrop-blur-sm border border-outline-variant/20 rounded-sm overflow-hidden group hover:border-fuchsia-500/30 transition-all">
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none hover:bg-surface-container-high transition-colors">
                <span className="font-headline font-bold text-white uppercase text-base italic tracking-tight">Who can participate?</span>
                <span className="material-symbols-outlined text-fuchsia-500 group-open:rotate-180 transition-transform shadow-[0_0_10px_rgba(217,70,239,0.3)]">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-zinc-400 font-body text-sm leading-relaxed border-t border-outline-variant/10">
                Anyone with a pulse and a terminal. Students, professionals, and innovators are all welcome. No strict boundaries on age or experience—only your code matters.
              </div>
            </details>
            <details className="bg-surface-container/50 backdrop-blur-sm border border-outline-variant/20 rounded-sm overflow-hidden group hover:border-cyan-400/30 transition-all">
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none hover:bg-surface-container-high transition-colors">
                <span className="font-headline font-bold text-white uppercase text-base italic tracking-tight">What is the max team size?</span>
                <span className="material-symbols-outlined text-cyan-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-zinc-400 font-body text-sm leading-relaxed border-t border-outline-variant/10">
                Squads must be between 2 to 4 hackers. Lone wolves are not allowed in the main team arena—hackathons are about collaboration, deployment, and unity!
              </div>
            </details>
            <details className="bg-surface-container/50 backdrop-blur-sm border border-outline-variant/20 rounded-sm overflow-hidden group hover:border-yellow-500/30 transition-all">
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none hover:bg-surface-container-high transition-colors">
                <span className="font-headline font-bold text-white uppercase text-base italic tracking-tight">Is there a registration fee?</span>
                <span className="material-symbols-outlined text-yellow-500 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-zinc-400 font-body text-sm leading-relaxed border-t border-outline-variant/10 font-mono">
                Access is merit-based. There is NO fee to register, but you must pass the online qualification round and PPT submission to enter the physical arena.
              </div>
            </details>
            <details className="bg-surface-container/50 backdrop-blur-sm border border-outline-variant/20 rounded-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none hover:bg-surface-container-high transition-colors">
                <span className="font-headline font-bold text-white uppercase text-base italic tracking-tight">Can I participate in multiple zonals?</span>
                <span className="material-symbols-outlined text-red-500 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-zinc-400 font-body text-sm leading-relaxed border-t border-outline-variant/10">
                Absolutely NO. <span className="text-red-400">Security Breach detected!</span> Teams can participate in only ONE zonal round. Participating in multiple zonals results in immediate disqualification and blacklisting from HackArena.
              </div>
            </details>
            <details className="bg-surface-container/50 backdrop-blur-sm border border-outline-variant/20 rounded-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none hover:bg-surface-container-high transition-colors">
                <span className="font-headline font-bold text-white uppercase text-base italic tracking-tight">What about travel and accommodation?</span>
                <span className="material-symbols-outlined text-cyan-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-zinc-400 font-body text-sm leading-relaxed border-t border-outline-variant/10">
                Travel expenses to zonal rounds and the finale are NOT reimbursed. However, during the Grand Finale in Delhi, overnight accommodation and high-tier nutrients (food) will be provided for qualified finalist squads.
              </div>
            </details>
            <details className="bg-surface-container/50 backdrop-blur-sm border border-outline-variant/20 rounded-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none hover:bg-surface-container-high transition-colors">
                <span className="font-headline font-bold text-white uppercase text-base italic tracking-tight">What if my question isn't answered here?</span>
                <span className="material-symbols-outlined text-fuchsia-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-zinc-400 font-body text-sm leading-relaxed border-t border-outline-variant/10">
                Use the <span className="text-fuchsia-400">Iggy Chatbot</span> dancing in the corner! Iggy is fully hooked into our database and can provide real-time node statistics. Alternatively, you can relay an encrypted message to admin@igniteroom.in.
              </div>
            </details>
          </div>

        </main>
      </div>
      
      <IggyChatbot />
    </div>
  );
};
