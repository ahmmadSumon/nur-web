import React from 'react'

const Introduction = () => {
  return (
    <div className='w-full bg-[#EFF8EC] min-h-screen'>
       <div className='max-w-6xl mx-auto px-5'>
        <div className='flex flex-col justify-center items-center' >
           <h1 className='text-center text-6xl py-20 font-bold'>Our <span className='text-[#090E73]' >Introduction</span> </h1>
           <p className=' py-5 max-w-xl '>Baar Environmental Solidarity (BES) is non-political,

and non-profit local NGO established in Somalia with multi-various technical

expertise all committed to stand-up and serve for the needs of the effected

vulnerable Somali peoples and advocate for improvement and wellbeing of our environment, our mandate mainly focuses on environmental protection related issues, it deals with the number of issues including, protection of deforestation, land degradation, reducing aridity and overgrazing, water scarcity, waste disposal, climate change and ecosystem services.
        </p>
<p className=' py-5 max-w-xl '>

Lack of financial means and local capacity to collect the waste and build sewerages have turned urban centers into difficult places to live. Many locals and policymakers are worrying about the aforementioned problems and particularly the operational areas of our organization, the BES. In general, saving the remaining environment, if any, and restoring its natural beauty is an issue that BES is seeking. BES feels this question is complex and requires the solidarity of collective actors with different perspectives and opinions on dealing with the environmental issue in Somalia in general, particularly the operational areas.</p>
        </div>
        <div className="min-h-[60vh] flex flex-col md:flex-row justify-between items-center gap-5 py-10">
  <div className="bg-white p-8 md:p-16 w-full md:w-auto ">
    <h2 className="text-3xl md:text-5xl">Know About Our Mission</h2>
    <p className="py-5 max-w-xl text-sm md:text-base">
      BES is committed to protecting our planet’s natural resources, preserving biodiversity, and ensuring a sustainable future for all by advocating for environmental policies.
    </p>
    <button className="bg-[#090E73] hover:bg-green-500 px-8 md:px-10 py-3 md:py-4 my-8 rounded-full text-white font-semibold transition duration-300 ease-in-out">
      Learn More
    </button>
  </div>

  <div className="bg-white p-8 md:p-16 w-full md:w-auto mt-0 md:mt-96">
    <h2 className="text-3xl md:text-5xl">Know More About Our Purpose</h2>
    <p className="py-5 max-w-lg text-sm md:text-base">
      The purpose of Baar Environmental Solidarity is to address environmental issues, promote sustainability, and protect the natural world.
    </p>
    <button className="bg-[#090E73] hover:bg-green-500 px-8 md:px-10 py-3 md:py-4 my-8 rounded-full text-white font-semibold transition duration-300 ease-in-out">
      Learn More
    </button>
  </div>
</div>

       </div>
    </div>
  )
}

export default Introduction
