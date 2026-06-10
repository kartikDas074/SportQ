import { userBooking } from "@/lib/action";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import Booked from "./BookingComponent/Booked";
import { ActivitySquareIcon } from "lucide-react";
import { FcCheckmark } from "react-icons/fc";

const BookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const data = await userBooking(session.user.id);
  const hasBookings = Array.isArray(data) && data.length > 0;

  return (
    <div className="container mx-auto px-4 py-10 w-full">
      <div className="mb-6">
        <div className="flex justify-between gap-1 ">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              My Bookings
            </h1>

            <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
              View and manage all your sports ground bookings in one place.
              Track status, timing, and payment history easily.
            </p>
          </div>
          <div className="stats shadow bg-base-150 border border-base-300 min-w-[200px] md:self-end bg-gradient-to-br from-base-100 via-primary/5 to-base-100">
            <div className="stat p-4 flex flex-col justify-center">
              <div className="stat-title text-xs font-bold uppercase text-[#d66b6b]">
                Total Slots Reserved
              </div>
              <div className="stat-value text-3xl font-extrabold text-primary mt-1">
                {hasBookings ? data.length : 0}
              </div>
              <div className="stat-desc text-xs mt-1 text-success/80 font-medium flex items-center gap-1">
                <FcCheckmark></FcCheckmark>
                Active Dashboard
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            All bookings in one place
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">
            ⚽ Sports grounds
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">
            📅 Real-time status tracking
          </div>
        </div>

        {/* Divider */}
        <div className="mt-5 border-b border-gray-200"></div>
      </div>

      {hasBookings ? (
        <div className="grid grid-cols-1">
         
            <Booked bata={data}></Booked>
       
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[45vh] bg-linear-to-br from-base-100 via-base-200/30 to-base-100 rounded-3xl border border-base-200 p-8 text-center shadow-xs relative overflow-hidden">
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
            Your schedule looks empty. Discover premium sports venues near you,
            lock your preferred slot, and hit the ground running.
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
  );
};

export default BookingsPage;
