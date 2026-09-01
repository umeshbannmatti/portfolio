import { overview, personal } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
export function Welcome() {
  return (
    <section
      id="profile"
      className="content-section profile-section section-anchor"
    >
      <SectionHeading>PROFESSIONAL PROFILE</SectionHeading>
      <div className="profile-intro">
        <p>{personal.summary}</p>
        <p>{personal.value}</p>
      </div>
      <div className="overview-grid">
        {overview.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <dl className="profile-facts">
        <div>
          <dt>Current organization</dt>
          <dd>{personal.organization}</dd>
        </div>
        <div>
          <dt>Designation</dt>
          <dd>{personal.title}</dd>
        </div>
        <div>
          <dt>Education</dt>
          <dd>
            {personal.education}
            <br />
            {personal.college}
          </dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{personal.location}</dd>
        </div>
      </dl>
    </section>
  );
}
