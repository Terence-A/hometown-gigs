"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "@/components/MenuOverlay";

const Navbar = () => {
  const [navBarOpen, SetNavBarOpen] = useState(false);

  return (
    <nav
      className="flex flex-wrap  justify-between items-center p-6 bg-[#121212] shadow-sm shadow-[#CDCDCD]
    sticky top-0 z-10"
    >
      <Link href="/">
        <button className="p-4 font-bold rounded-lg   text-2xl text-[#738290] border border-[#CDCDCD] hover:text-opacity-70 hover:border-opacity-70 hover:bg-opacity-70">
          Hometown Gigs
        </button>
      </Link>
      <div className="mobile-menu block md:hidden">
        {!navBarOpen ? (
          <button
            onClick={() => SetNavBarOpen(true)}
            className="flex 
            items-center
             px-3 
             py-2 
             border 
             rounded 
             border-slate-200
          text-slate-200
          hover:text-white
          hover:border-white
          "
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={() => SetNavBarOpen(false)}
            className="flex 
          items-center
           px-3 
           py-2 
           border 
           rounded 
           border-slate-200
        text-slate-200
        hover:text-white
        hover:border-white
        "
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        )}
      </div>
      <div className="menu hidden md:block md:w-2/3 ">
        <div className="flex w-full justify-between p items-center">
          <ul className="flex  text-lg">
            <li className=" text-[#CDCDCD] hover:text-[#E5E5E5]">
              <Link href="/music">Music</Link>
            </li>
            <li className="ml-6 text-[#CDCDCD] hover:text-[#E5E5E5]">
              <Link href="/shows">Shows</Link>
            </li>
            <li className="ml-6 text-[#CDCDCD] hover:text-[#E5E5E5]">
              <Link href="/artistry">Artistry</Link>
            </li>
            <li className="ml-6 text-[#CDCDCD] hover:text-[#E5E5E5]">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="ml-6 text-[#CDCDCD] hover:text-[#E5E5E5]">
              <Link href="/about">About</Link>
            </li>
          </ul>
          <Link href="/login">
            <button className="text-lg font-semibold text-white bg-[#272a63] rounded-full py-1 px-3 hover:text-[#e7dfdf] ">
              Login
            </button>
          </Link>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay /> : null}
    </nav>
  );
};

export default Navbar;
