import React from 'react';
import Hero from '../components/Hero';
import CoreFocus from '../components/CoreFocus';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import OurProjects from '../components/OurProjects';
import TechnologyUsed from '../components/TechnologyMarquee';

const Home = () => {
  return (
    <>
      <Hero />
      <CoreFocus />
      <Services />
      <WhyUs />
      <OurProjects />
      <Process />
      <TechnologyUsed />
      <FAQ />
    </>
  );
};

export default Home;