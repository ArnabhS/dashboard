// MainContent.js
import React from 'react';
import Hero from './Graph';
import Cards from './Cards/Cards'
import SupportTracker from './SupportTracker';
const MainContent = () => {
  return (
    <div className="flex flex-col flex-1 p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <Cards/>
      <div className=" rounded shadow-md pt-4 flex justify-start gap-8">
       <Hero/> 
       <SupportTracker/>
      </div>
    </div>
  );
};

export default MainContent;
