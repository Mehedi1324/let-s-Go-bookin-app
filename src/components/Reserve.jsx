import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reserve = ({
  setOpenModal,
  options,
  openModal,
  hotelId,
  data,
  setOptions,
  user,
  days,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => setOpenModal(false)}
        className="fixed top-0 bottom-0 left-0 right-0 z-10 backdrop-blur-[3px]"
      ></div>
      <div className="fixed z-20 w-[80%] md:w-[60%] lg:w-[50%] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {openModal && (
          <div className="relative z-20 p-10 space-y-5 text-white rounded-md shadow-custom-dark bg-slate-800">
            <div
              onClick={() => setOpenModal(false)}
              className="absolute right-5 top-5"
            >
              <button>❌</button>
            </div>
            <div>
              <h2 className="font-bold">
                Booked by :{' '}
                <span className="ml-3 font-normal text-purple-500">
                  {user.displayName}
                </span>
              </h2>
            </div>
            <div>
              <h2 className="font-bold">
                Booked for : {''}
                <span className="ml-3 font-normal text-purple-500">
                  {days} days
                </span>
              </h2>
            </div>
            <div>
              <h2 className="font-bold">
                Place : {''}
                <span className="ml-3 font-normal text-purple-500">
                  {data.address}
                </span>
              </h2>
            </div>
            <div>
              <h2 className="font-bold">
                Hotel Id : {''}
                <span className="ml-3 font-normal text-purple-500">
                  {hotelId}
                </span>
              </h2>
            </div>
            <div>
              <h2 className="font-bold">
                Total Rooms : {''}
                <span className="ml-3 font-normal text-purple-500">
                  {options.room} rooms
                </span>
              </h2>
            </div>
            <div>
              <h2 className="font-bold">
                Travelers : {''}
                <span className="ml-3 font-normal text-purple-500">
                  {options.adult} adults {options.children} children
                </span>
              </h2>
            </div>
            <div className="pt-10 space-x-3">
              <button className="px-2 py-1 font-semibold bg-blue-500 rounded-md cursor-pointer shadow-custom-dark hover:bg-slate-800">
                One step ahead
              </button>
              <button
                onClick={() => {
                  setOptions({
                    adult: 1,
                    children: 0,
                    room: 1,
                  });
                  alert('Your booking has been canceled');
                  navigate('/');
                }}
                className="px-2 py-1 font-semibold bg-blue-500 rounded-md cursor-pointer shadow-custom-dark hover:bg-slate-800"
              >
                Cancel Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reserve;
