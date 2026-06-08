import Image from "next/image";
import Link from "next/link";
import React from "react";

const VenueCard = ({ Data }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      
      
      <div className="relative w-full h-52 overflow-hidden group">
        <Image 
          src={Data.img} 
          alt={Data.name || "Court/Venue Image"} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
       
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
       
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
          {Data.type}
        </span>
      </div>

      
      <div className="p-5 flex-1">
       
        <div className="flex justify-between items-start gap-2 mb-3">
          <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
            {Data.name}
          </h2>
          <div className="text-right shrink-0">
            <span className="text-lg font-bold text-blue-600">৳{Data.price}</span>
            <span className="text-xs text-gray-500 block">/ hour</span>
          </div>
        </div>

       
        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <span className="line-clamp-1">{Data.location}</span>
        </div>

        <hr className="border-gray-100 my-3" />

       
        <div className="grid grid-cols-2 gap-4 pt-1">
         
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
           
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Capacity</p>
              <p className="text-sm font-semibold text-gray-700">{Data.capacity} Persons</p>
            </div>
          </div>

          
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Time Slots</p>
              <p className="text-sm font-semibold text-gray-700">{Data.time_slots?.length || 0} Available</p>
            </div>
          </div>
        </div>
      </div>

      
      <Link href={`/arena/${Data._id}`}>
       <div className="px-5 pb-5 pt-1 cursor-pointer">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-md shadow-blue-200 cursor-pointer">
          <span>Book Now</span>
         
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
      </Link>
      

    </div>
  );
};

export default VenueCard;