import React from 'react'
import { ChevronRight } from 'lucide-react'

const Button = ({ variant = 'filled', children = 'Button',customSize=" lg:text-xs md:text-lg text-sm", showIcon = true,onClick, ...props }) => {
  const baseClasses = 'group relative w-max  lg:py-2 px-2 py-2 uppercase font-bold cursor-pointer transition-all duration-300 ease-in-out overflow-hidden'
  
  const variants = {
    filled: `lg:px-8 px-4
      bg-[var(--primary)] text-white border-2 border-[var(--primary)] md:px-4
      before:absolute before:inset-0 before:bg-[var(--primary)] before:transition-transform before:duration-300 before:ease-in-out before:translate-x-0
      hover:before:translate-x-full hover:bg-transparent hover:text-[var(--primary)] hover:border-b-[var(--primary)] hover:border-t-transparent hover:border-l-transparent hover:border-r-transparent
    `,
    outline: `
      bg-transparent text-[var(--secondary)] border-2 border-transparent border-b-[var(--secondary)]
      before:absolute before:inset-0 before:bg-[var(--secondary)] before:transition-transform before:duration-300 before:ease-in-out before:-translate-x-full
      hover:before:translate-x-0 hover:text-white hover:border-[var(--secondary)]
    `
  }
  
  return (
    <button 
      className={`${baseClasses} ${customSize} ${variants[variant]} before:z-[-1]`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showIcon && (
            
          <ChevronRight 
            size={16} 
            className="transition-transform duration-200 group-hover:translate-x-1" 
          />
        )}
      </span>
    </button>
  )
}



export default Button