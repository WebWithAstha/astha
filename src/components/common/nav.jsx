import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './button';
import AnimatedLink from './link';
import { Menu, X } from 'lucide-react'; // icons for mobile toggle

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
        const phone = import.meta.env.VITE_PHONE_NUMBER;


  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="lg:px-40 md:px-16 px-6 lg:py-4 md:py-6 py-2 fixed z-[999] top-0 left-1/2 w-full -translate-x-1/2 w-full bg-zinc-50 flex items-center justify-between">
      <Link to="/" onClick={handleScrollTop}>
        <h1 className="font-logo lg:text-xl md:text-3xl text-[var(--primary)]">Astha</h1>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 items-center">
        <AnimatedLink route="/experience" onClick={handleScrollTop}>Experience</AnimatedLink>
        <AnimatedLink route="/contact" onClick={handleScrollTop}>Contact</AnimatedLink>
        <AnimatedLink route="/skills" onClick={handleScrollTop}>Skills</AnimatedLink>

<a
  href={`tel:${phone}`}
  className="text-sm text-[var(--secondary)] hover:underline font-medium"
>
  {phone}
</a>
        <Button
          onClick={() =>
            window.open(
              'https://drive.google.com/uc?export=download&id=1PJ0q5EIRjaKcLx7K3Jhh9A44zvvM0ux3',
              '_blank'
            )
          }
        >
          Resume
        </Button>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start px-6 py-4 gap-4 z-50">
          <AnimatedLink route="/experience" onClick={handleScrollTop}>Experience</AnimatedLink>
          <AnimatedLink route="/contact" onClick={handleScrollTop}>Contact</AnimatedLink>
          <AnimatedLink route="/skills" onClick={handleScrollTop}>Skills</AnimatedLink>
          <a
            href="tel:+91XXXXXXXXXX" // replace with your real number
            className="text-sm text-[var(--secondary)] hover:underline font-medium"
          >
            +91-7489098294
          </a>
          <Button
            onClick={() =>
              window.open(
                'https://drive.google.com/uc?export=download&id=1PJ0q5EIRjaKcLx7K3Jhh9A44zvvM0ux3',
                '_blank'
              )
            }
          >
            Resume
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
