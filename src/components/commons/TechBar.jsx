import React from 'react'

const TechBar = () => {
     const techImages = [
    {
      id: 1,
      src: "https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-3d-icon-png-download-7578002.png?f=webp",
      alt: "Node.js",
      className: "w-26 absolute top-10 left-20",
      animation: "float 2s ease-in-out infinite"
    },
    {
      id: 2,
      src: "https://juststickers.in/wp-content/uploads/2016/05/reactjs-badge.png",
      alt: "React",
      className: "w-26 absolute top-32 right-16",
      animation: "float 2s ease-in-out infinite 0.2s"
    },
    {
      id: 3,
      src: "https://cdn3d.iconscout.com/3d/free/thumb/free-mongo-db-3d-icon-png-download-7577996.png",
      alt: "MongoDB",
      className: "w-26 absolute bottom-40 left-10",
      animation: "float 2s ease-in-out infinite 0.4s"
    },
    {
      id: 4,
      src: "https://cdn3d.iconscout.com/3d/free/thumb/free-sql-3d-icon-png-download-7578022.png",
      alt: "SQL",
      className: "w-26 absolute bottom-20 right-32",
      animation: "float 2s ease-in-out infinite 0.6s"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dnokci0nm/image/upload/v1759054538/Gemini_Generated_Image_416s5m416s5m416s-removebg-preview_bt1yxs.png",
      alt: "AI/ML",
      className: "w-26 absolute top-80 left-90 transform -translate-x-1/2 -translate-y-1/2",
      animation: "float 2s ease-in-out infinite 0.8s"
    },
    {
      id: 6,
      src: "https://cdn3d.iconscout.com/3d/free/thumb/free-docker-3d-icon-png-download-4695749.png",
      alt: "Docker",
      className: "w-26 absolute top-20 left-1/2 transform -translate-x-1/2",
      animation: "float 2s ease-in-out infinite 1s"
    },
    {
      id: 7,
      src: "https://cdn3d.iconscout.com/3d/premium/thumb/figma-3d-icon-png-download-8412295.png",
      alt: "Figma",
      className: "w-26 absolute bottom-2 left-1/4",
      animation: "float 2s ease-in-out infinite 1.2s"
    },
    {
      id: 8,
      src: "https://cdn3d.iconscout.com/3d/free/thumb/free-framer-3d-icon-png-download-7578003.png",
      alt: "Framer",
      className: "w-26 absolute top-1/2 right-84 transform -translate-y-1/2",
      animation: "float 2s ease-in-out infinite 1.4s"
    },
    {
      id: 9,
      src: "https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-icon-png-download-5221066.png",
      alt: "GitHub",
      className: "w-26 absolute bottom-16 left-1/2 transform -translate-x-1/2",
      animation: "float 2s ease-in-out infinite 1.6s"
    },
    {
      id: 10,
      src: "https://cdn3d.iconscout.com/3d/premium/thumb/firebase-logo-3d-icon-png-download-12947050.png",
      alt: "Firebase",
      className: "w-18 absolute top-10 right-1/4",
      animation: "float 2s ease-in-out infinite 1.8s"
    }
  ];
  return (
     <div className="overflow-hidden bg-sky-700 py-30 relative">
       {/* <h1 className="font-helvetica my-20 mx-40 bg-amber-600 w-20 text-center p-2 pr-4 rounded-r-full">Skills</h1> */}
        <p className="text font-cabinet font-normal px-10 md:mb-20 md:px-40 text-2xl md:text-[180px] w-3/4 leading-[90%]">
           Skills Mastered
          </p>
        
        <div className="flex animate-scroll -rotate-25 whitespace-nowrap">
          {/* First set of images */}
          {techImages.reverse().map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="md:w-44 w-16 flex-shrink-0  bg-sky-900 py-6 px-4 md:py-18 md:px-12 rounded-t-full rounded-b-full"
              style={{ animation: image.animation }}
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {techImages.map((image) => (
            <img
              key={`duplicate-${image.id}`}
              src={image.src}
              alt={image.alt}
              className="md:w-44 w-16 flex-shrink-0  bg-sky-900 py-6 px-4 md:py-18 md:px-12 rounded-t-full rounded-b-full"
              style={{ animation: image.animation }}
            />
          ))}
        </div>
        <div className="flex animate-scroll rotate-25 whitespace-nowrap">
          {/* First set of images */}
          {techImages.reverse().map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="md:w-48 w-16 flex-shrink-0 bg-sky-800  py-6 px-4 md:py-18 md:px-12  rounded-t-full rounded-b-full"
              style={{ animation: image.animation }}
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {techImages.map((image) => (
            <img
              key={`duplicate-${image.id}`}
              src={image.src}
              alt={image.alt}
              className="md:w-48 w-16 flex-shrink-0 bg-sky-800  py-6 px-4 md:py-18 md:px-12  rounded-t-full rounded-b-full"
              style={{ animation: image.animation }}
            />
          ))}
        </div>
      </div>
  )
}

export default TechBar