import { ownerPending, ownerRespond } from '@/lib/action';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import Pendingcard from './pendingcard';
import Link from 'next/link';
import { Clock, CalendarCheck, AlertCircle, PlusCircle } from 'lucide-react';

const PendingRequestpage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    
    const data = await ownerPending(session.user.email) || [];

    return (
        <div className="w-full min-h-screen bg-[#0b1220] text-slate-100 py-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                            Pending Booking Requests
                        </h1>
                        <p className="text-slate-400 text-sm mt-1">
                            Review and respond to live booking requests for your managed grounds.
                        </p>
                    </div>
                    
                    
                    <div className="bg-slate-900/50 border border-slate-800 px-6 py-3 rounded-2xl flex items-center gap-4 self-start md:self-auto backdrop-blur-md">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                            <Clock size={20} />
                        </div>
                        <div>
                            <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">Total Requests</span>
                            <span className="text-xl font-black text-white font-mono">{data.length}</span>
                        </div>
                    </div>
                </div>

              
                {data.length === 0 ? (

                    <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-slate-900/20 border border-slate-800/60 rounded-3xl max-w-xl mx-auto mt-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none" />
                        
                        <div className="p-4 bg-slate-950 border border-slate-800 text-emerald-400 rounded-2xl mb-4 text-3xl shadow-lg">
                            <CalendarCheck size={32} />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">No Pending Requests</h3>
                        <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
                            Looks like your ground schedule is currently clear or you haven't listed a venue yet. Add a new playground to start earning!
                        </p>

                        <Link 
                            href="/add_ground"
                            className="inline-flex items-center gap-2 text-sm font-black text-slate-950 bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/10"
                        >
                            <PlusCircle size={16} />
                            Add New Ground
                        </Link>
                    </div>
                ) : (
                  
                    <div className="space-y-4">
                        <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-950/40 border border-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-500">
                            <div className="col-span-3">Applicant / User</div>
                            <div className="col-span-4">Ground & Time Slots</div>
                            <div className="col-span-2">Date & Price</div>
                            <div className="col-span-1 text-center">Status</div>
                            <div className="col-span-2 text-right">Actions</div>
                        </div>

                    
                        <div className="space-y-4">
                            {data.map((res) => (
                                <Pendingcard key={res._id?.$oid || res._id} item={res} ownerRespond={ownerRespond} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PendingRequestpage;