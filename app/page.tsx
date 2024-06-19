"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Lp = () => {
  return (
    <div className="bg-[#08546a] h-[100%]">
      <div className="flex justify-between  p-[70px] ">
        <div className="mt-16">
          <h3 className="text-white font-sans font-bold text-[40px] text-start">
            Manage and Control <br /> all your Staffs <br />
            in one place!!
          </h3>
          <p className="text-gray-200 text-[16px] font-medium">
            0% in fees. Drop the Cards and Equipment. <br />
            Register all staffs in one place
          </p>
        </div>
        <div className="">
          <Image src="/webWoman.jpg" alt="#" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Lp;
