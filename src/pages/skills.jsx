import React from "react";
import {
  Code, PenTool, Settings, Layers, Sparkles
} from "lucide-react";
import { skills } from "../data/data";
import BackHeader from "../components/common/backHeader";
const iconMap = {
  code: <Code size={20} />,
  pen: <PenTool size={20} />,
  settings: <Settings size={20} />,
  layers: <Layers size={20} />,
  sparkles: <Sparkles size={20} />,
};

const Skills = () => {
  return (
    <div className="pt-20 pb-10 lg:px-40 md:px-16 px-6 w-full max-w-[1600px] mx-auto">
        <BackHeader/>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary)]">
        Skills & Strengths
      </h1>
      <p className="text-zinc-600 mb-12 max-w-2xl">
        Over the years, I've cultivated a blend of technical and design expertise to build clean, functional, and impactful digital experiences — from idea to production.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="border border-zinc-200 rounded-xl p-6 hover:shadow-md transition-all bg-white"
          >
            <div className="flex items-center gap-3 mb-4 text-[var(--secondary)]">
              <div className="bg-[var(--secondary)] text-white p-2 rounded-full">
                {iconMap[skill.icon]}
              </div>
              <h2 className="text-lg font-semibold">{skill.title}</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-zinc-700 text-sm">
              {skill.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
