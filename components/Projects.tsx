import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section
      id="projects"
      className="content-section projects-section section-anchor"
    >
      <SectionHeading>ENTERPRISE PROJECTS</SectionHeading>
      <p className="section-lead">
        Programs delivered across transportation, financial services, research,
        automotive, energy, hospitality, manufacturing, and payroll.
      </p>
      <div className="project-grid">
        {projects.map((project, index) => {
          const content = (
            <>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{project.name}</h3>
              {project.href ? (
                <ArrowUpRight size={18} aria-hidden="true" />
              ) : (
                <small>Private platform</small>
              )}
            </>
          );

          return project.href ? (
            <a
              className="project-item"
              href={project.href}
              key={project.name}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name} public website`}
            >
              {content}
            </a>
          ) : (
            <article className="project-item" key={project.name}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}
