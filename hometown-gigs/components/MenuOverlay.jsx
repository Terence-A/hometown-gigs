import Link from "next/link";
import React from "react";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col  py-4 items-center w-full md:hidden">
      <li className=" text-[#CDCDCD] hover:text-[#E5E5E5] my-2">
        <Link href="/music">Music</Link>
      </li>
      <li className=" text-[#CDCDCD] hover:text-[#E5E5E5] my-2">
        <Link href="/shows">Shows</Link>
      </li>
      <li className=" text-[#CDCDCD] hover:text-[#E5E5E5] my-2">
        <Link href="/artistry">Artistry</Link>
      </li>
      <li className=" text-[#CDCDCD] hover:text-[#E5E5E5] my-2">
        <Link href="/contact">Contact Us</Link>
      </li>
      <li className=" text-[#CDCDCD] hover:text-[#E5E5E5] my-2">
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
};

export default MenuOverlay;
