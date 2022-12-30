import React from "react";

function HeroSection() {
  return (
    <div className='flex items-center justify-center gap-4 flex-col max-w-6xl m-auto h-64'>
      <h1 className='font-thin text-5xl text-blue-800'>
        React custom Tabs example
      </h1>
      <p className='font-semibold'>
        This is react custom dynamic tabs example.
      </p>
      <a
        href='/'
        className='bg-blue-800 hover:bg-blue-600 font-semibold text-white px-5 py-2 rounded'
      >
        Github Repository
      </a>
    </div>
  );
}

export default HeroSection;
