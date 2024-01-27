import React from "react";
import UserProfile from "../assets/img/user.avif";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 w-full rounded-xl py-3 px-4 md:px-6 border shadow-lg shadow-slate-50 md:flex md:justify-between ">
      <div className="flex justify-between items-center ">
        <div className="flex items-center md:flex-col md:items-start">
          <p className="hidden md:flex text-base">Primary</p>
          <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
        </div>
        <div className="relative md:hidden">
          <img
            className="w-8 h-8 rounded-full border-2 border-gray-400 mr-2"
            src={UserProfile}
            alt="User profile"
          />
          <span className="top-0 right-1 absolute  w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
      </div>
      <div className="flex items-center pt-4 md:pt-0 relative">
        <div className="relative flex-1 ">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-4 py-2 rounded-lg border border-gray-400 focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50 w-full"
          />
          <FaSearch className="absolute top-0 left-0 mt-3 ml-3 text-gray-400" />
        </div>
        <img
          className="hidden md:flex w-10 h-10 rounded-full border-2 border-gray-400 ml-2"
          src={UserProfile}
          alt="User profile"
        />
        <span className="hidden md:flex top-1 right-0 absolute  w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
    </div>
  );
};

export default Nav;
