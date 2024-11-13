import OurPartners from '@/components/OurPartners'
import React from 'react'

const page = () => {
  return (
    <div className='mt-[123px] bg-[#EFF8EC] '>
      

    
        <div className='h-[360px] bg-[#090E73]' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 52% 74%, 51% 67%, 50% 74%, 0% 75%)' }}>
        <div className='max-w-6xl mx-auto '>
            <h3 className='text-white text-6xl font-bold pt-24'>About Us</h3>
        </div>
        </div>
        <div className='max-w-7xl mx-auto flex flex-col justify-center items-center'>
            <div>
            <h1 className='text-center text-4xl md:text-6xl py-10 font-bold'>Our <span className='text-[#090E73]' >Introduction</span> </h1>
            <p className=' px-2 py-5 max-w-xl '>Baar Environmental Solidarity (BES) is non-political, and non-profit local NGO established in Somalia by skilled professional with multi-various technical expertise.
        </p>
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
    <p className="py-5 max-w-lg  text-sm md:text-base">
      The purpose of Baar Environmental Solidarity is to address environmental issues, promote sustainability, and protect the natural world.
    </p>
    <button className="bg-[#090E73] hover:bg-green-500 px-8 md:px-10 py-3 md:py-4 my-8 rounded-full text-white font-semibold transition duration-300 ease-in-out">
      Learn More
    </button>
  </div>
</div>
        
        </div>
        <div className="min-h-screen bg-gray-50">
    {/* Header Section */}
    <div className="text-white py-12 px-8 text-center bg-[url('/jj.jpg')] bg-cover">
        <h1 className="text-4xl md:text-6xl font-bold">Our Background</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">Learn more about our mission, vision, and objectives to protect the environment and advocate for a sustainable future.</p>
    </div>

    {/* Content Wrapper */}
    <div className="max-w-5xl mx-auto p-8 grid gap-8">
        
        {/* Vision Statement */}
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4 flex items-center">
                <span className="mr-2">🌎</span> BES Vision Statement
            </h2>
            <p className="text-gray-700 leading-relaxed">
                Baar Environmental Solidarity (BES) is a non-political, non-profit local NGO established in Somalia with technical expertise committed to serving the needs of vulnerable Somali people. Our mandate focuses on environmental protection including deforestation prevention, reducing aridity, addressing overgrazing, water scarcity, waste management, and climate change.
            </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4 flex items-center">
                <span className="mr-2">🌱</span> BES Mission Statement
            </h2>
            <p className="text-gray-700 leading-relaxed">
                Baar Environmental Solidarity envisions a world where humans live in harmony with nature, fostering sustainable practices that preserve biodiversity for future generations. We aim for a world where environmental stewardship is a collective responsibility, creating a sustainable future for all.
            </p>
        </div>

        {/* Specific Objectives */}
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4 flex items-center">
                <span className="mr-2">🌍</span> Specific Objectives
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                BES is dedicated to conserving natural resources, preserving biodiversity, and promoting sustainable practices. We are committed to advocating for policies that address climate change, support eco-friendly initiatives, and raise public awareness about the urgent need for environmental action.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="text-gray-700 leading-relaxed">
                    - Conserve and restore natural resources and ecosystems.<br/>
                    - Protect endangered species and promote sustainable land and water management.<br/>
                    - Address climate change impacts, land degradation, and desertification.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    - Reduce pollution and improve waste management.<br/>
                    - Advocate for stricter environmental regulations.<br/>
                    - Influence decision-makers to prioritize sustainability effectively.
                </p>
            </div>
        </div>
    </div>
</div>

        <div>
          <OurPartners/>
        </div>
    </div>
  )
}

export default page
