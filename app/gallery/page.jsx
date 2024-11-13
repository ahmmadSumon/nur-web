import Gallery from '@/components/Gallery'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#EFF8EC] mt-[123px]'>
         <div className='h-[360px] bg-[#090E73]' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 52% 74%, 51% 67%, 50% 74%, 0% 75%)' }}>
        <div className='max-w-6xl mx-auto '>
            <h3 className='text-white text-6xl font-bold pt-24'>Galleries</h3>
        </div>
        </div>
         <div>
            <Gallery/>
         </div>
      
    </div>
  )
}

export default page
