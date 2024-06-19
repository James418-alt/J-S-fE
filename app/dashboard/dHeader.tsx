import Image from "next/image";
import React from "react";
import { MdMessage, MdNotifications, MdSearch } from "react-icons/md";

const Dheader = () => {
  return (
    <div>
      <div className="flex justify-between border-l-2 border-gray-100 items-center py-[20px] px-[30px] bg-white w-full">
        <div className="">
          <div className="flex gap-2 items-center">
            <MdSearch className="text-[30px] text-gray-400" />
            <input
              className="outline-none placeholder:text-[20px]"
              type="text"
              placeholder="Search Anything..."
            />
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="border rounded-full w-[40px] h-[40px] flex justify-center items-center">
            <MdMessage />
          </div>

          <div className="border rounded-full w-[40px] h-[40px] flex justify-center items-center">
            <MdNotifications className="text-[25px]" />
          </div>

          <Image
            className="rounded-full"
            src="/bg.jpeg"
            alt="image"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Dheader;
