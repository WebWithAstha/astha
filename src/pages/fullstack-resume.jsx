const FullstackResume = () => {
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

          <div className="flex flex-row sm:justify-center text-sm text-sky-800">
            <a
              href="https://www.linkedin.com/in/asthalodhi"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <span className="inline-block sm:px-4">
              |
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
              |
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

        {/* PROFESSIONAL SUMMARY */}
        <Section title="Professional Summary">
          <p className="text-sm leading-relaxed">
            Fullstack developer with expertise in React, Next.js, Node.js, and cloud technologies. Specialized in building scalable applications, implementing complex business logic, and optimizing performance across frontend and backend. Proven track record of delivering production-grade features and collaborating with cross-functional teams in fast-paced environments.
          </p>
        </Section>

        {/* CORE COMPETENCIES */}
        <Section title="Core Competencies">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase text-sky-700 mb-2">Frontend Architecture</p>
              <ul className="text-sm space-y-1 text-neutral-700">
                <li>• React.js & Next.js (App Router)</li>
                <li>• TypeScript Component Design</li>
                <li>• State Management & Context API</li>
                <li>• Responsive Design & Accessibility</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-sky-700 mb-2">Backend Development</p>
              <ul className="text-sm space-y-1 text-neutral-700">
                <li>• Node.js & Express.js</li>
                <li>• RESTful API Design</li>
                <li>• Database Design & Optimization</li>
                <li>• Authentication & Authorization</li>
                <li>• Business Logic Implementation</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section title="Professional Experience">
          <ExperienceItem
            role="Frontend Developer"
            company="Luxora Experiences"
            duration="Jan 2026 – Present"
            points={[
              "Building CureMeAbroad, a medical tourism platform enabling patients to explore and compare global treatment options.",
              "Architecting responsive UI components using React, Next.js, and TypeScript with focus on performance and maintainability.",
              "Designing and implementing search, filtering, and comparison features for hospitals, doctors, and medical treatments.",
              "Integrating REST APIs and optimizing data structures for efficient rendering of large medical datasets.",
              "Implementing SEO strategies in Next.js including dynamic metadata, sitemaps, robots.txt, and structured data markup.",
              "Partnering with designers and backend developers to translate requirements into production-grade features.",
            ]}
          />

          <ExperienceItem
            role="Fullstack Developer"
            company="Sheriyans Pvt. Ltd"
            duration="Aug 2025 – Jan 2026"
            points={[
              "Spearheaded frontend development of a Construction ERP + CRM platform in a monorepo architecture, handling sales, projects, labor, inventory, and finance workflows.",
              "Designed and implemented dynamic Role-Based Access Control (RBAC) with granular component-level permissions supporting 7+ operational roles.",
              "Developed internal management tools enabling real-time workflow tracking, reporting dashboards, and automation features.",
              "Collaborated extensively with designers and business stakeholders to refine user experience and deliver complex business logic.",
            ]}
          />

          <ExperienceItem
            role="Frontend Developer"
            company="Varmine Spaces • Collab24.in"
            duration="Sep 2024 – Jan 2025"
            points={[
              "Developed production-grade features for a real estate collaboration platform using Next.js and TypeScript in a CI/CD-enabled environment.",
              "Built responsive UIs for property listings, lead generation workflows, and client management systems.",
              "Integrated Airtable-backed APIs and enhanced user experience with smooth GSAP animations.",
              "Optimized component rendering and implemented lazy loading strategies for improved performance.",
              "Live: collab24.in",
            ]}
          />
        </Section>

        {/* KEY PROJECTS */}
        <Section title="Featured Projects">
          <div>
            <h3 className="font-semibold">
              AI & Blockchain-Driven Smart Agriculture Platform
            </h3>
            <p className="text-xs text-neutral-500 mt-1">Fullstack Development</p>

            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
              <li>
                Led comprehensive frontend development of a multilingual, voice-enabled platform serving farmers across regions.
              </li>
              <li>
                Implemented offline IVR system using Twilio APIs and integrated AI-powered crop insights with real-time weather data.
              </li>
              <li>
                Designed and built interactive dashboards with data visualizations using Recharts for agricultural metrics and analytics.
              </li>
              <li>
                Collaborated on backend integration with MongoDB, Node.js, and blockchain systems for secure, transparent transactions.
              </li>
              <li>
                <span className="font-medium">Tech Stack:</span> React, Next.js, Node.js, Express, MongoDB, Prisma, Twilio IVR, AssemblyAI, Google Gemini API, Recharts, Tailwind CSS
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

        {/* TECHNICAL SKILLS */}
        <Section title="Technical Skills">
          <SkillRow label="Languages">
            JavaScript (ES6+), TypeScript, Java, C, SQL
          </SkillRow>

          <SkillRow label="Frontend">
            React.js, Next.js (App Router), HTML5, CSS3, Tailwind CSS, Framer Motion, GSAP, Responsive Design
          </SkillRow>

          <SkillRow label="Backend">
            Node.js, Express.js, RESTful APIs, Authentication, Authorization, Business Logic
          </SkillRow>

          <SkillRow label="Databases & ORMs">
            MongoDB, PostgreSQL, Prisma ORM, Data Modeling, Query Optimization
          </SkillRow>

          <SkillRow label="Tools & DevOps">
            Git, GitHub, CI/CD Pipelines, Postman, Firebase, Cloudinary, Vercel, Docker basics
          </SkillRow>

          <SkillRow label="APIs & Integrations">
            REST APIs, Twilio, Google APIs, Airtable, AssemblyAI, Stripe, OAuth
          </SkillRow>
        </Section>

        {/* ACHIEVEMENTS */}
        <Section title="Achievements">
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>
              Solved 240+ problems on LeetCode, demonstrating strong data structures and algorithmic problem-solving capabilities essential for fullstack development.
            </li>
            <li>
              1st Place – MP Police Cybersecurity Hackathon at RNTU, Bhopal, for developing a secure browsing solution protecting users from online threats.
            </li>
            <li>
              Built and deployed 5+ production applications on Vercel and cloud platforms, handling 1000+ monthly active users.
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
                className="hover:underline font-medium text-sky-800"
              >
                Frontend Development – Sheriyans Coding School
              </a>
            </li>

            <li>
              <a
                href="https://drive.google.com/file/d/1EHvLliLgFjVfU8XxOiYPJ-lBnDfjBWfo/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="hover:underline font-medium text-sky-800"
              >
                Backend Development – Sheriyans Coding School
              </a>
            </li>

            <li>
              <a
                href="https://drive.google.com/file/d/15own0nwBosOgGawVGMShDKiImAJKX55_/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="hover:underline font-medium text-sky-800"
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
            B.Tech in Computer Science and Engineering (2022 – 2026)
            <br />
            <span className="text-neutral-600">CGPA: 7.4 / 10</span>
          </p>
        </Section>
      </main>
      <DownloadResumeButton />
    </div>
  )
}

export default FullstackResume

/* ---------- Helper Components ---------- */

const Section = ({ title, children }) => (
  <section className="mt-6">
    <h2 className="uppercase text-sm font-semibold tracking-wide border-b border-zinc-400 pb-1 mb-3">
      {title}
    </h2>
    <div className="space-y-2">{children}</div>
  </section>
)

const ExperienceItem = ({ role, company, duration, points }) => (
  <div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold">{role}</h3>
        <p className="text-sm text-neutral-600">{company}</p>
      </div>
      <span className="text-sm text-neutral-500">{duration}</span>
    </div>

    <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
      {points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
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
    <div className="sticky bottom-4 mx-6 justify-end flex mb-4 print:hidden">
      <button
        onClick={() => window.print()}
        className="px-4 py-2 text-sm font-medium rounded-md
                   bg-sky-700 text-white
                   hover:bg-sky-800 transition"
      >
        Download PDF
      </button>
    </div>
  )
}
