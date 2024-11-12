"use client"
import React from 'react'
import CountUp from 'react-countup'

const stats = [
    {
        num: 200,
        text: "Team Members",
        text2: "Sed ut perspiciatis unde omnis iste voluptatem accusantium"
    },
    {
        num: 50,
        text: "Projects completed",
        text2: "Sed ut perspiciatis unde omnis iste voluptatem accusantium"
    },
    {
        num: 150,
        text: "Trees Planted",
        text2: "Sed ut perspiciatis unde omnis iste voluptatem accusantium"
    },
]

const Stats = () => {
  return (
    <section className="w-full min-h-screen overflow-hidden bg-[url('/ng.jpg')] bg-cover bg-center bg-no-repeat  bg-fixed">
        <div className="mx-auto min-h-screen flex flex-col justify-center items-center gap-16 sm:gap-20 bg-black/50">
            <div className="flex flex-col justify-center items-center text-white py-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">Natural environment, <br /> Sustainable future</h1>
                <p className="text-center text-white py-5 sm:py-7 text-lg sm:text-xl">Promoting sustainability and protecting the environment.</p>
            </div>
            <div className="flex flex-wrap  justify-center items-center gap-16 sm:gap-20 max-w-6xl mx-auto">
                {stats.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4 items-center justify-center text-center xl:justify-start">
                        <CountUp end={item.num} duration={5} delay={2} suffix="+" className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold text-[#2EA60D]" />
                        <p className="text-2xl sm:text-3xl font-semibold text-white">{item.text}</p>
                        <p className="text-sm sm:text-base leading-snug text-white">{item.text2}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Stats
