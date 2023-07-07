import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';

const FilterSection = ({
  destination,
  options,
  date,
  setDate,
  setDestination,
  setMin,
  setMax,
  handleClick,
}) => {
  const [openDate, setOpenDate] = useState(false);
  return (
    <div className="p-5 bg-gray-900 md:h-full text-white/50">
      <div action="" className="space-y-3 md:sticky top-24">
        <h1 className="text-2xl font-semibold text-white">Search</h1>
        <div className="space-y-2">
          <div className="space-y-1">
            <p className="text-white">Destination</p>
            <input
              onChange={(e) => setDestination(e.target.value.toLowerCase())}
              className="w-full h-8 px-3 rounded-sm bg-slate-800"
              type="text"
              placeholder={destination}
            />
          </div>
          <div className="relative space-y-1">
            <p className="text-white">Check-in Date</p>
            <input
              onClick={() => setOpenDate(!openDate)}
              className="w-full h-8 px-3 rounded-sm cursor-pointer bg-slate-800"
              type="text"
              readOnly
              value={
                date === undefined
                  ? ''
                  : `${format(
                      date[0]?.startDate,
                      'MM/dd/yyyy'
                    )} ${''} to ${''} ${format(date[0]?.endDate, 'MM/dd/yyyy')}`
              }
            />
            {openDate && (
              <DateRange
                onChange={(i) => setDate([i.selection])}
                minDate={new Date()}
                ranges={date}
                className="absolute left-0 top-14"
              />
            )}
          </div>
        </div>
        <div>
          <p className="my-3 font-semibold text-white text-[20px]">Options</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[16px] md:text-[14px] lg:text-[16px]">
                Min price(per night)
              </span>
              <input
                onChange={(e) => setMin(e.target.value)}
                type="number"
                className="w-[40px] bg-black text-center "
              />
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] md:text-[14px] lg:text-[16px]">
                Max price(per night)
              </span>
              <input
                onChange={(e) => setMax(e.target.value)}
                type="number"
                className="w-[40px] bg-black text-center "
              />
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] md:text-[14px] lg:text-[16px]">
                Adult
              </span>
              <input
                min={1}
                type="number"
                className="w-[40px] bg-black text-center"
                placeholder={options?.adult}
              />
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] md:text-[14px] lg:text-[16px]">
                Children
              </span>
              <input
                min={0}
                type="number"
                placeholder={options?.children}
                className="w-[40px] bg-black text-center "
              />
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] md:text-[14px] lg:text-[16px]">
                Room
              </span>
              <input
                min={1}
                placeholder={options?.room}
                type="number"
                className="w-[40px] bg-black text-center "
              />
            </div>
          </div>
        </div>
        <div className="pt-7">
          <input
            type="submit"
            onClick={handleClick}
            className="w-full font-semibold text-white bg-blue-700 rounded-sm cursor-pointer shadow-custom-light hover:bg-gray-800 h-9"
            value="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
