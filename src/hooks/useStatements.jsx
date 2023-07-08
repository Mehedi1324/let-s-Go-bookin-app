import React, { useState } from 'react';

const useStatements = () => {
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const hotelsUrl = 'https://letsgo-booking-app.onrender.com/api/hotels/all';

  const [destination, setDestination] = useState('');
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const url = `https://letsgo-booking-app.onrender.com/api/hotels?city=${destination}&min=${
    min || 0
  }&max=${max || 999} 
`;

  return {
    options,
    setOptions,
    date,
    setDate,
    destination,
    setDestination,
    url,
    min,
    setMin,
    max,
    hotelsUrl,
    setMax,
  };
};

export default useStatements;
