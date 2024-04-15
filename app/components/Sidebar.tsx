import React from 'react';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GrTemplate } from "react-icons/gr";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { GiVibratingBall } from "react-icons/gi";
import { TbBrandPagekit } from "react-icons/tb";
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-[90%] w-64 flex flex-col justify-between">
      <div className="p-4 text-white text-xl font-bold flex items-center">
        ALBIN JOHN <MdOutlineWorkspacePremium className='ml-2' />
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li className="p-4 transition-colors duration-300 cursor-pointer">
            <Link href="/newvideo">
            <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-md shadow-md focus:outline-none flex items-center">
              New Video <FaPlus className='ml-2' />
            </button>
            </Link>
          </li>
          <Link href="/">
  <li className="p-4 hover:bg-gray-700 transition-colors duration-300 cursor-pointer flex items-center text-gray-300">
    <IoHomeOutline className="mr-2" /> Home
  </li>
</Link>
          <li className="p-4 hover:bg-gray-700 transition-colors duration-300 cursor-pointer flex items-center text-gray-300">
            <GrTemplate className="mr-2" /> Template
          </li>
          <Link href='/allvideos'>
          <li className="p-4 hover:bg-gray-700 transition-colors duration-300 cursor-pointer flex items-center text-gray-300">
            <MdOutlineFeaturedVideo className="mr-2" /> All Videos
          </li>
          </Link>
          <li className="p-4 hover:bg-gray-700 transition-colors duration-300 cursor-pointer flex items-center text-gray-300">
            <GiVibratingBall className="mr-2" /> Podcast & Shows
          </li>
          <li className="p-4 hover:bg-gray-700 transition-colors duration-300 cursor-pointer flex items-center text-gray-300">
            <TbBrandPagekit className="mr-2" /> Brand Kit
          </li>
        </ul>
      </nav>
      <div className="p-4 text-white text-sm">© 2024 VEED.IO</div>
    </div>
  );
};

export default Sidebar;
