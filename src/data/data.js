import wire from '../assets/wire.png'
import testing from '../assets/testing.png'
import searching from '../assets/searching.png'
import collab from '../assets/collab.png'
import helpdesk from '../assets/Helpdesk.png'
import cocokind from '../assets/cocokind.png'
import agro from '../assets/agro.png'
import bitly from '../assets/bitly.png'
import linkedincs from '../assets/linkedin-cs.png'
import healthcs from '../assets/health-cs.png'
export const cs = [
    {
      img: linkedincs,
      step: "01",
      title: "Research & Discovery",
      desc: "Understand users, business goals, pain points and set clear product goals."
    },
    {
      img: healthcs,
      step: "02",
      title: "Design & Prototyping",
      desc: "Create wireframes, user flows, and interactive prototypes to visualize and validate ideas early."
    }
  ]

  export const steps = [
    {
      img: searching,
      step: "01",
      title: "Research & Discovery",
      desc: "Understand users, business goals, pain points and set clear product goals."
    },
    {
      img: wire,
      step: "02",
      title: "Design & Prototyping",
      desc: "Create wireframes, user flows, and interactive prototypes to visualize and validate ideas early."
    },
    {
      img: testing,
      step: "03",
      title: "Testing & Refinement",
      desc: "Test prototypes with users, gather feedback, and iterate to polish the final product."
    },
  ]
  export const projects = [
    {
      img: collab,
      step: "01",
      niche: "Real Estate",
      desc: "A clean, responsive website for a real estate company, designed to showcase services, client brands, and streamline user navigation with a modern, professional interface."
    },
    {
      img: cocokind,
      step: "02",
      niche: "E-commerce",
      desc: "A clean, responsive website for a real estate company, designed to showcase services, client brands, and streamline user navigation with a modern, professional interface."
    },
  ]
  
  
export const fullstackProjects = [
  {
    step: "01",
    title: "Intelligent Helpdesk Copilot Solution",
    status: "Ongoing",
    img: helpdesk,
    stack: "Node.js, Web Sockets, React, Gemini API, Tailwind CSS",
    bullets: [
      "Reduced average ticket resolution time by 40% for 500+ support queries.",
      "Architected Node.js WebSocket chat with XSS protection, reducing security risks by 100%.",
      "Introduced color-coded UI system that improved chat clarity by 4x."
    ],
    github: "https://github.com/WebWithAstha/ai-helpdesk-chat",
    liveLink: "https://ai-inbox-one.vercel.app/",
    path: "/projects/intelligent-helpdesk"
  },
  {
  step: "02",
  title: "Smart URL Shortener with Analytics",
  status: "June 2025",
  img: bitly, // your preview image
  stack: "MERN, Tailwind, JWT, UA-Parser, Recharts",
  bullets: [
    "Enabled 70% faster link sharing with one-click URL shortening, supporting 1000+ links.",
    "Engineered a real-time analytics dashboard with device/browser/location breakdowns, boosting user insights by 4x.",
    "Implemented user-agent parsing and geo-IP tracking with custom API, enhancing analytics granularity by 60%.",
    "Built secure auth flows with JWT and role-based access, reducing unauthorized access attempts by 95%.",
    "Reduced bounce rate by 35% through clear visual data and click tracking on all shared URLs."
  ],
  github: "https://github.com/WebWithAstha/url-shortener-analytics",
  liveLink: "https://shortify.vercel.app/",
  path: "/projects/url-shortener-analytics"
},

  // {
  //   step: "02",
  //   title: "AutoMail AI Agent",
  //   status: "May 2025",
  //   img: collab,
  //   stack: "MERN, MCP, Redis, WebSocket, Google API, SCSS",
  //   bullets: [
  //     "Created AI-driven email system that automated 80% of customer support responses.",
  //     "Integrated Gmail API for seamless email delivery with OAuth 2.0 security.",
  //     "Reduced response time from 4 hours to 15 minutes for priority queries."
  //   ],
  //   github: "https://github.com/WebWithAstha/auto-mailing-ai-agent",
  //   liveLink: "https://automailai.vercel.app/",
  //   path: "/projects/automail-ai-agent"
  // },
  {
    step: "03",
    title: "Inclusive Agriculture Solution with Offline and Decentralized Support",
    status: "April 2025",
    img: agro,
    stack: "MERN, Assembly AI (STT), Blockchain, Twilio (IVR), Eleven Labs (TTS), Google Gemini API, Recharts",
    bullets: [
      "Built multilingual voice interface supporting 11 languages using Assembly AI.",
      "Pioneered blockchain agricultural marketplace increasing farmer profits by 30% within six months.",
      "Integrated weather, pricing, and crop diagnosis APIs into unified dashboard."
    ],
    github: "https://github.com/WebWithAstha/inclusive-agriculture-solution",
    liveLink: "https://smart-agriculture-175o1gevz-astha-lodhis-projects.vercel.app/",
    path: "/projects/inclusive-agriculture-solution"
  }
];


