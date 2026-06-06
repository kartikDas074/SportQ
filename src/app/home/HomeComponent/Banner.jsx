"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section 
     
    >
    
      <div  className="relative min-h-[95vh] overflow-hidden font-sans flex items-center py-12 md:py-20 bg-no-repeat bg-cover bg-center md:bg-right"
      style={{ backgroundImage: "url('/Assets/banner.jpg')" }} >
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10 w-full">
       
        <div className="flex justify-center lg:justify-start items-center gap-2 mb-8">
          <div className="w-6 h-6 border-2 border-emerald-500 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
          </div>
          <h2 className="text-center text-xs md:text-sm font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50/80 px-3 py-1 rounded-full border border-emerald-100">
            World Class Sports Court
          </h2>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center overflow-hidden">
         
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-xs md:text-sm font-black tracking-widest text-emerald-500 bg-emerald-50 px-3 py-1 rounded-md inline-block">
              FIND.BOOK.PLAY
            </h1>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Your Next Sporting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                Venture Starts Here.
              </span>
            </h2>

            <div className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-xl">
              <p className="inline md:block">
                We provide an ultimate platform to{" "}
              </p>
              <p className="text-emerald-600 font-bold block mt-1 min-h-[32px] md:min-h-[auto]">
                <TypeAnimation
                  sequence={[
                    "Book Sports Venues Instantly.",
                    2000,
                    "Rent Out Your Playgrounds.",
                    2000,
                    "Earn Passive Income Seamlessly.",
                    2000,
                    "Manage Ground Bookings Effortlessly.",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </p>
            </div>

           
            <div className="pt-4">
              <button className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm tracking-wide rounded-full shadow-lg shadow-emerald-500/20 transition-all duration-300 transform hover:translate-y-[-2px]">
                Explore Courts
              </button>
            </div>
          </div>

        
          <div className="lg:col-span-6 grid grid-cols-3 gap-4 md:gap-6 relative h-[420px] md:h-[500px] items-start">
          
            <div className="relative h-[300px] md:h-[380px] rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-3 translate-y-0 hover:-translate-y-2 transition-all duration-500 group">
              <Image
                src="/Assets/football.jpg"
                alt="Football Turf"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 py-2 rounded-xl text-center">
                <p className="text-xs font-black text-slate-800 uppercase">
                  Football Turf
                </p>
              </div>
            </div>

           
            <div className="relative h-[300px] md:h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-3 translate-y-8 hover:translate-y-4 transition-all duration-500 group">
              <Image
                src="/Assets/badminton.png"
                alt="Badminton Turf"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 py-2 rounded-xl text-center">
                <p className="text-xs font-black text-slate-800 uppercase">
                  Badminton Turf
                </p>
              </div>
            </div>

           
            <div className="relative h-[300px] md:h-[380px] rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-3 translate-y-16 hover:translate-y-12 transition-all duration-500 group">
              <Image
                src="/Assets/chess.jpg"
                alt="Chess Turf"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 py-2 rounded-xl text-center">
                <p className="text-xs font-black text-slate-800 uppercase">
                  Chess Arena
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     

    </section>
  );
};

export default Banner;
