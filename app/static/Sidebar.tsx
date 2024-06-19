import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrUserWorker } from "react-icons/gr";
import { MdAdd, MdDashboard, MdLogout, MdSettings } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="p-8 bg-white h-[100vh]">
      <Link href="/dashboard/staff">
        <div className="flex gap-1 items-center mb-14">
          <MdAdd className="text-[#08546a] font-bold text-[20px]" />
          <p className="text-[#08546a] text-[12px]">Add New Staff</p>
        </div>
      </Link>

      <div className="flex flex-col gap-12 text-[#08546a] font-sans">
        <Link href="/dashboard">
          <div className="flex items-center gap-3 text-[]">
            <MdDashboard />
            <h3>Dashboard</h3>
          </div>
        </Link>

        <Link href="/l">
          <div className="flex items-center gap-3 text-[]">
            <MdSettings />
            <h3>Settings</h3>
          </div>
        </Link>

        <Link href="/w">
          <div className="flex items-center gap-3 text-[]">
            <MdLogout />
            <h3>Logout</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
