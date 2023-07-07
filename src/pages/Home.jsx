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
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-20">
        <Header />
      </div>
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
