

import Projects from "../components/Projects"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import TimelineSection from "../components/TimelineSection"
import Footer from "../components/Footer"

const Home = () => {





    return (
        <div className="bg-light w-full  text-dark">
            <HeroSection />

            <AboutSection />

            <Projects />

            <TimelineSection />

            <Footer />
            {/* <div className="h-screen"></div>
            <div className="h-screen"></div> */}
        </div>
    )
}

export default Home
