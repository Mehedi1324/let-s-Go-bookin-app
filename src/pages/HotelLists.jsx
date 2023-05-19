import React, { useState } from 'react';
import FilterSection from '../components/FilterSection';
import Hotels from '../components/Hotels';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';

const HotelLists = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location?.state?.destination);

  const [options, setOptions] = useState(location?.state?.options);
  const [date, setDate] = useState(location?.state?.date);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `https://letsgo-booking-app.onrender.com/api/hotels?city=${destination}&min=${
      min || 0
    }&max=${max || 999} 
`
  );
  const handleFilterSearch = () => {
    reFetch();
  };
  return (
    <div>
      <Header />
      <div className="w-[95%] md:w-[100%] mt-16 md:mt-[90px]  gap-1 flex flex-col md:flex-row md:mx-0 mx-auto">
        <div className="filter_section w-full md:w-[28%] lg:w-[25%]">
          <FilterSection
            min={min}
            max={max}
            setMax={setMax}
            handleClick={handleFilterSearch}
            setMin={setMin}
            destination={destination}
            options={options}
            date={date}
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
