"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="border-b border-b-gray-400 px-[70px] py-[20px] bg-[#08546a]">
      <div className="flex justify-between items-center">
        <div>
          <Image src="/logo.png" alt="#" width={200} height={200} />
        </div>
        <div className="flex gap-10 text-[#80c1d4] font-sans text-[20px]">
          <Link href="//">About</Link>
          <Link href="//">Service</Link>
          <Link href="//">FaQ</Link>
          <Link href="//">Contact</Link>
        </div>
        <div>
          <Link
            href="/form/signinF"
            className="text-white p-2 bg-[#2b7d93] rounded-md px-6"
          >
            JOIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
