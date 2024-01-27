import React, { useState } from "react";
import NavItem from "./NavItem";
import { IoMdHome } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="hidden fixed top-0 left-0 bg-sky-800 text-white h-screen w-64 md:relative md:w-1/6 md:flex flex-col justify-between duration-500">
      <div className="p-6">
        <ul className="space-y-6">
          <NavItem icon={<IoMdHome />} label="Dashboard" />
          <NavItem icon={<FaRegUserCircle />} label="Profile" />
          <NavItem icon={<IoBagCheckOutline />} label="Careers" />
          <NavItem icon={<FaChartLine />} label="Statistics" />
          <NavItem icon={<FaRegQuestionCircle />} label="FAQ" />
          <NavItem icon={<CiStar />} label="Testimonial" />
          <NavItem icon={<IoSettingsOutline />} label="Settings" />
        </ul>
      </div>
      <ul className="space-y-6 px-6 pb-12 ">
        <NavItem icon={<MdLogout />} label="Logout" />
      </ul>
    </div>
  );
};

export default Sidebar;
