import React from "react";

const NavItem = ({ icon, label }) => {
  return (
    <li className="flex items-center space-x-4 cursor-pointer p-2 hover:bg-sky-900 rounded-lg transition duration-300">
      <div className="text-xl">{icon}</div>
      <span className="text-lg">{label}</span>
    </li>
  );
};

export default NavItem;
