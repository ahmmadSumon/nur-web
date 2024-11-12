"use client"
import React, { useState } from 'react';
import "../dropdown/dropDown.css"
import { IoIosArrowDropdown } from "react-icons/io"; 
import Link from "next/link";



const DropDown = ({ placeholder, data }) => {
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const [dropIndex, setDropIndex] = useState(0);
  const [dropItem, setDropItem] = useState(placeholder);
  const [listData, setListData] = useState(data);
  const [listData2, setListData2] = useState(data);

  const openDrop = () => {
    setIsOpenDrop(true);
  };

  const closeDrop = (index, name) => {
    setIsOpenDrop(false);
    setDropIndex(index);
    setDropItem(name);
  };

  const filterData = (e) => {
    const keyWord = e.target.value.toLowerCase();
    const list = listData2.filter((item) => item.name.toLowerCase().includes(keyWord));
    const uniqueList = list.filter((item, index) => list.findIndex((i) => i.name === item.name) === index);
    setListData(uniqueList);
  };

  return (
   
      <div 
        className="selectDrop" 
        onMouseEnter={openDrop} 
        onMouseLeave={() => setIsOpenDrop(false)}
      >
        <span className='flex justify-between items-center cursor-pointer text-[18px] hover:text-green-500 gap-2'>
          {dropItem && dropItem.length > 14 ? `${dropItem.substr(0, 14)}...` : dropItem} <IoIosArrowDropdown />
        </span>
        {isOpenDrop && 
          <div className='selectDropSec text-[18px] '>
           
            <ul className='dropResults text-[18px]'>
              <li key={0} onClick={() => closeDrop(0, placeholder)} className={`${dropIndex === 0 ? 'active' : ''}`}>
                {placeholder}
              </li>
              {listData.map((item, index) => (
                <Link href={item.link} key={item.link}>
                  <li onClick={() => closeDrop(index + 1, item.name)} className={`${dropIndex === index + 1 ? 'active' : ''}`}>
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        }
      </div>  
 
  );
};

export default DropDown;