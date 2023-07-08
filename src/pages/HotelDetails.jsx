import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subscription from '../components/Subscription';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useBookingDetails } from '../context/SearchContext';
import Reserve from '../components/Reserve';
import { useAuth } from '../context/firebaseContext';

const HotelDetails = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  const { date, options, setOptions } = useBookingDetails();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data, loading, error, reFetch } = useFetch(
    `https://letsgo-booking-app.onrender.com/api/hotels/find/${id}`
  );

  console.log(data);
  // Full size photo slider_____________________

  const handleImgSlider = (i) => {
    setImgIndex(i);
    setOpenSlide(true);
  };

  // handle Booking on conditions_____________

  const handleBookingBtn = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate('/login');
    }
  };

  // Handle photo slider arrows_________________

  const handleSlideArrow = (position) => {
    if (position === 'left') {
      if (imgIndex === 0) {
        setImgIndex(data.photos.length - 1);
      } else {
        setImgIndex(imgIndex - 1);
      }
    } else {
      if (imgIndex === data.photos.length - 1) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    }
  };

  // Convert dates to days____________________

  const MiliSecsPerDay = 1000 * 60 * 60 * 24;

  const dayDiffercence = (startDate, endDate) => {
    const timeDifference =
      Math.abs(endDate?.getTime() - startDate?.getTime()) + 1;
    const diffDays = Math.ceil(timeDifference / MiliSecsPerDay);

    return diffDays;
  };
  const days = dayDiffercence(date[0]?.endDate, date[0]?.startDate);
  console.log('days', days);
  // UI Rturns________________________________

  return (
    <div>
      <Header />
      {loading ? (
        'Loading....'
      ) : (
        <div className="space-y-5 mx-auto w-[95%] md:w-[90%] lg:w-[80%] mt-10">
          {/*________Img Slider________ */}
          {openSlide && (
            <div className="w-full h-full">
              <div
                onClick={() => setOpenSlide(false)}
                className="fixed top-0 bottom-0 left-0 right-0 w-full h-full cursor-pointer backdrop-brightness-50 backdrop-blur-sm"
              ></div>
              <div className="fixed h-[60%] md:[70%] lg:h-[80%s] w-[90%] md:w-[70%] lg:w-[50%] z-10 text-white transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2">
                <div className="relative">
                  <div className="flex m-1 space-x-5 ">
                    <div
                      onClick={() => handleSlideArrow('left')}
                      className="absolute left-0 px-2 py-1 text-xl font-bold bg-black top-52 hover:bg-green-600"
                    >
                      {'<'}
                    </div>
                    <div
                      onClick={() => handleSlideArrow('right')}
                      className="absolute right-0 px-2 py-1 text-xl font-bold bg-black top-52 hover:bg-green-600"
                    >
                      {'>'}
                    </div>
                  </div>
                </div>
                <img
                  className="w-full h-full shadow-custom-gray"
                  src={data.photos[imgIndex]}
                  alt=""
                />
              </div>
            </div>
          )}

          {/* ______________________--- */}

          <div className="flex justify-between 1st_block">
            <div className="space-y-3 ">
              <h1 className="text-[22px] lg:text-[25px] font-bold">
                {data.name}
              </h1>
              <span className="text-[14px] flex items-center ">
                <FaMapMarkerAlt className="mr-1" /> {data.address}
              </span>
              <h2 className="font-semibold text-blue-600">
                Excellent location -{data.distance}m from center
              </h2>
              <h2 className="font-semibold text-green-600">
                Book a stay over $ {data.cheapestPrice} at this property and get
                a free airport taxi
              </h2>
            </div>
            <div>
              <button
                onClick={handleBookingBtn}
                className="p-1 px-3 text-white bg-blue-500 rounded-sm shadow-custom-dark hover:bg-gray-700"
              >
                Reserve or Book Now!
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {data.photos?.map((photo, i) => (
              <img
                className="cursor-pointer"
                onClick={() => handleImgSlider(i)}
                key={i}
                src={photo}
                alt="img"
              />
            ))}
          </div>
          <div className="py-8 space-y-5 md:space-x-5 md:flex 3rd_block">
            <div className="md:w-[70%] space-y-3">
              <h1 className="text-[22px] font-bold">{data.title}</h1>
              <p>{data.description}</p>
            </div>
            <div className="md:w-[30%] bg-gray-700 text-white p-4 rounded-md space-y-4">
              <h1 className="text-[22px] font-bold">
                Perfect for a {days}-night stay!
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt quasi rerum voluptatibus sed
              </p>
              <div className="flex space-x-2">
                <h1 className="font-bold">
                  ${days * data.cheapestPrice * options.room}
                </h1>
                <p>({days} nights)</p>
              </div>
              <div>
                <button
                  onClick={handleBookingBtn}
                  className="w-full text-white bg-blue-500 rounded-sm shadow-custom-dark hover:bg-gray-800 h-9"
                >
                  Reserve or Book Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Subscription />
      <Footer />
      {openModal && (
        <Reserve
          options={options}
          setOptions={setOptions}
          data={data}
          user={user}
          days={days}
          setOpenModal={setOpenModal}
          openModal={openModal}
          hotelId={id}
        />
      )}
    </div>
  );
};

export default HotelDetails;
