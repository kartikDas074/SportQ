"use client";
import React, { useState } from "react";
import Navlink from "./Navlink";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { CgAdd, CgProfile } from "react-icons/cg";
import { TbBrandBooking } from "react-icons/tb";
import { MdManageAccounts, MdPendingActions } from "react-icons/md";
import { FcApprove } from "react-icons/fc";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router=useRouter();

  const links = (
    <>
      <li>
        <Navlink
          href={"/"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-indigo-50"
        >
          Home
        </Navlink>
      </li>
      <li>
        <Navlink
          href={"/arena"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-indigo-50"
        >
          Explore Arena
        </Navlink>
      </li>
      <li>
        <Navlink
          href={"/bookings"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-indigo-50"
        >
          Bookings
        </Navlink>
      </li>
      <li>
        <Navlink
          href={"/add_ground"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-indigo-50"
        >
          Add Ground
        </Navlink>
      </li>
      <li>
        <Navlink
          href={"/manage_ground"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-indigo-50"
        >
          Manage Ground
        </Navlink>
      </li>
    </>
  );

 
  const [open, setOpen] = useState(0);

  const dropme = () => {
    setOpen(!open);
  };

   const handlesingout = async () => {
    setOpen(0);
    await authClient.signOut();
    router.refresh();
  };
  

  const droplinks = (
    <>
      <li
        onClick={dropme}
        className="flex items-center gap-1 px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-xl  hover:text-indigo-600"
      >
        <CgProfile className="h-4 w-4 text-[#FFFFFF]" />
        <Navlink href="/my_profile">
          <p className="font-semibold text-[#FFFFFF]">Profile</p>
        </Navlink>
      </li>

      <li
        onClick={dropme}
        className="flex items-center gap-1 px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-xl  hover:text-indigo-600"
      >
        <TbBrandBooking className="h-4 w-4 text-[#FFFFFF]" />
        <Navlink href="/bookings">
          <span className="font-semibold text-[#FFFFFF]">Bookings</span>
        </Navlink>
      </li>

      <li
        onClick={dropme}
        className="flex items-center gap-1 px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-xl  hover:text-indigo-600"
      >
        <CgAdd className="h-4 w-4 text-[#FFFFFF]" />
        <Navlink href="/add_ground">
          <span className="font-semibold text-[#FFFFFF]">Add Ground</span>
        </Navlink>
      </li>

      <li
        onClick={dropme}
        className="flex items-center gap-1 px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-xl  hover:text-indigo-600"
      >
        <MdManageAccounts className="h-4 w-4 text-[#FFFFFF]" />
        <Navlink href="/manage_ground">
          <span className="font-semibold text-[#FFFFFF]">Manage Ground</span>
        </Navlink>
      </li>

      <li
        onClick={dropme}
        className="flex items-center gap-1 px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-xl  hover:text-indigo-600"
      >
        <MdPendingActions className="h-4 w-4 text-[#FFFFFF]" />
        <Navlink href="/pending_request">
          <span className="font-semibold text-[#FFFFFF]">Pending Request</span>
        </Navlink>
      </li>

      <div className="my-1 border-t border-slate-100 dark:border-white/5"></div>

      <li
        onClick={async () => {
          setOpen(!open);

          await authClient.signOut();
          router.refresh();
        }}
        className="flex items-center gap-1 px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-xl  hover:text-indigo-600"
      >
        <LogOut className="h-4 w-4 text-red-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
        <button className="flex w-full items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/30 transition-all duration-200 group text-left">
          <span className="font-semibold text-[#FFFFFF]">Sign Out</span>
        </button>
      </li>
    </>
  );

  const { data: session } = authClient.useSession();
  return (
    <div className="relative sticky top-0 z-100 bg-base-100 shadow-sm  bg-white/50 backdrop-blur-xl">
      <div className="navbar  justify-between mx-auto max-w-full md:max-w-[90%]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-[6px] md:gap-3 cursor-pointer">
            <div className="w-8 h-8  md:w-12 md:h-12 relative">
              <Image
                src={"/Assets/Logo.png"}
                alt={"Logo"}
                fill
                className="object-cover rounded-[50px]"
              />
            </div>

            <div className="name">
              <h1 className="text-[14px] md:text-3xl font-semibold md:font-extrabold tracking-tighter text-slate-900">
                SPORT<span className="text-indigo-600">Q</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {session?.user ? (
            <div className="navbar-end flex items-center gap-3">
              <div
                onClick={dropme}
                className="flex cursor-pointer items-center gap-3 px-3 py-1.5 border border-slate-200 dark:border-white/10 rounded-full bg-slate-50 dark:bg-white/5 backdrop-blur-sm shadow-sm"
              >
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-indigo-200 dark:border-indigo-500/30">
                  <Image
                    src={session.user.image || "/default-avatar.png"} // fallback image handles edge cases
                    alt="user Pic"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="hidden sm:block">
                  <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide">
                    {session.user.name}
                  </h2>
                </div>
                {open && (
                  <div className="absolute right-0 mt-2 w-56 top-10 rounded-2xl border border-slate-800 bg-black p-2 shadow-xl ring-1 ring-black/5 z-50">
                    <div className="flex items-center gap-3 p-2">
                      <div className="flex justify-center items-center px-[3px] py-[3px] bg-[#FFFFFF] rounded-full ">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-700 flex justify-center items-center bg-white">
                          <Image
                            src={session?.user?.image || "/default-avatar.png"} 
                            alt="userImage"
                            fill
                            className="object-cover flex justify-center items-center"
                          />
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <h1 className="truncate text-sm font-medium text-white">
                          {session?.user?.name}
                        </h1>
                      </div>
                    </div>

                    <hr className="my-2 border-slate-800" />

                    <ul className="flex flex-col gap-1 p-1">{droplinks}</ul>
                  </div>
                )}
              </div>

              <div className="hidden md:block">
                <button
                  onClick={handlesingout}
                  className="px-4 py-2 text-sm font-medium text-red-600 hover:text-white border border-red-200 hover:border-red-600 hover:bg-red-600 rounded-full transition-all duration-300 shadow-sm active:scale-95"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="navbar-end flex items-center gap-2">
              <Link href="/login">
                <button className="hidden md:flex px-5 py-2 text-sm text-slate-600 dark:text-slate-300 font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                  Login
                </button>
              </Link>

              <Link href="/signup">
                <button className="px-5 py-2 text-sm bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
