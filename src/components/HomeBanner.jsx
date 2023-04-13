import React, { useState } from 'react';
import {
  FaBed,
  FaPlane,
  FaCarSide,
  FaTelegramPlane,
  FaRegCalendarAlt,
  FaMale,
} from 'react-icons/fa';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
const HomeBanner = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, action) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: action === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  return (
    <div className="bg-gradient-to-t from-gray-900  to-gray-800 h-[550px] ">
      <div className=" flex backdrop-blur-sm justify-center h-full opacity-60 flex-col items-center text-white w-full  bg-[url('/images/bg.png')] bg-cover bg-center">
        <div className="w-full space-y-10">
          {/* ___________________Title_____________________ */}
          <div className="space-y-5">
            <h1 className="text-[35px] text-center md:text-[40px] lg:text-[50px]  text-white-900 font-bold">
              A lifetime of discounts ? Is's Genius.
            </h1>
            <div className="text-[23px] font-bold text-center">
              Get rewarded for your travels -unlock instant savings of 10% or
              more with a free Travel Guru booking account
            </div>
            <div className="w-full text-center">
              <button className="bg-red-700 hover:bg-slate-900 text-[18px] font-semibold w-[200px] rounded-md h-[45px]">
                Sing in / Register
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*_________________ Booking ____________________ */}
      <div className="absolute right-0 left-0  w-[90%] md:w-[80%] mx-auto  -mt-10 md:-mt-20 lg:-mt-24  p-3 rounded-lg items-center   backdrop-blur-sm backdrop-brightness-75 text-white shadow-custom-gray">
        <div className="grid justify-between grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex items-center w-full space-x-3">
            <FaTelegramPlane className="text-[35px]" />{' '}
            <input
              className="w-full h-10 p-2 text-black rounded-md"
              type="text"
              placeholder="Where are you going ?"
            />
          </div>
          <div className="relative flex items-center space-x-3">
            <FaRegCalendarAlt className="text-[35px]" />{' '}
            <input
              onClick={() => {
                setShowDatePicker(!showDatePicker);
                setOpenOptions(false);
              }}
              type="text"
              className="w-full h-10 p-2 font-semibold text-black rounded-md"
              value={`${format(
                date[0].startDate,
                'MM/dd/yyyy'
              )} ${''} to ${''} ${format(date[0].endDate, 'MM/dd/yyyy')}`}
            />
            {showDatePicker && (
              <div className="">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="absolute z-10 top-10 left-8 lg:left-2"
                />
              </div>
            )}
          </div>
          <div className="flex cursor-pointer relative text-[18px] font-semibold items-center w-full ">
            <FaMale className="text-[35px]" />{' '}
            <div
              className="space-x-3"
              onClick={() => {
                setOpenOptions(!openOptions);
                setShowDatePicker(false);
              }}
            >
              <span>
                <span className="text-purple-500 font-bold text-[20px]">
                  {options.adult}
                  {''}
                </span>
                adult
              </span>
              <span>
                <span className="text-purple-500 font-bold text-[20px]">
                  {options.children}
                </span>
                children
              </span>
              <span>
                <span className="text-purple-500 font-bold text-[20px]">
                  {options.room}
                </span>
                room
                <button className="px-2 py-1 ml-3 bg-red-500 rounded-sm">
                  Search
                </button>
              </span>
            </div>
            {openOptions && (
              <div className="absolute left-0 right-0 p-3 bg-black top-10 options">
                <div className="-mt-3 -mr-3 text-right">
                  <span
                    onClick={() => setOpenOptions(false)}
                    className="px-1 bg-red-500"
                  >
                    X
                  </span>
                </div>
                <div className="flex justify-between pt-3 bg-black">
                  <span>Aduls</span>
                  <div className="space-x-5">
                    <button
                      disabled={options.adult <= 1}
                      onClick={() => handleOption('adult', 'd')}
                    >
                      -
                    </button>
                    <span>{options.adult}</span>
                    <button onClick={() => handleOption('adult', 'i')}>
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Children</span>
                  <div className="space-x-5">
                    <button
                      disabled={options.children <= 0}
                      onClick={() => handleOption('children', 'd')}
                    >
                      -
                    </button>
                    <span>{options.children}</span>
                    <button onClick={() => handleOption('children', 'i')}>
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Rooms</span>
                  <div className="space-x-5">
                    <button
                      disabled={options.room <= 1}
                      onClick={() => handleOption('room', 'd')}
                    >
                      -
                    </button>
                    <span>{options.room}</span>
                    <button onClick={() => handleOption('room', 'i')}>+</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
