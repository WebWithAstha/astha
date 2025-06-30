import React from 'react'
import Button from './button'

const ProjectCard = ({ card, index }) => {
  return (
    <div className={`${index % 2 != 0 ? 'lg:flex-row-reverse' : ''} flex lg:flex-row flex-col-reverse  group  lg:gap-20 md:gap-10 gap-6 items-center`}>
      <div className='flex flex-col gap-2'>
        <h1 className='text-7xl opacity-40 mb-2 font-helvetica-light'>{card.step}</h1>
        <h1 className='font-semibold font-sans md:text-2xl lg:text-md mb-2 uppercase'>{card.niche}</h1>
        <p className='lg:text-sm md:text-xl opacity-70'>{card.desc}</p>
        <Button variant='outline'>View in Figma</Button>
      </div>
      <div className="bg-zinc-200/[0]  lg:w-[55%] shrink-0 min-w-40 flex items-center overflow-hidden justify-center">
        <img className='w-full object-contain group-hover:scale-110 transition-all duration-1000' src={card.img} alt="" />
      </div>
    </div>
  )
}

export default ProjectCard