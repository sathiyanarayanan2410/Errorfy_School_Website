import React from 'react'
import herovideo from '../assets/ngp_video.mp4'

const Hero = () => {
  return (
    <div className='w-full px-2 bg-gray-100'>
    <video autoPlay muted loop>
        <source src={herovideo} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    </div>
  )
}

export default Hero
