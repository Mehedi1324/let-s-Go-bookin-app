import React from 'react';

const Destinations = () => {
  return (
    <div className="w-[95%] md:w-[90%] mx-auto space-y-5 pt-10">
      <div>
        <h3 className="text-[28px] mb-2 text-black/80 font-bold text-center  mx-auto">
          Top Destinations
        </h3>
        <div className="w-[100px] mx-auto border-b-[purple] border-[4px] border-blue-400 rounded-lg"></div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="relative">
          <img className="w-full " src="./images/big-img.png" alt="big-img" />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center text-white bg-black/30 rounded-2xl">
            <div>
              <h1 className="text-[35px] font-semibold pb-4">
                Up to 50% off on <br /> Honeymoon packages
              </h1>
              <button className="bg-blue-500  shadow-custom-dark hover:bg-[#211d1d8b] text-[16px] font-semibold px-5 rounded-full py-2">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/*___________________ Second col / destinations_______________ */}

        <div className="grid w-full h-full grid-cols-3 gap-5 ">
          <div className="flex flex-col justify-around w-full h-full gap-5">
            <div className="relative">
              <img
                className="w-full"
                src="./images/destination1.png"
                alt="dest1"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center rounded-lg bg-black/30">
                <span className="font-semibold text-white text-[24px]">
                  Bangladesh
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full"
                src="./images/destination2.png"
                alt="dest1"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center rounded-lg bg-black/30">
                <span className="font-semibold text-white text-[24px]">
                  Darjeeling
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full"
                src="./images/destination3.png"
                alt="dest1"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center rounded-lg bg-black/30">
                <span className="font-semibold text-white text-[24px]">
                  Türkiye
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around w-full h-full gap-5">
            <div className="relative">
              <img
                className="w-full"
                src="./images/destination4.png"
                alt="dest1"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center rounded-lg bg-black/30">
                <span className="font-semibold text-white text-[24px]">
                  Switzerland
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full"
                src="./images/destination5.png"
                alt="dest1"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center rounded-lg bg-black/30">
                <span className="font-semibold text-white text-[24px]">
                  Thailand
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full"
                src="./images/destination6.png"
                alt="dest1"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center rounded-lg bg-black/30">
                <span className="font-semibold text-white text-[24px]">
                  Australia
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full h-full gap-5">
            <div className="relative">
              <img
                className="w-full"
                src="./images/destination7.png"
                alt="dest1"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center rounded-lg bg-black/30">
                <span className="font-semibold text-white text-[24px]">
                  London
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full"
                src="./images/destination8.png"
                alt="dest1"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center rounded-lg bg-black/30">
                <span className="font-semibold text-white text-[24px]">
                  USA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
