import React from 'react';

const OurProgram = () => {
  return (
    <div className="w-full bg-white min-h-[50vh] flex items-cente py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-60">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl py-10 font-bold">
            Our <span className="text-[#090E73]">Program</span>
          </h1>
          <p className="text-lg sm:text-xl py-5 max-w-xl mx-auto md:mx-0">BES Does a number of programs including:</p>
          <button className="bg-transparent hover:bg-[#090E73] px-8 md:px-10 py-3 md:py-4 my-8 rounded-full text-black hover:text-white border-[2px] border-[#090E73] font-semibold transition duration-300 ease-in-out">
            Explore All Programs
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <div className="p-4 flex justify-center items-center text-center text-xl h-[120px] w-[200px] bg-[#EFF8EC] shadow rounded-lg">
            <p>Protection of deforestation</p>
          </div>
          <div className="p-4 text-xl flex justify-center items-center h-[120px] w-[200px] bg-[#EFF8EC] shadow rounded-lg">
            <p>Land Degradation</p>
          </div>
          <div className="p-4 text-xl flex justify-center items-center h-[120px] w-[200px] bg-[#EFF8EC] shadow rounded-lg">
            <p>Water scarcity</p>
          </div>
          <div className="p-4 text-xl flex justify-center items-center h-[120px] w-[200px] bg-[#EFF8EC] shadow rounded-lg">
            <p>Water Disposal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProgram;
