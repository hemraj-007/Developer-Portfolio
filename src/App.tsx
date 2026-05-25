import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { motion } from "framer-motion";
import profilePhoto from "./assets/profile3.jpg";
import projectOne from "./assets/project1.png";
import projectTwo from "./assets/project-3.png";
import projectThree from "./assets/project4.png";
import projectFour from "./assets/project5.png";

const sections = [
  { id: "home", label: "Home", icon: <HomeOutlinedIcon fontSize="small" /> },
  { id: "about", label: "About", icon: <PersonOutlineIcon fontSize="small" /> },
  { id: "work", label: "Work", icon: <WorkOutlineIcon fontSize="small" /> },
  { id: "projects", label: "Projects", icon: <FolderOpenIcon fontSize="small" /> },
];

const skills = [
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

type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
};

const experiences: Experience[] = [
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

const projects: Project[] = [
  {
    title: "SubTrack",
    tagline: "Subscription & spend intelligence",
    description:
      "Parses uploaded CSV/PDF statements to auto-detect recurring charges, surfaces spend trends and category breakdowns on an analytics dashboard, and sends renewal reminders plus weekly digests — cutting manual tracking entirely.",
    tech: ["Next.js", "Node.js", "Express", "PDF/CSV parsing", "Analytics"],
    image: projectTwo,
    url: "https://github.com/hemraj-007/SubTrack",
  },
  {
    title: "Cityscope",
    tagline: "Full-stack community platform",
    description:
      "Architected a community platform from scratch — auth, posts, likes, replies, and profiles — with JWT-secured APIs, Prisma on PostgreSQL, and deployments on Vercel (frontend) and Render (backend) for steady continuous delivery.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "JWT"],
    image: projectOne,
    url: "https://github.com/hemraj-007/cityscope",
  },
  {
    title: "DialogDen",
    tagline: "Editorial publishing platform",
    description:
      "Medium-style blogging experience with TypeScript-first validation, serverless APIs, and a polished reading flow — designed for maintainability at scale.",
    tech: ["React", "TypeScript", "Cloudflare Workers", "Prisma", "PostgreSQL"],
    image: projectThree,
    url: "https://github.com/hemraj-007/DialogDen",
  },
  {
    title: "M32 AI Assistant",
    tagline: "Document-aware learning assistant",
    description:
      "AI-assisted study tool with secure auth, role-based access, and contextual responses grounded in uploaded documents — strong full-stack ownership from UI to API.",
    tech: ["React", "Node.js", "MongoDB", "LLM APIs", "JWT"],
    image: projectFour,
    url: "https://github.com/hemraj-007/m32ai",
  },
];

const cardSx = {
  p: 3,
  borderRadius: "20px",
  border: "1px solid rgba(28, 43, 58, 0.08)",
  background: "rgba(255, 255, 255, 0.82)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 12px 40px rgba(28, 43, 58, 0.06)",
};

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="ambient-bg" />

      <Box
        component={motion.nav}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="nav-dock"
        sx={{
          position: "fixed",
          left: "50%",
          bottom: 24,
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
          gap: 0.5,
          p: 0.75,
          borderRadius: "999px",
          border: "1px solid rgba(28, 43, 58, 0.1)",
          backdropFilter: "blur(16px)",
          background: "rgba(255, 255, 255, 0.88)",
          boxShadow: "0 12px 40px rgba(28, 43, 58, 0.12)",
        }}
      >
        {sections.map((section) => (
          <Button
            key={section.id}
            size="small"
            startIcon={section.icon}
            onClick={() => scrollToSection(section.id)}
            sx={{
              borderRadius: "999px",
              px: 1.5,
              color: "text.primary",
              textTransform: "none",
              fontWeight: 600,
              minWidth: "fit-content",
              "&:hover": {
                background: "rgba(45, 106, 79, 0.12)",
                color: "secondary.main",
              },
            }}
          >
            {section.label}
          </Button>
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ pb: 14 }}>
        <Box
          id="home"
          component={motion.section}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          sx={{
            minHeight: "100vh",
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: { xs: "1fr", md: "1fr 0.85fr" },
            gap: { xs: 4, md: 6 },
            py: { xs: 8, md: 10 },
          }}
        >
          <Box
            component={motion.div}
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            sx={{
              order: { xs: -1, md: 2 },
              justifySelf: { xs: "center", md: "end" },
              width: "100%",
              maxWidth: { xs: 340, sm: 400, md: 420 },
            }}
          >
            <Box
              component={motion.div}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="hero-photo-frame"
            >
              <Box
                component="img"
                src={profilePhoto}
                alt="Hemraj Bhatia — software developer"
                className="hero-photo"
                loading="eager"
                decoding="async"
              />
            </Box>
          </Box>

          <Box sx={{ order: { xs: 0, md: 1 } }}>
            <Chip
              icon={<WbSunnyOutlinedIcon />}
              label="Building clean, confident product experiences"
              sx={{
                mb: 2,
                fontWeight: 600,
                bgcolor: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(45, 106, 79, 0.2)",
                color: "secondary.main",
              }}
            />
            <Typography variant="h1" sx={{ mb: 2 }}>
              Hemraj Bhatia
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Software Engineer building production-ready web products with Next.js, React, and
              TypeScript.
            </Typography>
            <Typography sx={{ maxWidth: 560, color: "text.secondary", mb: 3, lineHeight: 1.75 }}>
              I take ownership from architecture to deployment — migrating legacy frontends,
              integrating APIs, and shipping features that are clear for users and reliable for
              teams. Based in Jaipur, open to full-time roles.
            </Typography>
            <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
              <Button
                variant="contained"
                endIcon={<ArrowOutwardIcon />}
                href="mailto:hemrajbhatia38@gmail.com"
              >
                Hire Me
              </Button>
              <Button
                variant="outlined"
                endIcon={<ArrowOutwardIcon />}
                href="https://drive.google.com/file/d/1iNaiS1sJtjHirXd0DGZWQ6luqCMZyIVa/view"
              >
                View Resume
              </Button>
              <IconButton href="https://github.com/hemraj-007" aria-label="GitHub">
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/hemraj7/" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="mailto:hemrajbhatia38@gmail.com" aria-label="Email">
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        <Box
          id="about"
          component={motion.section}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          sx={{ py: 8 }}
        >
          <Box sx={{ ...cardSx, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1.4fr" }, gap: 4, alignItems: "center" }}>
            <Box
              component="img"
              src={profilePhoto}
              alt="Hemraj Bhatia"
              sx={{
                width: "100%",
                maxWidth: 280,
                mx: { xs: "auto", md: 0 },
                borderRadius: "16px",
                objectFit: "cover",
                objectPosition: "center 22%",
                aspectRatio: "4/5",
                boxShadow: "0 16px 32px rgba(28, 43, 58, 0.1)",
              }}
            />
            <Box>
              <Typography variant="h2" sx={{ mb: 2 }}>
                About
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: "1.08rem", lineHeight: 1.85 }}>
                Full stack engineer with hands-on experience across SaaS-style products, AI
                platforms, and consumer-facing apps. I work comfortably across the stack — Next.js
                and React on the front, Node/Express on the back, and cloud deploys on AWS
                Amplify and Vercel. I care about readable code, predictable UX, and shipping on
                deadline without cutting quality.
              </Typography>
              <Stack direction="row" spacing={1.2} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
                {skills.map((skill) => (
                  <Chip key={skill} label={skill} variant="outlined" />
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>

        <Box id="work" sx={{ py: 8 }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Experience
          </Typography>
          <Stack spacing={2}>
            {experiences.map((exp, index) => (
              <Box
                key={exp.company}
                component={motion.div}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                sx={cardSx}
              >
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {exp.company}
                </Typography>
                <Typography color="secondary.main" sx={{ fontWeight: 600, mt: 0.5 }}>
                  {exp.role} · {exp.period}
                </Typography>
                <Box component="ul" sx={{ mt: 1.5, pl: 2.2, m: 0, color: "text.secondary" }}>
                  {exp.highlights.map((point) => (
                    <Typography
                      component="li"
                      key={point}
                      sx={{ mb: 1, lineHeight: 1.7, "&:last-child": { mb: 0 } }}
                    >
                      {point}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box id="projects" sx={{ py: 8 }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Featured Projects
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: 2.5,
            }}
          >
            {projects.map((project, index) => (
              <Box
                key={project.title}
                component={motion.a}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                sx={{
                  ...cardSx,
                  p: 0,
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{ width: "100%", height: 190, objectFit: "cover", display: "block" }}
                />
                <Box sx={{ p: 2.5, flex: 1, display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="overline"
                    sx={{ color: "secondary.main", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    {project.tagline}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1, lineHeight: 1.65, flex: 1 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap" sx={{ mt: 1.5 }}>
                    {project.tech.map((t) => (
                      <Chip key={t} label={t} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
