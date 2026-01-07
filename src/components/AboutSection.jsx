import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Skills from "./Skills"
import ScrollMarquee from "./ScrollMarquee"

const AboutSection = () => {
    const aboutBoxRef = useRef(null)


    const { scrollYProgress } = useScroll({
        target: aboutBoxRef,
        offset: ["-80% center", "center 120%"],
    })
    const containerWidth = useTransform(scrollYProgress, [0, 1], [0, window.innerWidth])





    return (
        <motion.div
        id="about"
            className="w-full overflow-hidden lg:py-0 py-20  flex flex-col bg-dark">
            {/* About Me Section */}
            <section >
                <div className="flex flex-col px-4 relative overflow-hidden items-center text-light justify-center lg:gap-y-10 gap-y-18">
                    <p className="lg:w-5xl w-[90%] lg:text-5xl text-xl lg:leading-tight font-light text-center ">I'm Astha — a Full-Stack Developer crafting fast, scalable, and immersive digital experiences that merge creativity with engineering precision.</p>
                    <p className="lg:w-6xl w-[90%] lg:text-2xl text-md lg:font-normal font-light leading-snug font-classy text-center">I specialize in building modern, scalable web applications with a strong focus on frontend engineering, using technologies like React, Next.js, and production-ready workflows.</p>

                    <div className="w-full border-t border-white/[.2] lg:px-24 pt-16 mt-12 grid lg:grid-cols-3 gap-8 ">
                        <div className="py-4 space-y-8 flex flex-col items-center">
                            <h2 className="uppercase text-sm">Years of Experience</h2>
                            <h1 className="lg:text-9xl text-7xl font-beiruth">1.7<span className="text-2xl"></span></h1>
                        </div>

                        <motion.div
                            className="flex items-center justify-center p-4"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.svg
                                width="200"
                                height="200"
                                viewBox="0 0 200 200"
                                initial={{ rotate: 0 }}
                                whileInView={{ rotate: 360 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                            >
                                <motion.path
                                    d="M 100 20 Q 110 90 180 100 Q 110 110 100 180 Q 90 110 20 100 Q 90 90 100 20 Z"
                                    initial={{
                                        fill: "#bbf451",
                                        scale: 1
                                    }}
                                    animate={{
                                        fill: ["#bbf451", "#b0e74c", "#bbf451", "#34d399", "#b0e74c", "#bbf451"],
                                        scale: [1, 1.1, 0.5, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.svg>
                        </motion.div>

                        <div className="py-4 space-y-8 flex flex-col items-center">
                            <h2 className="uppercase text-sm">Contribution to Projects</h2>
                            <h1 className="lg:text-9xl text-7xl font-beiruth">2<span className="text-2xl"></span></h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* Skills Section */}
            <motion.section
                ref={aboutBoxRef}

                style={{
                    width: containerWidth,
                }}
                className="max-w-full py-20 lg:mt-10 lg:w-5xl overflow-hidden w-full flex flex-col lg:py-40 lg:space-y-20 space-y-16 items-center bg-light mx-auto min-h-60 rounded-t-2xl">
                <ScrollMarquee />

                <Skills />
            

            </motion.section>

        </motion.div>
    )
}

export default AboutSection
