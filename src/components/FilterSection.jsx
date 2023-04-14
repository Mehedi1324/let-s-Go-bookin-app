import React from 'react';

const FilterSection = ({ destinaiton, options, date }) => {
  return (
    <div className="p-5 bg-gray-900 md:h-full text-white/50">
      <div action="" className="space-y-3">
        <h1 className="text-2xl font-semibold text-white">Search</h1>
        <div className="space-y-2">
          <div className="space-y-1">
            <p className="text-white">Destination</p>
            <input
              className="w-full h-8 px-3 rounded-sm bg-slate-800"
              type="text"
            />
          </div>
          <div className="space-y-1">
            <p className="text-white">Check-in Date</p>
            <input
              className="w-full h-8 px-3 rounded-sm bg-slate-800"
              type="text"
            />
          </div>
        </div>
        <div>
          <p className="my-3 font-semibold text-white text-[20px]">Options</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[16px] md:text-[14px] lg:text-[16px]">
                Min price(per night)
              </span>
              <input type="number" className="w-[40px] bg-black text-center " />
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] md:text-[14px] lg:text-[16px]">
                Max price(per night)
              </span>
              <input type="number" className="w-[40px] bg-black text-center " />
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] md:text-[14px] lg:text-[16px]">
                Adult(per night)
              </span>
              <input type="number" className="w-[40px] bg-black text-center " />
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] md:text-[14px] lg:text-[16px]">
                Children(per night)
              </span>
              <input type="number" className="w-[40px] bg-black text-center " />
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] md:text-[14px] lg:text-[16px]">
                Room(per night)
              </span>
              <input type="number" className="w-[40px] bg-black text-center " />
            </div>
          </div>
        </div>
        <div className="pt-7">
          <input
            type="submit"
            className="w-full font-semibold text-white bg-blue-700 rounded-sm cursor-pointer shadow-custom-light hover:bg-gray-800 h-9"
            value="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
