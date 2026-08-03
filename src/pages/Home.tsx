import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import Features from '../components/sections/Features';

const Home: React.FC = () => {
  useEffect(() => {
    if (window.location.hash === '#servicios') {
      const element = document.getElementById('servicios');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
      history.replaceState(null, '', ' ');
    }
  }, []);

  return (
    <>
      <main>
        <Hero />
        <ServicesGrid />
        <Features />
      </main>
    </>
  );
};

export default Home;
