import { Link } from "react-router-dom"
import { personalInfo } from "../data/personalInfo"

const Footer = () => {
    return (
        <footer className="w-full bg-dark text-light overflow-hidden  lg:px-24 px-6 pt-20 pb-10">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-8">
                <div className="flex lg:gap-12 gap-8 flex-wrap lg:flex-nowrap">
                    <div className="space-y-4">
                        <h1 className="text-xs font-bold tracking-widest text-white/60 uppercase">Links</h1>
                        <ul className="space-y-2 flex flex-col">
                            <Link to="/">
                                <span className="text-sm inline-block hover:text-lime-300 transition-colors cursor-pointer">Home</span>
                            </Link>
                            <a href="#about">
                                <span className="text-sm inline-block hover:text-lime-300 transition-colors cursor-pointer">About</span>
                            </a>
                            <a href="#skills">
                                <span className="text-sm inline-block hover:text-lime-300 transition-colors cursor-pointer">Skills</span>
                            </a>
                            <Link to="/projects">
                                <span className="text-sm inline-block hover:text-lime-300 transition-colors cursor-pointer">Projects</span>
                            </Link>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-xs font-bold tracking-widest text-white/60 uppercase">Socials</h1>
                        <ul className="space-y-4 flex flex-col">
                            <a href={`mailto:${personalInfo.contact.email}`} target="_blank" rel="noopener noreferrer">
                                <li className="text-sm hover:text-lime-300 transition-colors cursor-pointer">Email</li>
                            </a>
                            <a href={personalInfo.socials.linkedin.url} target="_blank" rel="noopener noreferrer">
                                <li className="text-sm hover:text-lime-300 transition-colors cursor-pointer">LinkedIn</li>
                            </a>
                            <a href={personalInfo.socials.github.url} target="_blank" rel="noopener noreferrer">
                                <li className="text-sm hover:text-lime-300 transition-colors cursor-pointer">GitHub</li>
                            </a>
                            <a href={personalInfo.socials.instagram.url} target="_blank" rel="noopener noreferrer">
                                <li className="text-sm hover:text-lime-300 transition-colors cursor-pointer">Instagram</li>
                            </a>
                            <a href={`https://wa.me/${personalInfo.contact.phone.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer">
                                <li className="text-sm hover:text-lime-300 transition-colors cursor-pointer">Whatsapp</li>
                            </a>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-xs font-bold tracking-widest text-white/60 uppercase">Other</h1>
                        <ul className="space-y-2">
                            <Link to="/resume">
                                <li className="text-sm hover:text-lime-300 transition-colors cursor-pointer">Resume</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-xs font-bold tracking-widest text-white/60 uppercase">Local Time</h1>
                        <ul className="space-y-2">
                            <li className="text-sm text-white/80">GMT +5:30</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 lg:justify-end items-start lg:items-start">
                    <a href={`tel:${personalInfo.contact.phone}`}>
                        <button className="bg-transparent border border-white/20 hover:border-lime-300 hover:text-lime-300 text-light rounded-full px-6 py-3 text-sm font-medium transition-all duration-300">
                            {personalInfo.contact.phone}
                        </button>
                    </a>
                    <a href={`mailto:${personalInfo.contact.email}`}>
                        <button className="bg-lime-300 hover:bg-lime-400 text-dark rounded-full px-6 py-3 text-sm font-bold transition-all duration-300">
                            {personalInfo.contact.email}
                        </button>
                    </a>
                </div>
            </div>
            <div className="lg:flex justify-center items-center overflow-hidden">
                <h1 className="font-calligraphy mx-auto md:text-[20vw] text-9xl  my-10 -lg:mb-40  text-light hover:text-white/20 transition-colors duration-500">
                    {personalInfo.name.split(' ')[0]}
                </h1>
            </div>
            <div className="flex justify-between items-center border-t border-white/10 pt-8 lg:px-0 flex-wrap gap-4">
                <div className="text-sm text-white/60">
                    © 2024 {personalInfo.name}. All rights reserved.
                </div>
                <div className="text-xs text-white/40 hover:text-white/60 transition-colors">
                    Designed & Built with ❤️
                </div>
            </div>
        </footer>
    )
}

export default Footer
