import Image from "next/image";
import React from "react";

const ShowCard = ({ img, title, description, userName, talent, date }) => {
  return (
    <section className=" rounded-xl cursor-pointer shadow-white hover:shadow-md  hover:shadow-white w-[600px] h-[650px] flex flex-col m-3 ">
      <Image
        className="rounded-t-2xl "
        src={img}
        alt="title"
        width={600}
        height={400}
      />
      <div className=" rounded-b-2xl flex flex-col h-full justify-around px-4 bg-[#08090A] ">
        <h3 className="text-white font-semibold text-3xl mx-8">{title}</h3>
        <p className="text-white font-thin mx-4">{description}</p>
        <p className="text-white font-thin mx-4 ">{talent}</p>
        <div className="flex justify-between">
          <p className="text-[#738290] text-sm font-light mx-4">{date}</p>
          <p className="text-[#738290] text-sm font-extralight mx-4 italic">
            {userName}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowCard;
