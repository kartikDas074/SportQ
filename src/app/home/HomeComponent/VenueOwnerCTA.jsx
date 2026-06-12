"use client";
import React from "react";
import { Building2, Users, CalendarCheck2, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const VenueOwnerCTA = () => {
  const stats = [
    {
      id: 1,
      count: "60+",
      label: "Verified Venues",
      icon: <Building2 className="w-5 h-5 text-emerald-400" />
    },
    {
      id: 2,
      count: "20K+",
      label: "Active Users",
      icon: <Users className="w-5 h-5 text-teal-400" />
    },
    {
      id: 3,
      count: "100K+",
      label: "Successful Bookings",
      icon: <CalendarCheck2 className="w-5 h-5 text-amber-400" />
    },
    {
      id: 4,
      count: "15+",
      label: "Cities Covered",
      icon: <MapPin className="w-5 h-5 text-blue-400" />
    }
  ];

  return (
    <section className="w-full bg-[#0b1220] text-slate-100 py-16 md:py-24 border-t border-slate-800/40">
      <div className="w-[90%] md:w-[85%] max-w-7xl mx-auto">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950/40 p-8 sm:p-12 md:p-16 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          
          
          <div className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Business Partnership
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.15]">
                Own a Sports Venue?
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl leading-relaxed">
                Maximize your playground revenue potential seamlessly. List your turf, stadium, or court on our platform to reach thousands of sports enthusiasts and manage your hourly slot bookings effortlessly with zero stress.
              </p>
            </div>

            <div className="pt-2 w-full sm:w-auto">
                <Link href={'/add_ground'}>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm tracking-wide rounded-2xl shadow-xl shadow-emerald-500/10 transition-all duration-300 transform hover:translate-y-[-2px] group">
                List Your Venue
                <ArrowRight size={16} strokeWidth={2.5} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
                </Link>
              
            </div>
          </div>

          
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 relative z-10 w-full">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/80 backdrop-blur-sm space-y-3 hover:border-slate-700/50 transition-colors duration-300 group"
              >
               
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {stat.icon}
                </div>
                
             
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white font-mono">
                    {stat.count}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default VenueOwnerCTA;