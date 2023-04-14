import React from 'react';

const Hotels = () => {
  return (
    <div className="overflow-y-scroll text-black md:h-full border-[1px]">
      <div className="">
        <div className="flex">
          <div className="flex ">
            <div className="1st_row">
              <img src="" alt="" />
            </div>
            <div className="text-[15px] space-y-2">
              <h1 className="font-bold text-blue-600 text-[20px]">
                Tower Street Apartments
              </h1>
              <p className="pb-2">500m from center</p>
              <span className="p-1 text-white bg-green-800 rounded-md ">
                Free airport taxi
              </span>
              <p className="font-bold">
                Studio Apartment with Air conditioning
              </p>
              <p>
                Entier studio. 1 bedroom .21m<sup>2</sup> 1 full bed{' '}
              </p>
              <p className="font-semibold text-green-600">Free cancellation</p>
              <p className="text-green-600">
                You can cancle later, so lock in this great price today!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2>Excellent</h2>
              <span>8.9</span>
            </div>
            <div className="text-end">
              <h2>$112</h2>
              <p>Includes taxes and fees</p>
              <button>See availability </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
