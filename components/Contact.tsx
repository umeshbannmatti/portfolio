import { BriefcaseBusiness, Mail, MapPin } from "lucide-react";
import { personal } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section
      id="contact"
      className="content-section contact-simple section-anchor"
    >
      <SectionHeading>LET’S CONNECT</SectionHeading>
      <div className="contact-panel">
        <div>
          <p className="contact-kicker">Open to meaningful conversations</p>
          <h3>
            Architecture, enterprise platforms, cloud transformation, and
            intelligent automation.
          </h3>
          <p>
            Connect with me to exchange ideas, discuss technical leadership, or
            explore opportunities to build dependable digital platforms.
          </p>
        </div>
        <div className="contact-actions">
          <a href={personal.linkedin} target="_blank" rel="noreferrer">
            <BriefcaseBusiness size={19} />
            Connect on LinkedIn
          </a>
          <a href={`mailto:${personal.email}`}>
            <Mail size={18} />
            {personal.email}
          </a>
          <span>
            <MapPin size={18} />
            {personal.location}
          </span>
        </div>
      </div>
    </section>
  );
}
