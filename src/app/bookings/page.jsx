import { userBooking } from "@/lib/action";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import Booked from "./BookingComponent/Booked";
import { CalendarCheck, Info, Layers, Compass } from "lucide-react";
import { FcCheckmark } from "react-icons/fc";

const BookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const data = await userBooking(session.user.id);
  const hasBookings = Array.isArray(data) && data.length > 0;

  return (
    
    <div className="w-full min-h-screen bg-[#0b1220] text-slate-100 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto space-y-6">
        
       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              My Bookings
            </h1>
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed mt-1">
              View and manage all your sports ground bookings in one place.
              Track status, timing, and payment history easily.
            </p>
          </div>
          
        
          <div className="bg-slate-900/50 border border-slate-800/80 px-6 py-4 rounded-2xl flex items-center gap-4 min-w-[220px] shadow-xl backdrop-blur-md self-stretch md:self-auto">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <CalendarCheck size={24} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                Total Slots Reserved
              </span>
              <span className="text-2xl font-black text-white font-mono mt-0.5 block">
                {hasBookings ? data.length : 0}
              </span>
              <div className="text-[11px] mt-1 text-emerald-400 font-medium flex items-center gap-1">
                <FcCheckmark size={12} />
                Active Dashboard
              </div>
            </div>
          </div>
        </div>

     
        <div className="flex flex-wrap gap-2.5">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/40 border border-slate-800 rounded-full text-xs font-semibold text-slate-400 backdrop-blur-xs">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            All bookings in one place
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/40 border border-slate-800 rounded-full text-xs font-semibold text-slate-400 backdrop-blur-xs">
            <Layers size={13} className="text-slate-500" />
            Sports grounds
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/40 border border-slate-800 rounded-full text-xs font-semibold text-slate-400 backdrop-blur-xs">
            <Info size={13} className="text-slate-500" />
            Real-time status tracking
          </div>
        </div>

      
        <div className="pt-4">
          {hasBookings ? (
            <div className="w-full">
            
              <Booked bata={data}></Booked>
            </div>
          ) : (
          
            <div className="flex flex-col items-center justify-center min-h-[50vh] bg-slate-900/10 border border-slate-800/60 rounded-3xl p-8 text-center relative overflow-hidden max-w-2xl mx-auto mt-6 backdrop-blur-xs">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative bg-amber-500/10 text-amber-400 p-4 rounded-2xl mb-5 border border-amber-500/20 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
              </div>

              <h2 className="text-xl font-bold text-white tracking-tight">
                No Active Bookings
              </h2>

              <p className="text-xs text-slate-400 mt-2 max-w-sm leading-relaxed font-medium">
                Your schedule looks empty. Discover premium sports venues near you,
                lock your preferred slot, and hit the ground running.
              </p>

              <Link
                href="/arena"
                className="mt-6 inline-flex items-center gap-2 bg-[#2e2ec7] text-slate-950 px-6 py-3 rounded-xl font-black text-sm tracking-wide shadow-lg shadow-indigo-500/10 transition-all duration-200"
              >
                <Compass size={16} />
                <span>Explore Venues</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;