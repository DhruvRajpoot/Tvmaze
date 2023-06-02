import React from "react";
import { Link } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-5 py-2 sticky top-0 bg-[#0c0c0c] text-white z-30">
      <Link to="/" className="text-xl font-semibold flex items-center gap-1"><img src={logo} alt="logo" className="w-10 h-10"/> MovieTime</Link>
      <Link to="/" className="flex justify-center items-center w-12 h-12 bg-[#181818] text-white rounded-full">
        <FaUserAlt />
      </Link>
    </div>
  );
};

export default Navbar;
