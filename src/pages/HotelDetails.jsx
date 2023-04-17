import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subscription from '../components/Subscription';
import { FaMapMarkerAlt } from 'react-icons/fa';
const HotelDetails = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);
  const handleImgSlider = (i) => {
    setImgIndex(i);
    setOpenSlide(true);
  };
  const handleSlideArrow = (position) => {
    if (position === 'left') {
      if (imgIndex === 0) {
        setImgIndex(5);
      } else {
        setImgIndex(imgIndex - 1);
      }
    } else {
      if (imgIndex === 5) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    }
  };
  const photos = [
    {
      src: '/images/hotels.png',
    },
    {
      src: '/images/hotels.png',
    },
    {
      src: '/images/hotels.png',
    },
    {
      src: '/images/hotels.png',
    },
    {
      src: '/images/hotels.png',
    },
    {
      src: '/images/hotels.png',
    },
  ];
  return (
    <div className="mt-24">
      <Header />
      <div className="space-y-5 mx-auto w-[95%] md:w-[90%] lg:w-[80%]">
        {/*________Img Slider________ */}
        {openSlide && (
          <div className="w-full h-full">
            <div
              onClick={() => setOpenSlide(false)}
              className="fixed top-0 bottom-0 left-0 right-0 w-full h-full cursor-pointer backdrop-brightness-50 backdrop-blur-sm"
            ></div>
            <div className="fixed   z-10  text-white  cursor-pointer top-[13%] bottom-[25%] md:bottom-[12%] md:left-[10%] left-[5%] right-[5%] md:right-[10%] lg:right-[18%] lg:left-[18%]">
              <div className="flex m-1 space-x-5">
                <div
                  onClick={() => handleSlideArrow('left')}
                  className="px-2 py-1 text-xl font-bold bg-black hover:bg-green-600"
                >
                  {'<'}
                </div>
                <div
                  onClick={() => handleSlideArrow('right')}
                  className="px-2 py-1 text-xl font-bold bg-black hover:bg-green-600"
                >
                  {'>'}
                </div>
              </div>
              <img
                className="w-full h-full shadow-custom-gray"
                src={photos[imgIndex].src}
                alt=""
              />
            </div>
          </div>
        )}

        {/* ______________________--- */}

        <div className="flex justify-between 1st_block">
          <div className="space-y-3 ">
            <h1 className="text-[22px] lg:text-[25px] font-bold">
              Tower Street Apartments
            </h1>
            <span className="text-[14px] flex items-center ">
              <FaMapMarkerAlt className="mr-1" /> 5 Basztowa, Old Town, 33-32
              Krakow, Poland{' '}
            </span>
            <h2 className="font-semibold text-blue-600">
              Excellent location -500m from center
            </h2>
            <h2 className="font-semibold text-green-600">
              Book a stay over $114 at this property and get a free airport taxi
            </h2>
          </div>
          <div>
            <button className="p-1 px-3 text-white bg-blue-500 rounded-sm shadow-custom-dark hover:bg-gray-700">
              Reserve or Book Now!
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {photos.map((photo, i) => (
            <img
              className="cursor-pointer"
              onClick={() => handleImgSlider(i)}
              key={i}
              src={photo.src}
              alt="img"
            />
          ))}
        </div>
        <div className="py-8 space-y-5 md:space-x-5 md:flex 3rd_block">
          <div className="md:w-[70%] space-y-3">
            <h1 className="text-[22px] font-bold">
              Stay in the heart of Krakow
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              dolorem voluptatum nobis fuga accusantium magni repellat, beatae
              velit tenetur, impedit laudantium minima deleniti eos? Quis illo
              numquam sunt, incidunt cupiditate mollitia optio, at aliquid eaque
              consectetur ratione praesentium officiis dolore. Quam ullam
              placeat ut accusantium iusto non ex esse aliquid?
            </p>
          </div>
          <div className="md:w-[30%] bg-gray-700 text-white p-4 rounded-md space-y-4">
            <h1 className="text-[22px] font-bold">
              Perfect for a 9-night stay!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              quasi rerum voluptatibus sed
            </p>
            <div className="flex space-x-2">
              <h1 className="font-bold">$945</h1>
              <p>(9 nights)</p>
            </div>
            <div>
              <button className="w-full text-white bg-blue-500 rounded-sm shadow-custom-dark hover:bg-gray-800 h-9">
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <Subscription />
      <Footer />
    </div>
  );
};

export default HotelDetails;
