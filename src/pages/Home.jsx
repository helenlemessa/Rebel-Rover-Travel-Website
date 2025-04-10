import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import Destinations from '../components/ui/Destinations';
import Services from '../components/ui/Services';
import Testimonial from '../components/ui/Testimonial';
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