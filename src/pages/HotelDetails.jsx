import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subscription from '../components/Subscription';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { SearchContext } from '../context/SearchContext';
import { AuthContext } from '../context/AuthContext';
import Reserve from '../components/Reserve';

const HotelDetails = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  const { date, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data, loading, error, reFetch } = useFetch(
    `https://letsgo-booking-app.onrender.com/api/hotels/find/${id}`
  );

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

  // Convert dates to days____________________

  const MiliSecsPerDay = 1000 * 60 * 60 * 24;
  const dayDiffercence = (startDate, endDate) => {
    const timeDifference = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(timeDifference / MiliSecsPerDay);
    return diffDays;
  };
  const days = dayDiffercence(date[0].endDate, date[0].startDate);

  // UI Rturns________________________________

  return (
    <div className="mt-24">
      <Header />
      {loading ? (
        'Loading....'
      ) : (
        <div className="space-y-5 mx-auto w-[95%] md:w-[90%] lg:w-[80%]">
          {/*________Img Slider________ */}
          {openSlide && (
            <div className="w-full h-full">
              <div
                onClick={() => setOpenSlide(false)}
                className="fixed top-0 bottom-0 left-0 right-0 w-full h-full cursor-pointer backdrop-brightness-50 backdrop-blur-sm"
              ></div>
              <div className="fixed z-10 text-white  cursor-pointer top-[13%] bottom-[25%] md:bottom-[12%] md:left-[10%] left-[5%] right-[5%] md:right-[10%] lg:right-[18%] lg:left-[18%]">
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
                  src={data.photos[imgIndex].src}
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
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default HotelDetails;
