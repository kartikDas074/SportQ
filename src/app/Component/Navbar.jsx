import React from "react";
import Navlink from "./Navlink";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
          href={"/a"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-indigo-50"
        >
          Explore Arena
        </Navlink>
      </li>
      <li>
        <Navlink
          href={"/a"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-indigo-50"
        >
          Bookings
        </Navlink>
      </li>
      <li>
        <Navlink
          href={"/a"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-indigo-50"
        >
          Add Ground
        </Navlink>
      </li>
      <li>
        <Navlink
          href={"/a"}
          className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-indigo-50"
        >
          Manage Ground
        </Navlink>
      </li>
    </>
  );
  return (
    <div className=" sticky top-0  bg-base-100 shadow-sm">
      <div className="navbar  justify-between mx-auto max-w-full md:max-w-[95%]">
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
          <div className="navbar-end">
            <Link href={"/Login"}>
              <button className="hidden md:flex px-5 py-2 text-gray-700 font-semibold hover:text-indigo-600 transition-colors duration-300">
                Login
              </button>
            </Link>
          </div>
          <div className="navbar-end">
            <Link href={"/Signup"}>
              <button className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300">
                SignUp
              </button>
            </Link>
          </div>
          <div className="navbar-end">
            <Link href={"/Profile"}>
              <button className="btn md:flex hidden">Profile </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
