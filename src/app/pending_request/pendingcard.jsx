"use client";
import React, { useState } from "react"; 
import { Calendar, Clock, Check, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const Pendingcard = ({ item, ownerRespond }) => {
    console.log(item);
  const {
    user_name,
    user_email,
    user_img,
    name,
    type,
    img,
    date,
    price,
    time_slots,
    status,
  } = item;
  
  const res = item;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState("");
  
  const openConfirmation = (type) => {
    setActionType(type); 
    setIsModalOpen(true);
  };
  const router=useRouter();
  const handleRespond = async (respond) => {
    setIsModalOpen(false); 
    const bookingId = res._id?.$oid || res._id;
    const updateData = { status: respond };
    const {data:tokenData}= await authClient.token();
    if(!tokenData?.token){
       toast.error('Something Goes Wrong. Try again Later');
        router.refresh();
    }
    const result = await ownerRespond(bookingId, updateData,tokenData?.token);
    if(result.modifiedCount!=null){
           toast.success(`You successfully ${respond} The request`)
           router.refresh();
    }else{
        toast.error('Something Goes Wrong. Try again Later');
        router.refresh();
    }
  };

  return (
    <div className="w-full p-5 lg:p-6 bg-slate-900/30 border border-slate-800 hover:border-slate-700/60 transition-all duration-200 rounded-2xl lg:grid lg:grid-cols-12 lg:items-center gap-4 flex flex-col justify-between">
      
    
      <div className="lg:col-span-3 flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-full border border-slate-700 overflow-hidden bg-slate-950 flex-shrink-0 relative">
          <Image
            src={user_img || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"}
            alt={user_name}
            fill
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-0.5 min-w-0">
          <h4 className="text-sm font-bold text-white truncate">{user_name}</h4>
          <p className="text-xs text-slate-400 truncate">{user_email}</p>
        </div>
      </div>

      
      <div className="lg:col-span-4 flex items-start gap-3.5 border-t lg:border-t-0 border-slate-800/50 pt-3 lg:pt-0">
        <div className="w-16 h-12 rounded-lg border border-slate-800 overflow-hidden bg-slate-950 flex-shrink-0 relative">
          <Image
            src={img}
            alt={name}
            fill
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-1 min-w-0">
          <h4 className="text-sm font-bold text-slate-200 truncate">{name}</h4>
          <span className="inline-block text-[10px] font-bold px-2 py-0.5 bg-slate-950 border border-slate-800 text-slate-400 rounded-md">
            {type}
          </span>

          <div className="flex flex-wrap gap-1 items-center pt-1">
            <Clock size={12} className="text-emerald-400 flex-shrink-0" />
            <p className="text-[11px] font-bold text-emerald-400 font-mono">
              {time_slots?.join(", ")}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 flex lg:flex-col justify-between lg:justify-center gap-2 border-t lg:border-t-0 border-slate-800/50 pt-3 lg:pt-0 text-xs font-semibold">
        <div className="flex items-center gap-1.5 text-slate-400">
          <Calendar size={13} className="text-slate-500" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-white font-black font-mono text-sm lg:mt-0.5">
          ৳ {price?.toLocaleString()}
        </div>
      </div>

   
      <div className="lg:col-span-1 flex items-center lg:justify-center border-t lg:border-t-0 border-slate-800/50 pt-3 lg:pt-0">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          {status}
        </span>
      </div>

     
      <div className="lg:col-span-2 flex items-center gap-2 justify-end border-t lg:border-t-0 border-slate-800/50 pt-4 lg:pt-0 w-full lg:w-auto">
        <button
          onClick={() => openConfirmation("rejected")} 
          className="flex-1 lg:flex-none inline-flex items-center justify-center gap-1 px-3 py-2 bg-slate-950 hover:bg-rose-500/10 text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-500/20 text-xs font-bold rounded-xl transition-all"
        >
          <X size={14} />
          Reject
        </button>
        <button
          onClick={() => openConfirmation("approved")} 
          className="flex-1 lg:flex-none inline-flex items-center justify-center gap-1 px-3 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-black rounded-xl transition-all shadow-md shadow-emerald-500/5"
        >
          <Check size={14} />
          Approve
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-slate-800 max-w-sm w-full rounded-2xl p-6 shadow-2xl space-y-4 relative overflow-hidden">
            
            <div
              className={`absolute top-0 left-0 w-full h-[3px] ${actionType === "approved" ? "bg-emerald-500" : "bg-rose-500"}`}
            />

            <div className="flex items-center gap-3">
              <h3 className="text-base font-bold text-white capitalize">
                Confirm {actionType}?
              </h3>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Are you sure you want to{" "}
              <span
                className={`font-bold uppercase ${actionType === "approved" ? "text-emerald-400" : "text-rose-400"}`}
              >
                {actionType}
              </span>{" "}
              this booking request?
            </p>

            <div className="flex items-center gap-2 justify-end pt-2 text-xs">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400 font-bold rounded-xl hover:bg-slate-800/50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => handleRespond(actionType)}
                className={`px-4 py-2 text-slate-950 font-black rounded-xl transition-all shadow-md capitalize ${
                  actionType === "approved"
                    ? "bg-emerald-500 hover:bg-emerald-600"
                    : "bg-rose-500 hover:bg-rose-600 text-white"
                }`}
              >
                Yes, Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pendingcard;