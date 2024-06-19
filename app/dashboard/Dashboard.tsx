import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const Dashboard = async () => {
  const session = await getServerSession(options);
  console.log(session);
  // const session = await getServerSession(options);
  // console.log(session?.user);
  // const url: string = "";
  // const data = await fetch(url);
  return (
    <div className="bg-gray-100 h-[100vh] px-[20px] py-[30px]">
      <h2 className="font-bold text-[30px] text-black">
        Welcome Back {session?.user?.name}!
      </h2>
      <div className="py-[30px] flex gap-7">
        <div className="bg-white p-5 w-[400px] rounded-md h-[200px]">
          <div className="flex justify-between">
            <h2 className="font-bold text-[18px] pb-4">Total Delivery Guys</h2>
            <BsThreeDots className="text-gray-400 text-[25px]" />
          </div>

          <h5 className="font-bold text-[20px]">2,000</h5>
        </div>

        <div className="bg-white p-5 w-[400px] rounded-md h-[200px]">
          <div className="flex justify-between">
            <h2 className="font-bold text-[18px] pb-4">Free Delivery Guys</h2>
            <BsThreeDots className="text-gray-400 text-[25px]" />
          </div>

          <h5 className="font-bold text-[20px]">100</h5>
        </div>

        <div className="bg-white p-5 w-[400px] rounded-md h-[200px]">
          <div className="flex justify-between">
            <h2 className="font-bold text-[18px] pb-4">Active Delivery Guys</h2>
            <BsThreeDots className="text-gray-400 text-[25px]" />
          </div>

          <h5 className="font-bold text-[20px]">1,900</h5>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
