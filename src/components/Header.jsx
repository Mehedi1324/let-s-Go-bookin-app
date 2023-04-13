import React, { useState } from 'react';
import {
  FaBed,
  FaPlane,
  FaCarSide,
  FaTaxi,
  FaRegCalendarAlt,
  FaMale,
} from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-20 text-white backdrop-blur-sm backdrop-brightness-50">
      <div className="w-[100%] mx-auto p-2 border-b-[1px]  backdrop-blur-sm backdrop-brightness-50 border-gray-500">
        <div className="flex items-center justify-between ">
          <img className="w-[90px]" src="/images/logo.png" alt="" />
          <div className={` flex text-[17px] font-bold space-x-2 `}>
            <button className="bg-[#ff00009d] shadow-custom-dark hover:bg-[#211d1d79] w-[85px] h-9 rounded-sm">
              Register
            </button>
            <button className="rounded-sm bg-[#ff00009d] shadow-custom-dark hover:bg-[#211d1d79] w-[85px] h-9">
              Login
            </button>
          </div>
          <AiOutlineMenu
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden"
          />
        </div>
      </div>

      {/*_________________________ Menu__________________________ */}
      <div
        className={`${
          !showMenu ? 'hidden' : 'visible'
        }  grid justify-center w-full grid-cols-3 py-3 pl-5 space-y-1 text-xl text-center md:pl-0 md:space-x-8 lg:space-x-12 md:flex`}
      >
        <span className="flex items-center space-x-2 cursor-pointer hover:text-blue-700 ">
          <FaBed /> <span>Stays</span>
        </span>
        <span className="flex items-center space-x-2 cursor-pointer hover:text-blue-700">
          <FaPlane /> <span>Flights</span>
        </span>
        <span className="flex items-center space-x-2 cursor-pointer hover:text-blue-700">
          <FaCarSide /> <span>Car rentals</span>
        </span>
        <span className="flex items-center space-x-2 cursor-pointer hover:text-blue-700">
          <FaBed /> <span>Attractions</span>
        </span>
        <span className="flex items-center space-x-2 cursor-pointer hover:text-blue-700">
          <FaTaxi /> <span>Airport taxis</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
