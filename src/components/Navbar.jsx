import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <nav className="fixed lg:px-16 bg-transparent w-full top-0 z-99 flex justify-between  items-center lg:p-4 p-4">
                <div className='w-4'/>
                <div className="lg:flex hidden lg:gap-8 items-center">
                    <Link to="/">
                        <h1 className="font-beiruth hover:text-[#b0e74c] font-semibold backdrop-blur-2xl bg-[#f4f3e8]/[.5] px-4 py-2 rounded-full tracking-widest text-xs lowercase pb-1">Home</h1>
                    </Link>
                    <Link to="/projects">
                        <h1 className="font-beiruth hover:text-[#b0e74c] font-semibold backdrop-blur-2xl bg-[#f4f3e8]/[.5] px-4 py-2 rounded-full tracking-widest text-xs lowercase pb-1">Projects</h1>
                    </Link>
                    <Link to="/resume">
                        <button className="font-beiruth hover:text-[#b0e74c] font-semibold backdrop-blur-2xl bg-[#f4f3e8]/[.5] px-4 py-2 rounded-full tracking-widest text-xs lowercase pb-1">
                            Resume
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="lg:hidden print:hidden backdrop-blur-2xl bg-[#f4f3e8]/[.5] p-3 rounded-full border-4 border-[#1e1e1e]/[.7]"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    )
}

export default Navbar