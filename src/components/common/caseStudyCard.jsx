import React from 'react'
import Button from './button'

const CaseStudyCard = ({ card }) => {
    return (
        <div className={`flex  md:flex-row flex-col gap-10 group border-zinc-200 border lg:p-6 md:p-4 p-4 shrink-0  gap-6 items-center`}>
            <div className="bg-zinc-200/[0]  w-80 shrink-0 min-w-40 flex items-center overflow-hidden justify-center">
                <img className='w-full object-contain group-hover:sdscale-110 transition-all duration-1000' src={card.img} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
                {/* <h1 className='text-7xl opacity-40 mb-2 font-helvetica-light'>{card.step}</h1> */}
                <h1 className='font-semibold md:text-2xl font-sans mb-2 uppercase'>{card.title}</h1>
                <p className='lg:text-sm md:text-xl opacity-70'>{card.desc}</p>
                <Button variant='outline'>View in Figma</Button>
            </div>
        </div>
    )
}

export default CaseStudyCard