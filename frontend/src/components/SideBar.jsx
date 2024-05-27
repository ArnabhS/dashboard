
import React from 'react';
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
import Filters from './Filter';

const Sidebar = () => {
  return (
    <div className="bg-purple-400 text-black w-[200px] pt-5 flex flex-col">
     <h2 className='text-2xl font-bold text-gray-900 ml-4'>Vuexy</h2>
      <ul className="py-4">
      
        <li className="px-4 py-4 cursor-pointer hover:bg-purple-300 hover:rounded-md flex flex-row gap-1"><UilClipboardAlt/>Orders</li>
        <li className="px-4 py-4 cursor-pointer hover:bg-purple-300 flex flex-row gap-1 hover:rounded-md"> <UilUsersAlt/> Customers</li>
        <li className="px-4 py-4 cursor-pointer hover:bg-purple-300 flex flex-row gap-1 hover:rounded-md">  <UilPackage/> Inventory</li>
        <li className="px-4 py-4 cursor-pointer hover:bg-purple-300 flex flex-row gap-1 hover:rounded-md"> <UilChart/> Analytics</li>
      </ul>
      <div className='flex justify-center flex-col ml-4 '>
      <h4 className='text-xl font-semibold'>Filters</h4>
      <Filters />
      </div>
    </div>
  );
};

export default Sidebar;
