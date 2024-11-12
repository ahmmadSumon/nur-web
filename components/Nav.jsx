"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineClose , AiOutlineDown } from 'react-icons/ai'; // Import the close icon
import Image from 'next/image';
import DropDown from './dropdown/DropDown';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropDown = (index) => {
    setOpenDropDown(openDropDown === index ? null : index);
  };

  const dropdownData = [
    {
      placeholder: "About Us",
      data: [
        { name: "OUR TEAM", link: "/about" },
        { name: "BOARDS", link: "/boards" },
        { name: "STUFF", link: "/stuff" },
        
      ]
    },
    {
      placeholder: "Media",
      data: [
        { name: "GALLERY", link: "/taxdebt" },
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4  sm:px-6">
        <div className="flex justify-between h-[120px] items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <div className="text-2xl font-bold text-gray-800 cursor-pointer">
               <h3>Nur Environmental</h3>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-5 flex-grow justify-center">
          <Link href="/home">
              <div className="text-gray-800 hover:text-green-500 text-[18px]  px-3 py-2 rounded-md cursor-pointer transition duration-300">Home</div>
            </Link>
            <DropDown 
               placeholder="About Us" 
              data={[
                { name: "OUR TEAM", link: "/about" },
                { name: "BOARDS", link: "/boards" },
                { name: "STUFF", link: "/stuff" },
                
              ]}
            />
            <Link href="/faqsection">
              <div className="text-gray-800 text-[18px] hover:text-green-500  px-3 py-2 rounded-md cursor-pointer transition duration-300">Programs</div>
            </Link>
            <DropDown 
                  placeholder="Media" 
              data={[
                { name: "GALLERY", link: "/taxdebt" },
                
              ]}
            />
          
            
            <Link href="/reports">
              <div className="text-gray-800 text-[18px] hover:text-green-500  px-3 py-2 rounded-md cursor-pointer transition duration-300">Reports</div>
            </Link>
            
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button className='bg-[#090E73] hover:bg-green-500 px-10 py-4 rounded text-white font-semibold transition duration-300 ease-in-out'>
                DONATE US
            </button>
            {/* <p className="text-[#ff4438] flex justify-center items-center gap-2 text-xl font-bold cursor-pointer">
              <BsFillTelephoneFill /> 877 578 3520
            </p> */}
          </div>
          <div className="flex items-center md:hidden space-x-4">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              {isOpen ? (
                <AiOutlineClose className=" bg-[#090E73] hover:bg-green-500 text-white m-2 rounded-xl  h-10 w-10" /> // Render the close icon when the menu is open
              ) : (
                <svg className="bg-[#090E73] text-white m-2 rounded-xl  h-10 w-10 hover:bg-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
  <div className="md:hidden bg-green-500 text-white text-[18px] transition-all duration-500 ease-in-out">
    <div className="px-2 pt-2 py-2 pb-3 space-y-1 sm:px-3">
      <div className="flex flex-col items-start space-y-1">
        <Link href="/businesstaxes">
          <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">Home</div>
        </Link>
        {dropdownData.map((dropdown, index) => (
          <div key={index} className="">
            <div
              className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300 flex items-center justify-between"
              onClick={() => toggleDropDown(index)}
            >
              <span>{dropdown.placeholder}</span>
              <AiOutlineDown />
            </div>
            {openDropDown === index && (
              <div className="transition-all duration-500 ease-in-out overflow-hidden max-h-96 pl-4 flex flex-col items-start space-y-1 opacity-100">
                {dropdown.data.map((item, subIndex) => (
                  <Link key={subIndex} href={item.link}>
                    <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Link href="/faqsection">
        <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">Programs</div>
      </Link>
      <Link href="/aboutsection">
        <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">Reports</div>
      </Link>

      <button className='bg-[#090E73] hover:bg-green-500 px-10 py-4 rounded text-white font-semibold transition duration-300'>
        DONATE US
      </button>
    </div>
  </div>
)}

    </nav>
  );
}