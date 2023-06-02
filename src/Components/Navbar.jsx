import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between w-full px-5 sm:px-10 py-2 sticky top-0 bg-[#0c0c0c] text-white z-30">
      <Link to="/" className="text-xl font-semibold flex items-center gap-1"><img src={logo} alt="logo" className="w-10 h-10"/> MovieTime</Link>
      <button className="flex justify-center items-center w-12 h-12 bg-[#181818] text-white rounded-full relative" onClick={handleClick}>
        <FaUserAlt />
        {showDropdown && (
          <div className="absolute top-[52px] right-[-10px] w-40 bg-[#181818] rounded-md flex flex-col justify-center items-center gap-2">
            <Link to="/orderhistory" className="text-sm hover:bg-[#dad9d9] hover:text-black w-full py-3 rounded-md">Order History</Link>
          </div>
        )}
      </button>
    </div>
  );
};

export default Navbar;
