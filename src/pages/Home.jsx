import React from 'react'
import { useState } from 'react'
import Logo from '../assets/logo1 1.svg'
import SearchModal from '../components/ui/SearchModal'
import Hero from '../components/ui/Hero'

import Horobanner from '../assets/PlaceholderImages/HeroBanner.png'

function Home() {
  return (

    <section className=''>
      <div className="hero bg-cover bg-center text-white p-8 sm:p-12 lg:p-20 min-h-screen flex flex-col items-center justify-center"
         style={{ backgroundImage: `url(${Horobanner})` }}>
             <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold" style={{ textShadow: '4px 4.5px 2px rgba(0, 0, 0, 0.2)' }}>
               About Us
             </h1>
             <p className="pt-4 text-xl sm:text-2xl lg:text-2.5xl font-bold" style={{ textShadow: '4px 4.5px 2px rgba(0, 0, 0, 0.2)' }}>
               Home &gt; About Us
             </p>
           </div>

   </section>
  )
}

export default Home