import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const HeroSection = () => {
    const heroRef = useRef(null)
    const heroTextRef = useRef(null)
    const heroImageRef = useRef(null)
    const curveWrapper = useRef(null)

    // Hero section scroll animation
    const { scrollYProgress: heroScrollProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    // Curve animation
    const { scrollYProgress: curveScrollProgress } = useScroll({
        target: curveWrapper,
        offset: ["start end", "start start"]
    })

    // Transform values for hero text
    const textY = useTransform(heroScrollProgress, [0, 1], [0, -100])
    const textOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0])

    // Transform values for hero image
    const imageY = useTransform(heroScrollProgress, [0, 1], [0, -400])
    const imageRotate = useTransform(heroScrollProgress, [0, 1], [0, 0])
    const scaleX = useTransform(heroScrollProgress, [0, 1], [1, 1])
    const imageFilter = useTransform(heroScrollProgress, [0, 1], ["grayscale(0.5)", "grayscale(1)"])
    const imageRotateX = useTransform(heroScrollProgress, [0, 1], [10, 50])
    const imageZ = useTransform(heroScrollProgress, [0, 1], [0, -200])
    const imageScale = useTransform(heroScrollProgress, [0, 1], [1, 0.8])

    // Transform for SVG path morphing
    const pathD = useTransform(
        curveScrollProgress,
        [0, 1],
        [
            "M0,260 L0,80 C240,80 520,80 720,80 C960,80 1200,80 1440,80 L1440,260 Z",
            "M0,260 L0,220 C240,0 580,0 820,0 C960,0 1200,0 1440,220 L1440,260 Z"
        ]
    )



    return (
        <>

            <section ref={heroRef}
                style={{
                    perspective: "1200px",
                }}
                className="min-h-screen h-screen relative z-0 lg:px-24 w-full flex flex-col">

                <div 
                style={
                    { 
                        perspective:"1200px"
                    }
                }
                className="flex-1 flex flex-col items-center lg:-mt-40 py-30 lg:py-20  lg:justify-center ">
                    <motion.h1
                        ref={heroTextRef}
                        style={{ y: textY, opacity: textOpacity,
                             rotateX: imageRotateX,
                        rotateZ: imageRotate,
                        translateZ: imageZ,  
                        transformStyle: "preserve-3d",
                         }}
                        className="lg:text-7xl text-4xl lg:w-4xl text-dark text-center font-beiruth"
                    >
                        Hi! I'm Astha
                    </motion.h1>
                    <motion.p
                        style={{ y: textY, opacity: textOpacity }}
                    >Fullstack Developer | Loves Workout</motion.p>
                </div>
                <motion.img
                    ref={heroImageRef}
                    style={{
                        y: imageY,
                        rotate: imageRotate,
                        scale: imageScale,
                        filter: imageFilter,
                        scaleX: scaleX,
                        rotateX: imageRotateX, 
                        rotateZ: imageRotate,
                        translateZ: imageZ,  
                        transformStyle: "preserve-3d",
                    }}
                    className="lg:w-4xl w-[80%] h-120 z-1 lg:h-150 object-cover absolute top-1/2 -translate-y-1/3 lg:translate-y-1/5 left-1/2 -translate-x-1/2 mx-auto lg:mt-auto"
                    // src="https://images.unsplash.com/photo-1648557364486-076ed4625a7e?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%22" alt=""
                src="/images/she.png" alt=""
                />
                {/* <img
                className="w-200 h-120 object-cover mx-auto absolute left-32 top-20"
                //  src="/images/he.jpeg"
                src="https://images.unsplash.com/photo-1648557364486-076ed4625a7e?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%22" alt=""
                  /> */}
            </section>
            <div className="lg:h-40" />
            {/* Curve SVG */}
            <div className="svg-wrap" ref={curveWrapper}>
                <svg
                    id="curveSvg"
                    viewBox="0 0 1440 260"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        id="flatShape"
                        d={pathD}
                        fill="#1e1e1e"
                    />
                </svg>
            </div>
        </>
    )
}

export default HeroSection
