import { useEffect, useState } from "react";
import type { FC } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { IggyChatbot } from "../components/IggyChatbot";

interface ZonalInfo {
  name: string;
  location: string;
  date: string;
  deadline: string;
  link: string;
  description: string;
  status: "REGS_LIVE" | "REGS_CLOSED" | "UPCOMING";
  whatsapp?: string;
  instagram?: string;
}

const ZONAL_DATA: Record<string, ZonalInfo> = {
  delhi: {
    name: "Delhi",
    location: "Master's Union, Gurgaon, Delhi NCR, India",
    date: "12th April 2025",
    deadline: "01 April 2025",
    link: "https://unstop.com/hackathons/hackarena-20-delhi-zonals-hackarena-20-ignite-room-1652642",
    description: "The Delhi Zonal Round brings together talented student developers from across the Delhi-NCR region. Prove your might in the capital's cyber-node.",
    status: "REGS_CLOSED",
  },
  chandigarh: {
    name: "Chandigarh",
    location: "Chandigarh, India",
    date: "26th April 2025",
    deadline: "15 April 2025",
    link: "https://unstop.com/hackathons/hackarena-20-chandigarh-zonals-hackarena-20-ignite-room-1654430",
    description: "The Chandigarh Zonal Round targets innovators from Punjab, Haryana, and nearby tech communities. Break the Northern division's Turing barrier.",
    status: "REGS_LIVE",
  },
  mumbai: {
    name: "Mumbai",
    location: "Mumbai, Maharashtra, India",
    date: "9th May 2025",
    deadline: "To be announced",
    link: "https://unstop.com/hackathons/hackarena-20-mumbai-zonals-hackarena-20-ignite-room-1654421",
    description: "The Mumbai Zonal Round unites top builders from the western tech ecosystem. Hack the financial capital's grid and secure your spot in the finale.",
    status: "REGS_LIVE",
  },
  hyderabad: {
    name: "Hyderabad",
    location: "Hyderabad, Telangana, India",
    date: "23rd May 2025",
    deadline: "01 May 2025",
    link: "https://unstop.com/hackathons/hackarena-20-hyderabad-zonals-hackarena-20-ignite-room-1654428",
    description: "The Hyderabad Zonal Round targets the massive tech hub of the south. Present your most bleeding-edge AI models effectively.",
    status: "REGS_LIVE",
  },
  bangalore: {
    name: "Bangalore",
    location: "Bangalore Urban, Karnataka, India",
    date: "6th June 2025",
    deadline: "15 May 2025",
    link: "https://unstop.com/hackathons/hackarena-20-bangalore-zonals-hackarena-20-ignite-room-1654427",
    description: "The Bangalore Zonal Round is the proving ground of India's Silicon Valley. Only the elite AI architects will prevail.",
    status: "REGS_LIVE",
  },
  kolkata: {
    name: "Kolkata",
    location: "Kolkata, West Bengal, India",
    date: "13th June 2025",
    deadline: "11 May 2025",
    link: "https://unstop.com/hackathons/hackarena-20-kolkata-zonals-hackarena-20-ignite-room-1654413",
    description: "The Kolkata Zonal Round serves as the ultimate battleground for the eastern region of India. Survive the East Coast cyber-grid.",
    status: "REGS_LIVE",
  }
};

