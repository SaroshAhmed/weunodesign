import React from 'react';

import Navbar from './shared components/Navbar';
import HeroSection from './components/HeroSection';
import Carousel from './shared components/Carousel';
import BookingSection from './components/BookingSection';
import FooterSec from './shared components/FooterSec';

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="relative bg-cover bg-no-repeat bg-center min-h-screen">
          <Carousel />
          <HeroSection />
        </div>
      </div>
      <div className="black-green">
        <BookingSection />
        <div>
          <FooterSec/>
        </div>
      </div>
    </>
  );
}

export default App;
