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
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-background text-on-background font-body relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/40 via-background to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Subway Dog (Security Guard) Character Overlay */}
      <img src={`${baseUrl}images/Dog 1.png`} alt="Guard Dog" className="fixed -right-10 bottom-0 h-[300px] opacity-10 pointer-events-none z-0 object-contain hidden lg:block" />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b-2 border-fuchsia-500/30 px-6 py-4 font-headline uppercase italic">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={`${baseUrl}logo.png`} alt="Ignite Room" className="h-10 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
            <span className="font-bold text-fuchsia-500 text-lg group-hover:text-fuchsia-400 transition-colors">
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

      <div className="container mx-auto px-6 pt-28 pb-20 flex flex-col lg:flex-row gap-12 relative z-10">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-28 bg-surface-container/50 border border-outline-variant/20 p-4 rounded-sm backdrop-blur-sm">
            <h3 className="font-headline font-black text-xs text-fuchsia-500 uppercase tracking-widest mb-6 italic border-b border-fuchsia-500/30 pb-2">LEGAL_REPOSITORIES</h3>
            <nav className="flex flex-col gap-1">
              {LEGAL_NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-2.5 rounded-sm text-sm font-mono uppercase tracking-wider transition-all hover:bg-fuchsia-500/10 hover:text-fuchsia-400 ${
                    window.location.pathname.includes(item.to)
                      ? "text-fuchsia-400 bg-fuchsia-500/10 border-l-2 border-fuchsia-500"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 bg-surface-container/30 border border-outline-variant/10 rounded-sm p-6 md:p-10 backdrop-blur-sm">
          <div className="mb-12 border-b border-fuchsia-500/10 pb-8">
            <p className="font-mono text-[10px] text-fuchsia-500 uppercase tracking-widest mb-3 animate-pulse">// ACCESSING_ENCRYPTED_DATA</p>
            <h1 className="font-headline font-black text-4xl md:text-5xl text-white uppercase italic tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              {title}
            </h1>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              Last updated: April 06, 2026 • Verified by HackArena Core Protocol
            </p>
          </div>

          <div className="legal-content space-y-6 text-zinc-400 prose-invert font-body text-sm leading-relaxed max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
