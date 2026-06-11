import React from "react";
import { FaChessKing, FaMoneyCheckDollar } from "react-icons/fa6";
import { FcApprove } from "react-icons/fc";
import { IoIosPersonAdd } from "react-icons/io";
import GroundAdd from "./add_grd_Component/addground";

const page = () => {
  return (
    <div>
      <div
        className="relative w-full min-h-[220px]  overflow-hidden bg-no-repeat bg-right bg-contain bg-[#0b1329]"
        style={{
          backgroundImage: `linear-gradient(to right, #0b1329 40%, rgba(11, 19, 41, 0.6) 70%, rgba(11, 19, 41, 0.1) 100%), url('/Assets/addBanner.jpg')`,
        }}
      >
       
        <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 text-white relative z-10">
        
          <div className="flex flex-col gap-4 items-start max-w-xl">
           
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-2xl hidden sm:block shadow-lg shadow-emerald-500/5">
              <FaChessKing />
            </div>

            
            <div className="mb-[40px]">
              <h1 className="text-2xl md:text-3.5xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                Add Your Sports Facility
              </h1>
              <p className="text-xs md:text-sm text-slate-300/95 leading-relaxed max-w-md">
                List your ground or court and start receiving bookings{" "}
                <br className="hidden md:inline" /> from players across the
                city.
              </p>
            </div>
          </div>

        
          <div className="flex flex-wrap items-center gap-3 mt-6 sm:mt-4 md:gap-6 border-t border-white/5 pt-4">
            
            <div className="flex items-center gap-2 bg-slate-900/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
              <IoIosPersonAdd className="text-emerald-400 text-base md:text-lg" />
              <span className="text-[11px] md:text-xs font-semibold tracking-wide text-slate-200">
                Easy to Add
              </span>
            </div>

          
            <div className="flex items-center gap-2 bg-slate-900/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
              <FcApprove className="text-base md:text-lg" />
              <span className="text-[11px] md:text-xs font-semibold tracking-wide text-slate-200">
                Quick Approval
              </span>
            </div>

          
            <div className="flex items-center gap-2 bg-slate-900/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
              <FaMoneyCheckDollar className="text-emerald-400 text-base md:text-lg" />
              <span className="text-[11px] md:text-xs font-semibold tracking-wide text-slate-200">
                Start Earning
              </span>
            </div>
          </div>
        </div>
      </div>
       <GroundAdd></GroundAdd>
    </div>
  );
};

export default page;
