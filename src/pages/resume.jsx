
const Resume = () => {
  document.title = "Astha Lodhi – Fullstack Developer Resume"
  return (
    <div className="bg-white not-print:pt-4">
      <main className="bg-white not-print:border-x border-zinc-200 text-neutral-900 max-w-4xl mx-auto p-6 sm:p-10 font-sans print:p-8">
        {/* HEADER */}
        <header className="sm:text-center space-y-2 pb-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            Astha Lodhi
          </h1>

          <p className="text-sm sm:block flex flex-col text-neutral-600">
            <a href="mailto:lodhiastha85@gmail.com" className="hover:underline">
              lodhiastha85@gmail.com
            </a>
            <span className="sm:inline-block hidden px-4">
              {"  •  "}
            </span>
            <a href="tel:+917489098294" className="hover:underline">
              +91 7489098294
            </a>
            <span className="sm:inline-block hidden px-4">
              {"  •  "}
            </span>
            Bhopal, M.P., India
          </p>

          <div className="flex flex-row  sm:justify-center text-sm text-sky-800">
            <a
              href="https://www.linkedin.com/in/asthalodhi"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <span className="inline-block sm:px-4">
              ⌇
            </span>
            <a
              href="https://github.com/WebWithAstha"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <span className="inline-block sm:px-4">
              ⌇
            </span>
            <a
              href="https://astha-chi.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Portfolio
            </a>
          </div>
        </header>

        {/* EXPERIENCE */}
        <Section title="Experience">
          <ExperienceItem
            role="Frontend Developer"
            company="CureMeAbroad"
            duration="Jan 2026 – April 2026"
            keyterms={"Next.js, Nodejs, Performance, SEO"}
            points={[
              "Optimized Core Web Vitals (LCP ~1.6s, CLS 0.0, Performance 85+ → 90+) through efficient client-server rendering strategies in Next.js",
              "Reduced render delays (~740ms) and improved Time to Interactive by isolating client-side logic and minimizing hydration overhead",
              "Cut 300KB+ unused JavaScript and optimized assets (images/videos), significantly reducing bundle size and load time",
              // "Collaborated closely with backend team to improve API response handling and reduce render delays (~740ms), enhancing overall application performance",
              // "Worked with server-side data fetching and caching strategies to improve Time to Interactive and reduce unnecessary client-side load",
              "Contributed to structuring API interactions and request handling for scalable and maintainable frontend-backend communication",
              "Implemented SEO best practices (structured data, sitemap, metadata), improving search visibility and indexing",
              "Built scalable, reusable UI architecture and integrated REST APIs for a global healthcare platform",
            ]}
            live="https://curemeabroad.com/"
            liveLabel="curemeabroad.com"
          />

          <ExperienceItem
            role="Fullstack Developer"
            company="Sheriyans Pvt. Ltd"
            duration="Aug 2025 – Jan 2026"
            keyterms={"ERP, RBAC, APIs"}
            points={[
              "Engineered a scalable Construction ERP using Next.js, Node.js, Prisma, PostgreSQL, and MongoDB",
              "Designed component-level RBAC for 7+ roles, reducing unauthorized access risk by ~40%",
              "Implemented lightweight state management using Zustand for efficient component-level state handling",
              "Automated end-to-end workflow (enquiry → quotation → project), cutting manual effort by ~70%",
              "Optimized backend APIs to ~200ms average latency with ~99.9% reliability",
              "Designed modular REST APIs with validation, error handling, and scalable architecture"
            ]}
          // live="https://drive.google.com/file/d/1zRUFPdEh9fV8iDbpkatVX-YbBpuinwLC/view?usp=sharing"
          // liveLabel="Letter of Completion"
          />

          <ExperienceItem
            role="Web Developer"
            company="Varmine Spaces • Collab24.in"
            duration="Sep 2024 – Jan 2025"
            keyterms={"Lead Systems, UI/UX"}
            points={[
              "Built production-grade features using Next.js and TypeScript in an existing CI/CD pipeline, ensuring successful builds and deployments by resolving integration and runtime issues",
              "Developed responsive real estate platform with optimized lead generation workflows",
              "Built reusable components using Hooks and optimized rendering with memoization techniques",
              "Engineered lead capture system by integrating form workflows with Airtable APIs, enabling structured data collection and tracking",
              "Enhanced user engagement through smooth UI/UX interactions using GSAP animations"
            ]}
            live="https://collab24.in/"
            liveLabel="collab24.in"
          />
        </Section>

        {/* PROJECTS */}
        <Section title="Projects">
        
          <div className="">
            <h3 className="font-semibold">
              AI Interview & Hiring Platform
            </h3>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
              <li>
                Built a production-style AI Interview & Hiring Platform with recruiter/candidate workflows, realtime interview sessions, resume processing, and AI-based candidate evaluation.
              </li>
              <li>
Implemented JWT authentication, RBAC, WebSocket communication, transcript persistence, analytics-ready evaluation storage, and scalable backend architecture.
              </li>
              <li>
                <span className="font-medium">Tech:</span> Python, FastAPI, PostgreSQL, SQLAlchemy, Alembic, WebSockets, Docker, Gemini AI, JWT Auth</li>
              {/* Add once deployed: */}
              <li><span className="font-medium">Link:</span> <a href="https://github.com/WebWithAstha/ai-interview-platform" className="text-sky-800 hover:underline">https://github.com/WebWithAstha/ai-interview-platform</a></li>
            </ul>
          </div>
            <div>
            <h3 className="font-semibold">
              AI & Blockchain-Driven Smart Agriculture Platform
            </h3>

            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
              <li>
                Built a multilingual, voice-enabled agri platform delivering AI-driven crop insights, weather updates, and IVR-based farmer support
              </li>
              <li>
               Integrated LLM APIs, speech-to-text, and Redux for intelligent, scalable interactions
               </li>
              <li>
                Developed dashboards and visualizations using Recharts while collaborating on backend, blockchain integration, and low-network accessibility optimization</li>
              <li>
                <span className="font-medium">Tech:</span> React, Node.js, Express, MongoDB, Twilio IVR, AssemblyAI, Google Gemini API, Recharts
              </li>
              <li>
                <span className="font-medium">Live:</span>{" "}
                <a
                  href="https://smart-agriculture-lake.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-800 hover:underline"
                >
                  smart-agriculture-lake.vercel.app
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden">
            <h3 className="font-semibold">
              AI Content SaaS Platform
            </h3>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
              <li>
                Built a multi-platform AI content generation SaaS for Instagram, LinkedIn, and Reddit with user-selectable LLM models (Gemini, Grok)
              </li>
              <li>
                Architected an async job queue using BullMQ + Redis, reducing average AI response time by ~40% by eliminating blocking LLM API calls
              </li>
              <li>
                Designed dedicated worker architecture to handle unpredictable LLM latency at scale; extending platform with image generation support
              </li>
              <li>
                Building a browser extension for seamless in-context content generation while browsing
              </li>
              <li>
                <span className="font-medium">Tech:</span> Next.js, Node.js, Express, BullMQ, Redis, Gemini API, Grok API
              </li>
              {/* Add once deployed: */}
              <li><span className="font-medium">Link:</span> <a href="https://github.com/WebWithAstha/ai-creator" className="text-sky-800 hover:underline">ai-creator</a></li>
            </ul>
          </div>
        </Section>

        {/* SKILLS */}
        <Section title="Skills" spaceY={"space-y-1"}>

          <SkillRow label="Languages">
            JavaScript (ES6+), TypeScript, Java, Python, C
          </SkillRow>

          <SkillRow label="Frontend">
React.js, Next.js (App Router), Vite,
Hooks (useState, useEffect, useMemo, useCallback, useReducer),
Redux, Zustand, Context API,
React Router v6,
HTML5, CSS3, Tailwind CSS, Framer Motion, GSAP
          </SkillRow>

          <SkillRow label="Backend">
            Node.js, Express.js, FastApi, REST APIs, Authentication (JWT, RBAC)
          </SkillRow>

          <SkillRow label="Databases">
            MongoDB, PostgreSQL, Prisma ORM, SqlAlchemy ORM
          </SkillRow>

          <SkillRow label="Performance & Optimization">
            Core Web Vitals, Code Splitting,
            Image Optimization, Bundle Optimization
          </SkillRow>

          <SkillRow label="AI & Modern Web">BullMQ, Queue Architecture
            LLM API Integration (Gemini), Prompt Engineering (Basics),
            AI Feature Development (Chat/Voice Workflows)
          </SkillRow>

          <SkillRow label="Systems & Scalability">
            AWS S3, Redis (Caching), WebSockets,
            API Design, Rate Limiting
          </SkillRow>

          <SkillRow label="Testing & DevOps">
            Docker, CI/CD Pipelines, Git, GitHub
          </SkillRow>

          <SkillRow label="Tools">
            Postman, Hoppscotch, Firebase, Cloudinary, Figma
          </SkillRow>

        </Section>

        {/* ACHIEVEMENTS */}
        <Section title="Achievements">
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>
              Solved 240+ problems on LeetCode, strengthening data structures
              and algorithmic problem-solving skills.
            </li>
            <li>
              1st Place – Hackathon organized by MP Police at RNTU, Bhopal,
              focused on cybersecurity and safe browsing solutions.
            </li>
          </ul>
        </Section>
        {/* CERTIFICATIONS */}
        <Section title="Certifications">
          <ul className="text-sm space-y-1">
            <li>
              <a
                href="https://drive.google.com/file/d/1tvCaNX0mBSzoqsDuvlNqjsHRIrYWEMdF/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Frontend Development – Sheriyans Coding School
              </a>
            </li>

            <li>
              <a
                href="https://drive.google.com/file/d/1EHvLliLgFjVfU8XxOiYPJ-lBnDfjBWfo/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Backend Development – Sheriyans Coding School
              </a>
            </li>

            <li>
              <a
                href="https://drive.google.com/file/d/15own0nwBosOgGawVGMShDKiImAJKX55_/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                C Programming – Sheriyans Coding School
              </a>
            </li>
          </ul>
        </Section>


        {/* EDUCATION */}
        <Section title="Education">
          <p className="text-sm">
            <span className="font-medium">
              LNCT Group of Colleges, Bhopal
            </span>
            <br />
            B.Tech (2022 – 2026) · CGPA: 7.5 / 10
          </p>
        </Section>
      </main>
      <DownloadResumeButton />

    </div>

  )
}

