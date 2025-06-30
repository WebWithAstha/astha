import React from 'react'

const Stepcard = ({card}) => {
   
  return (
    <div className='lg:p-10 border border-zinc-200 w-88 min-w-40'>
        <div className="bg-zinc-200/[0] p-8 h-60 min-w-40 flex items-center justify-center">
            <img className='h-full object-contain' src={card.img} alt="" />
        </div>
        <h1 className='text-8xl opacity-40 my-4 font-helvetica-light'>{card.step}</h1>
        <h1 className='font-semibold font-sans mb-2'>{card.title}</h1>
        <p className='lg:text-sm'>{card.desc}</p>
    </div>
  )
}

export default Stepcard