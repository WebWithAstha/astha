import React from 'react'
import AnimatedLink from '../common/link'

const Footer = () => {
  return (
    <div className=' lg:px-40 md:px-16 px-6 lg:py-10 md:py-16 py-10 flex flex-col gap-5 lg:pt-40'>
        <div className="flex justify-end lg:gap-10 md:gap-10 gap-6">
        <AnimatedLink>Work</AnimatedLink>
        <AnimatedLink>Contact</AnimatedLink>
        <AnimatedLink>Resume</AnimatedLink>
        </div>
        <hr className='opacity-20' />
        <div className="flex md:flex-row flex-col md:items-center w-full md:py-6 justify-between">
            <div className="flex justify-end lg:gap-10 md:gap-4 gap-4">
        <img className='h-10 object-contain opacity-60 hover:opacity-100 duration-200 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/3536/3536806.png" alt="" />
        <img className='h-10 object-contain opacity-60 hover:opacity-100 duration-200 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png " alt="" />
        <img className='h-10 object-contain opacity-60 hover:opacity-100 duration-200 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
        </div>
            <h1 className='font-logo lg:text-5xl md:text-5xl text-3xl text-[var(--primary)]'>Astha.</h1>
            
        </div>
    </div>
  )
}

export default Footer