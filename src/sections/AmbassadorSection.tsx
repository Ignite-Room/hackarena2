import type { FC } from "react";

export const AmbassadorSection: FC = () => {
  return (
    <section className="py-24 bg-surface-container-low transition-colors group">
      <div className="container mx-auto px-6">
        <div className="relative bg-surface-container overflow-hidden rounded-sm border-2 border-fuchsia-500/30 hover:border-fuchsia-500 transition-colors">
          <div className="absolute inset-0 z-0">
            {/* Same abstract background as 'Join Squad' for consistency */}
            <img
              className="w-full h-full object-cover opacity-10"
              alt="Cybernetic background"
              src="/images/static-assets-upload17131968561535003824.webp"
            />
          </div>

          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="font-label text-[10px] text-fuchsia-500 tracking-widest uppercase mb-4 block animate-pulse">AMBASSADOR_PROTOCOL_INIT</span>
              <h2 className="font-headline font-black text-4xl md:text-5xl text-white uppercase italic tracking-tighter mb-6 leading-tight">
                CAMPUS AMBASSADOR PROGRAM
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 font-body">
                Represent HackArena in your campus, build community, earn perks and recognition. Become the uplink between your institution and the global arena.
              </p>

              <ul className="space-y-3 mb-10 font-mono text-sm">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-fuchsia-500">wifi_tethering</span>
                  <span className="text-white">Elite Networking Opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-fuchsia-500">verified</span>
                  <span className="text-white">Official Certificates & Badges</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-fuchsia-500">military_tech</span>
                  <span className="text-white">Leadership Experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-fuchsia-500">card_giftcard</span>
                  <span className="text-white">Exclusive HackArena Rewards</span>
                </li>
              </ul>

              <div className="flex">
                <a
                  href="https://igniteroom.in/ambassador"
                  target="_blank" rel="noopener noreferrer"
                  className="px-10 py-4 bg-fuchsia-600 text-white font-headline font-black uppercase italic tracking-widest text-lg hover:bg-fuchsia-500 transition-colors shadow-[0_0_20px_rgba(232,121,249,0.3)] hover:scale-105 rounded-sm inline-block"
                >
                  Apply Now
                </a>
              </div>
            </div>

            <div className="md:w-1/3 w-2/3 mt-8 md:mt-0 relative group-hover:-translate-y-4 transition-transform duration-500">
              {/* Optional related image in floating style */}
              <img
                alt="Ambassador Avatar"
                className="w-full drop-shadow-[0_0_30px_rgba(232,121,249,0.4)] animate-floating"
                src="/images/32.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
