import React from 'react'
import { useState } from 'react'
import Logo from '../assets/logo1 1.svg'
import SearchModal from '../components/ui/SearchModal'
import Hero from '../components/ui/Hero'

import Horobanner from '../assets/PlaceholderImages/HeroBanner.png'

function Home() {
  return (

    <section className=''>
       <Hero
        backgroundImage= {Horobanner}
        title="Welcome to Our Website"
        subtitle="Your journey begins here."
        textColor="#fff" 
        height="500px" 
      />

   </section>
  )
}

export default Home