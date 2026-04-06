import { useState, useEffect } from "react";
import type { FC } from "react";

export const HeroSection: FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // TARGET DATE: Final Grand Finale Hackathon (Estimated)
  const targetDate = new Date("2025-06-30T09:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden" id="arena">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-60 mix-blend-lighten filter brightness-50"
          alt="Graffiti-covered wall"
          src={`${baseUrl}images/bg_gg.png`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background"></div>
      </div>
      {/* Main Character Jake Floating */}
      <div className="absolute right-0 bottom-24 md:right-10 md:bottom-32 z-20 w-48 xl:w-80 pointer-events-none animate-floating hidden xl:block">
        <img
          alt="Jake on Hoverboard"
          className="w-full drop-shadow-[0_0_50px_rgba(255,159,74,0.4)]"
          src={`${baseUrl}images/Tricky1 1.png`}
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <p className="font-headline font-bold text-secondary tracking-[0.4em] uppercase text-sm mb-4">Build. Break. Dominate.</p>
        <img
          alt="HACKARENA 2.0"
          className="w-full max-w-4xl mx-auto drop-shadow-[0_0_30px_rgba(255,159,74,0.5)] mb-6"
          src={`${baseUrl}images/Heading 1.png`}
        />
        <p className="font-headline font-bold text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mt-6 italic">
          The world’s fastest underground hackathon series. 48 hours. One arena.
        </p>
        {/* XP Progress Bar */}
        <div className="mt-12 w-full max-w-md mx-auto">
          <div className="flex justify-between items-end mb-2">
            <span className="font-label text-[10px] text-primary uppercase font-mono tracking-widest">Global Sync Progress</span>
            <span className="font-label text-xs text-primary-fixed-dim">78% READY</span>
          </div>
          <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden border border-primary/20">
            <div className="h-full bg-gradient-to-r from-primary to-primary-container" style={{ width: "78%" }}></div>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="https://unstop.com/college-fests/hackarena-20-indraprastha-institute-of-information-technology-iiit-delhi-446261" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-black uppercase italic tracking-widest text-lg hover:scale-105 transition-transform neon-glow-primary rounded-sm inline-block text-center flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            Register Now
          </a>
          <a href="#stations" className="px-10 py-4 border-2 border-secondary text-secondary font-headline font-black uppercase italic tracking-widest text-lg hover:bg-secondary/10 transition-colors rounded-sm inline-block text-center cursor-pointer relative z-30">
            View Directives
          </a>
        </div>
        {/* Stats & Countdown */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-outline-variant/20 bg-black/20 backdrop-blur-sm">
          <div>
            <p className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest">Live Players</p>
            <p className="text-3xl font-headline font-black text-tertiary drop-shadow-[0_0_10px_rgba(217,70,239,0.3)]">4,281</p>
          </div>
          <div>
            <p className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest">Target Lockdown</p>
            <div className="flex justify-center items-baseline gap-1 text-secondary drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]">
              <span className="text-2xl font-headline font-black">{timeLeft.days}</span>
              <span className="text-[10px] font-mono tracking-tighter mr-1">D</span>
              <span className="text-2xl font-headline font-black">{timeLeft.hours.toString().padStart(2, '0')}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}</span>
            </div>
          </div>
          <div>
            <p className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest">Total Bounty</p>
            <p className="text-3xl font-headline font-black text-primary-fixed-dim drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">₹20L+</p>
          </div>
          <div>
            <p className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest">Network Status</p>
            <p className="text-3xl font-headline font-black text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">SECURED</p>
          </div>
        </div>
      </div>
    </section>
  );
};
