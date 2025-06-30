import React from 'react'

// Method 1: Using highlightText prop to specify which part should be colored
const PrimaryHeading = ({ 
  children, 
  highlightText = '', 
  highlightColor = 'text-[var(--secondary)] font-helvetica-light',
  className = 'lg:text-6xl md:text-6xl text-4xl font-bold text-gray-800 leading-tight font-helvetica-light uppercase'
}) => {
  
  if (!highlightText) {
    return <h1 className={className}>{children}</h1>
  }
  
  // Split the text and highlight the specified part
  const parts = children.split(highlightText)
  
  return (
    <h1 className={className}>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <span className={highlightColor}>{highlightText}</span>
          )}
        </React.Fragment>
      ))}
    </h1>
  )
}

export default PrimaryHeading