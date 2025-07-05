import React from 'react';
import AnimatedLink from '../common/link';

const socials = [
  // {
  //   img: "https://cdn-icons-png.flaticon.com/512/3536/3536806.png", // Behance
  //   href: "https://www.behance.net/yourusername",
  //   alt: "Behance",
  // },
  // {
  //   img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", // Instagram
  //   href: "https://www.instagram.com/yourusername",
  //   alt: "Instagram",
  // },
  {
    img: "https://cdn-icons-png.flaticon.com/128/3291/3291695.png", // Instagram
    href: "https://github.com/WebWithAstha",
    alt: "Github",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png", // LinkedIn
    href: "https://www.linkedin.com/in/asthalodhi",
    alt: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <div className='lg:px-40 md:px-16 px-6 lg:py-10 md:py-16 py-10 flex flex-col gap-5 lg:pt-40'>
      <div className="flex justify-end lg:gap-10 md:gap-10 gap-6">
        <AnimatedLink
          route = {'/experience'}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}
          >Experience</AnimatedLink>
          <AnimatedLink
          route = {'/contact'}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}
          >Contact</AnimatedLink>
        <AnimatedLink
        onClick={() => {
    window.open(
      'https://drive.google.com/uc?export=download&id=1PJ0q5EIRjaKcLx7K3Jhh9A44zvvM0ux3',
      '_blank'
    );
  }}
        >Resume</AnimatedLink>
      </div>

      <hr className='opacity-20' />

      <div className="flex md:flex-row flex-col md:items-center w-full md:py-6 justify-between">
        <div className="flex justify-end lg:gap-6 md:gap-4 gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.alt}
            >
              <img
                className="h-10 object-contain opacity-60 hover:opacity-100 duration-200 cursor-pointer"
                src={social.img}
                alt={social.alt}
              />
            </a>
          ))}
        </div>

        <h1 className='font-logo lg:text-5xl md:text-5xl text-3xl text-[var(--primary)]'>
          Astha.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
