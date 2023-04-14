import React, { useState } from 'react';
import FilterSection from '../components/FilterSection';
import Hotels from '../components/Hotels';
import { useLocation } from 'react-router-dom';

const HotelLists = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  console.log(location);
  return (
    <div className="w-[95%] md:w-[100%] mt-16 md:mt-[90px]  gap-5 flex flex-col md:flex-row md:mx-0 mx-auto">
      <div className="filter_section w-full md:w-[35%] lg:w-[30%]">
        <FilterSection
          destination={destination}
          options={options}
          date={date}
        />
      </div>
      <div className="hotels w-full md:w-[65%] lg:w-[70%] ">
        <Hotels />
      </div>
    </div>
  );
};

export default HotelLists;
