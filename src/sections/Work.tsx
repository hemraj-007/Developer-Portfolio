import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { cardSx, experiences } from "../data/portfolio";

const Work: React.FC = () => {
  return (
    <Box id="work" className="page-section" sx={{ py: { xs: 5, md: 8 } }}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Experience
      </Typography>
      <Box className="timeline">
        {experiences.map((exp, index) => (
          <Box
            key={exp.company}
            className="timeline-item"
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Box className="timeline-dot" aria-hidden />
            <Box sx={{ ...cardSx, flex: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {exp.company}
              </Typography>
              <Box sx={{ mt: 0.5 }}>
                <Typography
                  color="secondary.main"
                  component="span"
                  sx={{ fontWeight: 600, display: "block" }}
                >
                  {exp.role}
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 600,
                    color: "text.secondary",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    display: "block",
                    mt: 0.25,
                  }}
                >
                  {exp.period}
                </Typography>
              </Box>
              <Box
                component="ul"
                className="timeline-bullets"
                sx={{
                  mt: 1.5,
                  pl: { xs: 1.5, sm: 2.2 },
                  pr: 0,
                  m: 0,
                  color: "text.secondary",
                }}
              >
                {exp.highlights.map((point, bulletIndex) => (
                  <Typography
                    component={motion.li}
                    key={point}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.08 + bulletIndex * 0.06,
                    }}
                    sx={{ mb: 1, lineHeight: 1.7, "&:last-child": { mb: 0 } }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Work;
