
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const PortfolioLoader = () => {
  const [showContent, setShowContent] = useState(false);
  const loaderRef = useRef(null);
  const flowerRef = useRef(null);
  const textRef = useRef(null);
  const petalsRef = useRef([]);
  const centerRef = useRef(null);

useEffect(() => {
  // Disable scroll
  document.body.style.overflow = 'hidden';

  // Draw flower petals
  petalsRef.current.forEach((petal, i) => {
    gsap.fromTo(
      petal,
      {
        strokeDasharray: 200,
        strokeDashoffset: 200,
        fill: 'none',
      },
      {
        strokeDashoffset: 0,
        fill: '#7DB8CE',
        duration: 1,
        delay: i * 0.1,
        ease: 'power2.out',
      }
    );
  });

  // Draw center
  gsap.fromTo(
    centerRef.current,
    {
      strokeDasharray: 100,
      strokeDashoffset: 100,
      fill: 'none',
    },
    {
      strokeDashoffset: 0,
      fill: 'white',
      duration: 0.5,
      delay: 1,
      ease: 'power2.out',
    }
  );

  // Animate out
  const timer = setTimeout(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'linear' },
      onComplete: () => {
        setShowContent(true);
        // Re-enable scroll
        document.body.style.overflow = '';
      },
    });

    tl.to(textRef.current, {
      opacity: 0,
      duration: 0.6,
    })
      .to(
        flowerRef.current,
        {
          rotate: 360,
          opacity: 0,
          duration: 0.6,
        },
        '<'
      )
      .to(loaderRef.current, {
        y: '-100%',
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      });
  }, 2000);

  // Clean up
  return () => {
    clearTimeout(timer);
    document.body.style.overflow = '';
  };
}, []);


  if (showContent) return null;

  return (
    <div
      ref={loaderRef}
      className="min-h-screen bg-white fixed top-0 w-full h-screen z-[9999] flex flex-col items-center justify-center"
    >
      {/* SVG Flower */}
      <div className="mb-4" ref={flowerRef}>
        <svg width="100" height="100" viewBox="0 0 200 200">
          {[...Array(6)].map((_, i) => (
            <ellipse
              key={i}
              ref={(el) => (petalsRef.current[i] = el)}
              cx="100"
              cy="50"
              rx="30"
              ry="45"
              stroke="#7DB8CE"
              strokeWidth="3"
              fill="none"
              style={{
                transformOrigin: '100px 100px',
                transform: `rotate(${i * 60}deg)`,
              }}
            />
          ))}
          <circle
            ref={centerRef}
            cx="100"
            cy="100"
            r="15"
            stroke="#7DB8CE"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* Stand By Text */}
      <div ref={textRef} className="text-center">
        <p className="text-xl text-gray-600 font-logo">Stand By <span>...</span></p>
      </div>
    </div>
  );
};

export default PortfolioLoader;
