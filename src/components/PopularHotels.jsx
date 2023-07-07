import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link, useNavigate } from 'react-router-dom';

const PopularHotels = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    'http://localhost:1010/api/hotels?featured=true'
  );
  return (
    <div className="w-[95%] md:w-[90%] mx-auto pt-[60px] pb-14">
      <h1 className="text-[28px] mb-2 font-bold">Home guests love</h1>
      <div className="w-[100px] border-b-[purple] border-[4px] border-blue-400 rounded-lg"></div>
      {loading ? (
        'Loading....'
      ) : (
        <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <div
              className="text-gray-900 bg-white rounded-b-lg shadow-custom-card"
              key={item._id}
            >
              <img
                className="w-full h-[240px] sm:h-[180px]"
                src={item.photos[0]}
                alt=""
              />
              <div className="p-3 pb-7">
                <h1 className="font-bold text-[16px] md:text-[18px] ">
                  {item.name}
                </h1>
                <p className="font-semibold">{item.city}</p>
                <p className="font-bold text-black/70">
                  Starting from ${item.cheapestPrice}
                </p>
                {item.rating && (
                  <span className="flex mt-1">
                    <span className="px-1 mr-1 font-semibold text-yellow-400 bg-gray-600 rounded-sm">
                      ⭐{item.rating} / 5
                    </span>
                    <p className="font-sm">Excellent</p>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="w-full my-5 text-right">
        <button
          onClick={() => navigate('/hotels')}
          className="px-3 py-2 rounded-[2px] text-white bg-black"
        >
          Show More & Book Now...
        </button>
      </div>
    </div>
  );
};

export default PopularHotels;
