import React from "react";
import { Link } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-5 py-2 sticky top-0 bg-[#0c0c0c] text-white z-50">
      <Link to="/" className="text-xl font-semibold">MovieTime</Link>
      <Link to="/" className="flex justify-center items-center w-12 h-12 bg-[#181818] text-white rounded-full">
        <FaUserAlt />
      </Link>
    </div>
  );
};

export default Navbar;
