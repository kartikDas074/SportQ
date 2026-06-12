"use client";
import React, { useState } from "react";
import { Activity, Calendar, MapPin, Search, Star, Trophy } from "lucide-react";
const ArenaBanner = ({ alltype, allloc, data, setShowData, showData }) => {
  const [search, setSearch] = useState("ALL");
  const [location, setLocation] = useState("ALL");
  const [sportType, setSportType] = useState("ALL");
  const srcme = () => {
    console.log(search);
    console.log(location);
    console.log(sportType);
  };

  return (
    <div className="relative w-full min-h-[650px] bg-slate-950 flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl w-full text-center space-y-10">
        <div className="space-y-5 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-[#FFFFFF]">
            Find Your Perfect Arena.
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Play Without Limits.
            </span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Discover and book top-rated sports venues, turfs, and courts near
            you. Filter by sport, price, or location and secure your slot in
            seconds.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end text-left">
          <div className="lg:col-span-2 space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em]">
              Search Venue
            </label>

            <div className="relative">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-black-400 font-extrabold" />

              <input
                type="text"
                placeholder="Search by venue name"
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em]">
              Location
            </label>

            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

              <select
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 appearance-none"
              >
                <option value="All">ALL</option>
                {allloc.map((res, index) => (
                  <option key={index} value={res}>
                    {res}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em]">
              Sport Type
            </label>

            <div className="relative">
              <Trophy className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

              <select
                onChange={(e) => setSportType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 appearance-none"
              >
                <option value="All">ALL</option>
                {alltype.map((res, index) => (
                  <option key={index} value={res}>
                    {res}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full">
            <button
              onClick={srcme}
              className="btn btn-primary w-full rounded-[30px] h-[45px]"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
              <Activity className="h-6 w-6" />
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-slate-900">50+</h3>
              <p className="text-sm text-slate-500">Active Venues</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-50 text-cyan-600">
              <Calendar className="h-6 w-6" />
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-slate-900">10K+</h3>
              <p className="text-sm text-slate-500">Total Bookings</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
              <Star className="h-6 w-6 fill-current" />
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-slate-900">4.8/5</h3>
              <p className="text-sm text-slate-500">Average Rating</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
              <Trophy className="h-6 w-6" />
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-slate-900">8+</h3>
              <p className="text-sm text-slate-500">Sports Categories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArenaBanner;
