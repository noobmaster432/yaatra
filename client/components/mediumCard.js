import Image from "next/image";
import React from "react";

const mediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-95 transition transform duration-300 ease-in mb-12 md:mb-0">
      <div className="relative h-60 w-60 md:h-80 md:w-80">
        <Image src={img} fill className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-2">{title}</h3>
    </div>
  );
};

export default mediumCard;
