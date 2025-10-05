import React, { useState, useEffect } from "react";
import TileBg from "../components/commons/TileBg";
import TechBar from "../components/commons/TechBar";

const Home = () => {
  const [timelinePosition, setTimelinePosition] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector(".timeline-container");
      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If container top is above viewport and bottom is below viewport (container spans viewport)
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        setTimelinePosition("center");
      }
      // If container bottom is near viewport (container ending)
      else if (rect.bottom <= windowHeight && rect.bottom > 0) {
        setTimelinePosition("bottom");
      }
      // Initial position (container top is visible)
      else {
        setTimelinePosition("top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTimelineClasses = () => {
    const baseClasses =
      "right-40 min-h-10 flex flex-col gap-8 z-10 transition-all duration-300";

    switch (timelinePosition) {
      case "center":
        return `${baseClasses} fixed top-1/2 transform -translate-y-1/2`;
      case "bottom":
        return `${baseClasses} absolute bottom-20`;
      default:
        return `${baseClasses} absolute top-20`;
    }
  };

  return (
    <>
    <div className="fixed right-2 md:right-10 top-10 md:top-20 flex flex-col items-center justify-center gap-2 md:gap-4 z-[999]">
      <div className="p-0.5 h-20 md:h-40 bg-zinc-800 rounded-full shadow-lg border-2 border-zinc-600"></div>
    </div>
    <div className="fixed left-2 md:left-10 bottom-10 md:bottom-20 flex flex-col items-center justify-center gap-2 md:gap-4 z-[999]">
      <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-zinc-600"></div>
      <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-zinc-600"></div>
      <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-zinc-600"></div>
    </div>
      <div className="relative bg-zinc-200 z-0 md:min-h-screen w-full flex flex-col justify-end text-2xl md:text-4xl font-bold md:px-0 px-6">

       
        <div className="absolute w-full h-full -z-1">
          <TileBg />
        </div>

        <div
          className=" md:h-[80vh] overflow-hidden rounded-lg md:absolute top-8 md:top-16 left-[5%] md:left-[10%] w-[40%] md:w-auto transition-all duration-300"
          style={{ animation: "float 3.5s ease-in-out infinite 0.5s" }}
        >
          <img
            className="rotate-y-180 object-top rounded-full w-full h-full object-cover"
            src="/imgs/hero-black.png"
            alt="React"
          />
        </div>
        <div className="md:px-0 px-4 md:absolute right-[5%] md:right-[40%] top-20 md:top-42 w-48 md:w-64 text-sm md:text-base md:text-right font-normal">
          A Web Developer Creating dynamic and responsive web
          experiences.
        </div>

        <div className="flex flex-col gap-2 justify-center items-center md:items-end px-4 md:px-40 py-10 md:py-20">
          <p className="text font-cabinet md:text-center md:text-left pl-0 md:pl-20 font-normal text-[60px] md:text-[140px] w-full md:w-3/4 leading-[90%]">
            Hey. I am Astha
          </p>
        </div>
      </div>

      <div className="h-auto md:h-[110vh] relative bg-zinc-200 w-full bg-zinc-800 text-white px-4 md:px-40 py-8">
        <div className="w-full  absolute top-0 left-0 grid grid-cols-20 rotate-x-180">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="h-6 md:h-10 bg-zinc-200 rounded-t-full"></div>
          ))}
        </div>
        <h1 className="font-helvetica mt-20 md:mt-40 bg-amber-600 w-max p-2 pr-4 rounded-r-full text-sm md:text-base">
          About Me
        </h1>
        <div className="grid gap-4 mt-8 relative">
          <div className=""></div>
          <p className="leading-7 md:leading-9 w-full md:w-2/3 text-lg md:text-2xl">
            Hello! I'm Astha Lodhi, a passionate web developer dedicated to
            crafting dynamic and responsive web experiences.I thrive on solving
            complex problems and continuously learning new technologies to stay
            ahead in the ever-evolving web development landscape. Let's build
            something amazing together!
          </p>
        </div>
        <div className="hidden md:flex absolute right-36 rotate-15 items-end p-6 justify-center bg-white w-48 h-64 rounded-full">
          <div className="pr-8 bg-black rounded-full pb-6 pt-10">
            <div className="bg-white p-4 rounded-full">
              {/* <div className="bg-black p-1 rounded-full"></div> */}
            </div>
          </div>
        </div>
        {/* <div className="absolute right-56 rotate-5 bg-rose-700 w-48 h-64 rounded-full"></div> */}
        <div className="hidden md:flex absolute right-96 -rotate-5 items-end p-6 justify-center bg-white w-48 h-64 rounded-full">
          <div className="pr-8 bg-black rounded-full pb-6 pt-10">
            <div className="bg-white p-4 rounded-full">
              {/* <div className="bg-black p-1 rounded-full"></div> */}
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-0 translate-y-full z-99 left-0 grid grid-cols-20 rotate-x-180">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="h-6 md:h-10 bg-zinc-800 rounded-t-full"></div>
          ))}
        </div>
      </div>

      <TechBar />
      <div className="min-h-screen pb-20 md:pb-40 relative bg-zinc-200 relative w-full py-8 flex flex-col timeline-container">
        <div className="w-full absolute z-[999] top-0 left-0 grid grid-cols-20 -translate-y-full">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="h-6 md:h-10 bg-zinc-200 rounded-t-full"></div>
          ))}
        </div>
        <h1 className="font-helvetica my-10 md:my-20 mx-4 md:mx-40 bg-amber-600 w-max p-2 pr-4 rounded-r-full text-sm md:text-base">
          Works
        </h1>

        <div className={getTimelineClasses()}>
          <div className="flex items-center justify-center gap-2">
            <div className="text-amber-600">➤</div>
            <div className="w-40 h-20 rounded-lg bg-amber-600 shrink-0">
              <img
                className="w-full h-full object-cover  rounded-lg"
                src="/imgs/hero.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-amber-100">➤</div>
            <div className="w-40 h-20 rounded-lg bg-amber-600 shrink-0">
              <img
                className="w-full h-full object-cover  rounded-lg"
                src="/imgs/hero.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-amber-100">➤</div>
            <div className="w-40 h-20 rounded-lg bg-amber-600 shrink-0">
              <img
                className="w-full h-full object-cover  rounded-lg"
                src="/imgs/hero.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full border-b border-amber-600 p-4 md:p-16 px-4 md:px-40 border-t">
          <h1 className="font-bold text-3xl md:text-7xl w-full md:w-4/5 font-helvetica mb-6 md:mb-12">
            {" "}
            <span className="text-amber-600">~</span> Holistic workspace
            solutions from acquisition to management.
          </h1>
          <h2 className="font-bold text-xl md:text-2xl mt-3">Collab24</h2>
          <p className="text-sm md:text-base leading-6 md:leading-7 w-full md:w-2/3">
            Collab24 is a platform that streamlines collaboration and enhances
            productivity in the workplace. With a focus on user experience and
            seamless integration, we provide tools that empower teams to work
            together more effectively.
          </p>
        </div>
        <div className="w-full border-b border-amber-600 p-4 md:p-16 px-4 md:px-40">
          <h1 className="font-bold text-3xl md:text-7xl w-full md:w-4/5 font-helvetica mb-6 md:mb-12">
            {" "}
            <span className="text-amber-600">~</span> Holistic workspace
            solutions from acquisition to management.
          </h1>
          <h2 className="font-bold text-xl md:text-2xl mt-3">Collab24</h2>
          <p className="text-sm md:text-base leading-6 md:leading-7 w-full md:w-2/3">
            Collab24 is a platform that streamlines collaboration and enhances
            productivity in the workplace. With a focus on user experience and
            seamless integration, we provide tools that empower teams to work
            together more effectively.
          </p>
        </div>
        <div className="w-full border-b border-amber-600 p-4 md:p-16 px-4 md:px-40">
          <h1 className="font-bold text-3xl md:text-7xl w-full md:w-4/5 font-helvetica mb-6 md:mb-12">
            {" "}
            <span className="text-amber-600">~</span> Holistic workspace
            solutions from acquisition to management.
          </h1>
          <h2 className="font-bold text-xl md:text-2xl mt-3">Collab24</h2>
          <p className="text-sm md:text-base leading-6 md:leading-7 w-full md:w-2/3">
            Collab24 is a platform that streamlines collaboration and enhances
            productivity in the workplace. With a focus on user experience and
            seamless integration, we provide tools that empower teams to work
            together more effectively.
          </p>
        </div>
      </div>
      <div className="h-screen hidden bg-zinc-50 w-full py-8 flex flex-col items-center justify-center">
        <div className="w-full border-b p-6 px-40 uppercase font-bold text-8xl">
          Project 1
        </div>
        <div className="w-full border-b p-6 px-40 uppercase font-bold text-8xl">
          Collab 24
        </div>
        <div className="w-full border-b p-6 px-40 uppercase font-bold text-8xl">
          Project 1
        </div>
        <div className="w-full border-b p-6 px-40 uppercase font-bold text-8xl">
          Collab 24
        </div>
      </div>
      <footer className="bg-zinc-900 text-white relative py-10 md:py-20 px-4 md:px-40">
        {/* Decorative top border using your scalloped pattern */}
        <div className="w-full absolute z-[999] top-0 left-0 grid grid-cols-20 -translate-y-full">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="h-6 md:h-10 bg-zinc-900 rounded-t-full"></div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
          {/* Contact Section */}
          <div className="flex flex-col gap-6">
            <h3 className="font-helvetica bg-amber-600 w-max p-2 pr-4 rounded-r-full text-black font-bold">
              Let's Connect
            </h3>
            <div className="space-y-4">
              <p className="text-lg md:text-2xl">Ready to collaborate?</p>
              <a
                href="mailto:astha@example.com"
                className="block text-lg md:text-xl text-sky-800 hover:text-amber-400 transition-colors duration-300"
              >
                astha@example.com
              </a>
              <div className="flex gap-4 mt-6 hidden">
                <a
                  href="#"
                  className="w-28 h-28 text-xl bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300"
                >
                  <span className="text-black font-bold">Li</span>
                </a>
                <a
                  href="#"
                  className="w-28 h-28 text-xl bg-white rounded-full flex items-center justify-center hover:bg-zinc-200 transition-all duration-300"
                >
                  <span className="text-black font-bold">Gh</span>
                </a>
                <a
                  href="#"
                  className="w-28 h-28 text-xl bg-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-600 transition-all duration-300"
                >
                  <span className="text-white font-bold">Tw</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 order-first md:order-last">
            <h3 className="font-helvetica bg-amber-600 w-max p-2 pr-4 rounded-r-full text-black font-bold text-sm md:text-base">
              Navigate
            </h3>
            <nav className="space-y-3">
              <a
                href="#about"
                className="block text-white uppercase text-lg md:text-2xl hover:text-amber-600 transition-colors duration-300"
              >
                About Me
              </a>
              {/* <a href="#works" className="block text-white uppercase text-lg md:text-2xl hover:text-amber-600 transition-colors duration-300">
                Works
              </a> */}
              <a
                href="#projects"
                className="block text-white uppercase text-lg md:text-2xl hover:text-amber-600 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-white uppercase text-lg md:text-2xl hover:text-amber-600 transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-center md:text-left">
            <p className="text-xl md:text-2xl font-cabinet font-bold">Astha Lodhi</p>
            <p className="text-zinc-400 mt-1 text-sm md:text-base">
              Web Developer • Problem Solver • Tech Enthusiast
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-zinc-400 text-sm md:text-base">© 2025 Astha Lodhi</p>
            <p className="text-zinc-400 text-xs md:text-sm mt-1">
              Crafted with passion & code
            </p>
          </div>
        </div>

        {/* Decorative floating elements matching your style */}
        <div className="absolute scale-75 right-[20%] bottom-16 flex">
          <div className="absolute left-25 top-10 flex">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-36 w-28  bg-rose-600 rounded-full"
              ></div>
            ))}
          </div>

          <div className=" rotate-12 flex items-end p-4 justify-center bg-white w-32 h-32 rounded-full opacity0">
            <div className="bg-zinc-900 rounded-full p-4">
              <div className="bg-white p-2 rounded-full"></div>
            </div>
          </div>
          <div className=" -rotate-6 flex items-end p-4 justify-center bg-white w-24 h-24 rounded-full opacity0">
            <div className="bg-zinc-900 rounded-full p-3">
              <div className="bg-white p-1 rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
