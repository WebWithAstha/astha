import React from 'react'
import PrimaryHeading from '../common/primaryHeading'
import { fullstackProjects } from '../../data/data'
import ProjectCard from '../common/projectCard'
import Button from '../common/button'

const Fullstack = () => {
   return (
    <div className='py-10 flex flex-col lg:gap-28 md:gap-16 gap-12'>
            <div className="lg:w-[60%]">

                <PrimaryHeading>Creative + Impactful Solutions</PrimaryHeading>
            </div>
            {/* <hr className='opacity-20' /> */}
            {/* <div className="mt-6 opacity-80">

        </div> */}
            <div className="flex flex-col lg:gap-40 md:gap-20 gap-16">
                {fullstackProjects.map((step, i) => (
                    <ProjectCard key={i} index={i} card={step} />
                ))}
            </div>
            <div className="mx-auto md:mt-10">

<Button>Show All</Button>
</div>
        </div>
  )
}

export default Fullstack