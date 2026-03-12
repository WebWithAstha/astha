

import Projects from "../components/Projects"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import TimelineSection from "../components/TimelineSection"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet-async"

const Home = () => {





    return (
        <>
            <Helmet>
                <title>Astha Lodhi | Software Developer</title>

                <meta
                    name="description"
                    content="Astha Lodhi is a Software Developer specializing in React, Next.js, MERN, PostgreSQL and TypeScript."
                />

                <meta name="keywords" content="Astha Lodhi, React Developer, MERN Developer, Software Developer India" />

                {/* Open Graph */}
                <meta property="og:title" content="Astha Lodhi Portfolio" />
                <meta property="og:description" content="Software Developer Portfolio" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="bg-light w-full  text-dark">
                <HeroSection />

                <AboutSection />

                <Projects />

                <TimelineSection />

                <Footer />
                {/* <div className="h-screen"></div>
            <div className="h-screen"></div> */}
            </div>
        </>
    )
}

export default Home
