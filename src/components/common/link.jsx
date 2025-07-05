import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnimatedLink = ({ 
  children, 
  route, 
  className = '', 
  onClick 
}) => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    // You can add navigation logic here based on your routing solution
    // For example: navigate(route) if using React Router
    if (route) {
      navigate(route);
    }
    // console.log(`Navigating to: ${route}`);
  };

  return (
    <h2 
      className={`
        lg:text-sm 
        md:text-xl
        relative 
        cursor-pointer 
        inline-block
        transition-colors 
        duration-300
        hover:text-[var(--primary)]
        uppercase
        group
        ${className}
      `}
      onClick={handleClick}
    >
      {children}
      <span 
        //   left-0 
        className="
          absolute 
          bottom-0 
          h-0.5 
          bg-current 
          transition-all 
          duration-300 
          ease-out
          w-full
          left-0
          scale-x-0
          group-hover:scale-x-100
          origin-right
          group-hover:origin-left
          "
      />
    </h2>
  );
};

export default AnimatedLink;