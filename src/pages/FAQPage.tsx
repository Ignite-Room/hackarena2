import type { FC } from "react";
import { Link } from "react-router-dom";
import { IggyChatbot } from "../components/IggyChatbot";

export const FAQPage: FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background font-body">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-fuchsia-500/30 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Ignite Room" className="h-10 object-contain" />
            <span className="font-headline font-bold text-fuchsia-500 text-lg uppercase tracking-tighter italic group-hover:text-fuchsia-400 transition-colors">
              HackArena 2.0
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm font-mono text-cyan-400 uppercase tracking-widest hover:text-cyan-300 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Arena
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 pt-28 pb-20 max-w-4xl">
        <main className="w-full">
          <div className="mb-12">
            <p className="font-mono text-[10px] text-fuchsia-500 uppercase tracking-widest mb-3">// INIT_FAQ.sys</p>
            <h1 className="font-headline font-black text-4xl md:text-5xl text-white uppercase italic tracking-tighter mb-4">
              Frequently Asked Questions
            </h1>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              Have doubts? The answers you seek are below.
            </p>
          </div>

          <div className="space-y-4">
            <details className="bg-surface-container border border-outline-variant/20 rounded-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none hover:bg-surface-container-high transition-colors">
                <span className="font-headline font-bold text-white uppercase text-sm italic">Who can participate?</span>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant font-body text-sm leading-relaxed border-t border-outline-variant/10">
                Anyone with a pulse and a terminal. Students, professionals, and underground script-kiddies are all welcome. No strict boundaries on age or experience.
              </div>
            </details>
            <details className="bg-surface-container border border-outline-variant/20 rounded-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none hover:bg-surface-container-high transition-colors">
                <span className="font-headline font-bold text-white uppercase text-sm italic">What is the max team size?</span>
                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant font-body text-sm leading-relaxed border-t border-outline-variant/10">
                Squads must be between 2 to 4 hackers. Lone wolves are not allowed in the main team arena—hackathons are about collaboration!
              </div>
            </details>
            <details className="bg-surface-container border border-outline-variant/20 rounded-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none hover:bg-surface-container-high transition-colors">
                <span className="font-headline font-bold text-white uppercase text-sm italic">Is there a registration fee?</span>
                <span className="material-symbols-outlined text-tertiary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant font-body text-sm leading-relaxed border-t border-outline-variant/10">
                Access is merit-based. There is NO fee to register, but you must pass the online qualification round and PPT submission.
              </div>
            </details>
            <details className="bg-surface-container border border-outline-variant/20 rounded-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none hover:bg-surface-container-high transition-colors">
                <span className="font-headline font-bold text-white uppercase text-sm italic">Can I participate in multiple zonals?</span>
                <span className="material-symbols-outlined text-fuchsia-500 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant font-body text-sm leading-relaxed border-t border-outline-variant/10">
                Absolutely NO. Teams can participate in only ONE zonal round. Participating in multiple zonals results in immediate disqualification.
              </div>
            </details>
            <details className="bg-surface-container border border-outline-variant/20 rounded-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none hover:bg-surface-container-high transition-colors">
                <span className="font-headline font-bold text-white uppercase text-sm italic">What about travel and accommodation?</span>
                <span className="material-symbols-outlined text-cyan-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant font-body text-sm leading-relaxed border-t border-outline-variant/10">
                Travel expenses to zonal rounds and the finale are NOT reimbursed. However, during the Grand Finale in Delhi, accommodation and food will be provided.
              </div>
            </details>
            <details className="bg-surface-container border border-outline-variant/20 rounded-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none hover:bg-surface-container-high transition-colors">
                <span className="font-headline font-bold text-white uppercase text-sm italic">What happens if my question isn't answered here?</span>
                <span className="material-symbols-outlined text-yellow-500 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant font-body text-sm leading-relaxed border-t border-outline-variant/10">
                Use the Iggy Chatbot icon dancing in the corner to ask any specific questions! Iggy is fully hooked into our database. Alternatively, you can email us at admin@igniteroom.in.
              </div>
            </details>
          </div>

        </main>
      </div>
      
      {/* Include Iggy chatbot specifically on this page as requested */}
      <IggyChatbot />
    </div>
  );
};
