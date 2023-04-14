import React from 'react';

const TopDestinatins = () => {
  return (
    <div className="grid  gap-5 pb-10 grid-cols-3 w-[95%] md:w-[90%]  mx-auto pt-[110px] lg:pt-[70px]">
      <div className="hover:scale-105 transition-all shadow-custom-light relative overflow-hidden rounded-lg max-h-[300px] ">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="w-full "
        />
        <div className="absolute  top-0 bottom-0 left-0 right-0 items-center pt-[30%]  text-center text-white    opacity-80 bg-[#00000077] ">
          <h1 className=" font-bold lg:text-[40px] md:text-[30px] text-[25px]">
            Dublin
          </h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="hover:scale-105 transition-all shadow-custom-light relative overflow-hidden rounded-lg max-h-[300px] ">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className=""
        />
        <div className="absolute  top-0 bottom-0 left-0 right-0 items-center pt-[30%]  text-center text-white  opacity-80 bg-[#00000077]">
          <h1 className=" font-bold lg:text-[40px] md:text-[30px] text-[25px]">
            Reno
          </h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className=" hover:scale-105 transition-all shadow-custom-light relative overflow-hidden rounded-lg max-h-[300px] ">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className=""
        />
        <div className="absolute  top-0 bottom-0 left-0 right-0 items-center pt-[30%]  text-center  opacity-80 bg-[#00000077] text-white">
          <h1 className=" font-bold lg:text-[40px] md:text-[30px]  text-[25px]">
            Austin
          </h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default TopDestinatins;
