import React, { useState } from 'react';
import FilterSection from '../components/FilterSection';
import Hotels from '../components/Hotels';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subscription from '../components/Subscription';

const HotelLists = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location?.state?.destination);

  const [options, setOptions] = useState(location?.state?.options);
  const [date, setDate] = useState(location?.state?.date);

  return (
    <div>
      <Header />
      <div className="w-[95%] md:w-[100%] mt-16 md:mt-[90px]  gap-1 flex flex-col md:flex-row md:mx-0 mx-auto">
        <div className="filter_section w-full md:w-[28%] lg:w-[25%]">
          <FilterSection
            destination={destination}
            options={options}
            date={date}
          />
        </div>
        <div className="hotels w-full md:w-[72%] lg:w-[75%] ">
          <Hotels />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelLists;
