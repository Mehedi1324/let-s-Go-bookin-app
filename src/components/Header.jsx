import React, { useContext, useState } from 'react';
import {
  FaBed,
  FaPlane,
  FaCarSide,
  FaTaxi,
  FaRegCalendarAlt,
  FaMale,
} from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-20 text-white bg-gray-800/70 backdrop-blur-sm ">
      <div className="w-[100%] mx-auto p-1 border-b-[1px]  backdrop-blur-sm backdrop-brightness-50 border-gray-500/50">
        <div className="flex justify-between p-1">
          <h1
            onClick={() => navigate('/')}
            className="ml-3 text-2xl font-semibold text-green-500 cursor-pointer font-kaushan"
          >
            Let's Go
          </h1>
          <div className={` flex text-[16px]  items-center space-x-2 `}>
            <div>
              {user ? (
                <h1 className="text-blue-500">{user.username}</h1>
              ) : (
                <button className="bg-blue-500 shadow-custom-dark hover:bg-[#211d1d79] w-[85px] h-7 rounded-full">
                  Register
                </button>
              )}
            </div>

            {user ? (
              <button className="bg-red-500 shadow-custom-dark hover:bg-[#211d1d79] w-[85px] h-7 rounded-full">
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="bg-blue-500 shadow-custom-dark hover:bg-[#211d1d79] w-[85px] h-7 rounded-full"
              >
                Login
              </button>
            )}
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
        }  grid justify-center w-full grid-cols-3 py-2 pl-5 text-md text-center md:pl-0 md:space-x-8 lg:space-x-12 md:flex`}
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
