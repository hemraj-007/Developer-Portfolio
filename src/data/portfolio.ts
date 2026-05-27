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
  "Redux",
  "Zustand",
  "React Query",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Tailwind CSS",
  "NextAuth",
  "Cloudflare Workers",
  "OpenAI APIs",
  "REST APIs",
  "AWS Amplify",
  "Elastic UI",
];

export const heroRoleSteps: (string | number)[] = [
  "Remote Software Engineer",
  2000,
  "Next.js / React Engineer",
  2000,
  "Full Stack Product Builder",
  2000,
];

export const links = {
  email: "hemrajbhatia38@gmail.com",
  github: "https://github.com/hemraj-007",
  linkedin: "https://www.linkedin.com/in/hemraj7/",
  resume: "/Hemraj_Bhatia_Resume.pdf",
  location: "Jaipur, Rajasthan, India - Remote",
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
      "Lead frontend execution for PreEmpt, an AI-powered strategic decision intelligence platform, moving a production interface from legacy HTML/CSS/JavaScript into a scalable Next.js architecture.",
      "Build React and TypeScript product surfaces that connect with Node.js + Express APIs, OpenAI-powered response flows, and external service integrations.",
      "Work as second lead across three client-facing projects, joining requirement calls and delivering remote-ready frontend solutions with Elastic UI.",
    ],
  },
  {
    company: "Vesta · Quality Assurance Platform (CheckInn)",
    role: "Software Developer Intern",
    period: "Mar 2024 — Jun 2024",
    highlights: [
      "Improved a live QA platform with React, TypeScript, and Material UI updates that lifted engagement and reduced UI-related support friction.",
      "Debugged PHP Laravel APIs and contributed across multiple repositories, strengthening performance and review speed for the team.",
    ],
  },
  {
    company: "Netfotech Solutions",
    role: "Software Engineer Trainee",
    period: "Jan 2024 — Mar 2024",
    highlights: [
      "Built BookMyStall with React and Tailwind CSS, focusing on responsive booking flows that held up cleanly across mobile and desktop.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SubTrack",
    tagline: "Subscription & spend intelligence",
    description:
      "Full-stack subscription tracker that reads CSV/PDF bank statements, detects recurring charges, visualizes spend trends, and warns users before renewals become unwanted charges.",
    tech: ["Next.js", "Node.js", "Express", "PDF/CSV parsing", "Analytics"],
    image: projectTwo,
    githubUrl: "https://github.com/hemraj-007/SubTrack",
  },
  {
    title: "Cityscope",
    tagline: "Full-stack community platform",
    description:
      "Community platform built from the ground up with authentication, content creation, likes, replies, filtering, JWT-secured APIs, Prisma, and separate frontend/backend deployments.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"],
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
