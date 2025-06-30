import React from 'react'
import PrimaryHeading from '../common/primaryHeading'
import Marquee from '../common/marquee'
import Button from '../common/button'
import hero from '../../assets/model.png'

const Hero = () => {
  return (
    <div className='w-full lg:min-h-screen lg:mb-20 h-screen md:gap-20 gap-20  md:pb-20 flex md:justify-between justify-end pt-16 flex-col'>
        <div className="lg:w-[65%] md:w-[88%] lg:mt-20 md:mt-40 w-[90%] mb-6 md:mb-0 lg:mb-0 flex flex-col  gap-3 lg:px-40 md:px-16 px-6">
            <PrimaryHeading
            highlightText='UI/UX'
            >
            Designing Intuitive UI/UX Journeys
            </PrimaryHeading>
            <p className='opacity-60 mb-8 md:text-2xl'> <span> *** </span>Blending User-Centric Thinking with Creativity to Deliver Impactful Solutions</p>
            <Button variant='outline' customSize='md:text-3xl' >Collaborate</Button>
        </div>
        <div className="absolute right-20 md:visible hidden lg:top-20 md:bottom-20 aspect-square z-[9] rounded-full ">
          <img className='w-[50vw]' src={hero} alt="" />
        </div>
    <div className="self-end lg:justify-self-end md:mb-16 w-full">

        <Marquee></Marquee>
        </div>
    </div>
  )
}

export default Hero