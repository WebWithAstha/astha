import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const CircularProgress = ({ progress}) => {
    const size = 60
    const radius = 22
    const strokeWidth = 3
    const center = size / 2

    const audioRef = useRef(null)
    const barsRef = useRef([])
    const [playing, setPlaying] = useState(false)

    // Setup audio
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        audio.volume = 0.06
        audio.loop = true
        audio.muted = false
    }, [])

    // First user interaction → start music
    useEffect(() => {
        const startAudio = () => {
            const audio = audioRef.current
            if (!audio) return

            audio
                .play()
                .then(() => setPlaying(true))
                .catch(() => {})

            window.removeEventListener("click", startAudio)
            window.removeEventListener("touchstart", startAudio)
            window.removeEventListener("touchend", startAudio)
            window.removeEventListener("touchmove", startAudio)
            window.removeEventListener("mousemove", startAudio)
            window.removeEventListener("scroll", startAudio)
        }

        window.addEventListener("click", startAudio)
        window.addEventListener("touchstart", startAudio)
        window.addEventListener("touchend", startAudio)
        window.addEventListener("touchmove", startAudio)
        window.addEventListener("mousemove", startAudio)
        window.addEventListener("scroll", startAudio)

        return () => {
            window.removeEventListener("click", startAudio)
            window.removeEventListener("touchstart", startAudio)
            window.removeEventListener("touchend", startAudio)
            window.removeEventListener("touchmove", startAudio)
            window.removeEventListener("mousemove", startAudio)
            window.removeEventListener("scroll", startAudio)
        }
    }, [])



    // Toggle sound
    const toggleSound = () => {
        const audio = audioRef.current
        if (!audio) return

        if (audio.paused) {
            audio.play()
            setPlaying(true)
        } else {
            audio.pause()
            setPlaying(false)
        }
    }

    return (
        <>
            <audio ref={audioRef} src="/music/ambient.mp3" />
            <div className="cursor-pointer relative z-99 overflow-hidden backdrop-blur-2xl bg-[#f4f3e8]/[.5] rounded-full"
             onClick={toggleSound}
             >
                <motion.svg width={size} height={size}
                style={{position:"relative"}}
                >
                    {/* Background circle */}
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke="#1e1e1e"
                        strokeWidth={strokeWidth}
                        fill="none"
                    />
                    <motion.circle
                        style={{ 
                            pathLength: progress,
                            // rotate: -90,
                            // transformOrigin: "center"
                        }}
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke="#bbf451"
                        strokeWidth={strokeWidth + 1}
                        fill="none"
                        strokeLinecap="round"
                    />
                    
                    {/* Animated music bars */}
                    {[0, 1, 2, 3].map((i) => (
                        <motion.rect
                            key={i}
                            ref={(el) => (barsRef.current[i] = el)}
                            x={21 + i * 5}
                            width="3"
                            rx="1.5"
                            fill="#1e1e1e"
                            animate={playing ? {
                                y: [24, 20 + i * 2, 24, 22, 24],
                                height: [12, 16 - i * 2, 12, 14, 12]
                            } : {
                                y: 24,
                                height: 12
                            }}
                            transition={{
                                duration: 0.6,
                                repeat: playing ? Infinity : 0,
                                delay: i * 0.1,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.svg>
            </div>
        </>
    )
}
export default CircularProgress