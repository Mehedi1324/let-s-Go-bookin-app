import React from 'react';
import useFetch from '../hooks/useFetch';

const PopularHotels = () => {
  const { data, loading, error } = useFetch(
    'https://letsgo-booking-app.onrender.com/api/hotels?featured=true'
  );
  return (
    <div className="w-[95%] md:w-[90%] mx-auto pt-[60px]">
      <h1 className="text-[28px] mb-2 font-bold">Home guests love</h1>
      <div className="w-[100px] border-b-[purple] border-[4px] border-blue-400 rounded-lg"></div>
      {loading ? (
        'Loading....'
      ) : (
        <div className="grid grid-cols-2 mt-5 gap-x-5 gap-y-9 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <div className="text-gray-900 " key={item._id}>
              <img src={item.photos[0]} alt="" />
              <h1 className="font-bold text-[20px] ">{item.name}</h1>
              <p className="font-semibold">{item.city}</p>
              <p className="font-bold text-black/70">
                Starting from ${item.cheapestPrice}
              </p>
              {item.rating && (
                <span className="flex mt-1">
                  <span className="px-1 mr-1 font-semibold text-yellow-400 bg-gray-600 rounded-sm">
                    {' '}
                    {item.rating}
                  </span>
                  <p className="font-sm">Excellent</p>
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularHotels;
