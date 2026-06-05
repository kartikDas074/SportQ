"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const pathname = usePathname();
  const isactive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`relative py-2 px-3 transition-all duration-300 select-none 
        ${isactive 
          ? 'text-green-500 border-b-[1px] border-green-500 text-sm font-semibold'
          : 'text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-indigo-50' 
        }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;