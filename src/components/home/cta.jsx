import React from 'react'
import PrimaryHeading from '../common/primaryHeading'
import Button from '../common/button'

const Cta = () => {
  return (
    <div>
        <div className="lg:w-[70%] lg:py-0 md:py-16  py-20">

        <PrimaryHeading>
        Great design starts with a good conversation —
        </PrimaryHeading>

        <Button showIcon={false} customSize='lg:text-6xl md:text-6xl text-3xl' variant='outline' >let's talk.</Button>
        </div>
    </div>
  )
}

export default Cta