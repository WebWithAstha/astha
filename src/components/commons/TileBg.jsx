import React from 'react'

const TileBg = ({className}) => {
  return (
    <div className={`tile-bg h-full w-full grid grid-cols-50 z-[999]${className}`}>
      {[...Array(1000)].map((_, index) => (
        <div key={index} className="border border-zinc-200/[.4]  "></div>
      ))}
    </div>
  )
}

export default TileBg