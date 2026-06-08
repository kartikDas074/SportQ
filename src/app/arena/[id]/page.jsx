import { VenueDetail } from '@/lib/action';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import BookTurf from './BookTurf';

const Page = async ({ params }) => {
    const { id } = await params;
    const data = await VenueDetail(id);

    return (
        <div className="min-h-screen bg-slate-50/60 pb-16">
            
          
            <div className="relative w-full h-[50vh] min-h-[380px] md:h-[60vh] bg-slate-900 overflow-hidden">
                <Image
                    src={data.img}
                    alt={data.name || 'Venue Image'}
                    fill
                    priority
                    unoptimized
                    className="object-cover opacity-80"
                />
                
              
                
                
                <div className="absolute top-6 left-4 md:left-8 z-10">
                    <Link href="/arena" className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-slate-800 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:bg-white transition-all">
                    <IoArrowBack  className='font-extrabold' />
                        <span>Back To Explore</span>
                    </Link>
                </div>

               
                <div className="absolute bottom-0 inset-x-0 p-4 md:p-8 max-w-7xl mx-auto w-full flex flex-col justify-end">
                    <div className="max-w-3xl">
                        <span className="inline-block bg-blue-600 text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md mb-3 shadow-sm">
                            {data.type} Arena
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3">
                            {data.name}
                        </h1>
                        <div className="flex items-center gap-1.5 text-slate-200 text-sm md:text-base font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue-400 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span>{data.location}</span>
                        </div>
                    </div>
                </div>
            </div>

          
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
            
                <div className="lg:col-span-7 space-y-8">
                    
                  
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                        <div className="p-3 bg-slate-50 rounded-xl">
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Sport Type</span>
                            <span className="text-sm font-bold text-slate-800">{data.type}</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl">
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Max Capacity</span>
                            <span className="text-sm font-bold text-slate-800">{data.capacity} Players</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl">
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Base Price</span>
                            <span className="text-sm font-black text-blue-600">৳{data.price} <span className="text-[10px] font-normal text-slate-400">/hr</span></span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl col-span-2 md:col-span-1">
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Host Support</span>
                            <span className="text-xs font-semibold text-slate-700 truncate block">{data.email}</span>
                        </div>
                    </div>

                   
                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-900 mb-3">About this Venue</h2>
                        <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                            {data.description || "Premium experience venue optimized for high tier tactical gameplay formats with state of the art foundation architecture."}
                        </p>
                    </div>

              
                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-900 mb-4">Venue Gallery</h2>
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 md:col-span-7 relative h-52 rounded-2xl overflow-hidden group">
                                <Image src={data.img} alt="Gallery 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500"  unoptimized />
                            </div>
                            <div className="col-span-6 md:col-span-5 relative h-52 rounded-2xl overflow-hidden group">
                                <Image src="https://images.unsplash.com/photo-1566665797739-1674de7a421a" alt="Gallery 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500"/>
                            </div>
                            <div className="col-span-6 md:col-span-5 relative h-44 rounded-2xl overflow-hidden group">
                                <Image src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="Gallery 3" fill className="object-cover group-hover:scale-105 transition-transform duration-500"/>
                            </div>
                            <div className="col-span-12 md:col-span-7 relative h-44 rounded-2xl overflow-hidden group">
                                <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Gallery 4" fill className="object-cover group-hover:scale-105 transition-transform duration-500"/>
                            </div>
                        </div>
                    </div>

                    
                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-900 mb-4">Features & Amenities</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                { name: 'FloodLights', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z' },
                                { name: 'Changing Room', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
                                { name: 'Spectator Area', icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' },
                                { name: 'Drinking Water', icon: 'M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z' },
                                { name: 'Parking Area', icon: 'M8.25 9V5.25A2.25 2.25 0 0110.5 3h3a2.25 2.25 0 012.25 2.25V9M3 9h18M3 14.25h18M3 19.5h18' },
                                { name: '24/7 Security', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.956 11.956 0 0112 2.714z' }
                            ].map((amenity, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 shrink-0">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={amenity.icon} />
                                    </svg>
                                    <span className="text-xs md:text-sm font-semibold text-slate-700">{amenity.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

              
                <div className="lg:col-span-5 lg:sticky lg:top-8 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
                    <div className="mb-4">
                        <h2 className="text-lg font-bold text-slate-900">Select Time Slots</h2>
                        <p className="text-xs text-slate-400">Choose your preferred shifts for today</p>
                    </div>

                   
                    <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                        {data.time_slots.map((res, index) => (
                            <div 
                                key={index} 
                                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all 
                                    ${res.isBooked 
                                        ? 'bg-slate-50 border-slate-100 text-slate-400 opacity-60' 
                                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-slate-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <h3 className="text-sm font-bold tracking-tight">{res.slot}</h3>
                                </div>
                                
                                <div>
                                    {res.isBooked=='Booked' ? (
                                        <span className="text-[10px] font-bold bg-rose-50 text-rose-600 px-2.5 py-1 rounded-md uppercase tracking-wider">Booked</span>
                                    ) : (
                                        <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md uppercase tracking-wider cursor-pointer">Available</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                  
                    <div className="mt-5 bg-blue-50/50 border border-blue-100/70 p-4 rounded-2xl">
                        <p className="text-xs text-blue-800 leading-relaxed font-medium">
                            💡 <strong>Special Request?</strong> If you need adjustments, custom slots, or events management, feel free to coordinate directly with the venue administration via <span className="underline font-bold text-blue-900">{data.email}</span>.
                        </p>
                    </div>
                </div>
            </div>
             
                <BookTurf Data={data}></BookTurf>

        </div>
    );
};

export default Page;