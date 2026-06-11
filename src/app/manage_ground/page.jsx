import { deleteGround, getOwnerGround, updateGround } from "@/lib/action";
import { auth } from "@/lib/auth";
import { Building2, DatabaseBackup, DollarSign, PlusCircle, Users } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import { CgAdd } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";
import ManageCard from "./mangeGroundComponent/manageCard";

const ManageGround = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const data = await getOwnerGround(session?.user.email);
  let capacity = 0,
    avgPrice = 0;
  for (let i = 0; i < data.length; i++) {
    capacity += parseInt(data[i].capacity);
    avgPrice +=  parseInt(data[i])
  }
  if(data.length!=0)
  avgPrice/=data.length();
  return (
    <div>
      <div className="px-5 py-10  bg-[#0b1220] border border-[#1f2a3a] shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-6">
            <div className="p-3 rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9] text-2xl">
              <MdManageAccounts />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-white">
                Manage Your Grounds
              </h1>
              <p className="text-sm text-gray-400">
                View, edit or delete the sports grounds you have added.
              </p>
            </div>
          </div>

          <div>
            <Link href="/add_ground">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl 
                      bg-gradient-to-r from-cyan-500 to-blue-600
                      text-white font-medium shadow-md hover:scale-105 transition"
              >
                <CgAdd className="text-xl" />
                <p>Add New Ground</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0b1220] border border-[#1f2a3a] shadow-lg">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 text-2xl">
              <Building2 /> 
            </div>
            <div>
              <h1 className="text-sm font-medium text-gray-400">
                Total Ground
              </h1>
              <p className="text-2xl font-bold text-white mt-0.5">
                {data.length}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0b1220] border border-[#1f2a3a] shadow-lg">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 text-2xl">
              <Users />
            </div>
            <div>
              <h1 className="text-sm font-medium text-gray-400">
                Total Capacity
              </h1>
              <p className="text-2xl font-bold text-white mt-0.5">{capacity}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0b1220] border border-[#1f2a3a] shadow-lg">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 text-2xl">
              <DollarSign />
            </div>
            <div>
              <h1 className="text-sm font-medium text-gray-400">Avg Price</h1>
              <p className="text-2xl font-bold text-white mt-0.5">
                ৳{avgPrice}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-2 md:px-10  py-10  bg-[#0b1220] border border-[#1f2a3a]">
        {data?.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] rounded-3xl border border-[#1f2a3a] bg-gradient-to-b from-[#0b1220] to-[#0f172a] shadow-lg">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <DatabaseBackup className="w-10 h-10 text-cyan-400" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">
              Oops! No Grounds Found
            </h2>

            <p className="mt-3 text-gray-400 text-center max-w-md px-4">
              You haven't added any sports grounds yet. Start by creating your
              first ground and make it available for bookings.
            </p>

            <Link href="/add_ground">
              <button
                className="
          mt-8
          flex items-center gap-2
          px-5 py-3
          rounded-xl
          bg-gradient-to-r from-cyan-500 to-blue-600
          text-white font-medium
          shadow-lg shadow-cyan-500/20
          hover:scale-105
          transition-all duration-300
        "
              >
                <PlusCircle size={18} />
                Add Your First Ground
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {data.map((ress) => (
              
                <ManageCard
                key={ress._id}
                  res={ress}
                  deleteGround={deleteGround}
                  updateGround={updateGround}
                />
            
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageGround;
