import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef, useState } from 'react'

const Skills = () => {
    const cardContainer = useRef(null)
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const { scrollYProgress } = useScroll({
        target: cardContainer,
        offset: ["start end", "start 15%"]
    })

    // Different animations for each card
    const card1X = useTransform(scrollYProgress, [0, 1], [-200, 0])
    const card1Y = useTransform(scrollYProgress, [0, 1], [100, 0])
    const card1Opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const card1RotateX = useTransform(scrollYProgress, [0, 1], [45, 0])

    const card2X = useTransform(scrollYProgress, [0, 1], [0, 0])
    const card2Y = useTransform(scrollYProgress, [0, 1], [-100, 0])
    const card2Opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const card2RotateX = useTransform(scrollYProgress, [0, 1], [45, 0])

    const card3X = useTransform(scrollYProgress, [0, 1], [150, 0])
    const card3Y = useTransform(scrollYProgress, [0, 1], [150, 0])
    const card3Opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const card3RotateX = useTransform(scrollYProgress, [0, 1], [45, 0])

    const card4X = useTransform(scrollYProgress, [0, 1], [0, 0])
    const card4Y = useTransform(scrollYProgress, [0, 1], [100, 0])
    const card4Opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const cardWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    const card4RotateX = useTransform(scrollYProgress, [0, 1], [45, 0])

    return (
        <motion.div
            ref={cardContainer}
            className="grid lg:grid-cols-4 px-14 w-full gap-4 justify-center"
            style={{
                perspective: "1200px"
            }}
        >

            <SkillCard
                scrollX={card1X}
                scrollY={card1Y}
                rotateX={card1RotateX}
                scrollOpacity={card1Opacity}
                tooltipBg="bg-[#bbf451]"
                className="preserve-3d w-full lg:h-[50vh] overflow-hidden lg:col-span-2 gap-x-4 gap-y-4 justify-center p-6 bg-dark border-1 border-[#1e1e1e] text-light text-5xl break-all rounded-3xl flex flex-wrap items-center"
                images={[
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                    "https://cdn-icons-png.flaticon.com/128/15437/15437135.png",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                ]}
                alts={["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]}
            />
            <SkillCard
                scrollX={card2X}
                scrollY={card2Y}
                rotateX={card2RotateX}
                scrollOpacity={card2Opacity}
                tooltipBg="bg-dark"
                className="preserve-3d w-full lg:h-[50vh] overflow-hidden gap-x-4 gap-y-4 justify-center p-6 bg-[#bbf451] text-light text-5xl break-all rounded-3xl flex flex-wrap items-center"
                images={[
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
                ]}
                alts={["Node.js", "Express", "API"]}
            />
            <SkillCard
                scrollX={card3X}
                scrollY={card3Y}
                rotateX={card3RotateX}
                scrollOpacity={card3Opacity}
                tooltipBg="bg-lime-300"
                className="preserve-3d w-full lg:h-[50vh] overflow-hidden gap-x-4 gap-y-4 justify-center p-6 bg-dark border-1 border-[#1e1e1e] text-light text-5xl break-all rounded-3xl flex flex-wrap items-center"
                images={[
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                ]}
                alts={["MongoDB", "MySQL", "PostgreSQL", "Redis"]}
            />
            <SkillCard
                scrollX={card4X}
                scrollY={card4Y}
                rotateX={card4RotateX}
                scrollOpacity={card4Opacity}
                scrollWidth={cardWidth}
                tooltipBg="bg-dark"
                className="preserve-3d w-full lg:h-[50vh] overflow-hidden gap-2 lg:col-span-4 justify-center p-6 bg-[#bbf451] text-light text-5xl break-all rounded-3xl flex flex-wrap items-center"
                images={[
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                    "https://cdn-icons-png.flaticon.com/128/6378/6378080.png",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                ]}
                alts={["Git", "GitHub", "CI/CD Pipelines", "Postman", "Firebase", "Cloudinary", "Prisma", "Figma"]}
            />

        </motion.div>
    )
}

const SkillCard = ({ scrollX, scrollY, rotateX, className, images, alts, tooltipBg = 'bg-lime-300' }) => {
    const cardRef = useRef(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)
    const audioRef = useRef(null)
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
        }
    }

    const handleImageHover = (index) => {
        setHoveredIndex(index)
        playSound()
    }

    const handleImageLeave = () => {
        setHoveredIndex(null)
    }

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    const getImagePosition = (index) => {
        const distance = 80 // Distance to move away from cursor
        
        if (!isHovered) return { x: 0, y: 0 }
        
        // Calculate the center position of each image relative to card
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return { x: 0, y: 0 }
        
        // Get image element position
        const imgElements = cardRef.current?.querySelectorAll('img')
        if (!imgElements || !imgElements[index]) return { x: 0, y: 0 }
        
        const imgRect = imgElements[index].getBoundingClientRect()
        const imgCenterX = imgRect.left + imgRect.width / 2 - rect.left
        const imgCenterY = imgRect.top + imgRect.height / 2 - rect.top
        
        // Calculate distance from mouse to image center
        const dx = imgCenterX - mousePos.x
        const dy = imgCenterY - mousePos.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 150) {
            // Normalize and scale the movement
            const angle = Math.atan2(dy, dx)
            const force = Math.max(0, (150 - dist) / 150)
            return {
                x: Math.cos(angle) * distance * force,
                y: Math.sin(angle) * distance * force
            }
        }
        
        return { x: 0, y: 0 }
    }

    return (
        <>
            <motion.div
                ref={cardRef}
                style={{
                    x: scrollX,
                    y: scrollY,
                    rotateX: rotateX,
                }}
                id='skills'
                className={className}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <audio ref={audioRef} src="/music/bubble-pop.mp3" />
                {images.map((src, index) => {
                    const pos = getImagePosition(index, images.length)
                    return (
                        <motion.div
                            key={index}
                            className="relative"
                            animate={{
                                x: pos.x,
                                y: pos.y
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 150,
                                damping: 15,
                                mass: 0.5
                            }}
                        >
                            <img
                                onMouseEnter={() => handleImageHover(index)}
                                onMouseLeave={handleImageLeave}
                                className="border cursor-pointer hover:scale-110 hover:bg-[#f4f3e8] border-zinc-500 bg-zinc-700 shadow-lg shadow-zinc-400/[.3] lg:w-32 w-14 h-14 lg:h-32 p-2 lg:p-4 rounded-full"
                                src={src}
                                alt={alts[index]}
                            />
                            {hoveredIndex === index && (
                                <div className={`absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 px-3 py-2 text-sm font-medium ${tooltipBg === 'bg-dark' ? 'text-light' : 'text-dark'} ${tooltipBg} rounded-lg shadow-lg whitespace-nowrap`}>
                                    {alts[index]}
                                    <div className={`absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent ${tooltipBg === 'bg-dark' ? 'border-t-[#1e1e1e]' : 'border-t-lime-300'}`}></div>
                                </div>
                            )}
                        </motion.div>
                    )
                })}
            </motion.div>
        </>
    )
}

export default Skills