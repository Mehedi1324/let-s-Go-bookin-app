import React from 'react';
import HomeBanner from '../components/HomeBanner';
import PropertyTypes from '../components/PropertyTypes';
import PopularHotels from '../components/PopularHotels';
import Subscription from '../components/Subscription';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Imaginations from '../components/Imaginations';
import Destinations from '../components/Destinations';

const Home = () => {
  return (
    <div className="">
      <Header />
      <HomeBanner />
      <Imaginations />
      <Destinations />
      <PropertyTypes />
      <PopularHotels />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;