export const testimonials = [
  {
    name: "Saurav Kapoor",
    role: "Founder, Collab24",
    feedback:
    "Astha brings clarity and speed to every project. Her frontend work for our real estate site was exactly what we needed — polished, responsive, and fast.",
    image: cocokind,
  },
  {
    name: "Shristi Sharma",
    role: "UX Mentor, Design For Change",
    feedback:
    "She’s one of the few developers who understands design deeply. Clean structure, thoughtful interactions, and a great collaborator.",
    image: collab,
  },
  // {
  //   name: "Devraj Rathor",
  //   role: "Teammate, Hackathon 'Reimagine'",
  //   feedback:
  //   "Astha led the team with vision and focus. Every screen was purposeful and well executed. We learned a lot from her during the build.",
  //   // image: cocokind,
  // },
];

export const mailToLink = `mailto:quirkyboastudio@gmail.com?subject=Let’s%20Build%20Something%20Awesome&body=Hey%20Astha%2C%0AI%20checked%20your%20portfolio%20and%20I’d%20love%20to%20collaborate%20with%20you%20on%20a%20project.%0A%0AHere%20are%20some%20details%3A%0A-%20Project%20Type%3A%0A-%20Timeline%3A%0A-%20Budget%3A%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%2C%0A[Your%20Name]`;

export const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=quirkyboastudio@gmail.com&su=Collaboration%20Inquiry&body=Hi%20Astha%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20believe%20there’s%20potential%20for%20us%20to%20collaborate%20on%20a%20project.%0A%0AHere%20are%20some%20initial%20details%3A%0A–%20Project%20Type%3A%0A–%20Timeline%3A%0A–%20Budget%3A%0A%0ALet%20me%20know%20if%20you're%20open%20to%20discussing%20this%20further.%0A%0ABest%2C%0A%5BYour%20Name%5D`;


// skills.js (data-only file, no JSX)
export const skills = [
  {
    icon: "code",
    title: "Full-Stack Development",
    points: [
      "MERN stack expertise (MongoDB, Express, React, Node.js)",
      "Clean REST APIs & scalable backend architecture",
      "JWT authentication, session handling & secure auth flows",
      "Real-time apps using WebSockets",
    ],
  },
  {
    icon: "pen",
    title: "UI/UX & Product Design",
    points: [
      "User-first interface design & wireframing",
      "Figma prototyping & design systems",
      "GSAP, Framer Motion & interaction design",
      "Design-to-code implementation with pixel perfection",
    ],
  },
  {
    icon: "settings",
    title: "Dev Tools & Workflow",
    points: [
      "Version control with Git & GitHub",
      "CI/CD, deployment (Vercel, Netlify, Render)",
      "Debugging & performance optimization",
      "Modular codebases with clean file structures",
    ],
  },
  {
    icon: "layers",
    title: "Database & API Integration",
    points: [
      "MongoDB & Firebase for structured and unstructured data",
      "API consumption (REST, third-party APIs like TMDB, Pexels, OpenAI)",
      "Firebase storage & real-time DB handling",
      "Data modeling & schema design",
    ],
  },
  {
    icon: "sparkles",
    title: "Soft Skills & Teamwork",
    points: [
      "Quick problem solver & self-learner",
      "Hackathon team lead (Top 4 nationally)",
      "Client communication & requirement breakdown",
      "Passion for clean UX, teamwork & learning",
    ],
  },
];

// data/experience.js

export const experiences = [
  {
    role: "Backend Developer Intern",
    company: "Sky Info Solutions",
    period: "May 2024 – Present",
    location: "Remote",
    desc: [
      "Built scalable REST APIs and handled session/auth flows.",
      "Integrated Firebase + MongoDB for data and file storage.",
      "Optimized security using JWT, bcrypt and validations.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Firebase", "JWT"],
   
    contributions:[{
      text: "Healthgainer",
      href: "https://github.com/Ankitraghu123/Healthgainer-main/tree/astha"
    },
    {
      text: "Shaadi Mahotsav",
      href: "https://github.com/Ankitraghu123/shadi-mahotsav-backend"
    },]

  },
  {
    role: "Web Developer Intern",
    company: "Collab24",
    period: "Sep 2024 – Apr 2025",
    location: "Remote",
    desc: [
      "Developed a responsive real estate website using Nextjs + Typescript + Tailwind.",
      "Implemented GSAP animations and Swiper sliders.",
      "Collaborated with founders to match Figma mockups 1:1.",
    ],
    tech: ["Nextjs", "TypeScript", "GSAP", "SwiperJS"],
    link: {
      text: "Visit Site",
      href: "https://www.collab24.in/",
    },
  },
  {
    role: "Freelance Frontend Developer",
    company: "Various Clients",
    period: "2023 – Present",
    location: "Remote",
    desc: [
      "Delivered multiple responsive sites and dashboards.",
      "Worked closely with clients to translate UX designs into code.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Figma"],
  },
];


