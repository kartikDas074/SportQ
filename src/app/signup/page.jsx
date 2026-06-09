"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Eye, EyeOff, Upload, User, Mail, Lock } from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [preview, setPreview] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router=useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  const password = formData.password;

  const validations = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFormData({
      ...formData,
      image: file,
    });

    setPreview(URL.createObjectURL(file));
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();

    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, image } = formData;

    if (!name || !email || !password || !confirmPassword || !image) {
      toast.error("All fields are required");
      return;
    }

    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)
    ) {
      toast.error(
        "Password must contain at least 8 characters, one uppercase and one lowercase letter",
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const url = await uploadToCloudinary(image);
    console.log(url);
    const { data, error } = await authClient.signUp.email({
      name: name,// required
      email: email, // required
      password: password, // required
      image: url,
      
    });
    // console.log(data);
    // console.log(error);

    if(data){
      toast.success('You Successfully Signed Up');
      router.push('/');
    }
    else{
      toast.error('Sorry There have some issue. Try latter or cheak the field')
    }
    
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
          <h1 className="text-4xl font-bold text-white">Create Account</h1>

          <p className="text-slate-300 mt-2">
            Join the ultimate sports community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Full Name
            </label>

            <label className="input w-full bg-gray-800/70 border-gray-700 text-white">
              <User size={18} className="text-gray-400" />

              <input
                type="text"
                placeholder="Enter your full name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Email Address
            </label>

            <label className="input w-full bg-gray-800/70 border-gray-700 text-white">
              <Mail size={18} className="text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Profile Picture
            </label>

            <label className="flex items-center gap-3 cursor-pointer rounded-xl border border-gray-700 bg-gray-800/70 px-4 py-3 hover:border-cyan-500 transition">
              <Upload size={18} className="text-gray-400" />

              <span className="text-gray-300 text-sm">
                {formData.image ? formData.image.name : "Choose image"}
              </span>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImage}
              />
            </label>

            {preview && (
              <div className="flex justify-center pt-2">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gray-700">
                  <Image
                    src={preview}
                    alt="preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
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
                value={formData.password}
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
            <div className="space-y-1 text-sm pl-1">
            <p
              className={`${
                validations.length
                  ? "text-green-400"
                  : "text-gray-400"
              }`}
            >
              ✓ Minimum 8 characters
            </p>

            <p
              className={`${
                validations.uppercase
                  ? "text-green-400"
                  : "text-gray-400"
              }`}
               >
              ✓ One uppercase letter
            </p>

            <p
              className={`${
                validations.lowercase
                  ? "text-green-400"
                  : "text-gray-400"
              }`}
            >
              ✓ One lowercase letter
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Confirm Password
            </label>

            <label className="input w-full bg-gray-800/70 border-gray-700 text-white">
              <Lock size={18} className="text-gray-400" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </label>
          </div>

          <button
            type="submit"
            className="btn w-full border-0 text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:scale-[1.02] duration-300"
          >
            Create Account
          </button>
        </form>

        <div className="divider text-slate-400">OR</div>

        <button className="btn w-full bg-white text-black hover:bg-gray-100 border-0">
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="text-center text-slate-300 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-cyan-400 font-semibold hover:text-cyan-300"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
