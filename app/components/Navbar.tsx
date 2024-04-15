'use client'
import React, { useState } from 'react';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai"; 

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchToggle = () => {
    setSearchVisible(!searchVisible);
    setSearchValue('');
  };

  const handleSearchChange = (e:any) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue('');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold text-white" style={{marginLeft: "1rem"}} >VEED.IO</div>
        <div className="flex items-center">
          <button className="mr-4 flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md focus:outline-none">
            <span className="flex items-center">
              Upgrade <AiOutlineThunderbolt className="ml-1" />
            </span>
          </button>
          <button className="mr-4 flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md focus:outline-none">
            <span className="flex items-center">
              Invite <MdOutlinePersonAddAlt className="ml-1" />
            </span>
          </button>
          {searchVisible ? (
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                className="px-4 py-3 pr-10 bg-gray-600 text-white rounded-full shadow-md focus:outline-none"
                placeholder="Search..."
              />
              {searchValue && (
                <button
                  className="absolute inset-y-0 right-0 flex items-center justify-center px-3 bg-gray-600 text-white rounded-full focus:outline-none"
                  onClick={clearSearch}
                >
                  <AiOutlineCloseCircle />
                </button>
              )}
            </div>
          ) : (
            <button
              className="mr-4 flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-md focus:outline-none"
              onClick={handleSearchToggle}
            >
              <AiOutlineSearch />
            </button>
          )}
          <HiOutlineQuestionMarkCircle className="text-white ml-4" />
          <FaRegBell className="text-white ml-4" />
          <CgProfile className="text-white ml-4" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
