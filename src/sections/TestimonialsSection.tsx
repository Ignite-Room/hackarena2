import type { FC } from "react";

export const TestimonialsSection: FC = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="flex animate-marquee gap-8 items-center px-6" style={{ width: "fit-content" }}>
        {/* Testimonial Card 1 */}
        <div className="min-w-[400px] w-[400px] bg-surface-container p-8 border border-outline-variant/30 italic flex gap-4">
          <div className="w-24 shrink-0 flex items-end">
            <img alt="Fresh player" className="w-full" src="/images/Fresh1 1.png" />
          </div>
          <div>
            <p className="text-on-surface-variant mb-6 font-body">"The energy at HackArena is insane. It's not just a hackathon, it's a movement. I landed my first Web3 role right after STN-01."</p>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-white font-bold text-sm">@alex_null</p>
                <p className="text-primary font-mono text-[10px] uppercase">Winner STN-01</p>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial Card 2 */}
        <div className="min-w-[400px] w-[400px] bg-surface-container p-8 border border-outline-variant/30 italic flex gap-4">
          <div className="w-24 shrink-0 flex items-end">
            <img alt="Pro player" className="w-full" src="/images/jolien1_png.png" />
          </div>
          <div>
            <p className="text-on-surface-variant mb-6 font-body">"48 hours of pure adrenaline. If you want to push your limits, this is the only arena that matters."</p>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-white font-bold text-sm">@sarah_codes</p>
                <p className="text-secondary font-mono text-[10px] uppercase">Lead Engineer</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Duplicate for smooth marquee effect */}
        <div className="min-w-[400px] w-[400px] bg-surface-container p-8 border border-outline-variant/30 italic flex gap-4">
          <div className="w-24 shrink-0 flex items-end">
            <img alt="Fresh player" className="w-full" src="/images/Fresh1 1.png" />
          </div>
          <div>
            <p className="text-on-surface-variant mb-6 font-body">"The energy at HackArena is insane. It's not just a hackathon, it's a movement. I landed my first Web3 role right after STN-01."</p>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-white font-bold text-sm">@alex_null</p>
                <p className="text-primary font-mono text-[10px] uppercase">Winner STN-01</p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[400px] w-[400px] bg-surface-container p-8 border border-outline-variant/30 italic flex gap-4">
          <div className="w-24 shrink-0 flex items-end">
            <img alt="Pro player" className="w-full" src="/images/jolien1_png.png" />
          </div>
          <div>
            <p className="text-on-surface-variant mb-6 font-body">"48 hours of pure adrenaline. If you want to push your limits, this is the only arena that matters."</p>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-white font-bold text-sm">@sarah_codes</p>
                <p className="text-secondary font-mono text-[10px] uppercase">Lead Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
