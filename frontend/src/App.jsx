// 

// App.js
import React from 'react';
import Sidebar from './components/SideBar';

import MainContent from './components/MainContent';
import RightSide from './components/RightSide/RightSide';


function App() {
  return (
    <div className="flex bg-purple-600 h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 w-[500px]">
        <MainContent />      
      </div>
      <div className='w-[300px]'>
      <RightSide/>
      </div>
    </div>
  );
}

export default App;
