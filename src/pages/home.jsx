import React from "react";
import Hero from "../components/home/hero";
import Cta from "../components/home/cta";
import Fullstack from "../components/home/fullstack";
import Testimonials from "../components/home/testimonials";

const Home = () => {
  return (
    <main className=" w-full overflow-hidden  max-w-[1600px]">
          <Hero />
          <div className="w-full flex flex-col lg:gap-36 md:gap-16 gap-10 lg:pt-40 pt-16 border-x border-zinc-300  lg:px-40 md:px-16 px-6">
      {/* <CaseStudy /> */}
      {/* <Projects /> */}
      <Fullstack />
           <Testimonials/>
      <Cta />
    </div>
    </main>
  );
};

export default Home;
