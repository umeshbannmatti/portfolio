export interface SocialLink {
  label: string;
  href: string;
}
export interface TimelineRole {
  title: string;
  company: string;
  dates: string;
  duration: string;
  description: string;
  href?: string;
}
export interface TimelineItem {
  year: string;
  roles: TimelineRole[];
}
export interface BlogPost {
  title: string;
  date: string;
  description: string;
  href: string;
}
export interface Certification {
  name: string;
  issuer: string;
  focus: string;
}

export const personal = {
  name: "Umesh Bannimatti",
  initials: "UB",
  title: "Senior Associate L2 · Technical Lead",
  roles: ["Enterprise Architecture", "Sitecore & .NET", "Azure Cloud & DevOps"],
  location: "Bengaluru, Karnataka, India",
  email: "u.bannimatti@gmail.com",
  linkedin: "https://www.linkedin.com/in/umesh-bannimatti",
  github: "https://github.com/umeshbannmatti",
  summary:
    "Technical Lead with 15+ years of experience delivering scalable enterprise platforms across modern full-stack and cloud technologies including .NET, .NET Core, React, Sitecore, Azure, Azure DevOps, Microsoft Copilot Studio and Power Apps.",
  value:
    "Proven ability to lead end-to-end platform delivery, modernize legacy systems, and drive architecture, DevOps, and cloud transformation initiatives.",
  organization: "Publicis Sapient",
  education: "B. E. in Electronics & Communication",
  college: "STJ Institute of Technology, VTU, 2010",
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#profile" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export const overview = [
  { value: "15+", label: "Years of experience" },
  { value: "10+", label: "Years at Publicis Sapient" },
  { value: "10+", label: "Enterprise Projects" },
  { value: "3", label: "Professional certifications" },
];

export const skills = [
  { category: "Backend", items: [".NET Core", ".NET", "C#", "SQL"] },
  {
    category: "Frontend",
    items: ["React", "JavaScript", "jQuery", "HTML", "CSS"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Microsoft Azure", "Azure DevOps", "YAML CI/CD", "Docker"],
  },
  {
    category: "Digital Experience",
    items: [
      "Sitecore 10.2",
      "Sitecore JSS",
      "Sitecore XP",
      "Headless Architecture",
    ],
  },
  {
    category: "Power Platform",
    items: ["Microsoft Copilot Studio", "Power Automate"],
  },
  {
    category: "Architecture",
    items: [
      "Solution Design",
      "Platform Modernization",
      "System Integration",
      "Performance Engineering",
    ],
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2016",
    roles: [
      {
        title: "Senior Associate L2 · Technical Lead",
        company: "Publicis Sapient",
        dates: "August 2016 – Present",
        duration: "10+ years",
        description:
          "Leading architecture and end-to-end delivery for enterprise platforms across Sitecore, .NET, React, Azure, infrastructure, and DevOps.",
        href: "https://www.publicissapient.com/",
      },
    ],
  },
  {
    year: "2015",
    roles: [
      {
        title: "Software Engineering",
        company: "Verndale",
        dates: "January 2015 – August 2016",
        duration: "1 year 7 months",
        description:
          "Delivered digital experience solutions and enterprise web platforms for global clients.",
        href: "https://www.verndale.com/",
      },
    ],
  },
  {
    year: "2013",
    roles: [
      {
        title: "Software Engineering",
        company: "Mindtree Ltd",
        dates: "May 2013 – December 2014",
        duration: "1 year 7 months",
        description:
          "Built and supported enterprise applications using Microsoft web technologies.",
        href: "https://www.ltm.com/",
      },
    ],
  },
  {
    year: "2010",
    roles: [
      {
        title: "Software Engineering",
        company: "Relyon Softech Ltd",
        dates: "November 2010 – May 2013",
        duration: "2 years 6 months",
        description:
          "Started a professional engineering career developing business software and web applications.",
        href: "https://relyonsoft.com/",
      },
    ],
  },
];

export const projects = [
  { name: "National Car Parks", href: "https://www.ncp.co.uk/" },
  { name: "The AA", href: "https://www.theaa.com/" },
  { name: "Ninety One", href: "https://ninetyone.com/" },
  { name: "Informa · Omdia", href: "https://omdia.tech.informa.com/" },
  { name: "Hyundai Canada", href: "https://www.hyundaicanada.com/" },
  { name: "Allianz Global Investors", href: "https://www.allianzgi.com/" },
  { name: "Five Guys", href: "https://www.fiveguys.com/" },
  { name: "AmeriGas", href: "https://www.amerigas.com/" },
  { name: "Symmons", href: "https://www.symmons.com/" },
  { name: "The Hub · American Express" },
  { name: "Saral PayPack", href: "https://saralpaypack.com/" },
];

export const certifications: Certification[] = [
  {
    name: "Sitecore 10 .NET Developer Certification",
    issuer: "Sitecore",
    focus: "Enterprise digital experience development",
  },
  {
    name: "Azure Developer Associate",
    issuer: "Microsoft · AZ-204",
    focus: "Designing, building, testing, and maintaining cloud applications",
  },
  {
    name: "Azure Solutions Architect Expert",
    issuer: "Microsoft · AZ-303 & AZ-304",
    focus: "Azure infrastructure, applications, security, and data platforms",
  },
];

export const responsibilityGroups = [
  {
    title: "Architecture",
    items: [
      "Lead architecture and technical design for enterprise-scale Sitecore implementations.",
      "Translate stakeholder requirements into scalable, maintainable technical solutions.",
      "Own technical decisions across platform design, infrastructure, and integrations.",
    ],
  },
  {
    title: "Platform Delivery",
    items: [
      "Deliver headless and traditional experiences with Sitecore XP and JSS.",
      "Lead Sitecore upgrades, migrations, third-party integrations, and performance tuning.",
      "Contribute to RFP responses and solution proposals for new opportunities.",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Manage Azure Functions, App Services, VMs, APIM, Application Gateway, Front Door, and Application Insights.",
      "Design CI/CD pipelines with Azure DevOps and reusable YAML templates.",
      "Improve cloud efficiency through usage analysis, right-sizing, and service rationalization.",
    ],
  },
  {
    title: "Engineering Leadership",
    items: [
      "Take ownership across front-end, back-end, cloud, and DevOps to ensure end-to-end delivery.",
      "Perform code reviews and enforce quality, performance, and maintainability standards.",
      "Guide teams through complex delivery decisions with a pragmatic, solution-oriented approach.",
    ],
  },
];

export const blogPosts: BlogPost[] = [];

// export const blogPosts: BlogPost[] = [
//   {
//     title: "LangChain Examples",
//     date: "October 31, 2025",
//     description:
//       "Practical examples exploring language-model chains, prompts, and structured output with Python.",
//     href: "https://bannimatti.wordpress.com/",
//   },
//   {
//     title: "Model Context Protocol (MCP)",
//     date: "2025",
//     description:
//       "Notes and experiments around connecting AI applications with tools and contextual data.",
//     href: "https://bannimatti.wordpress.com/",
//   },
//   {
//     title: "Azure Cognitive Search to Solr",
//     date: "Technical presentation",
//     description:
//       "Architecture, comparison, migration, monitoring, challenges, and go-live considerations for Sitecore search.",
//     href: "https://www.slideshare.net/slideshow/sitecoreazure2solrpptx/257875665",
//   },
// ];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: personal.linkedin },
  { label: "Gmail", href: `mailto:${personal.email}` },
  { label: "GitHub", href: personal.github },
];
