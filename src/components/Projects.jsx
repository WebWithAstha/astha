import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { useRef, useState } from "react"

const Projects = () => {
    const projectRef = useRef(null)
    const audioRef = useRef(null)
    const [lastProgress, setLastProgress] = useState(0)
    
    const { scrollYProgress } = useScroll({
        target: projectRef,
        offset: ["start start", "end end"]
    })

    // Play woosh sound at transition points
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const playWoosh = () => {
            if (audioRef.current) {
                audioRef.current.currentTime = 0
                audioRef.current.volume = 0.3
                audioRef.current.play().catch(err => console.log('Audio play failed:', err))
            }
        }

        const threshold = 0.01 // Tight threshold for snap detection

        // Play sound when animation completes at 0.2 (project 1 fully moved up)
        if (Math.abs(latest - 0.2) < threshold && Math.abs(lastProgress - 0.2) >= threshold) {
            playWoosh()
        }
        // Play sound when animation completes at 0.7 (project 2 fully moved up)
        if (Math.abs(latest - .7) < threshold && Math.abs(lastProgress - .7) >= threshold) {
            playWoosh()
        }
        
        setLastProgress(latest)
    })

    const rotate1 = useTransform(scrollYProgress, [0, .5], [0, -10])
    const moveY1 = useTransform(scrollYProgress, [0, .5], [0, -window.innerHeight])
    const moveX1 = useTransform(scrollYProgress, [0, .5], [0, -70])

    const moveTextWrapY1 = useTransform(scrollYProgress, [0, .1 ], [0, -100])
    const moveTextWrapX1 = useTransform(scrollYProgress, [0, .5], [0, 100])
    const moveTextY1 = useTransform(scrollYProgress, [0, .1], [0, 200])
    const rotateText1 = useTransform(scrollYProgress, [0, .1], [0, 10])


    const rotate2 = useTransform(scrollYProgress, [0, .5, 1], [10, 0, -10])
    const moveX2 = useTransform(scrollYProgress, [0, .5, 1], [-70, 0, -70])
    const moveY2 = useTransform(scrollYProgress, [0, .5, 1], [0, 0, -window.innerHeight])

    const moveTextWrapY2 = useTransform(scrollYProgress, [.5, .6], [0, -100 ])
    const moveTextWrapX2 = useTransform(scrollYProgress, [.5, 1], [0, 100])
    const moveTextY2 = useTransform(scrollYProgress, [.5, .6], [0, 200])
    const rotateText2 = useTransform(scrollYProgress, [.5, .6], [0, 10])

    const rotate3 = useTransform(scrollYProgress, [0, .5, 1], [0, 10, 0])
    const moveY3 = useTransform(scrollYProgress, [0, .5, 1], [0, 0, 0])
    const moveX3 = useTransform(scrollYProgress, [0, .5, 1], [0, -70, 0])

    const moveTextWrapY3 = useTransform(scrollYProgress, [0, .5, 1], [0, 0, 0])
    const moveTextWrapX3 = useTransform(scrollYProgress, [0, .5, 1], [0, 0, 0])
    const moveTextY3 = useTransform(scrollYProgress, [0, .5, 1], [0, 0, 0])
    const rotateText3 = useTransform(scrollYProgress, [0, .5, 1], [0, 0, 0])

    return (
<>
<audio ref={audioRef} src="/music/woosh.mp3" />
<div className="lg:px-20 px-4 pb-20 pt-30 bg-dark text-light">
        <h1 className="lg:w-5xl lg:text-5xl text-2xl font-light">Explore my journey—the experiences, lessons, and growth that shaped today's me.</h1>

</div>
        <section ref={projectRef}
            className="h-[300vh] bg-dark relative z-10"
            >
            <motion.div
                className="h-screen sticky overflow-x-hidden top-0 -z-1 bg-lime-200/[0] w-full flex flex-col items-center justify-center">
                <motion.div
                    style={{ y: moveTextWrapY1, x: moveTextWrapX1}}
                    className="h-20 z-9 w-full overflow-hidden bg-yellow-800/[0] flex absolute  items-center justify-center">
                    <motion.h1
                    style={{ y: moveTextY1, rotate: rotateText1}}
                    className="relative -mb-10 z-9 lg:text-6xl whitespace-nowrap font-blac font-beiruth text-neutral-400">Construction Line

                    </motion.h1>
                </motion.div>
                <motion.div
                    style={{
                        rotate: rotate1, y: moveY1, x: moveX1,
                    }}
                    id="proj1" className="img-wrap relative flex items-center justify-center z-0 shrink-0 h-[80vh] w-[80vw] lg:h-[550px] lg:w-[900px]
                    bg-lime-500">
                    <img className="w-full h-full absolute -z-1 top-0 left-0 object-cover" src="/images/work.png" alt="" />
                </motion.div>
            </motion.div>
            <motion.div className="h-screen sticky overflow-x-hidden top-0 -z-1 bg-yellow-200/[0] w-full flex flex-col items-center justify-center">
                <motion.div
                    style={{ y: moveTextWrapY2, x: moveTextWrapX2 }}
                    className="h-20 z-9 w-full overflow-hidden bg-yellow-800/[0] flex absolute items-center justify-center">
                    <motion.h1
                     style={{ y: moveTextY2, rotate: rotateText2}}
                     className="relative -mb-10 z-9 lg:text-6xl whitespace-nowrap font-blac font-beiruth text-neutral-400">Project 2</motion.h1>
                </motion.div>
                <motion.div
                    style={{
                        rotate: rotate2, x: moveX2, y: moveY2,
                        // scale: scale2
                    }}
                    id="proj2" className="img-wrap relative flex items-center justify-center z-0 shrink-0 h-[80vh] w-[80vw] lg:h-[550px] lg:w-[900px]
                    bg-yellow-500">
                    <img className="w-full h-full absolute -z-1 top-0 left-0 object-cover" src="https://images.unsplash.com/photo-1665470909939-959569b20021?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </motion.div>
            </motion.div>

            <motion.div
                className="h-screen sticky overflow-x-hidden top-0 -z-1 bg-neutral-200/[0] w-full flex flex-col items-center justify-center">
                <motion.div
                    style={{ y: moveTextWrapY3, x: moveTextWrapX3 }}
                    className="h-20 z-9 w-full overflow-hidden bg-yellow-800/[0] flex absolute items-center justify-center">
                    <motion.h1 
                    style={{ y: moveTextY3, rotate: rotateText3}} 
                    className="relative -mb-10 z-9 lg:text-6xl whitespace-nowrap font-blac font-beiruth text-neutral-400">Project 3</motion.h1>
                </motion.div>
                <motion.div
                    style={{
                        rotate: rotate3, x: moveX3, y: moveY3,
                        
                        // scale: scale3
                    }}
                    id="proj3" className="img-wrap relative flex items-center justify-center z-0 shrink-0 h-[80vh] w-[80vw] lg:h-[550px] lg:w-[900px]
                    bg-neutral-500">
                    <img className="w-full h-full absolute -z-1 top-0 left-0 object-cover" src="/images/work.png" alt="" />
                </motion.div>
            </motion.div>
        </section>
                    </>
    )
}

export default Projects
