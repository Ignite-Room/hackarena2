import type { FC } from "react";
import { Link } from "react-router-dom";

export const FAQSection: FC = () => {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-headline font-black text-4xl text-white uppercase italic text-center mb-16 tracking-tighter">DECRYPT_FAQ.cfg</h2>
        <div className="flex justify-center mt-12">
          <Link to="/faq" className="px-10 py-4 bg-surface-container border border-outline-variant/30 text-white font-headline font-black uppercase italic tracking-widest text-sm hover:bg-white hover:text-black transition-all rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Access Full FAQ Database
          </Link>
        </div>
      </div>
    </section>
  );
};
