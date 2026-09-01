import { SectionHeading } from "./SectionHeading";
export function About() {
  return (
    <section className="content-section about-focus section-anchor">
      <SectionHeading>BUILDING PLATFORMS THAT LAST</SectionHeading>
      <div className="about-editorial">
        <div className="prose">
          <p>
            My work sits at the intersection of architecture, engineering
            leadership, cloud transformation, and hands-on delivery.
          </p>
          <p>
            I lead enterprise Sitecore implementations across traditional and
            headless architectures, while taking ownership of the wider
            ecosystem—from React and .NET services to Azure infrastructure and
            delivery pipelines.
          </p>
          <p>
            I enjoy modernizing complex platforms, improving the way teams ship
            software, and finding the simplest durable solution to difficult
            technical problems.
          </p>
        </div>
        <ol className="working-principles" aria-label="Working principles">
          <li><span>01</span><div><strong>Think in systems</strong><p>Connect product, platform, cloud, and delivery decisions.</p></div></li>
          <li><span>02</span><div><strong>Lead hands-on</strong><p>Stay close to implementation while enabling engineering teams.</p></div></li>
          <li><span>03</span><div><strong>Build for change</strong><p>Favor maintainable foundations that can evolve with the business.</p></div></li>
        </ol>
      </div>
    </section>
  );
}
