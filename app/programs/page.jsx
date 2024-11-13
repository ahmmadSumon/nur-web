import OurPartners from '@/components/OurPartners'
import React from 'react'

const page = () => {
  return (
    <div className='mt-[123px] '>
      

    
        <div className='h-[360px] bg-[#090E73]' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 52% 74%, 51% 67%, 50% 74%, 0% 75%)' }}>
        <div className='max-w-6xl mx-auto '>
            <h3 className='text-white text-6xl font-bold pt-24'>Programs</h3>
        </div>
        </div>
        <div className='max-w-7xl mx-auto flex flex-col justify-center items-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
          <div className="p-4 text-xl flex justify-center items-center h-[120px] w-[200px] bg-[#EFF8EC] shadow rounded-lg">
            <p>Water Disposal</p>
          </div>
          <div className="p-4 text-xl flex justify-center items-center h-[120px] w-[200px] bg-[#EFF8EC] shadow rounded-lg">
            <p>Water Disposal</p>
          </div>
        </div>
        <div>
            <OurPartners/>
        </div>
        </div>
    </div>
  )
}

export default page
