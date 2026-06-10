'use client'
import { BookingPost } from '@/lib/action';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BookTurf = ({ Data }) => {
  
  const { data: session } = authClient.useSession();

 
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [bookingDate, setBookingDate] = useState('');
  const [userName, setUserName] = useState('');

  
  const today = new Date().toISOString().split('T')[0];

 
  const handleSlotToggle = (slot) => {
    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter(s => s !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };


  const totalHours = selectedSlots.length;
  const pricePerHour = Data?.price || 0;
  const discount = 0;
  const totalPrice = (totalHours * pricePerHour) - discount;
  const router=useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('button clicked');
    if (!bookingDate) {
      alert("Please select a booking date!");
      return;
    }
    if (selectedSlots.length === 0) {
      alert("Please select at least one time slot!");
      return;
    }
    
    const TakingInfo={
      user_id:session.user.id,
      user_email:session.user.email,
      user_img:session.user.image,
      user_name:session.user.name,
      owner_email:Data.email,
      img:Data.img,
      name:Data.name,
      type:Data.type,
      status:'pending',
      date:bookingDate,
      price:totalPrice,
      time_slots:selectedSlots
    }
    const result=await BookingPost(TakingInfo);
    if(result.insertedId!=null){
       toast.success('Your Request Is pending. Please Cheak my booking page if it is accepted by owner or not.');
       router.push('/bookings');
    }
  
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-slate-50 rounded-3xl border border-gray-100 shadow-sm mt-6">
      
     
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Book The Ground</h1>
        <p className="text-sm text-gray-500 mt-1">Secure your slot instantly. Select your preferred date, timings, and play!</p>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            
          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Venue Name</label>
                <input 
                  type="text" 
                  value={Data.name} 
                  disabled 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-500 cursor-not-allowed" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-800" 
                />
              </div>
            </div>

            
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Select Date</label>
              <input 
                type="date" 
                min={today} 
                required
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium" 
              />
            </div>

         
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Available Time Slots</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Data.time_slots.map((res, index) => {
                  const isSelected = selectedSlots.includes(res.slot);
                  return (
                    <button
                      type="button"
                      key={index}
                      disabled={res.isBooked}
                      onClick={() => handleSlotToggle(res.slot)}
                      className={`p-3.5 rounded-xl border text-sm font-semibold transition-all flex items-center justify-between text-left
                        ${res.isBooked 
                          ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed line-through' 
                          : isSelected 
                            ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100' 
                            : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'}`}
                    >
                      <span>{res.slot}</span>
                      
                     
                      {res.isBooked ? (
                        <span className="text-[10px] font-bold bg-gray-200 text-gray-500 px-2 py-0.5 rounded">Booked</span>
                      ) : isSelected ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-white animate-scale-in">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

           
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Total Selected Hours</label>
              <input 
                type="text" 
                value={`${totalHours} Hour(s)`} 
                disabled 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 cursor-not-allowed" 
              />
            </div>

            
            <button 
              type="submit"
              disabled={totalHours === 0}
              className={`w-full text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-200 text-sm shadow-md
                ${totalHours === 0 
                  ? 'bg-gray-300 shadow-none cursor-not-allowed ' 
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-100 active:scale-[0.99]'}`}
            >
              Confirm & Book Now
            </button>
          </form>
        </div>

       
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between min-h-[350px]">
          <div>
            <h2 className="text-lg font-bold text-gray-900 pb-3 border-b border-gray-100 mb-5">Your Invoice Summary</h2>
            
            <div className="space-y-4">
            
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Total Duration</span>
                <span className="font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-lg">{totalHours} hr(s)</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Rate / Hour</span>
                <span className="font-bold text-gray-800">৳{pricePerHour}</span>
              </div>

           
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Applied Discount</span>
                <span className="font-bold text-emerald-600">-৳{discount}</span>
              </div>
            </div>
          </div>

         
          <div className="mt-8 border-t border-gray-100 pt-5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-base font-bold text-gray-900">Total Payable Price:</span>
              <span className="text-2xl font-black text-blue-600">৳{totalPrice}</span>
            </div>
            
          
            <p className="text-[11px] text-gray-400 text-center bg-slate-50 py-2 rounded-lg border border-slate-100">
              *Cancelation is free up to 2 hours prior to the match.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BookTurf;