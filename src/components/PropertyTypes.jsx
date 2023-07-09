import React from 'react';
import useFetch from '../hooks/useFetch';

const PropertyTypes = () => {
  const { data, loading, error } = useFetch(
    'https://letsgo-booking-app.onrender.com/api/hotels/countByType'
  );
  const images = [
    '/images/hotels.png',
    '/images/apartments.png',
    '/images/resort.png',
    '/images/villas.png',
    '/images/cabins.png',
  ];
  return (
    <div className="w-[95%] md:w-[90%] mx-auto space-y-5 pt-10">
      <div>
        <h3 className="text-[28px] mb-2 text-black/80 font-bold  mx-auto">
          Property types
        </h3>
        <div className="w-[100px] border-b-[purple] border-[4px] border-blue-400 rounded-lg"></div>
      </div>

      {loading ? (
        'Loading....'
      ) : (
        <div className="grid grid-cols-3 gap-5 mx-auto md:grid-cols-4 lg:grid-cols-5">
          {data &&
            images?.map((img, i) => (
              <div
                key={i}
                className="relative transition-all duration-300 ease-in rounded-lg cursor-pointer hover:scale-95"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full shadow-custom-gray rounded-lg md:h-[180px] h-[130px]"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 p-1 text-slate-100 bg-[#00000058] rounded-lg ">
                  <h1 className="capitalize md:text-[25px] text-[20px] mt-[65px] md:mt-[100px]   font-bold">
                    {data[i]?.propertyType}
                  </h1>
                  <h2>
                    {data[i]?.count} {data[i]?.propertyType}
                  </h2>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PropertyTypes;
