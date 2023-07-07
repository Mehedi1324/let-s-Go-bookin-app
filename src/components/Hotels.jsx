import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

const Hotels = ({ item, loading }) => {
  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    navigate(`/hotels/${id}`);
  };
  const { date } = useContext(SearchContext);
  return (
    <div className="text-black ">
      <div className="">
        <div className="flex justify-between text-[12px] space-x-3 border-[1px] p-2">
          <div className="flex space-x-3">
            <div className="1st_row">
              <img src={item.photos[0]} />
            </div>
            <div className="text-[12px] md:text-[14px] lg:text-[15px] space-y-0 md:space-y-1 lg:space-y-2">
              <h1
                onClick={() => handleViewDetails(item._id)}
                className="font-bold md:mb-2 hover:text-blue-500 cursor-pointer text-blue-900 text-[16px] md:text-[18px]"
              >
                {item.name}
              </h1>
              <p className="inline px-1 text-white bg-green-800 rounded-sm">
                {item.distance}m from center
              </p>
              <p>
                <span className="font-bold text-blue-800"> Destination : </span>
                <span className="font-semibold">
                  {' '}
                  {item.city.charAt(0).toUpperCase() + item.city.slice(1)}
                </span>
              </p>
              <p className="font-bold text-[14px]">
                Studio Apartment with Air conditioning
              </p>
              <p className="hidden lg:block">{item.description}</p>
              <p className="font-semibold text-green-600">Free cancellation</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            {item.rating && (
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Excellent </h2>
                <span className="px-1 ml-1 font-semibold text-yellow-600 bg-black">
                  {item.rating}*
                </span>
              </div>
            )}
            <div className="flex flex-col space-y-2 font-semibold text-end">
              <h2 className="text-[16px] font-bold">${item.cheapestPrice}</h2>
              <p className="inline">Includes taxes and fees</p>
              <button
                onClick={() => handleViewDetails(item._id)}
                className="p-1 text-white bg-blue-500"
              >
                See availability{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
