import React from 'react';

const Subscription = () => {
  return (
    <div className="mt-10 text-white flex flex-col justify-center items-center bg-gray-900 w-full h-[180px]">
      <div className="w-[80%] md:w-[60%] lg:w-[50%] space-y-3 text-center">
        <div className="text-[20px] font-semibold">Save time, save money!</div>
        <p className="text-[14px]">
          Sign up and we'll send the best deals to you
        </p>
        <div className="h-[35px] flex items-center border-none">
          <input
            className="w-[70%] text-black font-semibold px-5 rounded-sm h-full"
            type="email"
            placeholder="Your email"
          />
          <button className="w-[30%] h-full rounded-sm hover:bg-gray-700 bg-blue-600">
            Subscribe
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" name="" id="" />
          <p className="text-[12px] -mt-1">
            Send me a link to get the FREE letsgo.com app!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
