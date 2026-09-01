import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { personal } from "@/data/portfolio";
export function Footer() {
  return (
    <footer>
      <div>
        <p>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <span>
          <a href={personal.linkedin} aria-label="LinkedIn">
            <BriefcaseBusiness size={17} />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Gmail">
            <Mail size={17} />
          </a>
          <a href={personal.github} aria-label="GitHub">
            <Code2 size={17} />
          </a>
        </span>
      </div>
    </footer>
  );
}
