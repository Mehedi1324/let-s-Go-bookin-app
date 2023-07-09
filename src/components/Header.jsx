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
import { useAuth } from '../context/AuthContext';
const Header = () => {
  // _______________________________

  const { user, handleLogout } = useAuth();

  // ____________________________________
  const navigate = useNavigate();
  return (
    <div className="text-white bg-[#2f6b8f34] backdrop-brightness-50 backdrop-blur-lg">
      <div className="w-[100%] mx-auto p-2 border-b-[1px]  backdrop-blur-sm backdrop-brightness-50 border-gray-500/50">
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
                <h1 className="font-semibold text-[20px] text-slate-300">
                  {user.displayName}
                </h1>
              ) : (
                <button
                  onClick={() => navigate('/register')}
                  className="bg-green-700 shadow-custom-dark hover:bg-[#211d1d79] w-[80px] h-7 rounded-[2px]"
                >
                  Register
                </button>
              )}
            </div>

            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 shadow-custom-dark hover:bg-[#211d1d79] w-[80px] h-7 rounded-[2px]"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="bg-blue-500 shadow-custom-dark hover:bg-[#211d1d79] w-[80px] h-7 rounded-[2px]"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {/*_________________________ Menu__________________________ */}
    </div>
  );
};

export default Header;
