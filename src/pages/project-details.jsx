import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fullstackProjects } from "../data/data";
import MoreProjects from "../components/common/more-project";
import Tag from "../components/common/tag";
import { Github, ExternalLink } from "lucide-react";
import BackHeader from "../components/common/backHeader";
import DetailSkeleton from "../components/common/detailSkeleton";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const project = fullstackProjects.find((p) => p.path?.endsWith(slug));

  useEffect(() => {
    // simulate loading
    const timeout = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timeout);
  }, [slug]);

  if (!project) return <div className="p-6">Project not found.</div>;
  if (isLoading) return <DetailSkeleton />;

  return (
    <div className="p-6 lg:px-40 md:px-16 w-full flex flex-col items-center gap-6 pt-16 md:pt-20 lg:pt-24">
      <BackHeader title="Back to Projects" />

      <div className="flex flex-col items-center w-max justify-center gap-4 mb-6 text-center">
        <h1 className="text-3xl font-bold">{project.title}</h1>

        <div className="flex gap-4 items-center justify-center">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-200"
              title="View Code on GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[var(--secondary)] text-[var(--secondary)] bg-[var(--secondary)] text-white hover:bg-[var(--primary)] transition-all duration-200"
              title="Visit Live Website"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <p className="text-gray-600">{project.status}</p>
      </div>

      <img
        className="h-[70vh] w-full object-contain rounded-md"
        src={project.img}
        alt={project.title}
      />

      {project?.stack && (
        <div className="flex gap-2 md:-mt-2 mb-2 flex-wrap">
          {project.stack
            .split(",")
            .map((tag) => tag.trim())
            .map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
        </div>
      )}

      <ul className="list-disc pl-5 space-y-2 text-left w-full max-w-3xl">
        {project.bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <MoreProjects others={fullstackProjects.filter((p) => p.path !== project.path)} />
    </div>
  );
};

export default ProjectDetail;
