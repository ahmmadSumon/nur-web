import React from 'react'
import { LayoutGridDemo } from './LayoutGridDemo'

const Gallery = () => {
  return (
    <div>
      <h1 className='text-center text-6xl py-20 font-bold'>Our <span className='text-[#090E73]' >Galleries</span> </h1>
      <div>
        <LayoutGridDemo/>
      </div>
    </div>
  )
}

export default Gallery
