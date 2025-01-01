import { useState } from 'react';
import './App.css';
import './index.css';
import LandingPage from './Components/LandingPage'; // Import the LandingPage component
import TopNavbar from './Components/TopNavbar';
 function App() {
  return (
<>
  <TopNavbar />
  <div className="bg-[#fefae0] h-screen flex items-center justify-center">
    <LandingPage /> {/* Render the LandingPage component */}
  </div>
</>

  );
}

export default App