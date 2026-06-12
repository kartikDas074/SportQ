"use client";

import { bookingCancel } from "@/lib/action";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Booked = ({ bata }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([...bata]);
  console.log(data);
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const [srcbtn, setSrcbtn] = useState(1);
  const updateData = (btn) => {
    if (btn === 1) {
      setData([...bata]);
    } else if (btn === 2) {
      const pk = bata.filter((res) => res.status === "pending");
      setData(pk);
    } else {
      const pk = bata.filter((res) => res.status === "accepted");
      setData(pk);
    }
  };
  const router=useRouter();
  const handleCancel=async(id)=>{
    const {data:tokenData}=await authClient.token();
    if(!tokenData?.token){
      toast.error('Somethng Goes wrong.plz try again later');
      return;
    }
      const result= await bookingCancel(id,tokenData?.token);
      if(result.deletedCount!=0){
         setIsModalOpen(false);
         toast.success('You Successfully Cancel The Booking');
         router.refresh();
      }else{
         toast.error('Booking is not found');
         router.refresh();
      }
  }

  return (
    <div>
      <div className="max-w-[92%] md:max-w-[85%] w-full mx-auto m-4">
        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl p-2 w-fit shadow-sm my-[50px] ">
          <button
            onClick={() => {
              setSrcbtn(1);
              updateData(1);
            }}
            className={`px-4 py-1.5 rounded-xl text-sm font-semibold ${srcbtn == 1 ? "bg-primary text-white" : "bg-gray-900 text-white "} shadow-sm hover:scale-105 transition-all`}
          >
            All
          </button>

          <button
            onClick={() => {
              setSrcbtn(2);
              updateData(2);
            }}
            className={`px-4 py-1.5 rounded-xl text-sm font-semibold ${srcbtn == 2 ? "bg-primary text-white" : "text-yellow-700 bg-yellow-50  "} border border-yellow-200 hover:bg-yellow-100 transition-all`}
          >
            Pending
          </button>

          <button
            onClick={() => {
              setSrcbtn(3);
              updateData(3);
            }}
            className={`px-4 py-1.5 rounded-xl text-sm font-semibold  ${srcbtn == 3 ? "bg-primary text-white" : "text-green-700 bg-green-50  "} border border-green-200 hover:bg-green-100 transition-all`}
          >
            Accepted
          </button>
        </div>

        {data.length ? (
          <div className="grid grid-cols-1 gap-5 ">
            {data.map((res) => (
              <div key={res._id}>
                <div className="bg-gray-50 border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
                    {/* IMAGE */}
                    <div className="relative w-full h-48 md:h-full min-h-[170px] rounded-2xl overflow-hidden bg-gray-200">
                      <Image
                        src={
                          res?.img ||
                          "https://images.unsplash.com/photo-1517841905240-472988babdf9"
                        }
                        alt={res?.name || "booking image"}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                        unoptimized
                      />
                    </div>

                    <div className="md:col-span-2 flex flex-col justify-between space-y-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h1 className="text-xl font-bold text-gray-900">
                            {res?.name}
                          </h1>
                          <p className="text-sm text-gray-500 mt-1">
                            {res?.type}
                          </p>
                        </div>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold border ${
                            res.status != "pending"
                              ? "bg-green-100 text-green-700 border-green-200"
                              : "bg-yellow-100 text-yellow-700 border-yellow-200"
                          }`}
                        >
                          {res.status != "pending" ? "Accepted" : "Pending"}
                        </span>
                      </div>

                      <div className="border-t border-gray-200"></div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-1 flex items-center gap-2 text-sm text-gray-600 font-medium">
                          📅
                          <span>{formatDate(res?.date)}</span>
                        </div>

                        <div className="col-span-2 flex gap-2 overflow-x-auto pb-1">
                          {res?.time_slots?.map((slot, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-[#e27676] text-xs font-medium rounded-full bg-white border border-gray-300 whitespace-nowrap"
                            >
                              {slot}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-gray-200"></div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider">
                            Total Paid
                          </p>
                          <h2 className="text-lg font-extrabold text-gray-900">
                            {res?.price} TK
                          </h2>
                        </div>

                        <button
                          onClick={() => setIsModalOpen(true)}
                          className={`px-5 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg ${
                            res.status != "pending"
                              ? "bg-gray-900 text-white hover:bg-black"
                              : "bg-red-600 text-white hover:bg-red-700 hover:scale-105"
                          }`}
                        >
                          {res.status != "pending"
                            ? "Contact Owner"
                            : "Cancel Booking"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {isModalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* BACKDROP */}
                    <div
                      className="absolute inset-0 bg-black/10 backdrop-blur-sm"
                      onClick={() => setIsModalOpen(false)}
                    />

                    <div className="relative z-10 w-[90%] max-w-md bg-gray-900 text-white rounded-2xl p-6 shadow-2xl border border-gray-700">
                      <h3 className="text-lg font-bold">
                        {res.status != "pending"
                          ? "Booking Already Accepted"
                          : "Cancel Booking Confirmation"}
                      </h3>

                      <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                        {res.status != "pending"
                          ? "This booking has already been accepted by the owner. Please contact them instead."
                          : "Are you sure you want to cancel this booking? This action cannot be undone."}
                      </p>

                      <div className="flex justify-end gap-3 mt-6">
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-sm"
                        >
                          Close
                        </button>

                        {!res.status != "pending" && (
                          <button onClick={()=>{handleCancel(res._id)}} className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-sm font-bold">
                            Cancel Booking
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[45vh] bg-[#ccb9b9] rounded-3xl border border-base-200 p-8 text-center shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative bg-amber-500/10 text-amber-500 p-4.5 rounded-2xl mb-5 border border-amber-500/20 shadow-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-black text-neutral tracking-tight">
              No Active Bookings
            </h2>

            <p className="text-sm text-neutral-content/70 mt-2 max-w-sm leading-relaxed font-medium">
              Your schedule looks empty. Discover premium sports venues near
              you, lock your preferred slot, and hit the ground running.
            </p>
            <Link
              href="/arena"
              className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-content px-6 py-3 rounded-xl font-bold text-sm tracking-wide shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Explore Venues</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booked;
