import { skills } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section
      id="expertise"
      className="skills section-anchor"
      aria-labelledby="skills-title"
    >
      <SectionHeading id="skills-title">TECHNICAL EXPERTISE</SectionHeading>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.category}>
            <h4>{skill.category}</h4>
            <p>{skill.items.join("  |  ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
