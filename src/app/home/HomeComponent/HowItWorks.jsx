"use client";
import React from "react";
import { Search, CalendarDays, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Search Your Arena",
      description:
        "Find the perfect sports court or turf near your location by utilizing our advanced sports category and city filters instantly.",
      icon: (
        <Search className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      badgeColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    },
    {
      id: 2,
      title: "Select Perfect Slot",
      description:
        "Pick your preferred date and browse available real-time hourly time slots that seamlessly match your team's schedule.",
      icon: (
        <CalendarDays className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      badgeColor: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    },
    {
      id: 3,
      title: "Confirm Booking",
      description:
        "Complete your secure booking payment, instantly unlock your digital match pass, and hit the ground to play your game.",
      icon: (
        <CheckCircle className="w-8 h-8 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      badgeColor: "bg-teal-500/10 border-teal-500/20 text-teal-400",
    },
  ];

  return (
    <section className="w-full bg-slate-950 text-slate-100 py-16 md:py-24 border-t border-slate-800/40">
      <div className="w-[90%] md:w-[85%] max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Works
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-md mx-auto">
            Book your favorite sports venue in just 3 simple steps and start
            playing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center relative z-10 shadow-xl group-hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-sm mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent rounded-2xl opacity-50" />
                {step.icon}

                <span
                  className={`absolute -top-3 -right-3 w-7 h-7 rounded-full border flex items-center justify-center text-xs font-black ${step.badgeColor} shadow-lg backdrop-blur-sm`}
                >
                  {step.id}
                </span>
              </div>

              <div className="space-y-3 max-w-sm">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
