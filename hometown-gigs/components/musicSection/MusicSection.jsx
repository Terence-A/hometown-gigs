import Link from "next/link";
import React from "react";
import MusicCard from "@/components/musicSection/MusicCard";
import crowdImg from "../../public/images/crowd.jpg";
import crowdImg2 from "../../public/images/crowd2.jpg";

const MusicSection = () => {
  return (
    <div className="bg-[#121212] p-6 rounded-xl">
      <div className="flex items-end justify-between mb-11">
        <h2 className="text-white text-2xl font-bold">Music</h2>
        <Link href="/music">
          <h3 className="text-white">See All</h3>
        </Link>
      </div>
      <div className="flex justify-around flex-wrap  p-6 rounded-xl">
        <MusicCard
          title="The Whatchamacolits"
          img={crowdImg}
          description="Great Show played with a bunch of great people"
          userName="User1234"
        />
        <MusicCard
          title="The other band"
          img={crowdImg2}
          description="Here is our latest hit"
          userName="Regular User"
        />

        <MusicCard
          title="The Whatchamacolits"
          img={crowdImg}
          description="Great Show played with a bunch of great people"
          userName="User1234"
        />
        <MusicCard
          title="The Hooks"
          img={crowdImg2}
          description="Thanks everyone We had a great night."
          userName="BobBurger"
        />
      </div>
    </div>
  );
};

export default MusicSection;
