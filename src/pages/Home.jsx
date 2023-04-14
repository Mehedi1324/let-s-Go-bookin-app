import React from 'react';
import HomeBanner from '../components/HomeBanner';
import TopDestinatins from '../components/TopDestinatins';
import PropertyTypes from '../components/PropertyTypes';
import PopularHotels from '../components/PopularHotels';
import Subscription from '../components/Subscription';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <TopDestinatins />
      <PropertyTypes />
      <PopularHotels />
      <Subscription />
    </div>
  );
};

export default Home;
