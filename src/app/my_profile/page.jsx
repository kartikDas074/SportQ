"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import {
  X,
  Loader2,
  Edit3,
  Copy,
  Check,
  UploadCloud,
  Camera,
} from "lucide-react";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session, isPending, refetch } =
    authClient.useSession();

  const user = session?.user;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const [copied, setCopied] = useState(false);

  
  const openEditModal = () => {
    setName(user?.name || "");
    setPreview(user?.image || "");
    setIsModalOpen(true);
  };

 
  const copyToClipboard = async (text) => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_UPLOAD_PRESET
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  };

 
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      setIsUploading(true);

      let imageUrl = user?.image;

      if (image) {
        imageUrl = await uploadToCloudinary(image);
      }

      await authClient.updateUser({
        name,
        image: imageUrl,
      });

      await refetch();

      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsUploading(false);
    }
  };

  if (isPending) {
    return (
      <div className="w-full min-h-screen bg-[#060b13] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#060b13] text-slate-300 py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-8">

        
        <div>
          <h1 className="text-2xl font-bold text-white">
            Profile
          </h1>
        </div>

       
        <div className="bg-[#0b121f] border border-slate-900 rounded-xl p-6 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="w-24 h-24 rounded-full overflow-hidden relative border border-emerald-500/30">
              <Image
                src={
                  user?.image ||
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                }
                alt="profile"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                {user?.name}
              </h2>
              <p className="text-xs text-slate-400">
                {user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={openEditModal}
            className="flex btn btn-primary items-center gap-2 text-emerald-400 text-xs"
          >
            <Edit3 size={14} />
            Edit Profile
          </button>
        </div>

        
        <div className="bg-[#0b121f] border border-slate-900 rounded-xl p-4 text-xs space-y-2">

          <div className="flex justify-between">
            <span>Name</span>
            <span>{user?.name}</span>
          </div>

          <div className="flex justify-between">
            <span>Email</span>
            <span>{user?.email}</span>
          </div>

          <div className="flex justify-between items-center">
            <span>Image</span>
            <p>{user.image}</p>
          </div>
        </div>
      </div>

     
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0b121f] w-full max-w-lg rounded-xl border border-slate-900">

            
            <div className="flex justify-between p-4 border-b border-slate-900">
              <h2 className="text-white font-bold">
                Edit Profile
              </h2>

              <button onClick={() => setIsModalOpen(false)}>
                <X />
              </button>
            </div>

            
            <form
              onSubmit={handleUpdateProfile}
              className="p-4 space-y-4"
            >

              
              <div className="space-y-2">
                <label className="text-xs text-slate-400">
                  Profile Image
                </label>

                <div className="relative border border-dashed border-slate-800 rounded-lg h-40 flex flex-col items-center justify-center bg-[#060b13]">

                  <UploadCloud className="text-slate-500" />

                  <p className="text-xs text-slate-400 mt-2">
                    Click to upload image
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>

             
              {preview && (
                <div className="flex justify-center">
                  <Image
                    src={preview}
                    alt="preview"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
              )}

           
              <div>
                <label className="text-xs text-slate-400">
                  Name
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 bg-[#060b13] border border-slate-800 rounded mt-1"
                />
              </div>

              
              <div>
                <label className="text-xs text-slate-400">
                  Email
                </label>

                <input
                  value={user?.email}
                  disabled
                  className="w-full p-2 bg-[#060b13] border border-slate-800 rounded mt-1 opacity-60"
                />
              </div>

             
              <div className="flex justify-end gap-2 pt-2">

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3 py-1 text-xs"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isUploading}
                  className="px-3 py-1 text-xs bg-emerald-500 text-black rounded"
                >
                  {isUploading
                    ? "Saving..."
                    : "Save"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;