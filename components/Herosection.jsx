"use client"
import React from 'react'

import { Typewriter } from 'react-simple-typewriter'

const Herosection = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count)
  }
    
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className='w-full bg-[#090E73] pt-10'>
      <div className="min-h-screen max-w-7xl mx-auto px-5">
  <h1 className="mx-auto text-3xl md:text-[5rem] font-extrabold text-white uppercase leading-tight md:leading-[1.3] pb-5 ">
    Protecting our <br /> planet’s <br /> natural <br /> resources{' '}
    <span className="text-red-500 font-extrabold text-2xl md:text-[5rem]">
      <Typewriter
        words={['Faster', 'Better', 'Bigger']}
        loop={Infinity}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        onLoopDone={handleDone}
        onType={handleType}
      />
    </span>
  </h1>

  <h5 className="text-white text-xl md:text-2xl w-full py-3 md:py-5 leading-none">
    The mandate of BES mainly focuses on environmental protection related issues.
  </h5>
  <p className="text-white text-lg py-5 max-w-2xl">
  Horn of Africa is known for its pastoralist communities and relatively harsh climate. Pastoralist communities have suffered from a lack of social stability due to a lack of suitable local planning and governance. The prolonged conflicts because of the collapse of the Somali central government in 1991 further enflamed the situation. Climate change effects in the form of recycling droughts and floods have been occurring, weakening the traditional capacity of pastoral systems to cope with the environmental stress intrinsic to these regions. Environmental degradation and loss of livelihood, often led to famine, further worsened the situation. Many local refugees depended on wildlife for nutrition, cutting trees for building new shelters, and selling them as wood or charcoal. All these natural and human-made calamities have degraded the environment and natural resources (https://www.unep.org/news-andstories/story/how-somalias-charcoal-trade-fuelling-acacias-demise).
  </p>
  <p className="text-white text-lg py-5 max-w-2xl">
  Lack of financial means and local capacity to collect the waste and build sewerages have turned urban centers into difficult places to live. Many locals and policymakers are worrying about the aforementioned problems and particularly the operational areas of our organization, the BES. In general, saving the remaining environment, if any, and restoring its natural beauty is an issue that BES is seeking. BES feels this question is complex and requires the solidarity of collective actors with different perspectives and opinions on dealing with the environmental issue in Somalia in general, particularly the operational areas.
  </p>

  <button className="bg-green-500 hover:bg-[#090E73] ml-3 md:ml-0 px-8 md:px-10 py-3 md:py-4 my-5 rounded text-white font-semibold transition duration-300 ease-in-out">
    Learn More
  </button>
</div>


    </div>
  )
}

export default Herosection;
