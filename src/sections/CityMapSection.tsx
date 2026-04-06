import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface ZonalCity {
  name: string;
  date: string;
  status: "REGS_CLOSED" | "REGS_LIVE" | "UPCOMING";
  location?: string;
  regLink?: string;
  top: string;
  left: string;
}

/*
 * POSITIONING STRATEGY:
 * The map image is rendered as a relative element (w-full h-auto)
 * so it naturally sizes its parent container. The markers overlay
 * uses absolute inset-0, guaranteeing it is EXACTLY the same
 * pixel dimensions as the rendered image. Marker % positions
 * are therefore relative to the image bounds only.
 *
 * Positions were eyeballed against the specific Stitch-generated
 * India outline image. If the map image changes, these need recalibration.
 */
const cities: ZonalCity[] = [
  {
    name: "Delhi",
    date: "12th April 2025",
    status: "REGS_CLOSED",
    location: "Master Union, Gurgaon",
    top: "30%",
    left: "43%",
  },
  {
    name: "Chandigarh",
    date: "26th April 2025",
    status: "REGS_LIVE",
    regLink: "https://unstop.com/college-fests/hackarena-20-indraprastha-institute-of-information-technology-iiit-delhi-446261",
    top: "23%",
    left: "40%",
  },
  {
    name: "Mumbai",
    date: "9th May 2025",
    status: "REGS_LIVE",
    regLink: "https://unstop.com/college-fests/hackarena-20-indraprastha-institute-of-information-technology-iiit-delhi-446261",
    top: "53%",
    left: "33%",
  },
  {
    name: "Hyderabad",
    date: "23rd May 2025",
    status: "REGS_LIVE",
    regLink: "https://unstop.com/college-fests/hackarena-20-indraprastha-institute-of-information-technology-iiit-delhi-446261",
    top: "58%",
    left: "48%",
  },
  {
    name: "Bangalore",
    date: "6th June 2025",
    status: "REGS_LIVE",
    regLink: "https://unstop.com/college-fests/hackarena-20-indraprastha-institute-of-information-technology-iiit-delhi-446261",
    top: "72%",
    left: "42%",
  },
  {
    name: "Kolkata",
    date: "13th June 2025",
    status: "REGS_LIVE",
    regLink: "https://unstop.com/college-fests/hackarena-20-indraprastha-institute-of-information-technology-iiit-delhi-446261",
    top: "44%",
    left: "68%",
  },
];

const statusConfig = {
  REGS_CLOSED: {
    label: "REGS CLOSED",
    dotColor: "bg-red-500",
    borderColor: "border-red-500/60",
    textColor: "text-red-400",
    glowColor: "rgba(239,68,68,0.6)",
    ringColor: "ring-red-500/30",
    badgeBg: "bg-red-500/10",
  },
  REGS_LIVE: {
    label: "REGS LIVE",
    dotColor: "bg-emerald-400",
    borderColor: "border-emerald-400/60",
    textColor: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.6)",
    ringColor: "ring-emerald-400/30",
    badgeBg: "bg-emerald-400/10",
  },
  UPCOMING: {
    label: "UPCOMING",
    dotColor: "bg-yellow-400",
    borderColor: "border-yellow-400/60",
    textColor: "text-yellow-400",
    glowColor: "rgba(250,204,21,0.6)",
    ringColor: "ring-yellow-400/30",
    badgeBg: "bg-yellow-400/10",
  },
};

