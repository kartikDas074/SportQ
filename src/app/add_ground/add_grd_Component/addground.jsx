"use client";
import React, { useState } from "react";
import {
  Building2,
  MapPin,
  Upload,
  Users,
  Clock3,
  FileText,
  Mail,
  Trophy,
  DollarSign,
} from "lucide-react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { addGround } from "@/lib/action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const GroundAdd = () => {

  const { data: session } = authClient.useSession();
  console.log(session);
 
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [selectSlot, setSelectSlot] = useState([]);
  const handleImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);

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

  const handleSlotChange = (s, isChecked) => {
    if (isChecked) {
      setSelectSlot((prev) => [...prev, { slot: s, isBooked: false }]);
    } else {
      setSelectSlot((prev) => prev.filter((item) => item.slot !== s));
    }
  };
   const router=useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(selectSlot.length==0){
        alert('Plz add atleast one slot');
        return;
    }
    const facilityData = {
      name: e.target.name.value,
      type: e.target.type.value,
      img: await uploadToCloudinary(image),
      location: e.target.location.value,
      price: Number(e.target.price.value),
      capacity: Number(e.target.capacity.value),
      time_slots: selectSlot,
      description: e.target.description.value,
      email: session?.user?.email || "",
    };
    const {data:tokenData}=await authClient.token();
    
    const res= await addGround(facilityData,tokenData?.token);
    console.log(res);
    if(res.insertedId!=null){
        toast.success('You add a sports Ground.');
        router.push('/manage_ground');
    }else{
        toast.error('Something Goes Wrong, Plz try latter')
    }
  };

  return (
    <div>
      <div className="pt-[50px] md:pt-[100px] pb-10 border border-cyan-900/40 bg-[#081321] px-8 shadow-[0_0_40px_rgba(0,100,255,0.08)]">
        <div className="mb-8 flex items-center gap-3">
          <Building2 className="h-6 w-6 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white">
            Sports Ground/Court Information [Add Ground]
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Sports Ground Name
              </label>

              <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#0d1b2e] px-4">
                <Trophy className="h-4 w-4 text-cyan-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter sports name"
                  required
                  className="h-12 w-full bg-transparent text-white outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Sports Type
              </label>

              <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#0d1b2e] px-4">
                <Building2 className="h-4 w-4 text-cyan-400" />
                <input
                  type="text"
                   required
                  name="type"
                  placeholder="Enter sports type"
                  className="h-12 w-full bg-transparent text-white outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Image Upload
              </label>

              <label className="flex h-[200px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-cyan-700 bg-[#0d1b2e]">
                <Upload className="mb-2 h-8 w-8 text-cyan-400" />
                <span className="text-gray-300 text-sm">
                  {image ? image.name : "Choose image"}
                </span>
                <input
                 required
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImage}
                />
                {preview && (
                  <div className="flex justify-center pt-2">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border border-gray-700">
                      <Image
                    
                        src={preview}
                        alt="preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </label>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Location
            </label>

            <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#0d1b2e] px-4">
              <MapPin className="h-4 w-4 text-cyan-400" />

              <input
                type="text"
                 required
                name="location"
                placeholder="Enter location"
                className="h-12 w-full bg-transparent text-white outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Price Per Hour
              </label>

              <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#0d1b2e] px-4">
                <DollarSign className="h-4 w-4 text-cyan-400" />

                <input
                  type="number"
                  name="price"
                   required
                  placeholder="Enter price"
                  className="h-12 w-full bg-transparent text-white outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Capacity
              </label>

              <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#0d1b2e] px-4">
                <Users className="h-4 w-4 text-cyan-400" />

                <input
                  type="number"
                   required
                  name="capacity"
                  placeholder="Enter capacity"
                  className="h-12 w-full bg-transparent text-white outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-300">
              <Clock3 className="h-4 w-4 text-cyan-400" />
              Available Time Slots
            </label>

           <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
              {[
                "06:00-07:00", "07:00-08:00", "08:00-09:00",
                "09:00-10:00", "10:00-11:00", "11:00-12:00",
                "12:00-13:00", "13:00-14:00", "14:00-15:00",
                "15:00-16:00", "16:00-17:00", "17:00-18:00",
              ].map((slot) => {
                const isSelected = selectSlot.some((item) => item.slot === slot);
                return (
                  <label
                    key={slot}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border p-3 text-sm transition-all duration-200 ${
                      isSelected 
                        ? "border-cyan-500 bg-cyan-950/40 text-cyan-300" 
                        : "border-slate-700 bg-[#0d1b2e] text-gray-300"
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      checked={isSelected}
                      className="accent-cyan-500"
                      onChange={(e) => handleSlotChange(slot, e.target.checked)}
                    />
                    {slot}
                  </label>
                );
              })}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Description
            </label>

            <div className="rounded-xl border border-slate-700 bg-[#0d1b2e] p-3">
              <textarea
                rows={5}
                required
                name="description"
                placeholder="Describe your facility..."
                className="w-full resize-none bg-transparent text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Owner Email
            </label>

            <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#0d1b2e] px-4">
              <Mail className="h-4 w-4 text-cyan-400" />

              <input
                type="email"
                value={session?.user?.email || ""}
                 readOnly
                className="h-12 w-full bg-transparent text-white outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="h-14 w-full rounded-xl bg-gradient-to-r from-green-500 to-green-600 font-semibold text-white transition hover:scale-[1.01]"
          >
            Publish Facility
          </button>
        </form>
      </div>
    </div>
  );
};

export default GroundAdd;
