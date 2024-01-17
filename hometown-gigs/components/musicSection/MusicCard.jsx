import Image from "next/image";
import React from "react";
import crowdImg from "../../public/images/crowd.jpg";
const MusicCard = ({ img, title, description, userName }) => {
  return (
    <section className=" rounded-xl cursor-pointer shadow-white hover:shadow-md  hover:shadow-white w-[300px] h-[350px] flex flex-col m-3 ">
      <Image
        className="rounded-t-xl "
        src={img}
        alt="title"
        width={300}
        height={300}
      />
      <div className=" rounded-b-xl flex flex-col h-full justify-around px-4 bg-[#08090A] ">
        <h3 className="text-white font-semibold text-xl m-2">{title}</h3>
        <p className="text-white font-thin">{description}</p>
        <div>
          <p className="text-[#738290] text-end text-sm font-extralight">
            {userName}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicCard;
