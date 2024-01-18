import Link from "next/link";
import React from "react";
import ShowCard from "@/components/showsSection/ShowCard";
import crowdImg from "../../public/images/crowd.jpg";
import crowdImg2 from "../../public/images/crowd2.jpg";
import Image from "next/image";

const ShowsSection = () => {
  return (
    <div className="bg-[#121212] p-6 rounded-xl">
      <div className="flex items-end justify-between mb-11">
        <h2 className="text-white text-2xl font-bold">Shows</h2>
        <Link href="/shows">
          <h3 className="text-white">See All</h3>
        </Link>
      </div>
      <div className="flex justify-around flex-wrap  p-6 rounded-xl">
        <ShowCard
          img={crowdImg2}
          title="Wasted Day Brewery"
          description="Tonights show features Dad Patrol"
          talent="Dad Patrol"
          date={"January 25th"}
          userName="SecurityCheck"
        />
        <ShowCard
          img={crowdImg}
          title="Oleary's Pub"
          description="Going to be a great show, Doors open at 9pm, show starts at 10. All ages welcome! "
          talent="Motherhood, and All of Green"
          date="February 10th"
          userName="UserNumber5"
        />
      </div>
    </div>
  );
};

export default ShowsSection;
