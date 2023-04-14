import React from 'react';

const PropertyTypes = () => {
  return (
    <div className="w-full">
      <h3 className="text-[28px] mb-5 text-black/80 font-bold w-[95%] md:w-[90%] mx-auto">
        Property types
      </h3>
      <div className="grid grid-cols-3 gap-5 w-[95%] mx-auto md:w-[90%] md:grid-cols-4 lg:grid-cols-5">
        <div className="relative transition-all rounded-lg cursor-pointer hover:scale-110 ">
          <img
            src="/images/hotels.png"
            alt=""
            className="w-full shadow-custom-gray rounded-lg md:h-[180px] h-[130px]"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 p-1 text-slate-100 bg-[#00000058] rounded-lg ">
            <h1 className="md:text-[25px] text-[20px] mt-[65px] md:mt-[100px]   font-bold">
              Hotels
            </h1>
            <h2>233 hotels</h2>
          </div>
        </div>
        <div className="relative transition-all rounded-lg cursor-pointer hover:scale-110 ">
          <img
            src="/images/apartments.png"
            alt=""
            className="w-full shadow-custom-gray rounded-lg md:h-[180px] h-[130px]"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 p-1 text-slate-100 bg-[#00000058]  rounded-lg ">
            <h1 className="md:text-[25px] text-[20px] mt-[65px] md:mt-[100px]   font-bold">
              Apartments
            </h1>
            <h2>2331 hotels</h2>
          </div>
        </div>
        <div className="relative transition-all rounded-lg cursor-pointer hover:scale-110 ">
          <img
            src="/images/resort.png"
            alt=""
            className="w-full shadow-custom-gray rounded-lg md:h-[180px] h-[130px]"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 p-1 text-slate-100 bg-[#00000058] rounded-lg ">
            <h1 className="md:text-[25px] text-[20px] mt-[65px] md:mt-[100px]   font-bold">
              Resorts
            </h1>
            <h2>2331 hotels</h2>
          </div>
        </div>
        <div className="relative transition-all rounded-lg cursor-pointer hover:scale-110 ">
          <img
            src="/images/villas.png"
            alt=""
            className="w-full rounded-lg shadow-custom-gray md:h-[180px] h-[130px]"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 p-1 text-slate-100 bg-[#00000058] rounded-lg ">
            <h1 className="md:text-[25px] text-[20px] mt-[65px] md:mt-[100px]   font-bold">
              Villas
            </h1>
            <h2>2331 hotels</h2>
          </div>
        </div>
        <div className="relative transition-all rounded-lg cursor-pointer hover:scale-110 ">
          <img
            src="/images/cabins.png"
            alt=""
            className="shadow-custom-gray w-full rounded-lg md:h-[180px] h-[130px]"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 p-1 text-slate-100 bg-[#00000058] rounded-lg ">
            <h1 className="md:text-[25px] text-[20px] mt-[65px] md:mt-[100px]   font-bold">
              Cabins
            </h1>
            <h2>2331 hotels</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypes;
