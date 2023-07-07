import React, { useState } from 'react';
import FilterSection from '../components/FilterSection';
import Hotels from '../components/Hotels';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';
import { useBookingDetails } from '../context/SearchContext';

const HotelLists = () => {
  const location = useLocation();
  const {
    destination,
    setDestination,
    options,
    setOptions,
    date,
    min,
    max,
    url,
    setMin,
    setMax,
    hotelsUrl,
    setDate,
  } = useBookingDetails();

  const { data, loading, error, reFetch } = useFetch(
    destination.length < 1 ? hotelsUrl : url
  );
  const handleFilterSearch = () => {
    reFetch();
  };
  return (
    <div>
      <Header />
      <div className="w-[95%] md:w-[100%]   gap-1 flex flex-col md:flex-row md:mx-0 mx-auto">
        <div className="filter_section w-full md:w-[28%] lg:w-[25%]">
          <FilterSection
            setMax={setMax}
            handleClick={handleFilterSearch}
            setMin={setMin}
            min={min}
            max={max}
            setDestination={setDestination}
            destination={destination}
            options={options}
            setOptions={setOptions}
            date={date}
            setDate={setDate}
          />
        </div>
        <div className="hotels w-full md:w-[72%] lg:w-[75%] ">
          {data.map((item) => (
            <Hotels item={item} loading={loading} key={item._id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelLists;
