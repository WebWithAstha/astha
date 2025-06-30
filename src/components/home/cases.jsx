import React from 'react'
import PrimaryHeading from '../common/primaryHeading'
import Para from '../common/para'
import { cs } from '../../data/data'
import CaseStudyCard from '../common/caseStudyCard'
import Button from '../common/button'

const CaseStudy = () => {
    return (
        <div className='py-10 flex flex-col lg:gap-20 md:gap-16 gap-12'>
            <div className="">

                <PrimaryHeading>Case Studies:</PrimaryHeading>
                <div className="opacity-60 pl-4">

                <Para>
                  --  From problem to product.
                </Para>
                </div>
                {/* <PrimaryHeading>From Problem to Product</PrimaryHeading> */}
            </div>
            {/* <hr className='opacity-20' /> */}
            {/* <div className="mt-6 opacity-80">

        </div> */}
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-8 gap-6">
                {cs.map((step, i) => (
                    <CaseStudyCard key={i} card={step} />
                ))}
            </div>
            <div className="mx-auto">

            <Button>Show All</Button>
            </div>
        </div>
    )
}

export default CaseStudy