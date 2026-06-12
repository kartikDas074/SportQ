"use client";
import React from "react";
import Image from "next/image";
import { Zap, ShieldCheck, BadgeCheck, RotateCcw, Clock } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      id: 1,
      title: "Instant Booking",
      description: "Say goodbye to long waiting times or endless confirmation calls. Secure your desired turf or court instantly with our real-time direct automated reservation system.",
      image: "/Assets/Instant_book.png",
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      tag: "Seamless"
    },
    {
      id: 2,
      title: "Secure Payment",
      description: "Experience premium multi-layer encryption protection on every transaction. Enjoy versatile local and international automated payment getaways without any hidden stress.",
      image: "/Assets/Secure_payment.png",
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
      tag: "Protected"
    },
    {
      id: 3,
      title: "Verified Venues",
      description: "Play only on high-end grounds that meet the ultimate industry standard. Every court on our platform goes through strict physical quality checks and real user rating verification.",
      image: "/Assets/Verified_places.jpg",
      icon: <BadgeCheck className="w-5 h-5 text-amber-400" />,
      tag: "Premium Quality"
    },
    {
      id: 4,
      title: "Easy Cancellation",
      description: "Plans changed at the last minute? Don't worry. Get full flexibility to modify or instantly cancel your active sports turf reservations within a few taps from your personal dashboard.",
      image: "/Assets/Easy_cancelation.jpg",
      icon: <RotateCcw className="w-5 h-5 text-rose-400" />,
      tag: "Flexible"
    },
    {
      id: 5,
      title: "Live Availability",
      description: "Track ground slots as they update live. View exact color-coded hourly availability tables and prevent sudden booking overlaps or team scheduling confusion completely.",
      image: "/Assets/Live_availability.jpg",
      icon: <Clock className="w-5 h-5 text-blue-400" />,
      tag: "Real-Time Sync"
    }
  ];

  return (
    <section className="w-full bg-[#0b1220] text-slate-100 py-16 md:py-24 border-t border-slate-800/40 overflow-hidden">
      <div className="w-[90%] md:w-[85%] max-w-7xl mx-auto space-y-16 md:space-y-28">
      
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Us</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-lg mx-auto">
            Elevating your booking experience with cutting-edge platform architecture and user-first features.
          </p>
        </div>

       
        <div className="space-y-20 md:space-y-32">
          {features.map((feature, index) => {
          
            const isImageLeft = index % 2 !== 0;

            return (
              <div 
                key={feature.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
              
                <div 
                  className={`lg:col-span-6 w-full flex justify-center ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border-4 border-slate-800 bg-slate-900/40 shadow-2xl transition-all duration-500 hover:border-emerald-500/20 group">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                  </div>
                </div>

               
                <div 
                  className={`lg:col-span-6 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
                    {feature.icon}
                    {feature.tag}
                  </div>

                  
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    {feature.title}
                  </h3>

                  
                  <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-xl">
                    {feature.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;