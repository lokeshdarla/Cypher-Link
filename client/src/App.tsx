import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import CreateCampaign from '@/pages/CreateCampaign';
// import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="relative hidden mr-10 sm:flex">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-campaign" element={<CreateCampaign/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
