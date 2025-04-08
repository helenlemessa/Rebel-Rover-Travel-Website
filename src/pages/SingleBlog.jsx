import React from 'react'
import Logo from '../assets/logo1 1.svg'
function SingleBlog() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-400'>
       <div>
          <img src={Logo} alt="logo" className='h-32' />
       </div>
        <h1 className='text-3xl font-bold text-center'>Single Blog Page</h1>
      </div>
  )
}

export default SingleBlog