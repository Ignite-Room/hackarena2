import type { FC } from "react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const Footer: FC = () => {
  return (
    <footer className="w-full px-8 py-16 bg-black dark:bg-zinc-950 border-t-4 border-double border-cyan-900 shadow-[0_-10px_30px_rgba(0,255,255,0.1)] text-zinc-600">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-fuchsia-600 font-headline uppercase italic tracking-tighter">
              HackArena 2.0
            </span>
          </div>
          <p className="font-mono text-xs leading-relaxed text-zinc-500">
            Powered by IgniteRoom. India's premier Generative & Agentic AI hackathon series. 6 cities. One grand finale.
          </p>
          <a href="https://igniteroom.in" target="_blank" rel="noopener noreferrer">
            <img 
              alt="IgniteRoom" 
              className="h-8 object-contain self-start mt-2 opacity-70 hover:opacity-100 transition-opacity"
              src="/logo.png" 
            />
          </a>
        </div>

        {/* Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline font-bold text-sm text-zinc-400 uppercase tracking-widest mb-2">Navigation</h4>
          <a className="font-mono text-xs uppercase tracking-widest hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" href="/#arena">Home</a>
          <a className="font-mono text-xs uppercase tracking-widest hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" href="/#stations">Stations</a>
          <a className="font-mono text-xs uppercase tracking-widest hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" href="/#leaderboard">Leaderboard</a>
          <a className="font-mono text-xs uppercase tracking-widest hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" href="https://unstop.com/college-fests/hackarena-20-indraprastha-institute-of-information-technology-iiit-delhi-446261" target="_blank" rel="noopener noreferrer">Register</a>
          <a className="font-mono text-xs uppercase tracking-widest hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" href="/#ambassador">Ambassador</a>
        </div>

        {/* Legal Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline font-bold text-sm text-zinc-400 uppercase tracking-widest mb-2">Legal</h4>
          <a className="font-mono text-xs uppercase tracking-widest hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" href="/privacy">Privacy Policy</a>
          <a className="font-mono text-xs uppercase tracking-widest hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" href="/terms">Terms of Service</a>
          <a className="font-mono text-xs uppercase tracking-widest hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" href="/code-of-conduct">Code of Conduct</a>
          <a className="font-mono text-xs uppercase tracking-widest hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" href="/disclaimer">Disclaimer</a>
          <a className="font-mono text-xs uppercase tracking-widest hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" href="/accessibility">Accessibility</a>
          <a className="font-mono text-xs uppercase tracking-widest hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" href="/cookies">Cookie Policy</a>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline font-bold text-sm text-zinc-400 uppercase tracking-widest mb-2">Contact</h4>
          <a className="font-mono text-xs tracking-widest hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300 lowercase" href="mailto:admin@igniteroom.in">admin@igniteroom.in</a>
          
          <div className="flex gap-4 mt-3">
            <a 
              className="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-300" 
              href="https://linkedin.com/company/igniteroom" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a 
              className="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-[#E4405F]/10 transition-all duration-300" 
              href="https://instagram.com/igniteroom.in" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a 
              className="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300" 
              href="https://x.com/igniteroom" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">© 2025 HACKARENA 2.0 × IGNITEROOM // ALL RIGHTS RESERVED</p>
        <div className="flex gap-6 text-zinc-600">
          <a href="/privacy" className="font-mono text-[10px] uppercase tracking-widest hover:text-cyan-400 transition-colors">Privacy</a>
          <a href="/terms" className="font-mono text-[10px] uppercase tracking-widest hover:text-cyan-400 transition-colors">Terms</a>
          <a href="/code-of-conduct" className="font-mono text-[10px] uppercase tracking-widest hover:text-cyan-400 transition-colors">Conduct</a>
        </div>
      </div>
    </footer>
  );
};
