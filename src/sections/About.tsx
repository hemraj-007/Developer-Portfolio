import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import brandMark from "../assets/r3.png";
import { cardSx } from "../data/portfolio";
import SkillsMarquee from "../components/SkillsMarquee";

interface AboutProps {
  marqueeEnabled: boolean;
}

const About: React.FC<AboutProps> = ({ marqueeEnabled }) => {
  return (
    <Box
      id="about"
      className="page-section"
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      sx={{ py: { xs: 5, md: 8 } }}
    >
      <Box
        sx={{
          ...cardSx,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 1.4fr)" },
          gap: { xs: 3, md: 4 },
          alignItems: "center",
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <Box
          className="brand-mark-panel"
          sx={{
            width: "100%",
            maxWidth: 300,
            minWidth: 0,
            mx: { xs: "auto", md: 0 },
            justifySelf: { md: "start" },
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 16px 32px rgba(28, 43, 58, 0.12)",
          }}
        >
          <Box
            component="img"
            src={brandMark}
            alt="React and Next.js core stack"
            className="brand-mark-img"
            loading="lazy"
            decoding="async"
          />
        </Box>
        <Box sx={{ minWidth: 0, width: "100%", maxWidth: "100%", overflow: "hidden" }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            About
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "1.08rem",
              lineHeight: 1.85,
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            Remote software engineer with hands-on experience across AI decision platforms,
            SaaS tools, and community products. I work across Next.js, React, TypeScript,
            Node.js, Express, Prisma, PostgreSQL, and MongoDB, with a strong feel for
            frontend architecture, API integration, and async collaboration. I am strongest
            on product UI and frontend systems, while actively growing into backend tasks
            like REST APIs, OpenAI integrations, and multi-service response workflows.
          </Typography>
          <SkillsMarquee play={marqueeEnabled} />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