export default Resume

/* ---------- Helper Components ---------- */

const Section = ({ title, children, spaceY }) => (
  <section className="mt-6">
    <h2 className="uppercase text-sm font-semibold tracking-wide border-b border-zinc-400 pb-1 mb-3">
      {title}
    </h2>
    <div className={`${spaceY ? spaceY : "space-y-4"}`}>{children}</div>
  </section>
)

const ExperienceItem = ({ role, company, keyterms, duration, points, live, liveLabel }) => (
  <div>
    <div className="flex justify-between items-start gap-16">
      <div className="mb-1 flex items-center flex-wrap w-max justify-start ">

        <div className="flex flex-row print:flex-col md:gap-2 gap-1 print:gap-0 flex-wrap print:items-start items-center">
          <h3 className="font-semibold md:whitespace-nowrap">{role} — {company}</h3>
          <p className="print:hidden">
            ⌇
          </p>
          <p className="print:hidden text-sm text-neutral-600 whitespace-nowrap">{keyterms}</p>

          {/* <p>Next.js, Performance, SEO</p> */}
        </div>
      </div>
      <span className="text-sm text-neutral-500 md:whitespace-nowrap min-w-44">{duration}</span>
    </div>

    <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
      {points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
      {live && (
        <li key={10} className="">
          <span className="font-medium">Live:</span>{" "}
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="text-sky-800 hover:underline"
          >
            {liveLabel || live}
          </a>
        </li>
      )}
    </ul>
  </div>
)

const SkillRow = ({ label, children }) => (
  <p className="text-sm">
    <span className="font-medium">{label}:</span> {children}
  </p>
)


const DownloadResumeButton = () => {
  const handleDownload = () => {
    const name = "Astha_Lodhi"
    const role = "Full_Stack_Developer"

    const today = new Date()
    const formattedDate = today.toISOString().split("T")[0] // YYYY-MM-DD

    const fileName = `${name}_${role}_${formattedDate}`

    // Set document title (this becomes PDF name)
    const originalTitle = document.title
    document.title = fileName

    window.print()

    // Restore original title after print
    setTimeout(() => {
      document.title = originalTitle
    }, 1000)
  }
  return (
    <div className="sticky bottom-4 mx-6 justify-end flex  mb-4 print:hidden">
      <button
        onClick={handleDownload}
        className="px-4 py-2 text-sm font-medium rounded-md
                   bg-neutral-900 text-white
                   hover:bg-neutral-800 transition"
      >
        Download PDF
      </button>
    </div>
  )
}
