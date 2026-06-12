"use client";

import React, { useState } from "react";
import ArenaBanner from "./ArenaBanner";
import VenueCard from "./VenueCard";
import { FcEmptyTrash } from "react-icons/fc";

const Arena = ({ data }) => {
  const all_location = [...new Set(data?.map((res) => res.location) || [])];

  const all_type = [...new Set(data?.map((res) => res.type) || [])];

  const [showData, setShowData] = useState([...(data || [])]);

  return (
    <div className="min-h-screen bg-gray-50/50 pb-12">
      <ArenaBanner
        alltype={all_type}
        allloc={all_location}
        data={data}
        showData={showData}
        setShowData={setShowData}
      />

      <div className="w-full mx-auto bg-[#0b1220] px-4 sm:px-6 lg:px-8 py-10">
        {showData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {showData.map((res) => (
              <VenueCard key={res._id || res.id} Data={res} />
            ))}
          </div>
        ) : (
         
          <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-xl mx-auto mt-6 animate-fade-in">
           
            <div className="p-4 bg-amber-50 text-amber-500 rounded-full mb-4">
              <FcEmptyTrash />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Oops! No Venues Found
            </h3>
            <p className="text-gray-500 text-sm max-w-sm">
              We couldn't find any courts or venues matching your filter
              criteria. Try selecting a different location or type!
            </p>

            {/* Reset Button (Optional but UX er jonno bhalo) */}
            <button
              onClick={() => setShowData([...data])}
              className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 px-4 py-2 rounded-xl transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Arena;
