import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const CheckpointCircle = ({ point, index }) => {
    const circleRef = useRef(null)
    const [hasPlayed, setHasPlayed] = useState(false)
    const isInView = useInView(circleRef, { 
        once: false,
        margin: "-20% 0px -30% 0px"
    })

    useEffect(() => {
        if (isInView && !hasPlayed) {
            const wowSound = new Audio('/music/wow.mp3')
            const vineBoomSound = new Audio('/music/vine-boom.mp3')
            wowSound.volume = 0.05
            vineBoomSound.volume = 0.05
            
            if (index === 0) {
                vineBoomSound.currentTime = 0
                vineBoomSound.play()
            } else {
                wowSound.currentTime = 0
                wowSound.play()
            }
            
            setHasPlayed(true)
        } else if (!isInView && hasPlayed) {
            // Reset when out of view so it can play again
            setHasPlayed(false)
        }
    }, [isInView, index, hasPlayed])

    return (
        <motion.circle
            ref={circleRef}
            cx={point.x}
            cy={point.y}
            r="20"
            fill="#D8CFC0"
            className="checkpoint-circle"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{
                duration: 0.5,
                ease: [0.68, -0.55, 0.265, 1.55]
            }}
        />
    )
}


const timelineData = [
    {
        year: "2022",
        title: "The Beginning",
        description: "Started engineering college, but quickly realized it lacked practical learning and real skill-building. A minor project changed everything—building a Flipkart clone sparked my interest in development. That curiosity led me to learn HTML and CSS and finally take a decisive step by joining the GOAT: Sheriyans Coding School.",
        colSpan: "lg:col-span-4",
        images: []
    },
    {
        year: "2023 – 2024",
        title: "Skill Building",
        description: "Trained intensively at Sheriyans Coding School and completed my full-stack journey with modern tools.",
        colSpan: "lg:col-span-3",
        images: [
            {
                src: "https://media.licdn.com/dms/image/v2/D4D22AQFiob3FTvH1Ag/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1705903542730?e=1769040000&v=beta&t=xa8mz5Oxi7klOUYppiwUgsiX-UbZpykMWl4_zLTFkI4",
                className: "lg:absolute -top-20 right-0 lg:w-50 max-h-60 overflow-hidden  lg:h-40 bg-gray-500 rounded-xl lg:rotate-[-6deg]"
            },
            {
                src: "https://media.licdn.com/dms/image/v2/D4D22AQFcAIaxONgLKw/feedshare-shrink_1280/feedshare-shrink_1280/0/1716350272667?e=1769040000&v=beta&t=RNK_3wdrRzwb4ZOwUMfbROKz1XY8P1A_-88kM-W832Q",
                className: "lg:absolute top-20 lg:-translate-y-1/3 right-40 lg:w-52 max-h-60 overflow-hidden  lg:h-62 bg-gray-600 rounded-xl lg:rotate-[5deg]"
            },
            {
                src: "https://media.licdn.com/dms/image/v2/D4D22AQFzo-y-IK_qsw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723465184039?e=1769040000&v=beta&t=HnCgdAk1136Pmk7ZTd4KvUQZ7FWv0uSPPx3Ksz66G3E",
                className: "lg:absolute bottom-0 right-10 lg:w-40 max-h-60 overflow-hidden  lg:h-40 bg-gray-300 rounded-xl lg:rotate-[-6deg]"
            },
        ]
    },
    {
        year: "2024 – 2025",
        title: "Real-World Experience",
        description: "Began mentoring MERN students at Sheriyans while working as a Frontend Developer Intern on a real-world remote project, gaining hands-on industry experience.",
        colSpan: "lg:col-span-3",
        images: [
            {
                src: "https://media.licdn.com/dms/image/v2/D4D22AQEOSmr9XNgO9A/feedshare-shrink_1280/B4DZRY8JGfG4Ao-/0/1736658951705?e=1769040000&v=beta&t=XVYepp2In7kfZpKGe_jJx_D2BpjT7eN5yy0XYCGhVDs",
                className: "lg:absolute bottom-10 right-20 lg:w-60 max-h-60 overflow-hidden  lg:h-40 bg-gray-200 rounded-xl lg:rotate-[-6deg]"
            },
            
        ]
    },
    {
        year: "",
        title: "Hackathon Wins",
        description: "Won 1st Place at the MP Police Hackathon held at RNTU, Bhopal, for building a cybersecurity and safe-browsing focused solution.",
        colSpan: "lg:col-span-3",
        images: [
            {
                src: "https://media.licdn.com/dms/image/v2/D4D22AQHABxdKnwdMYg/feedshare-shrink_2048_1536/B4DZUckz9eHkAo-/0/1739941170992?e=1769040000&v=beta&t=UIn8J7_DfQ2mOLDPeB7t_2ArzgxPmBqtI2RhpiaQAus",
                className: "lg:absolute top-24 right-34 lg:w-44 max-h-60 overflow-hidden  lg:h-54 bg-gray-700 rounded-xl lg:rotate-[5deg]"
            },
            {
                src: "https://media.licdn.com/dms/image/v2/D4D22AQE57Qd9Le0GGA/feedshare-shrink_2048_1536/B4DZUckz9mHAAo-/0/1739941171153?e=1769040000&v=beta&t=pW-EPWwjHo6SEj5aCl60Fj_N1CTJXe9LXdgiJz4JK9s",
                className: "lg:absolute top-4 right-0 lg:w-44 max-h-60 overflow-hidden  lg:h-60 bg-gray-700 rounded-xl lg:rotate-[5deg]"
            },
        ]
    },
    {
        year: "2025 – 2026",
        title: "Professional Growth",
        description: "Working as a full-stack developer while handling contract-based projects and scaling real products.",
        colSpan: "lg:col-span-3",
        images: [
            {
                src: "/images/2026.jpeg",
                className: "lg:absolute top-14 right-4 lg:w-74 max-h-60 overflow-hidden  lg:h-54 bg-gray-700 rounded-xl lg:rotate-[10deg]"
            }
        ]
    }
]


