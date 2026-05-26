import projectOne from "../assets/project1.png";
import projectTwo from "../assets/project-3.png";
import projectThree from "../assets/project4.png";
import projectM32 from "../assets/project2.png";

export const SCROLL_OFFSET = 88;

export const SECTION_IDS = ["home", "about", "work", "projects"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Tailwind CSS",
  "AWS Amplify",
  "Elastic UI",
];

export const heroRoleSteps: (string | number)[] = [
  "Software Engineer",
  2000,
  "Next.js Developer",
  2000,
  "Full Stack Builder",
  2000,
];

export const links = {
  email: "hemrajbhatia38@gmail.com",
  github: "https://github.com/hemraj-007",
  linkedin: "https://www.linkedin.com/in/hemraj7/",
  resume:
    "https://drive.google.com/file/d/1iNaiS1sJtjHirXd0DGZWQ6luqCMZyIVa/view",
  location: "Jaipur, Rajasthan, India",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
};

export const experiences: Experience[] = [
  {
    company: "Blackcoffer",
    role: "Software Engineer",
    period: "Jul 2024 — Present",
    highlights: [
      "Own frontend delivery on PreEmpt, an AI-powered strategic decision platform — leading a production migration from legacy HTML/CSS/JS to Next.js with a scalable app architecture.",
      "Integrate React and TypeScript UIs with Node.js + Express APIs and ship reliably through AWS Amplify.",
      "Act as second lead across three client projects: requirement discussions, technical planning, and end-to-end frontend execution with Elastic UI.",
    ],
  },
  {
    company: "Vesta · Quality Assurance Platform (CheckInn)",
    role: "Software Developer Intern",
    period: "Mar 2024 — Jun 2024",
    highlights: [
      "Shipped React, TypeScript, and Material UI improvements that strengthened product usability and reduced support friction on a live platform.",
      "Debugged and hardened PHP Laravel APIs while contributing across repos — improving review throughput and backend stability.",
    ],
  },
  {
    company: "Netfotech Solutions",
    role: "Software Engineer Trainee",
    period: "Jan 2024 — Mar 2024",
    highlights: [
      "Built BookMyStall with React and Tailwind CSS — responsive booking flows, reusable components, and performance-minded UI patterns for real users.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SubTrack",
    tagline: "Subscription & spend intelligence",
    description:
      "Parses uploaded CSV/PDF statements to auto-detect recurring charges, surfaces spend trends and category breakdowns on an analytics dashboard, and sends renewal reminders plus weekly digests — cutting manual tracking entirely.",
    tech: ["Next.js", "Node.js", "Express", "PDF/CSV parsing", "Analytics"],
    image: projectTwo,
    githubUrl: "https://github.com/hemraj-007/SubTrack",
  },
  {
    title: "Cityscope",
    tagline: "Full-stack community platform",
    description:
      "Architected a community platform from scratch — auth, posts, likes, replies, and profiles — with JWT-secured APIs, Prisma on PostgreSQL, and deployments on Vercel (frontend) and Render (backend) for steady continuous delivery.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "JWT"],
    image: projectOne,
    githubUrl: "https://github.com/hemraj-007/cityscope",
  },
  {
    title: "DialogDen",
    tagline: "Editorial publishing platform",
    description:
      "Medium-style blogging experience with TypeScript-first validation, serverless APIs, and a polished reading flow — designed for maintainability at scale.",
    tech: ["React", "TypeScript", "Cloudflare Workers", "Prisma", "PostgreSQL"],
    image: projectThree,
    githubUrl: "https://github.com/hemraj-007/DialogDen",
  },
  {
    title: "M32 AI Assistant",
    tagline: "Document-aware learning assistant",
    description:
      "AI-assisted study tool with secure auth, role-based access, and contextual responses grounded in uploaded documents — strong full-stack ownership from UI to API.",
    tech: ["React", "Node.js", "MongoDB", "LLM APIs", "JWT"],
    image: projectM32,
    githubUrl: "https://github.com/hemraj-007/m32ai",
  },
];

export const cardSx = {
  p: { xs: 2, sm: 2.5, md: 3 },
  borderRadius: { xs: "16px", md: "20px" },
  border: "1px solid rgba(28, 43, 58, 0.08)",
  background: "rgba(255, 255, 255, 0.82)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 12px 40px rgba(28, 43, 58, 0.06)",
};

export const scrollToSection = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;
  const top =
    target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
};