export const ZonalDetails: FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const [data, setData] = useState<ZonalInfo | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (cityId && ZONAL_DATA[cityId.toLowerCase()]) {
      setData(ZONAL_DATA[cityId.toLowerCase()]);
    }
  }, [cityId]);

  if (!cityId || (cityId && !ZONAL_DATA[cityId.toLowerCase()])) {
    return <Navigate to="/" replace />;
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-background text-white font-body relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/40 via-background to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b-2 border-fuchsia-500/30 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Ignite Room" className="h-10 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
            <span className="font-headline font-bold text-fuchsia-500 text-lg uppercase tracking-tighter italic group-hover:text-fuchsia-400 transition-colors hidden sm:block">
              HackArena 2.0
            </span>
          </Link>
          <Link
            to="/#stations"
            className="text-sm font-mono text-cyan-400 uppercase tracking-widest hover:text-cyan-300 transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back_ios</span>
            Back to Map
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Card */}
          <div className="bg-surface-container- lowest border border-fuchsia-500/30 rounded-lg p-8 md:p-12 mb-10 relative overflow-hidden shadow-[0_0_40px_rgba(217,70,239,0.1)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/20 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/50 rounded-sm font-mono text-[10px] text-fuchsia-400 tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
                  Node ID: ZONAL_{data.name.toUpperCase()}
                </div>
                <h1 className="font-headline font-black text-5xl md:text-7xl text-white uppercase italic tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  {data.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">ZONAL</span>
                </h1>
                <p className="text-zinc-400 flex items-center gap-2 font-mono text-sm max-w-lg">
                  <span className="material-symbols-outlined text-[16px] text-cyan-500">location_on</span>
                  {data.location}
                </p>
              </div>

              <div className="flex flex-col gap-3 min-w-[200px]">
                {data.status === "REGS_CLOSED" ? (
                  <button disabled className="px-6 py-4 bg-zinc-800 text-zinc-500 font-headline font-black uppercase italic tracking-widest outline-none border border-zinc-700 cursor-not-allowed text-center rounded-sm">
                    Regs Closed
                  </button>
                ) : (
                  <a href={data.link} target="_blank" rel="noopener noreferrer" className="px-6 py-4 bg-gradient-to-r from-fuchsia-600 to-fuchsia-800 text-white font-headline font-black uppercase italic tracking-widest hover:scale-105 transition-all text-center rounded-sm shadow-[0_0_20px_rgba(217,70,239,0.4)]">
                    Initialize Access
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Col - Overview & Details */}
            <div className="lg:col-span-2 space-y-10">
              <section className="space-y-4">
                <h2 className="font-headline font-bold text-2xl text-white uppercase tracking-wider flex items-center gap-3">
                  <span className="text-fuchsia-500 material-symbols-outlined">description</span>
                  Mission Brief
                </h2>
                <p className="text-zinc-300 leading-relaxed font-body">
                  {data.description} This round serves as one of the key qualifying stages leading to the 24-hour Grand Finale in Delhi. Participants will work in teams (2 - 4 Members) to develop prototypes centered around <span className="text-fuchsia-400 font-bold">Generative & Agentic AI</span>.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="font-headline font-bold text-2xl text-white uppercase tracking-wider flex items-center gap-3">
                  <span className="text-cyan-400 material-symbols-outlined">timeline</span>
                  Competition Structure
                </h2>
                
                <div className="relative pl-6 border-l-2 border-zinc-800 space-y-8">
                  <div className="relative">
                    <span className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-cyan-900 border-2 border-cyan-400"></span>
                    <h3 className="font-headline font-bold text-lg text-cyan-400 uppercase tracking-wide">Phase 1: Online Validation</h3>
                    <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                      Teams must submit a PPT/PDF presentation describing their proposed AI solution. Your blueprint should outline the Problem Statement, Technology Stack, and Expected Impact. Mentor evaluation will determine who proceeds.
                    </p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-fuchsia-900 border-2 border-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></span>
                    <h3 className="font-headline font-bold text-lg text-fuchsia-500 uppercase tracking-wide">Phase 2: The {data.name} Hackathon</h3>
                    <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                      Shortlisted squads engage in a grueling 8-hour in-person hackathon. Build your prototype, present securely to the council of judges, and secure your place. The top 10-12 squads globally advance to the Grand Finale.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-headline font-bold text-2xl text-white uppercase tracking-wider flex items-center gap-3">
                  <span className="text-yellow-500 material-symbols-outlined">warning</span>
                  Strict Parameters
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Teams must consist of 2–4 members.",
                    "Only ONE zonal round participation per team/member.",
                    "Travel expenses to the zonal round are NOT reimbursed.",
                    "Valid college ID is strictly required during the in-person event."
                  ].map((rule, i) => (
                    <li key={i} className="bg-surface-container-high border border-outline-variant/10 p-4 rounded-sm flex items-start gap-3">
                      <span className="material-symbols-outlined text-yellow-500/70 text-[20px]">chevron_right</span>
                      <span className="text-sm text-zinc-300 leading-snug">{rule}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Col - Stats & Targets */}
            <div className="space-y-6">
              <div className="bg-surface-container border border-outline-variant/30 p-6 rounded-sm shadow-xl">
                <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2">Target Data</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] uppercase font-mono text-fuchsia-500 tracking-widest mb-1">Execution Date</p>
                    <p className="font-headline font-bold text-xl text-white">{data.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono text-cyan-400 tracking-widest mb-1">Registration Deadline</p>
                    <p className="font-headline font-bold text-xl text-white">{data.deadline}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono text-yellow-500 tracking-widest mb-1">Eligible Operatives</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Engineering", "Management", "Undergrad", "Postgrad"].map(tag => (
                        <span key={tag} className="px-2 py-1 bg-zinc-900 border border-zinc-700 rounded-sm text-[10px] font-mono text-zinc-300 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-900/30 to-black border border-fuchsia-500/30 p-6 rounded-sm text-center">
                <span className="material-symbols-outlined text-4xl text-fuchsia-400 mb-2">support_agent</span>
                <h3 className="font-headline font-bold text-white mb-2">Need Assistance?</h3>
                <p className="text-xs text-zinc-400 mb-4">Contact HackArena Command for logistics and deployment support.</p>
                <a href="mailto:admin@igniteroom.in" className="inline-block px-4 py-2 border border-fuchsia-500/50 text-fuchsia-400 font-mono text-xs uppercase tracking-widest hover:bg-fuchsia-500 hover:text-white transition-colors rounded-sm">
                  admin@igniteroom.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <IggyChatbot />
    </div>
  );
};
