import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosSend } from "react-icons/io";
import { 
  FaLinkedin, 
  FaXTwitter, 
  FaInstagram, 
  FaFacebook, 
  FaShieldHalved, 
  FaHeadphones, 
  FaCreditCard 
} from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className="relative clear-both bg-slate-950 text-slate-400 font-sans border-t border-slate-900 z-20">
      
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-16 pb-8">
        
       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-900 items-start">
          
        
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
           
              <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-emerald-500 bg-white flex-shrink-0">
                <Image
                  src="/Assets/Logo.png"
                  alt="SportQ Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-black tracking-tight text-white leading-none">
                  SPORT<span className="text-emerald-500">Q</span>
                </h1>
                <p className="text-xs text-slate-500 font-medium mt-1">Book your favorite Playground</p>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              <span className="text-emerald-500 font-semibold">SportQ</span> is your all-in-one platform to discover, book, and play at the best sports venues near you. Fast, Easy, and Reliable site for everyone.
            </p>
          </div>

         
          <div className="lg:col-span-7 space-y-4 lg:pl-8">
            <div>
              <h3 className="text-sm font-bold tracking-wider text-white uppercase">
                NEWSLETTER
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Subscribe to get updates, offers, and news about our latest venues.
              </p>
            </div>

         
            <form  className="max-w-md w-full">
              <div className="flex bg-slate-900 rounded-xl overflow-hidden border border-slate-800 focus-within:border-emerald-500 transition-all duration-300">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your Email" 
                  required
                  className="bg-transparent px-4 py-3 w-full text-sm text-white focus:outline-none placeholder-slate-600"
                />
                <button 
                  type="submit"
                  className="bg-emerald-500 text-slate-950 px-5 flex items-center justify-center hover:bg-emerald-400 active:bg-emerald-600 transition-colors group"
                >
                  <IoIosSend className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>

       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-900">
          
        
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-emerald-500 pl-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/arena" className="hover:text-emerald-400 transition-colors">Explore Venues</Link></li>
              <li><Link href="/bookings" className="hover:text-emerald-400 transition-colors">My Booking</Link></li>
              <li><Link href="/add_ground" className="hover:text-emerald-400 transition-colors">Add Ground</Link></li>
              <li><Link href="/manage_ground" className="hover:text-emerald-400 transition-colors">Manage Ground</Link></li>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-emerald-500 pl-2">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Booking Guide</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Payment Help</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Cancellation</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

        
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-emerald-500 pl-2">Social Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <FaLinkedin className="h-4 w-4" /> LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <FaXTwitter className="h-4 w-4" /> X / Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <FaInstagram className="h-4 w-4" /> Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <FaFacebook className="h-4 w-4" /> Facebook
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-emerald-500 pl-2">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Refund Policy</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-b border-slate-900 text-center sm:text-left">
          
         
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-900/50 border border-slate-900 p-4 rounded-xl">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <FaCreditCard className="h-5 w-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">Secure Payment</h5>
              <p className="text-xs text-slate-500">100% encrypted transactions</p>
            </div>
          </div>

         
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-900/50 border border-slate-900 p-4 rounded-xl">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <FaHeadphones className="h-5 w-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">24/7 Support</h5>
              <p className="text-xs text-slate-500">Dedicated assistance anytime</p>
            </div>
          </div>

         
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-900/50 border border-slate-900 p-4 rounded-xl">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <FaShieldHalved className="h-5 w-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">Your Data is Safe</h5>
              <p className="text-xs text-slate-500">Privacy protection guaranteed</p>
            </div>
          </div>
        </div>

        
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SportQ. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-slate-600">Built for Sports Enthusiasts</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;