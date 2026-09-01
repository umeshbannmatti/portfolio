import Image from "next/image";
import { ArrowDown, BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { personal, socialLinks } from "@/data/portfolio";

const icons = { LinkedIn: BriefcaseBusiness, Gmail: Mail, GitHub: Code2 };

export function Header() {
  return (
    <header id="home" className="identity home-hero section-anchor">
      <div className="hero-copy">
        <p className="eyebrow">TECHNICAL LEAD · ENTERPRISE ARCHITECTURE</p>
        <h1>{personal.name}</h1>
        <p className="hero-summary">{personal.summary}</p>
        <div className="hero-actions">
          <a className="hero-primary" href="#experience">
            Explore my experience <ArrowDown size={17} />
          </a>
        </div>
        <div className="social-row">
          {socialLinks.map((link) => {
            const Icon = icons[link.label as keyof typeof icons];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={link.label}
              >
                <Icon size={19} strokeWidth={1.7} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-orbit" aria-hidden="true"></div>
        <div className="profile-photo-frame">
          <Image
            className="profile-photo"
            src="/umesh.png"
            alt={`Portrait of ${personal.name}`}
            fill
            sizes="(max-width: 767px) 255px, (max-width: 991px) 325px, 410px"
            priority
          />
        </div>
        <div className="experience-badge">
          <strong>15+</strong>
          <span>
            years building
            <br />
            enterprise platforms
          </span>
        </div>
      </div>
    </header>
  );
}
