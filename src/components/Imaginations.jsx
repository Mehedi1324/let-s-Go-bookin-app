import React from 'react';

const Imaginations = () => {
  return (
    <div className="w-[95%] md:w-[90%] pt-[130px] lg:pt-[100px] mx-auto ">
      <div className="grid items-center grid-cols-2 gap-5 justify-evenly md:grid-cols-3 lg:grid-cols-4">
        <div className="space-y-3">
          <span className="text-[35px] font-bold ">
            Go beyond your imagiantion
          </span>
          <div className="w-[100px]   border-b-[purple] border-[4px] border-blue-400 rounded-lg"></div>
          <p className="text-[22px]">Discover your ideal experience with us.</p>
        </div>
        <div className="relative bg-black rounded-2xl">
          <img
            className="opacity-70 max-h-[400px] w-full "
            src="./images/imagination1.png"
            alt="1st pic"
          />
          <div className="absolute left-0 right-0 mx-auto bottom-5">
            <h4 className="text-white text-center text-[20px] font-semibold">
              7% Discount for Summer Vacation
            </h4>
          </div>
        </div>
        <div className="relative bg-black rounded-2xl">
          <img
            className="opacity-70 max-h-[400px] w-full "
            src="./images/imagination2.png"
            alt="1st pic"
          />
          <div className="absolute left-0 right-0 mx-auto bottom-5">
            <h4 className="text-white text-center text-[20px] font-semibold">
              10% Discount for Winter Vacation
            </h4>
          </div>
        </div>
        <div className="relative bg-black rounded-2xl">
          <img
            className="opacity-70 max-h-[400px] w-full "
            src="./images/imagination3.png"
            alt="1st pic"
          />
          <div className="absolute left-0 right-0 mx-auto bottom-5">
            <h4 className="text-white text-center text-[20px] font-semibold">
              7% Discount for all Airlines
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imaginations;
