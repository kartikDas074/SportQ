"use client";
import React from "react";
import Image from "next/image";
import { Ticket, ArrowRight, Sparkles } from "lucide-react";

const SpecialOffers = () => {
  return (
    <section className="w-full bg-slate-950 text-slate-100 py-12 md:py-20 border-t border-slate-800/40">
      <div className="w-[90%] md:w-[85%] max-w-7xl mx-auto">
        <div className="relative w-full rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/20 shadow-2xl group">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">
            <div className="lg:col-span-7 p-8 sm:p-10 md:p-14 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest animate-pulse">
                <Sparkles size={14} />
                Limited Time Deal
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                  Get{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    20% OFF
                  </span>{" "}
                  <br className="hidden sm:inline" />
                  on Your First Booking
                </h2>
                <p className="text-slate-400 text-sm md:text-base font-medium max-w-md">
                  Unlock premium access to any verified sports arena or turf in
                  your city today. No hidden fees, just pure gameplay.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
                <div className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl bg-slate-950/80 border border-dashed border-emerald-500/30 text-emerald-400 font-mono text-sm md:text-base font-bold tracking-wider select-all cursor-pointer group/code">
                  <Ticket
                    size={18}
                    className="text-emerald-400 group-hover/code:rotate-12 transition-transform"
                  />
                  FIRST20
                </div>

                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm tracking-wide rounded-2xl shadow-lg shadow-emerald-500/10 transition-all duration-300 transform hover:translate-y-[-2px]">
                  Claim Offer
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </div>

              <span className="text-slate-500 text-xs font-medium">
                * Valid for new users on court reservations. Maximum discount
                applied automatically at checkout.
              </span>
            </div>

            <div className="lg:col-span-5 w-full h-[260px] sm:h-[320px] lg:h-full relative min-h-[300px] lg:min-h-[440px] order-1 lg:order-2 overflow-hidden">
              <Image
                src="/Assets/addVertise.jpg"
                alt="Special Offer Banner"
                fill
                sizes="(max-w-1024px) 100vw, 45vw"
                className="object-cover object-center lg:object-right-center group-hover:scale-[1.03] transition-transform duration-700"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
