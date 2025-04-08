import React from 'react';
import ContactForm from '../components/ui/ContactForm';
import Hero from '../components/ui/Hero'
import Horobanner from '../assets/PlaceholderImages/ContactBanner.png'

export default function Contact() {
  return (
    <>
     <div className="">
        <Hero
            backgroundImage= {Horobanner}
            title="Welcome to Our Website"
            subtitle="Your journey begins here."
            textColor="#fff" 
            height="500px" 
          />
         <ContactForm />
      </div>
    </>
  
  )
};