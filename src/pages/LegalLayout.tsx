import type { FC } from "react";
import { Link } from "react-router-dom";

const LEGAL_NAV = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/code-of-conduct", label: "Code of Conduct" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/accessibility", label: "Accessibility" },
  { to: "/cookies", label: "Cookie Policy" },
];

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const LegalLayout: FC<LegalLayoutProps> = ({ title, children }) => {
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

      <div className="container mx-auto px-6 pt-28 pb-20 flex gap-12">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-28">
            <h3 className="font-headline font-bold text-xs text-zinc-500 uppercase tracking-widest mb-6">Legal Documents</h3>
            <nav className="flex flex-col gap-1">
              {LEGAL_NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-2.5 rounded-sm text-sm font-mono uppercase tracking-wider transition-all hover:bg-fuchsia-500/10 hover:text-fuchsia-400 ${
                    window.location.pathname === item.to
                      ? "text-fuchsia-400 bg-fuchsia-500/10 border-l-2 border-fuchsia-500"
                      : "text-zinc-400"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">
          <div className="mb-12">
            <p className="font-mono text-[10px] text-fuchsia-500 uppercase tracking-widest mb-3">// LEGAL_DOCUMENT</p>
            <h1 className="font-headline font-black text-4xl md:text-5xl text-white uppercase italic tracking-tighter mb-4">
              {title}
            </h1>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              Last updated: April 6, 2026 • Effective immediately
            </p>
          </div>

          <div className="legal-content">
            {children}
          </div>

          {/* Mobile nav */}
          <div className="lg:hidden mt-16 pt-8 border-t border-zinc-800">
            <h3 className="font-headline font-bold text-xs text-zinc-500 uppercase tracking-widest mb-4">Other Legal Documents</h3>
            <div className="flex flex-wrap gap-2">
              {LEGAL_NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-xs font-mono text-zinc-400 px-3 py-2 bg-surface-container rounded-sm hover:text-fuchsia-400 hover:bg-fuchsia-500/10 transition-all uppercase tracking-wider"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
