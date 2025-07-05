import React from "react";
import TestimonialCard from "../common/testimonialCard";
import { testimonials } from "../../data/data";
import PrimaryHeading from "../common/primaryHeading";



const Testimonials = () => {
  return (
    <section className='py-6 md:mb-10 flex flex-col lg:gap-20 md:gap-16 gap-12'>

                <PrimaryHeading>Voices of Trust</PrimaryHeading>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
