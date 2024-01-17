"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import crowd from "@/public/images/crowd.jpg";
import BannerAnimation from "@/components/BannerAnimation";

export default function Home() {
  return (
    <main>
      <section className="flex justify-center mt-10 items-center ">
        <span>
          <h2 className="text-white text-[2em] mr-3">Welcome {""}</h2>
        </span>
        <BannerAnimation />
      </section>
      <div className="flex min-h-screen flex-col items-center justify-around p-24 ">
        <h1 className="text-5xl">Hometown Gigs</h1>

        <h2 className="text-xl text-white">Under Construction</h2>
      </div>
    </main>
  );
}
