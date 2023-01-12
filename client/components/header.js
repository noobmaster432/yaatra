import Image from "next/image";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

const header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'Selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
  }; 

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      }
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10 lg:px-16">
      {/* Left  */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-8 cursor-pointer my-auto"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Middle - Search */}
      <div className="flex items-center xs:border-2 rounded-full py-2 xs:shadow-sm">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={placeholder ? placeholder : "Start your search"}
          className="pl-5 pr-2 bg-transparent outline-none flex-grow truncate text-sm text-gray-600 placeholder-gray-600 active:shadow-sm"
        />
        <MagnifyingGlassIcon
          className="hidden md:inline-flex h-8 bg-red-400 hover:bg-red-500 text-white rounded-full p-2 cursor-pointer mx-2"
          onClick={search}
        />
      </div>

      {/* Right  */}
      <div className="items-center justify-end space-x-2 text-gray-500 hidden xs:inline-flex ml-2">
        <p
          onClick={() => router.push("/#beHost")}
          className="hidden lg:inline cursor-pointer hover:bg-gray-100 rounded-full py-2 px-3 hover:text-gray-600 font-semibold text-zinc-600 text-sm"
        >
          Airbnb your home
        </p>
        <GlobeAltIcon className="h-9 cursor-pointer hidden xs:inline hover:bg-gray-100 rounded-full p-2 text-zinc-600" />

        <div className="flex items-center border-2 p-2 rounded-full space-x-2 hover:shadow-md cursor-pointer">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              defaultValue={2}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>

          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default header;
