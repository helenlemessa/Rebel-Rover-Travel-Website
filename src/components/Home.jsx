import React from 'react';
import HeroSection from '../Rebel-Rover-Travel-Website/src/components/Home/HeroSection';
import Destinations from '../Rebel-Rover-Travel-Website/src/components/Home/Destinations';
import Services from '../Rebel-Rover-Travel-Website/src/components/Home/Services';
import Testimonial from '../Rebel-Rover-Travel-Website/src/components/Home/Testimonial';
export default function Home() {
  return (
   <>
   <HeroSection />
   <Destinations/>
   <Services />
   <Testimonial/>
   </>
  )
}