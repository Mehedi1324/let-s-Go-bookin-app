import React from 'react';
import HomeBanner from '../components/HomeBanner';
import TopDestinatins from '../components/TopDestinatins';
import PropertyTypes from '../components/PropertyTypes';
import PopularHotels from '../components/PopularHotels';
import Subscription from '../components/Subscription';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <TopDestinatins />
      <PropertyTypes />
      <PopularHotels />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;
