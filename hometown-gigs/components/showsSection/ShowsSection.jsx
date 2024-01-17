import Link from "next/link";
import React from "react";

const ShowsSection = () => {
  return (
    <div className="flex items-end justify-between">
      <h2 className="text-white text-2xl font-bold">Shows</h2>
      <Link href="/shows">
        <h3 className="text-white">See All</h3>
      </Link>
    </div>
  );
};

export default ShowsSection;
