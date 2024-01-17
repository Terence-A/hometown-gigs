"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import crowd from "@/public/images/crowd.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main>
      <section className="flex justify-center mt-10 items-center ">
        {/* <Image
          className="h-[200px] object-cover shadow-sm shadow-white "
          src={crowd}
          alt="Banner of crowd at music show"
        /> */}
        <span>
          <h2 className="text-white text-[2em] mr-3">Welcome {""}</h2>
        </span>
        <div>
          <TypeAnimation
            className="text-white "
            sequence={[
              // Same substring at the start will only be typed out once, initially
              ` Band Members!`,
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              " Solo Artists!",
              1000,
              " Bar Owners!",
              1000,
              " Music Lovers!",
              1000,
              " Photographers!",
              1000,
              " Producers!",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </section>
      <div className="flex min-h-screen flex-col items-center justify-around p-24 ">
        <h1 className="text-5xl">Hometown Gigs</h1>

        <h2 className="text-xl text-white">Under Construction</h2>
      </div>
    </main>
  );
}
