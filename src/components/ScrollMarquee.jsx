import { motion } from "framer-motion"

const ScrollMarquee = () => {
    const FourPointStar = () => (
        <motion.svg
            width="60"
            height="60"
            viewBox="0 0 200 200"
            className="inline-block mx-8"
            animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            <motion.path
                d="M 100 20 Q 110 90 180 100 Q 110 110 100 180 Q 90 110 20 100 Q 90 90 100 20 Z"
                fill="#bbf451"
                animate={{
                    scale: [1, 1.1, 0.9, 1.05, 1]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.svg>
    )

    return (
        <div className="lg:h-30 uppercase flex items-center h-10 overflow-hidden w-full">
            <motion.div
                className="marquee flex gap-0 items-center whitespace-nowrap"
                animate={{
                    x: [0, -2000]
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
                style={{
                    willChange: "transform"
                }}
            >
                {/* Repeat the pattern multiple times for seamless loop */}
                {[...Array(10)].map((_, index) => (
                    <div key={index} className="flex items-center">
                        <h1 className="font-beiruth lg:text-8xl text-4xl font-dark pt-4 whitespace-nowrap">
                            Fullstack Developer
                        </h1>
                        <FourPointStar />
                        <h1 className="font-beiruth lg:text-8xl text-4xl font-dark pt-4 whitespace-nowrap">
                            UI/UX Designer
                        </h1>
                        <FourPointStar />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default ScrollMarquee
