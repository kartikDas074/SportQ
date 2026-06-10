"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Eye, EyeOff, Upload, User, Mail, Lock } from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
    });
    if (data) {
      router.push("/");
    } else {
      toast.error("Something Goes wrong. Cheank your email and password.");
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="relative z-10 w-full max-w-md rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-sm p-8">
        <div className="flex items-center  justify-center gap-[16px] mb-4 md:gap-3 cursor-pointer">
          <div className="w-8 h-8  md:w-12 md:h-12 relative">
            <Image
              src={"/Assets/Logo.png"}
              alt={"Logo"}
              fill
              className="object-cover rounded-[50px]"
            />
          </div>

          <div className="name">
            <h1 className="text-[14px] md:text-3xl font-semibold md:font-extrabold tracking-tighter text-[#FFFFFF]">
              SPORT<span className="text-indigo-600">Q</span>
            </h1>
          </div>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Welcome to SportQ</h1>

          <p className="text-slate-300 mt-2">
            Join the ultimate sports community . <br />{" "}
            <span className="text-[#53d153]">FIND.BOOK.PLAY</span>
          </p>
        </div>

        <form onSubmit={handlesubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Email Address
            </label>

            <div className="input w-full bg-gray-800/70 border-gray-700 text-white focus-within:bg-gray-800/70">
              <Mail size={18} className="text-gray-400" />

              <input type="email" placeholder="Enter your email" name="email" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Password
            </label>

            <label className="input w-full bg-gray-800/70 border-gray-700 text-white">
              <Lock size={18} className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </label>
          </div>

          <button
            type="submit"
            className="btn w-full border-0 text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:scale-[1.02] duration-300"
          >
            Log In
          </button>
        </form>

        <div className="divider text-slate-400">OR</div>

        <button className="btn w-full bg-white text-black hover:bg-gray-100 border-0">
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="text-center text-slate-300 mt-6">
          Don't Have a account?{" "}
          <Link
            href="/signup"
            className="text-cyan-400 font-semibold hover:text-cyan-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
