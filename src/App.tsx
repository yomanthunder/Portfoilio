import { useState } from 'react';
import './App.css';
import './index.css';
import Sidebar from './Components/sideBar';
import LandingPage from './Components/LandingPage'; // Import the LandingPage component

 function App() {
  return (
    <div className="bg-[#fefae0] min-h-screen flex items-center justify-center">
      <Sidebar/>
      <LandingPage /> {/* Render the LandingPage component */}
    </div>
  );
}

export default App