import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import HeroSection from '../component/HeroSection';
import InfoSection from '../component/InfoSection';
import { data } from '../component/InfoSection/Data';
import Services from '../component/Services';
import Footer from '../component/Footer';

const Home = () => {
  const [isopen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isopen);
  };

  return (
    <>
      <Sidebar isOpen={isopen} setIsOpen={toggle} />
      <Navbar setIsOpen={toggle} />
      <HeroSection />
      <InfoSection data={[data[0]]} />
      <InfoSection data={[data[1]]} />
      <Services />
      <InfoSection data={[data[2]]} />
      <Footer />
    </>
  );
};

export default Home;
