"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Dumbbell,
  Waves,
  Table,
  Volleyball,
  Target,
  CircleDot,
  Landmark,
  Crown,
} from "lucide-react";

import { IoFootballOutline } from "react-icons/io5";
const games = [
  { name: "Football", count: 9, icon: IoFootballOutline },
  { name: "Cricket", count: 10, icon: Trophy },
  { name: "Badminton", count: 1, icon: Target },
  { name: "Swimming", count: 4, icon: Waves },
  { name: "Yoga", count: 2, icon: Dumbbell },
  { name: "Table Tennis", count: 3, icon: Table },
  { name: "Volleyball", count: 5, icon: Volleyball },
  { name: "Pickleball", count: 1, icon: Target },
  { name: "Snooker", count: 1, icon: CircleDot },
  { name: "Basketball", count: 2, icon: Trophy },
  { name: "Lawn Tennis", count: 3, icon: Target },
  { name: "Golf", count: 1, icon: Landmark },
  { name: "Chess", count: 6, icon: Crown },
];

const SliderGame = () => {

  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-emerald-400 font-semibold">Popular Sports</p>
            <h2 className="text-3xl font-bold">Choose Your Game</h2>
          </div>

        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {games.map((game) => {
            const Icon = game.icon;

            return (
              <SwiperSlide key={game.name}>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center hover:border-emerald-500 transition h-full">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center mb-3">
                    <Icon className="w-8 h-8 text-emerald-400" />
                  </div>

                  <h3 className="font-semibold">{game.name}</h3>

                  <p className="text-sm text-emerald-400 mt-1">
                    {game.count} {game.count === 1 ? "turf" : "turfs"}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderGame;
