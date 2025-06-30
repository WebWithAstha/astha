import React from 'react'
import Button from './button'
import AnimatedLink from './link'

const Nav = () => {
  return (
    <div className='lg:px-40 md:px-16 px-6 lg:py-4 md:py-6 py-2 fixed z-[999] top-0 left-1/2 -translate-x-1/2 w-full bg-zinc-50 flex items-center justify-between'>
        <h1 className='font-logo lg:text-xl md:text-3xl text-[var(--primary)]'>Astha</h1>
        <div className="flex gap-6 items-center">
        <div className="md:flex gap-6  hidden items-center">
          <AnimatedLink>Work</AnimatedLink>
          <AnimatedLink>Contact</AnimatedLink>
        </div>
            <Button>Resume</Button>
        </div>
    </div>
  )
}

export default Nav