import React from 'react'
import Logo from '../assets/logo1 1.svg'
import Travlebanner from '../assets/PlaceholderImages/TravlePackageBanner.png'


function Package() {
  return (
     <section className=''>
          <div className="hero bg-cover bg-center text-white p-8 sm:p-12 lg:p-20 min-h-screen flex flex-col items-center justify-center"
             style={{ backgroundImage: `url(${Travlebanner})` }}>
                 <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold" style={{ textShadow: '4px 4.5px 2px rgba(0, 0, 0, 0.2)' }}>
                   Travel Packages
                 </h1>
                 <p className="pt-4 text-xl sm:text-2xl lg:text-2.5xl font-bold" style={{ textShadow: '4px 4.5px 2px rgba(0, 0, 0, 0.2)' }}>
                   Home &gt; Package
                 </p>
               </div>
    
       </section>
  )
}

export default Package