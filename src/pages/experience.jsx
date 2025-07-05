import React from "react";
import { CalendarDays, ExternalLink } from "lucide-react";
import { experiences } from "../data/data";
import BackHeader from "../components/common/backHeader";

const ExperienceTimeline = () => {
  return (
    <div className="pt-20 pb-10 lg:px-40 md:px-16 px-6 w-full max-w-[1600px] mx-auto">
      <BackHeader />
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary)]">
        My Experience & Journey
      </h1>

      <div className="relative border-l-2 md:mt-16 border-zinc-200 pl-6 rounded space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[var(--primary)] border-4 border-white rounded-full shadow-md transition-all duration-300 group-hover:scale-110" />

            {/* Card */}
            <div className="bg-white p-6 py-1 rounded-lg transition-all duration-300">
              <h2 className="text-xl font-semibold text-zinc-800 mb-1">
                {exp.role}
              </h2>
              <p className="text-sm text-zinc-500 mb-2">{exp.company}</p>

              <div className="flex items-center gap-3 text-sm text-zinc-400 mb-4">
                <CalendarDays size={16} />
                <span>{exp.period}</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">{exp.location}</span>
              </div>

              {/* Description */}
              <ul className="list-disc text-sm text-zinc-700 pl-5 space-y-1 mb-4">
                {exp.desc.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              {exp.tech?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-zinc-100 text-zinc-700 text-xs px-2 py-1 rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Contributions Section */}
              {exp.contributions?.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-zinc-600 mb-2">
                    Key Contributions
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.contributions.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--secondary)] border border-zinc-200 rounded-full px-3 py-1 hover:bg-[var(--secondary)] hover:text-white transition-all"
                      >
                        <ExternalLink size={14} />
                        {item.text}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Optional single link */}
              {exp.link && (
                <a
                  href={exp.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--secondary)] hover:underline text-sm"
                >
                  <ExternalLink size={14} />
                  {exp.link.text}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
