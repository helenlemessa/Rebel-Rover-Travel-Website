import React from 'react'
import Logo from '../assets/logo1 1.svg'

function Package() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-400'>
       <div>
          <img src={Logo} alt="logo" className='h-32' />
       </div>
        <h1 className='text-3xl font-bold text-center'>Packages Page</h1>
      </div>
  )
}

export default Package