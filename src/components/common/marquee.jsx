import React, { useEffect, useRef } from 'react'
import img from '../../assets/Vector.png'

const Marquee = () => {
  const content1Ref = useRef(null)
  const content2Ref = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
    script.onload = () => {
      const { gsap } = window
      
      if (!gsap || !content1Ref.current || !content2Ref.current) return

      const contentWidth = content1Ref.current.offsetWidth
      
      gsap.set(content1Ref.current, { x: 0 })
      gsap.set(content2Ref.current, { x: contentWidth })

      gsap.to([content1Ref.current, content2Ref.current], {
        x: `-=${contentWidth}`,
        duration: 60, // Adjust speed here (lower = faster)
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const xValue = parseFloat(x)
            return `${xValue % contentWidth}px`
          }
        }
      })
    }
    
    document.head.appendChild(script)
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div className='overflow-hidden opacity-30'>
      <div className="relative flex">
        <div ref={content1Ref} className="flex gap-20 shrink-0 items-center">
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Creative 
          </h1>
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Ui/Ux
          </h1>
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Designer
          </h1>
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Developer
          </h1>
          {/* <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" /> */}
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Creative 
          </h1>
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Ui/Ux
          </h1>
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Designer
          </h1>
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Developer
          </h1>
          {/* <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" /> */}
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Creative 
          </h1>
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Ui/Ux
          </h1>
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Designer
          </h1>
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Developer
          </h1>
          {/* <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" /> */}
          
        </div>
        
        <div ref={content2Ref} className="flex shrink-0 items-center">
          <img className='lg:h-40 md:h-37 h-20 object-contain shrink-0' src={img} alt="" />
          <h1 className='uppercase font-helvetica-light text-9xl lg:text-[15vw] md:text-[20vw] whitespace-nowrap'>
            Creative Ui/Ux
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Marquee