const TimelineSection = () => {
    const bottomCurveWrapper = useRef(null)
    const timelineRef = useRef(null)
    const pathRef = useRef(null)
    const [pathData, setPathData] = useState("")
    const [checkpoints, setCheckpoints] = useState([])
    const [pathLength, setPathLength] = useState(0)

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start start", "end end"]
    })

    useEffect(() => {
        const updatePath = () => {
            if (!timelineRef.current) return
            
            const checkpointElements = Array.from(timelineRef.current.querySelectorAll('.check-pt'))
            const dots = []
            
            checkpointElements.forEach(checkpoint => {
                const dot = checkpoint.querySelector('.timeline-dot')
                if (dot) {
                    const rect = dot.getBoundingClientRect()
                    const containerRect = timelineRef.current.getBoundingClientRect()
                    const x = rect.left - containerRect.left + rect.width / 2
                    const y = rect.top - containerRect.top + rect.height / 2
                    dots.push({ x, y })
                }
            })

            if (dots.length > 0) {
                let path = `M ${dots[0].x} ${dots[0].y}`
                
                for (let i = 1; i < dots.length; i++) {
                    const prev = dots[i - 1]
                    const curr = dots[i]
                    const distance = curr.y - prev.y
                    const controlOffset = distance / 3
                    
                    // Create S-curve between points
                    const cp1x = prev.x + (i % 2 === 1 ? -70 : 70)
                    const cp1y = prev.y + controlOffset
                    const cp2x = curr.x + (i % 2 === 0 ? 70 : -70)
                    const cp2y = curr.y - controlOffset


                    
                    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`
                }
                
                setPathData(path)
                setCheckpoints(dots)
            }
        }

        updatePath()
        window.addEventListener('resize', updatePath)
        
        // Small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            updatePath()
            // Calculate path length after path is created
            if (pathRef.current) {
                const length = pathRef.current.getTotalLength()
                setPathLength(length)
            }
        }, 100)
        
        return () => {
            window.removeEventListener('resize', updatePath)
            clearTimeout(timer)
        }
    }, [])

    // Update path length when pathData changes
    useEffect(() => {
        if (pathRef.current && pathData) {
            const length = pathRef.current.getTotalLength()
            setPathLength(length)
        }
    }, [pathData])

    const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [pathLength, 0])

    return (
        <>
            <section ref={timelineRef} className="relative w-full px-4 max-w-full overflow-x-hidden lg:px-24">
                <h1 className="lg:w-5xl lg:text-5xl text-2xl font-light mt-40">Explore my journey—the experiences, lessons, and growth that shaped today's me.</h1>

                {/* SVG Path connecting timeline dots */}
                <svg className="absolute -z-1 lg:block left-0 top-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 1 }}>
                    {pathData && (
                        <>
                            <motion.path
                                ref={pathRef}
                                d={pathData}
                                fill="none"
                                stroke="#1e1e1e"
                                strokeWidth="14"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray={pathLength}
                                strokeDashoffset={strokeDashoffset}
                                initial={{ strokeDashoffset: pathLength }}
                            />
                            {/* Checkpoint circles */}
                            {checkpoints.map((point, index) => (
                                <CheckpointCircle 
                                    key={index}
                                    point={point}
                                    index={index}
                                />
                            ))}
                        </>
                    )}
                </svg>

                <div className="lg:pt-42 py-20 lg:space-y-0 space-y-12">

                    {timelineData.map((item, index) => (
                        <div key={index} className="check-pt relative  px-4">
                            <div className="grid lg:grid-cols-7 lg:h-80 h-max items-start lg:gap-10 gap-3 relative z-10">
                                <h2 className="opacity-70 lg:text-2xl ">{item.year}</h2>

                                <div className="lg:flex flex-col justify-cente items-center">
                                    <div className="timeline-dot w-5 h-5 rounded-full mt-2"></div>
                                </div>

                                <div className={`${item.colSpan} space-y-4`}>
                                    <h3 className="lg:text-4xl text-xl font-semibold font-beiruth">{item.title}</h3>
                                    <p className="lg:text-lg opacity-80 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {item.images.length > 0 && (
                                    <>
                                        <div className=""></div>
                                        <div className="pointer-events-none space-y-4 lg:block">
                                            {item.images.map((image, imgIndex) => (
                                                <div key={imgIndex} className={image.className}>
                                                    <img
                                                        className="w-full h-full object-cover rounded-xl"
                                                        src={image.src}
                                                        alt=""
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}

                </div>
            </section>
            
            <div ref={bottomCurveWrapper} className="svg-wrap bg-dark">
                <svg
                    id="curveSvgInverted"
                    viewBox="0 0 1440 220"
                    className="w-full h-[220px]"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        id="curveShapeInverted"
                        d="
      M0,0
      L1440,0
      L1440,140
      C1200,200 960,200 720,200
      C480,200 240,200 0,140
      Z
    "
                        fill="#f4f3e8"
                    />
                </svg>
            </div>
        </>
    )
}

export default TimelineSection
