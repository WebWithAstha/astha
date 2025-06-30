import React from 'react'
import PrimaryHeading from '../common/primaryHeading'
import Para from '../common/para'
import { steps } from '../../data/data'
import Stepcard from '../common/stepcard'

const Journey = () => {
  return (
    <>
    <div className="flex flex-col lg:gap-20">

    <div className=''>
        <PrimaryHeading>The design journey</PrimaryHeading>
        <div className="mt-2 opacity-80 hidden">

        <Para>I design with purpose — turning complex ideas into simple, intuitive experiences.

        </Para>
        <Para>
        I started with code, stayed for the design.

        </Para>
        </div>
    </div>
    <div className="grid grid-cols-3">
        {steps.map((step,i)=>(
            <Stepcard key={i} card={step}/>
        ))}
    </div>
        </div>
    </>
  )
}

export default Journey