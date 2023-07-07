import React, { useContext, useState } from 'react';
import {
  FaBed,
  FaPlane,
  FaCarSide,
  FaPlaneDeparture,
  FaRegCalendarAlt,
  FaMale,
} from 'react-icons/fa';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useBookingDetails } from '../context/SearchContext';
const HomeBanner = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const navigate = useNavigate();

  const { options, setOptions, date, setDate, destination, setDestination } =
    useBookingDetails();
  const handleOption = (name, action) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: action === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // Send data to hotel page on clicking search btn__________

  const handleSearch = () => {
    if (destination.length < 1) {
      alert('Please fill out where you want to go !');
    } else {
      navigate('/hotels');
    }
  };
  return (
    <div className="bg-gradient-to-t from-gray-900  to-gray-800 h-[550px] ">
      <div className=" flex backdrop-blur-sm justify-center h-full opacity-60 flex-col items-center text-white w-full  bg-[url('/images/bg.png')] bg-cover bg-center">
        <div className="w-full space-y-10">
          {/* ___________________Title_____________________ */}
          <div className="space-y-5">
            <h1 className="text-[35px] font-kaushan text-center md:text-[40px] lg:text-[50px]  text-white-900 font-bold">
              A lifetime of discounts ? Is's Genius.
            </h1>
            <div className="text-[25px] md:text-[18px] hidden md:block font-kaushan text-center">
              Get rewarded for your travels -unlock instant savings of 10% or
              more with a free Travel Guru booking account
            </div>
          </div>
        </div>
      </div>
      {/*_________________ Booking ____________________ */}

      <div className="absolute z-10 right-0 left-0 lg:w-[80%]  w-[95%]  md:w-[90%] mx-auto  -mt-20 md:-mt-18 lg:-mt-16  p-3 rounded-lg items-center bg-gray-800 backdrop-blur-sm text-white/90 shadow-custom-gray">
        {/* Wrapper of all the booking comp. */}
        <div className="grid justify-between grid-cols-1 gap-x-10 gap-y-4 lg:grid-cols-2">
          {/*____________ Select Place_________ */}
          <div className="inline-flex items-center space-x-3">
            <FaPlaneDeparture className="text-[35px]" />{' '}
            <input
              onChange={(e) => setDestination(e.target.value.toLowerCase())}
              className="w-full h-10 p-2  text-white/50 bg-[#0000006c] rounded-md"
              type="text"
              placeholder="Where are you going ? (Dhaka, France, UK, Italy,US, South Korea, thailand and bali ) available right now)"
              required
            />
          </div>
          {/* Select date__________________________ */}
          <div className="relative flex items-center space-x-3">
            <FaRegCalendarAlt className="text-[35px]" />{' '}
            <input
              onClick={() => {
                setShowDatePicker(!showDatePicker);
                setOpenOptions(false);
              }}
              readOnly
              type="text"
              className="w-full cursor-pointer bg-[#0000006c] h-10 p-2 font-semibold text-white/50 rounded-md"
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
                  className="absolute z-10 top-10 left-11 "
                />
              </div>
            )}
          </div>

          {/* Select rooms and members____________________ */}
          <div className="flex cursor-pointer relative text-[18px] font-semibold items-center w-full ">
            <FaMale className="text-[35px]" />{' '}
            <div
              className="ml-1 space-x-2"
              onClick={() => {
                setOpenOptions(!openOptions);
                setShowDatePicker(false);
              }}
            >
              <span>
                <span className="text-yellow-400 font-bold text-[22px]">
                  {options.adult}
                  {''}
                </span>
                <span className=" lg:text-lg"> adult </span>
              </span>
              <span>
                <span className="text-yellow-400 font-bold text-[22px]">
                  {options.children}
                </span>
                <span className=" lg:text-lg"> children </span>
              </span>
              <span>
                <span className="text-yellow-400 font-bold text-[22px]">
                  {options.room}
                </span>
                <span className=" lg:text-lg"> room </span>
              </span>
            </div>
            <button
              onClick={handleSearch}
              className="float-right px-5 shadow-custom-dark text-[16px] hover:bg-[#211d1d79] py-1 ml-3 bg-blue-500 rounded-full backdrop-blur-sm"
            >
              Search
            </button>
            {openOptions && (
              <div className="absolute right-0 p-3 space-y-3 bg-black rounded-md -left-3 md:right-10 top-12 options">
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
                      className="px-2 text-[18px] font-bold text-black bg-white"
                      disabled={options.adult <= 1}
                      onClick={() => handleOption('adult', 'd')}
                    >
                      -
                    </button>
                    <span>{options.adult}</span>
                    <button
                      className="px-2 text-[18px] font-bold text-black bg-white"
                      onClick={() => handleOption('adult', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Children</span>
                  <div className="space-x-5">
                    <button
                      className="px-2 text-[18px] font-bold text-black bg-white"
                      disabled={options.children <= 0}
                      onClick={() => handleOption('children', 'd')}
                    >
                      -
                    </button>
                    <span>{options.children}</span>
                    <button
                      className="px-2 text-[18px] font-bold text-black bg-white"
                      onClick={() => handleOption('children', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Rooms</span>
                  <div className="space-x-5">
                    <button
                      className="px-2 text-[18px] font-bold text-black bg-white"
                      disabled={options.room <= 1}
                      onClick={() => handleOption('room', 'd')}
                    >
                      -
                    </button>
                    <span>{options.room}</span>
                    <button
                      className="px-2 text-[18px] font-bold text-black bg-white"
                      onClick={() => handleOption('room', 'i')}
                    >
                      +
                    </button>
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
