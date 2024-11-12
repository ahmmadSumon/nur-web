import React from 'react';
import Image from 'next/image';

const OurPartners = () => {
  const partners = [
    { name: 'Partner One', logo: '/partner.jpg' },
    { name: 'Partner Two', logo: '/partner1.jpg' },
    { name: 'Partner Three', logo: '/partner.jpg' },
    { name: 'Partner Four', logo: '/partner1.jpg' },
    { name: 'Partner Five', logo: '/partner.jpg' },
    { name: 'Partner Six', logo: '/partner1.jpg' },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-6xl py-20 font-bold">
          Our <span className="text-[#090E73]">Partners</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="relative flex justify-center items-center group">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={100}
                height={100}
                className="object-contain h-16 sm:h-20 lg:h-24 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-center text-xl font-semibold transition-opacity duration-300">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