export const CityMapSection = () => {
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActiveCity(null);
      }
    };
    if (activeCity) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeCity]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCity(null);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const activeCityData = cities.find((c) => c.name === activeCity);

  return (
    <section className="py-20 md:py-32 bg-surface-container-low relative overflow-hidden" id="stations">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/[0.03] blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase mb-3">// NETWORK_NODES</p>
            <h2 className="font-headline font-black text-4xl md:text-6xl text-white uppercase italic -skew-x-6 tracking-tighter">THE STATIONS</h2>
            <p className="text-on-surface-variant mt-4 font-body text-base md:text-lg max-w-lg">
              Locate the nearest uplink station. Physical access required for the Global Override. Click any node to access zonal intel.
            </p>
          </div>
          <div className="text-right hidden md:flex flex-col items-end gap-2">
            <span className="text-xs font-mono text-tertiary tracking-widest">LAT_LONG_PROTOCOL_4.2</span>
            <span className="text-[10px] font-mono text-zinc-600 tracking-widest">6 ACTIVE NODES // PAN-INDIA</span>
          </div>
        </div>

        {/* Map outer container (dark background + decorative elements) */}
        <div className="relative bg-gradient-to-br from-zinc-900/80 via-surface-container to-zinc-900/80 rounded-xl overflow-hidden border border-outline-variant/20 p-4 md:p-8">
          {/* Scan-line effect */}
          <div className="absolute inset-0 pointer-events-none z-[5]" style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.015) 2px, rgba(0,255,255,0.015) 4px)",
          }}></div>

          {/* Corner brackets */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-500/40 z-[6]"></div>
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-500/40 z-[6]"></div>
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-500/40 z-[6]"></div>
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-500/40 z-[6]"></div>

          {/* Grid overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}></div>

          {/*
           * THE KEY FIX: Map image is `relative` + `w-full h-auto`.
           * It naturally sizes this inner div. The marker overlay
           * uses `absolute inset-0` to be exactly the same size.
           * This guarantees % positions align with the image pixels.
           */}
          <div className="relative mx-auto" style={{ maxWidth: "800px" }}>
            {/* The image defines the container height */}
            <img
              className="w-full h-auto block opacity-30 filter contrast-125 saturate-0 select-none"
              draggable={false}
              alt="India Map"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX7ntaXueV-npa56EiSBbQJjqNp7fxp9j6j9TTsU87gtGLiXXGqOwC5wQZ5XA4Zq7NPQ6Z9pkJ_Rg9H6wLmlXQnjpOqLvSctIIYAmFHhgINFl46X2nxP47lS338Sa7V0IlLCWE6MbmllQZUY13NciairVqU6E0GkSuLZ3f_zTVwYAmOFCQqxoGeD7pWBN9aqy_l8yUBiHXEF7yLAzoMriyqFb9uxXqM5JDqOGcoC_IE1Ct9aIvK4IpgXajSQ5mIGM9tuiHqyp53kR6"
            />

            {/* Marker overlay — exactly matches image dimensions */}
            <div className="absolute inset-0 z-20">
              {cities.map((city) => {
                const config = statusConfig[city.status];
                const isHovered = hoveredCity === city.name;
                const isActive = activeCity === city.name;

                return (
                  <div
                    key={city.name}
                    className="absolute cursor-pointer"
                    style={{ top: city.top, left: city.left, transform: "translate(-50%, -50%)" }}
                    onClick={() => setActiveCity(isActive ? null : city.name)}
                    onMouseEnter={() => setHoveredCity(city.name)}
                    onMouseLeave={() => setHoveredCity(null)}
                  >
                    {/* Ping for live cities */}
                    {city.status === "REGS_LIVE" && (
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full ${config.dotColor} animate-ping opacity-20`}></div>
                    )}

                    {/* Dot */}
                    <div
                      className={`relative h-4 w-4 md:h-5 md:w-5 rounded-full ${config.dotColor} border-2 border-white/80 z-10 transition-all duration-300 ${isHovered || isActive ? "scale-[1.8] ring-4 " + config.ringColor : ""}`}
                      style={{
                        boxShadow: isHovered || isActive
                          ? `0 0 20px ${config.glowColor}, 0 0 40px ${config.glowColor}`
                          : `0 0 8px ${config.glowColor}`,
                      }}
                    ></div>

                    {/* Label */}
                    <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 flex flex-col items-center gap-0.5 transition-all duration-200 pointer-events-none whitespace-nowrap ${isHovered || isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}`}>
                      <span className="font-headline font-bold text-[11px] md:text-xs text-white uppercase tracking-wide bg-black/80 backdrop-blur-sm px-3 py-1 rounded border border-white/10">
                        {city.name}
                      </span>
                      <span className={`font-mono text-[9px] ${config.textColor} font-bold tracking-widest`}>
                        {config.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="relative z-30 flex items-center justify-center gap-6 md:gap-8 mt-6 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-zinc-700/50 mx-auto w-fit">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Regs Live</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Regs Closed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Upcoming</span>
            </div>
          </div>
        </div>

        {/* Zonal cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {cities.map((city) => {
            const config = statusConfig[city.status];
            return (
              <button
                key={city.name}
                onClick={() => setActiveCity(city.name)}
                className={`group relative bg-surface-container rounded-lg p-4 border border-outline-variant/20 hover:border-cyan-500/40 transition-all duration-300 text-left cursor-pointer hover:bg-surface-container-high hover:-translate-y-1 ${activeCity === city.name ? "border-cyan-500/60 bg-surface-container-high" : ""}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`h-2 w-2 rounded-full ${config.dotColor}`}></div>
                  <span className={`font-mono text-[9px] ${config.textColor} font-bold uppercase tracking-widest`}>{config.label}</span>
                </div>
                <h4 className="font-headline font-bold text-sm md:text-base text-white uppercase tracking-wide">{city.name}</h4>
                <p className="font-mono text-[10px] text-zinc-500 mt-1">{city.date}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ======== POPUP MODAL ======== */}
      {activeCity && activeCityData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" style={{ animation: "fadeIn 0.2s ease-out" }}>
          <div
            ref={modalRef}
            className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 rounded-xl border border-cyan-500/30 max-w-md w-full overflow-hidden"
            style={{
              boxShadow: `0 0 40px ${statusConfig[activeCityData.status].glowColor}, 0 0 80px rgba(0,0,0,0.8)`,
              animation: "popIn 0.25s ease-out",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500"></div>
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-cyan-500/50"></div>
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-cyan-500/50"></div>
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-cyan-500/50"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-cyan-500/50"></div>

            <button onClick={() => setActiveCity(null)} className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white hover:border-red-500 transition-all">✕</button>

            <div className="p-8">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${statusConfig[activeCityData.status].badgeBg} border ${statusConfig[activeCityData.status].borderColor} mb-4`}>
                <div className={`h-2 w-2 rounded-full ${statusConfig[activeCityData.status].dotColor} ${activeCityData.status === "REGS_LIVE" ? "animate-pulse" : ""}`}></div>
                <span className={`font-mono text-[10px] ${statusConfig[activeCityData.status].textColor} font-bold uppercase tracking-widest`}>{statusConfig[activeCityData.status].label}</span>
              </div>

              <h3 className="font-headline font-black text-3xl md:text-4xl text-white uppercase italic -skew-x-3 tracking-tight mb-2">{activeCityData.name}</h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-xl">calendar_month</span>
                  <div>
                    <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Date</p>
                    <p className="font-headline font-bold text-sm text-white">{activeCityData.date}</p>
                  </div>
                </div>
                {activeCityData.location && (
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-fuchsia-400 text-xl">location_on</span>
                    <div>
                      <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Venue</p>
                      <p className="font-headline font-bold text-sm text-white">{activeCityData.location}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-yellow-400 text-xl">groups</span>
                  <div>
                    <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Format</p>
                    <p className="font-headline font-bold text-sm text-white">48-Hour On-Ground Hackathon</p>
                  </div>
                </div>
              </div>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

              <div className="flex flex-col gap-3">
                <Link 
                  to={`/zonals/${activeCityData.name.toLowerCase()}`}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-fuchsia-600/20 border border-fuchsia-500/50 text-fuchsia-400 font-headline font-black uppercase italic tracking-widest text-sm rounded-lg hover:bg-fuchsia-600 hover:text-white hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all"
                >
                  <span className="material-symbols-outlined text-lg">info</span>
                  View Zonal Intel
                </Link>

                {activeCityData.status === "REGS_LIVE" && activeCityData.regLink ? (
                  <a href={activeCityData.regLink} target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-headline font-black uppercase italic tracking-widest text-sm rounded-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-all">
                    <span className="material-symbols-outlined text-lg">rocket_launch</span>
                    Register Now on Unstop
                  </a>
                ) : activeCityData.status === "REGS_CLOSED" ? (
                  <div className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-zinc-800 border border-red-500/30 text-red-400 font-headline font-bold uppercase italic tracking-widest text-sm rounded-lg cursor-not-allowed">
                    <span className="material-symbols-outlined text-lg">lock</span>
                    Registrations Closed
                  </div>
                ) : (
                  <div className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-zinc-800 border border-yellow-500/30 text-yellow-400 font-headline font-bold uppercase italic tracking-widest text-sm rounded-lg cursor-not-allowed">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                    Coming Soon
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { from { opacity: 0; transform: scale(0.9) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
      `}</style>
    </section>
  );
};
