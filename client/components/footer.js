import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const footer = () => {
  return (
    <div className="px-20 py-8 bg-gray-100 text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 sm:grid-cols-2 justify-items-center">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>Diversity & Belonging</p>
          <p>Frontline Stays</p>
          <p>Guest Referrals</p>
          <p>Associates</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Host your home</p>
          <p>Host an online Experience</p>
          <p>Responsible hosting</p>
          <p>Resource Centre</p>
          <p>Community Centre</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Our COVID-19 Response</p>
          <p>Help Center</p>
          <p>Trust & Safety</p>
          <p>Cancellation Options</p>
          <p>Neighbourhood Support</p>
        </div>
      </div>
      <div className="h-[1px] bg-gray-400 mt-8 mb-2" />
      <div className="flex justify-between">
        <p>
          &copy;2022{" "}
          <a
            href="https://github.com/noobmaster432"
            target="_blank"
            rel="noreferrer"
          >
            NoobMaster
          </a>
        </p>
        <div className="flex">
          <div className="flex">
            <GlobeAltIcon className="h-6 cursor-pointer" />
            <p className="mr-2">English (IN)</p>
          </div>

          <div className="ml-5">
            <span className="mr-1 font-semibold cursor-pointer">₹</span>RS
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
