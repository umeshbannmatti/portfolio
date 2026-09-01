import { Award, BadgeCheck } from "lucide-react";
import { certifications, personal } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Credentials() {
  return <section id="credentials" className="content-section credentials-section section-anchor"><SectionHeading>CREDENTIALS</SectionHeading><div className="credential-layout"><div className="education-card"><Award size={30}/><p>Education</p><h3>{personal.education}</h3></div><div className="credential-list">{certifications.map((credential) => <article key={credential.name}><BadgeCheck size={23}/><div><p>{credential.issuer}</p><h3>{credential.name}</h3><span>{credential.focus}</span></div></article>)}</div></div></section>;
}
