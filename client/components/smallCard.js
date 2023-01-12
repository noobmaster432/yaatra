import Image from "next/image";
import React from "react";

const smallCard = ({img, location, distance}) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-90 transition transform duration-100 ease-in">
      <div className="relative h-20 w-20 m-2">
        <Image src={img} fill className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default smallCard;
