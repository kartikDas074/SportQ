"use client";
import {
  MapPin,
  DollarSign,
  Users,
  Clock,
  SquarePen,
  Trash2,
} from "lucide-react";
import { Trophy, Building2, Upload, Clock3, Mail, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { toast } from "react-toastify";

const ManageCard = ({ res, deleteGround, updateGround,token }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGround, setSelectedGround] = useState({ id: null, name: "" });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectSlot, setSelectSlot] = useState([]);
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(null);

  const openEditModal = () => {
    if (res.time_slots) {
      setSelectSlot(res.time_slots);
    }
    if (res.img) {
      setPreview(res.img);
    }
    setIsEditModalOpen(true);
  };
  const openDeleteModal = (id, name) => {
    setSelectedGround({ id, name });
    setIsModalOpen(true);
  };
  const router = useRouter();
  const handleConfirmDelete = async () => {
    const result = await deleteGround(res._id,token);
    if (result.deletedCount != null) {
      toast.success("this ground is succesfully deleted");
      setIsModalOpen(false);
      router.refresh();
    } else {
      toast.error("Sorry something Goes wrong. Try sometimes Latter.");
      setIsModalOpen(false);
    }
  };


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

  const handleSlotChange = (slotName, isChecked) => {
    if (isChecked) {
      setSelectSlot([...selectSlot, { slot: slotName, isBooked: false }]);
    } else {
      setSelectSlot(selectSlot.filter((item) => item.slot !== slotName));
    }
  };

  
  const handleUpdateSubmit = async (e) => {
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
      email: res.email || "",
    };

    const result=await updateGround(res._id,facilityData,token);
    console.log(result);
   if(result.modifiedCount!=null){
    toast.success('You modified the ground infrormation');
    setIsEditModalOpen(false);
    router.refresh();
   }else{
    toast.error('something goes wrong');
    router.refresh();
    setIsEditModalOpen(false);
   }
  };
  return (
    <div className="group relative rounded-2xl border border-[#1f2a3a] bg-[#0b1220] overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] hover:border-[#0ea5e9]/40 transition-all duration-300 flex flex-col justify-between max-w-sm">
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        <Image
          src={res.img}
          alt={res.name}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />

        <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-bold bg-[#0b1220]/80 text-[#0ea5e9] border border-[#0ea5e9]/30 backdrop-blur-md rounded-full uppercase tracking-wider">
          {res.type}
        </span>
      </div>

      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-bold text-white tracking-wide truncate mb-1">
            {res.name}
          </h1>

          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
            <MapPin className="h-3.5 w-3.5 text-gray-500 flex-shrink-0" />
            <span className="truncate">{res.location}</span>
          </div>
        </div>

        <div className="space-y-2.5 border-t border-[#1f2a3a] pt-4">
          {/* Price */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span>Price / Hour</span>
            </div>
            <div className="font-semibold text-[#0ea5e9]">৳{res.price}</div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="h-4 w-4 text-gray-500" />
              <span>Capacity</span>
            </div>
            <div className="font-semibold text-gray-200">
              {res.capacity} People
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="h-4 w-4 text-gray-500" />
              <span>Time Slots</span>
            </div>
            <div className="font-semibold text-gray-200">
              {res.time_slots?.length || 0} Slots
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-[#1f2a3a]/50 pt-3">
          <p className="text-xs text-gray-400/90 leading-relaxed line-clamp-2">
            {res.description}
          </p>
        </div>
      </div>

      <div className="px-5 py-4 bg-[#080d18]/60 border-t border-[#1f2a3a] grid grid-col-2 items-center gap-3">
        <button
          onClick={openEditModal}
          className="flex-1 flex items-center justify-center gap-2 h-10 rounded-xl border border-[#1f2a3a] bg-[#0b1220] hover:bg-[#1f2a3a] text-xs font-semibold text-gray-200 hover:text-white transition-all active:scale-[0.98]"
        >
          <SquarePen className="h-3.5 w-3.5 text-[#0ea5e9]" />
          <span>Edit</span>
        </button>

        <button
          onClick={() => openDeleteModal(res._id, res.name)}
          className="flex items-center justify-center h-10 px-4 rounded-xl border border-red-950/60 bg-red-950/20 text-red-400 hover:bg-red-900/30 hover:text-red-300 transition-all active:scale-[0.95]"
          title="Delete Ground"
        >
          <Trash2 className="h-4 w-4" />
          <span className="text-xs font-semibold ml-1.5 sm:hidden lg:inline">
            Delete
          </span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl border border-red-950/50 bg-[#0b1220] p-6 text-center shadow-[0_0_50px_rgba(239,68,68,0.1)] transition-all animate-in fade-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 border border-red-500/30 text-red-400 mb-4 shadow-lg shadow-red-500/5">
              <Trash2 className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-bold text-white tracking-wide">
              Are you absolutely sure?
            </h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed px-2">
              Are you really want to{" "}
              <span className="text-red-400 font-semibold">
                {selectedGround.name}
              </span>{" "}
              delte this ground? This action can never be undone. Once you
              delete this ,it will be permanantly deleted.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-1/2 flex h-11 items-center justify-center rounded-xl border border-[#1f2a3a] bg-[#0b1220] hover:bg-[#1f2a3a] text-sm font-semibold text-gray-200 hover:text-white transition-all active:scale-[0.98]"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleConfirmDelete}
                className="w-full sm:w-1/2 flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-sm font-semibold text-white shadow-lg shadow-red-600/15 transition-all active:scale-[0.98]"
              >
                Yes, Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}

   
      {isEditModalOpen && (
        <div className="fixed inset-0 mt-[60px] z-250 flex items-center justify-center p-4">
        
          <div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsEditModalOpen(false)}
          />

          
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto transform rounded-2xl border border-slate-800 bg-[#0b1220] p-6 md:p-8 text-left shadow-[0_0_50px_rgba(14,165,233,0.15)] transition-all animate-in fade-in zoom-in-95 duration-200 custom-scrollbar">
          
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl border border-slate-800 bg-[#0d1b2e] text-gray-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="h-5 w-5" />
            </button>

           
            <div className="mb-6 border-b border-slate-800 pb-4">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Update Your Ground Facility
              </h2>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                Make changes below to instantly update{" "}
                <span className="text-cyan-400 font-medium">{res.name}</span>{" "}
                details.
              </p>
            </div>

            
            <form onSubmit={handleUpdateSubmit} className="space-y-6">
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
                      defaultValue={res.name} 
                      placeholder="Enter sports name"
                      required
                      className="h-12 w-full bg-transparent text-white outline-none text-sm"
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
                      name="type"
                      defaultValue={res.type} 
                      placeholder="Enter sports type"
                      required
                      className="h-12 w-full bg-transparent text-white outline-none text-sm"
                    />
                  </div>
                </div>

              
                <div className="lg:row-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Update Image
                  </label>
                  <label className="flex h-[135px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-cyan-700/50 bg-[#0d1b2e] hover:bg-slate-900/40 transition">
                    <Upload className="mb-1 h-6 w-6 text-cyan-400" />
                    <span className="text-gray-400 text-xs text-center px-2">
                      {image ? image.name : "Choose a new image to replace"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImage}
                    />
                    {preview && (
                      <div className="flex justify-center pt-2">
                        <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-slate-700">
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

               
                <div className="lg:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Location
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#0d1b2e] px-4">
                    <MapPin className="h-4 w-4 text-cyan-400" />
                    <input
                      type="text"
                      name="location"
                      defaultValue={res.location} 
                      placeholder="Enter location"
                      required
                      className="h-12 w-full bg-transparent text-white outline-none text-sm"
                    />
                  </div>
                </div>
              </div>

            
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Price Per Hour (Tk)
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#0d1b2e] px-4">
                    <DollarSign className="h-4 w-4 text-cyan-400" />
                    <input
                      type="number"
                      name="price"
                      defaultValue={res.price} 
                      placeholder="Enter price"
                      required
                      className="h-12 w-full bg-transparent text-white outline-none text-sm"
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
                      name="capacity"
                      defaultValue={res.capacity} 
                      placeholder="Enter capacity"
                      required
                      className="h-12 w-full bg-transparent text-white outline-none text-sm"
                    />
                  </div>
                </div>
              </div>

              
              <div>
                <label className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Clock3 className="h-4 w-4 text-cyan-400" />
                  Available Time Slots
                </label>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {[
                    "06:00-07:00",
                    "07:00-08:00",
                    "08:00-09:00",
                    "09:00-10:00",
                    "10:00-11:00",
                    "11:00-12:00",
                    "12:00-13:00",
                    "13:00-14:00",
                    "14:00-15:00",
                    "15:00-16:00",
                    "16:00-17:00",
                    "17:00-18:00",
                  ].map((slot) => {
                  
                    const isSelected = selectSlot.some(
                      (item) => item.slot === slot,
                    );
                    return (
                      <label
                        key={slot}
                        className={`flex cursor-pointer items-center gap-2 rounded-lg border p-2.5 text-xs transition-all duration-200 ${
                          isSelected
                            ? "border-cyan-500 bg-cyan-950/30 text-cyan-300"
                            : "border-slate-800 bg-[#0d1b2e] text-gray-400"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          className="accent-cyan-500 h-3.5 w-3.5"
                          onChange={(e) =>
                            handleSlotChange(slot, e.target.checked)
                          }
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
                    rows={4}
                    name="description"
                    defaultValue={res.description} 
                    placeholder="Describe your facility..."
                    required
                    className="w-full resize-none bg-transparent text-white outline-none text-sm leading-relaxed"
                  />
                </div>
              </div>

            
              <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-5 h-12 rounded-xl border border-slate-700 bg-[#0d1b2e] text-sm font-semibold text-gray-300 hover:text-white transition active:scale-[0.98]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white transition hover:scale-[1.01] active:scale-[0.98] shadow-lg shadow-cyan-500/10"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCard;
