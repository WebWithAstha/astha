
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
            Pune, Maharashtra, India
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
            company="Luxora Experiences"
            duration="Jan 2026 – April 2026"
            keyterms={"Next.js, Performance, SEO"}
            points={[
              "Optimized Core Web Vitals, achieving LCP ~1.6s, CLS 0.0, and Performance score 85+ → 90+ through server/client component refactoring in Next.js",
              "Reduced render delays (~740ms) and improved Time to Interactive by isolating client-side logic and minimizing hydration overhead",
              "Cut 300KB+ unused JavaScript and optimized assets (images/videos), significantly reducing bundle size and load time",
              "Implemented SEO best practices (structured data, sitemap, metadata), improving search visibility and indexing",
              "Built scalable, reusable UI architecture and integrated REST APIs for a global healthcare platform",
              "Collaborated with designers and backend developers to ship product features.",
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
              "Engineered lead capture system by integrating form workflows with Airtable APIs, enabling structured data collection and tracking",
              "Enhanced user engagement through smooth UI/UX interactions using GSAP animations"
            ]}
              live="https://collab24.in/"
              liveLabel="collab24.in"
          />
        </Section>

        {/* PROJECTS */}
        <Section title="Projects">
          <div>
            <h3 className="font-semibold">
              AI & Blockchain-Driven Smart Agriculture Platform
            </h3>

            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
              <li>
               Built multilingual, voice-enabled platform delivering AI-driven crop insights and weather data
              </li>
              <li>
                Integrated LLM APIs and speech-to-text for intelligent interactions
              </li>
              <li>
                Built dashboards and data visualizations using Recharts and
                collaborated on backend & blockchain integration.
              </li>
              <li>
                Focused on accessibility and low-network usability
              </li>
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
        </Section>

   {/* SKILLS */}
<Section title="Skills" spaceY={"space-y-1"}>

  <SkillRow label="Languages">
    JavaScript (ES6+), TypeScript, Java, C
  </SkillRow>

  <SkillRow label="Frontend">
    React.js, Next.js (App Router), HTML5, CSS3, Tailwind CSS,
    Framer Motion, GSAP
  </SkillRow>

  <SkillRow label="Backend">
    Node.js, Express.js, REST APIs, Authentication (JWT, RBAC)
  </SkillRow>

  <SkillRow label="Databases">
    MongoDB, PostgreSQL, Prisma ORM
  </SkillRow>

  <SkillRow label="Performance & Optimization">
    Core Web Vitals (LCP, CLS, TTI), Lazy Loading, Code Splitting,
    Image Optimization, Bundle Optimization
  </SkillRow>

  <SkillRow label="AI & Modern Web">
    LLM API Integration (Gemini), Prompt Engineering (Basics),
    AI Feature Development (Chat/Voice Workflows)
  </SkillRow>

  <SkillRow label="Systems & Scalability">
    AWS (S3, EC2 – exposure, CloudFront – CDN), Redis (Caching), WebSockets, System Design (Basics),
    API Design, Rate Limiting
  </SkillRow>

  <SkillRow label="Testing & DevOps">
    Jest, Docker, CI/CD Pipelines, Git, GitHub
  </SkillRow>

  <SkillRow label="Tools">
    Postman, Firebase, Cloudinary, Figma
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

const Section = ({ title, children,spaceY }) => (
  <section className="mt-6">
    <h2 className="uppercase text-sm font-semibold tracking-wide border-b border-zinc-400 pb-1 mb-3">
      {title}
    </h2>
    <div className={`${spaceY ? spaceY : "space-y-4"}`}>{children}</div>
  </section>
)

const ExperienceItem = ({ role, company, keyterms, duration, points, live, liveLabel }) => (
  <div>
    <div className="flex justify-between items-start">
      <div className="mb-1">

      <div className="flex gap-2 items-center">
        <h3 className="font-semibold">{role} — {company}</h3>
         ⌇
        <p className="text-sm text-neutral-600">{keyterms}</p>
      
         {/* <p>Next.js, Performance, SEO</p> */}
      </div>
      </div>
      <span className="text-sm text-neutral-500">{duration}</span>
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
  return (
    <div className="sticky bottom-4 mx-6 justify-end flex  mb-4 print:hidden">
      <button
        onClick={() => window.print()}
        className="px-4 py-2 text-sm font-medium rounded-md
                   bg-neutral-900 text-white
                   hover:bg-neutral-800 transition"
      >
        Download PDF
      </button>
    </div>
  )
}
