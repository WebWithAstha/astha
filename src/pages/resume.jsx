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

      {/* EXPERIENCE */}
      <Section title="Experience">
        <ExperienceItem
          role="Fullstack Developer"
          company="Sheriyans Pvt. Ltd"
          duration="Aug 2025 – Present"
          points={[
            "Building a Construction ERP + CRM platform digitizing sales, project, labour, inventory, and finance workflows.",
            "Leading frontend development of internal management tools in a monorepo architecture.",
            "Implementing dynamic Role-Based Access Control (RBAC) with component-level permissions for 7+ operational roles.",
            "Collaborated with designers and business stakeholders to refine UI/UX and deliver automation features.",
          ]}
        />

        <ExperienceItem
          role="Frontend Developer"
          company="Varmine Spaces • Collab24.in"
          duration="Sep 2024 – Jan 2025"
          points={[
            "Developed production-grade features using Next.js and TypeScript in a CI/CD-enabled environment.",
            "Built responsive UIs for real estate listings and lead generation workflows.",
            "Integrated Airtable-backed APIs and enhanced UX using GSAP animations.",
            "Live: collab24.in",
          ]}
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
              Led frontend development of a multilingual, voice-enabled
              platform for farmers.
            </li>
            <li>
              Implemented offline IVR using Twilio and integrated AI-powered
              crop insights and weather data.
            </li>
            <li>
              Built dashboards and data visualizations using Recharts and
              collaborated on backend & blockchain integration.
            </li>
            <li>
            <span className="font-medium">Tech:</span> React, MERN, Twilio,
            AssemblyAI, Google Gemini, Recharts, Blockchain
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
      <Section title="Skills">
        <SkillRow label="Languages">
          Java, JavaScript (ES6+), TypeScript, C
        </SkillRow>

        <SkillRow label="Frontend">
          React.js, Next.js, HTML5, CSS3, Tailwind CSS, Framer Motion, GSAP
        </SkillRow>

        <SkillRow label="Backend">
          Node.js, Express.js, REST APIs
        </SkillRow>

        <SkillRow label="Databases">
          MongoDB, PostgreSQL
        </SkillRow>

        <SkillRow label="Tools & Technologies">
          Git, GitHub, CI/CD Pipelines, Postman, Firebase, Cloudinary,
          Prisma, Figma
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
          B.Tech (2022 – 2026) · CGPA: 7.4 / 10
        </p>
      </Section>
    </main>
      <DownloadResumeButton />

    </div>

  )
}

export default Resume

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
