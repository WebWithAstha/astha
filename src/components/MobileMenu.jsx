import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { X } from "lucide-react"

const MobileMenu = ({ isOpen, onClose }) => {
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "#about" },
        { name: "Skills", path: "#skills" },
        { name: "Projects", path: "/projects" },
        { name: "Resume", path: "/resume" }
    ]

    const menuVariants = {
        hidden: { 
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        visible: { 
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[98]"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-dark z-[99] flex flex-col p-8"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="self-end mb-12 p-2 rounded-full bg-light/10 hover:bg-light/20 transition-colors"
                        >
                            <X className="w-6 h-6 text-light" />
                        </button>

                        {/* Menu Items */}
                        <nav className="flex flex-col space-y-8">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    custom={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="relative group"
                                >
                                    {item.path.startsWith("#") ? (
                                        <a
                                            href={item.path}
                                            onClick={onClose}
                                            className="text-4xl font-beiruth text-light hover:text-lime-300 transition-colors flex items-center justify-between"
                                        >
                                            {item.name}
                                            <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">+</span>
                                        </a>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            onClick={onClose}
                                            className="text-4xl font-beiruth text-light hover:text-lime-300 transition-colors flex items-center justify-between"
                                        >
                                            {item.name}
                                            <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">+</span>
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </nav>

                        {/* Footer */}
                        <div className="mt-auto opacity-70">
                            <div className="text-light text-xs">
                                Made with ❤️
                            </div>
                            <div className="text-light  text-sm mt-2">
                                © 2025
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default MobileMenu
