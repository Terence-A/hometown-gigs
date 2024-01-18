import React from "react";
import { TypeAnimation } from "react-type-animation";

const BannerAnimation = () => {
  return (
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
          " to Hometown Gigs",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={3}
      />
    </div>
  );
};

export default BannerAnimation;
