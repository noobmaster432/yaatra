import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";

const banner = () => {
  const router = useRouter();
  return (
    <div className="relative h-[250px] xs:h-[300px] sm:h-[370px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] mb-5">
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        fill
        className=" object-bottom"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-sans italic">Not sure where to go? Perfect.</p>
        <button
          className="text-purple-500 bg-white py-2 px-5 sm:px-10 sm:py-4 shadow-md text-xs sm:text-base rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
          onClick={() => router.push("/#Box")}
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default banner