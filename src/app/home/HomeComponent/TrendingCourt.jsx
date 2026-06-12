import { Clock, DollarSign, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SiBookingdotcom } from 'react-icons/si';

const TrendingCourt = ({res}) => {
    return (
        <div className="group relative rounded-2xl border border-[#1f2a3a] bg-[#0b1220] overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] hover:border-[#0ea5e9]/40 transition-all duration-300 flex flex-col justify-between max-w-sm">
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        <Image
          src={res.img}
          alt={res.name}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />

        <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-bold bg-[#0b1220]/80 text-[#0ea5e9] border border-[#0ea5e9]/30 backdrop-blur-md rounded-full uppercase tracking-wider">
          {res.type}
        </span>
      </div>

      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-bold text-white tracking-wide truncate mb-1">
            {res.name}
          </h1>

          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
            <MapPin className="h-3.5 w-3.5 text-gray-500 flex-shrink-0" />
            <span className="truncate">{res.location}</span>
          </div>
        </div>

        <div className="space-y-2.5 border-t border-[#1f2a3a] pt-4">
         
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span>Price / Hour</span>
            </div>
            <div className="font-semibold text-[#0ea5e9]">৳{res.price}</div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="h-4 w-4 text-gray-500" />
              <span>Capacity</span>
            </div>
            <div className="font-semibold text-gray-200">
              {res.capacity} People
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="h-4 w-4 text-gray-500" />
              <span>Time Slots</span>
            </div>
            <div className="font-semibold text-gray-200">
              {res.time_slots?.length || 0} Slots
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-[#1f2a3a]/50 pt-3 h-[60px]">
          <p className="text-xs text-gray-400/90 leading-relaxed line-clamp-2">
            {res.description}
          </p>
        </div>
      </div>

       <Link href={`/arena/${res._id}`}>
          <div className="px-5 py-4 bg-[#080d18]/60 border-t border-[#1f2a3a] grid grid-col-1 items-center gap-3">
       
        <button
         
          className="flex items-center justify-center h-10 px-4 rounded-xl border border-red-950/60 bg-primary text-[#FFFFFF] hover:bg-red-900/30 "
        >
          <SiBookingdotcom className="h-4 w-4" />
          <span className="text-xs font-semibold ml-1.5 sm:hidden lg:inline">
            Book Now
          </span>
        </button>
      </div>
      </Link>
     
    
     
    </div>
    );
};

export default TrendingCourt;