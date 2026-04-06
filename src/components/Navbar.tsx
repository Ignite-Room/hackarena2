import { useState, useEffect, useRef } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

export const Navbar: FC = () => {
  const [activeTab, setActiveTab] = useState("arena");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const navItems = [
    { id: "arena", label: "Arena", href: "#arena" },
    { id: "stations", label: "Stations", href: "#stations" },
    { id: "leaderboard", label: "XP-Leaderboard", href: "#leaderboard" },
    { id: "terminal", label: "Terminal", href: "#terminal" },
  ];

  // Update underline position when active tab changes
  useEffect(() => {
    const activeEl = navRefs.current[activeTab];
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 max-w-full bg-black/80 backdrop-blur-md border-b-2 border-fuchsia-500/50">
      <div className="flex items-center gap-2 flex-shrink-0">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            alt="Ignite Room Logo"
            className="h-10 md:h-14 w-auto flex-shrink-0 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform"
            src={`${baseUrl}logo.png`}
          />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-10 relative h-full">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            ref={(el) => { navRefs.current[item.id] = el; }}
            onClick={() => setActiveTab(item.id)}
            className={`text-sm md:text-base font-bold font-headline uppercase tracking-widest transition-all duration-300 relative z-10 py-2 ${
              activeTab === item.id ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "text-fuchsia-500/80 hover:text-fuchsia-400"
            }`}
          >
            {item.label}
          </a>
        ))}
        {/* Sliding Indicator */}
        <div 
          className="absolute bottom-[-10px] h-[2px] bg-cyan-400 transition-all duration-500 ease-in-out shadow-[0_0_10px_rgba(34,211,238,0.8)]"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`
          }}
        />
      </nav>

      <div className="flex items-center gap-2 md:gap-6 flex-shrink">
        <div className="bg-surface-container-high px-2 md:px-4 py-1.5 md:py-2 rounded-sm border border-fuchsia-500/30 flex items-center shrink min-w-0">
          <img
            alt="HackArena 2.0"
            className="h-8 md:h-10 object-contain drop-shadow-[0_0_8px_rgba(217,70,239,0.4)]"
            src={`${baseUrl}images/Heading 1.png`}
          />
        </div>
        <a 
          href="https://unstop.com/college-fests/hackarena-20-indraprastha-institute-of-information-technology-iiit-delhi-446261" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex-shrink-0"
        >
          <img 
            src={`${baseUrl}sponsors/unstop.png`} 
            alt="Unstop" 
            className="w-10 h-10 md:w-14 md:h-10 object-contain border border-white/20 p-1.5 bg-transparent group-hover:bg-white group-hover:border-white transition-all rounded-sm filter drop-shadow-[0_0_5px_rgba(34,211,238,0.4)]"
          />
        </a>
      </div>
    </header>
  );
};

