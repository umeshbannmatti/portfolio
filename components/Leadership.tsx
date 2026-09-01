import { responsibilityGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Leadership() {
  return <section className="content-section leadership-section"><SectionHeading>HOW I LEAD &amp; DELIVER</SectionHeading><div className="leadership-grid">{responsibilityGroups.map((group, index) => <article key={group.title}><span className="group-number">0{index + 1}</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>;
}
