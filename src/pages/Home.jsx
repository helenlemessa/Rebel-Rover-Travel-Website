import React from 'react'
import Logo from '../assets/logo1 1.svg'
import SearchModal from '../components/ui/SearchModal'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-400'>
      <div>
        <SearchModal />
        <img src={Logo} alt="logo" className='h-32' />
      </div>
      <div>
        <SearchModal />
        <img src={Logo} alt="logo" className='h-32' />
      </div>
      <div>
        <SearchModal />
        <img src={Logo} alt="logo" className='h-32' />
      </div>
      <div>
        <SearchModal />
        <img src={Logo} alt="logo" className='h-32' />
      </div>
      <div>
        <SearchModal />
        <img src={Logo} alt="logo" className='h-32' />
      </div>
      <div>
        <SearchModal />
        <img src={Logo} alt="logo" className='h-32' />
      </div>
      <div>
        <SearchModal />
        <img src={Logo} alt="logo" className='h-32' />
      </div>
      <h1 className='text-3xl font-bold text-center'>Home Page</h1>
   </div>
  )
}

export default Home