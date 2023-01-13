import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";

const banner = () => {
  const router = useRouter();
  return (
    <div className="relative h-[250px] xs:h-[300px] sm:h-[370px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] mb-5">
      <Image
        src="/../public/bg1.jpg"
        fill
        className=" object-cover"
      />
      <div className="absolute top-24 w-full text-center">
        <p className="text-sm sm:text-lg font-sans text-white">Not sure where to go? Perfect.</p>
        <button
          className="text-cyan-500 bg-white py-1 px-2 sm:px-5 sm:py-2 shadow-md text-xs sm:text-base rounded-lg font-bold my-3 hover:shadow-lg active:scale-105 transition duration-150"
          onClick={() => router.push("/#Box")}
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default banner