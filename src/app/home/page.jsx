import { Venue } from "@/lib/action";
import Banner from "./HomeComponent/Banner";
import TrendingCourt from "./HomeComponent/TrendingCourt";
import { ArrowRight, ArrowUpRight, Calendar, Flame, Sparkles } from "lucide-react";
import Link from "next/link";
import SliderGame from "./HomeComponent/sliderGame";
import HowItWorks from "./HomeComponent/HowItWorks";
import WhyUs from "./HomeComponent/WhyUs";
import SpecialOffers from "./HomeComponent/SpecialOffers";
import VenueOwnerCTA from "./HomeComponent/VenueOwnerCTA";
import FAQ from "./HomeComponent/FAQ";

const Homepage = async () => {
  const data = await Venue();
  const trending_data = data.slice(0, 6);
  const newadd=data.slice(-5);
  return (
    <div>
      <Banner></Banner>
      <section className="w-full bg-[#0b1220] text-slate-100 py-16 md:py-24">
        <div className="w-[90%] md:w-[85%] max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/60 pb-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider animate-pulse">
                <Flame size={14} className="fill-amber-400" />
                Hot Bookings
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                  Venues
                </span>
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-medium max-w-md">
                Most preferred and heavily booked sports arenas around the city
                this week.
              </p>
            </div>
            <Link href={"/arena"}>
              <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-sm font-bold text-emerald-400 transition-all duration-300 border border-slate-700/50 hover:border-emerald-500/30 group self-center md:self-auto">
                View All Venues
                <ArrowRight
                  size={16}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
          </div>

          {trending_data && trending_data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {trending_data.map((ress) => (
                <div
                  key={ress._id}
                  className="transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/5 rounded-2xl overflow-hidden bg-slate-900/40 border border-slate-800 backdrop-blur-sm"
                >
                  <TrendingCourt res={ress} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-900/20 rounded-2xl border border-dashed border-slate-800">
              <Calendar size={40} className="mx-auto text-slate-600 mb-3" />
              <p className="text-slate-500 font-medium">
                No trending grounds available right now.
              </p>
            </div>
          )}
        </div>
      </section>
      <SliderGame></SliderGame>
      <section className="w-full bg-[#0b1220] text-slate-100 py-16 md:py-24 border-t border-slate-800/40">
      <div className="w-[90%] md:w-[85%] max-w-7xl mx-auto space-y-12">
        
       
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/60 pb-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} className="animate-spin [animation-duration:3s]" />
              Just In
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              Newly Added <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Grounds</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-medium max-w-md">
              Be the first to explore and book our freshest sports arenas and turfs.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-900/60 px-4 py-2 rounded-xl border border-slate-800">
            Updated <span className="text-emerald-400">Live</span>
          </div>
        </div>

       
        {newadd && newadd.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newadd.map((ress) => (
              <div 
                key={ress._id} 
              >
               
                <div className="absolute top-3 right-3 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1 bg-emerald-500 text-slate-950 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg">
                    NEW <ArrowUpRight size={12} strokeWidth={3} />
                  </div>
                </div>

                <TrendingCourt res={ress} />
              </div>
            ))}
          </div>
        ) : (
        
          <div className="text-center py-16 bg-slate-900/20 rounded-2xl border border-dashed border-slate-800">
            <Calendar size={40} className="mx-auto text-slate-600 mb-3" />
            <p className="text-slate-500 font-medium">No new grounds added recently.</p>
          </div>
        )}

      </div>
    </section>
    <HowItWorks></HowItWorks>
    <WhyUs></WhyUs>
    <SpecialOffers></SpecialOffers>
    <VenueOwnerCTA></VenueOwnerCTA>
    <FAQ></FAQ>
    </div>
  );
};

export default Homepage;
