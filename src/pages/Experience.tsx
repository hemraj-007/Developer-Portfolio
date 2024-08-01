// src/pages/Experience.tsx

import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTrail, animated } from "react-spring";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TypewriterHeading from "../components/TypewriterHeading";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#2c3e50",
  color: "#ffffff",
  borderRadius: "10px",
  marginBottom: "1rem",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
  },
}));

const skills = {
  blackcoffer: [
    "React Js",
    "Typescript",
    "Opensearch",
    "Elastic EUI",
    "GitHub",
  ],
  vesta: [
    "React Js",
    "TypeScript",
    "Material-UI",
    "PHP Laravel",
    "Azure",
    "MySql",
    "GitHub",
  ],
  netfotech: ["React Js", "Tailwind CSS", "React Hooks", "GitHub"],
};

const experiences = [
  {
    period: "July'24-present",
    company: "Blackcoffer",
    position: "Software Developer",
    description:
      "I improved Wazuh's UI using React, TypeScript, and Elastic UI, enhancing user experience and security features. Wazuh is a free, open-source security platform that unifies XDR and SIEM capabilities to protect workloads across diverse environments. I gained experience in UI refactoring and integration with security tools.",
    skills: skills.blackcoffer,
  },
  {
    period: "Mar'24 - July'24",
    company: "Vesta: Quality Assurance Platform by CheckInn",
    position: "Software Developer Intern",
    description:
      "Revitalized CheckInn's web UI by enhancing user interfaces using React, TypeScript, and Material-UI. Optimized back-end operations by refining PHP Laravel code and APIs. Conducted API testing and troubleshooting, boosting system robustness and efficiency.",
    skills: skills.vesta,
  },
  {
    period: "Jan'24-Mar'24",
    company: "Netfotech Solutions",
    position: "Software Engineer Trainee",
    description:
      "Developed 'BookMyStall' using React, focusing on dynamic interfaces and responsive styling with Tailwind CSS. Enhanced application performance with React Hooks and led the creation of reusable components, promoting modular design and collaborative development through GitHub contributions.",
    skills: skills.netfotech,
  },
];

const Experience: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const trail = useTrail(experiences.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
  });

  return (
    <Container>
      <Box textAlign="left" mb={4}>
        <TypewriterHeading
          steps={[
            "E",
            100,
            "Ex",
            100,
            "Exp",
            100,
            "Expe",
            100,
            "Exper",
            100,
            "Experi",
            100,
            "Experie",
            100,
            "Experien",
            100,
            "Experienc",
            100,
            "Experience",
          ]}
          align="left"
        />
      </Box>
      <Box mb={4}>
        {trail.map((style, index) => (
          <animated.div style={style} key={index}>
            <StyledCard>
              <CardContent>
                <Box
                  display="flex"
                  flexDirection={isMobile ? "column" : "row"}
                  justifyContent="space-between"
                  mb={2} // Add marginBottom to create space below the date
                >
                  <Box mb={1}>
                    {" "}
                    {/* Add marginBottom for better spacing */}
                    <Typography
                      variant="subtitle1"
                      style={{ color: "#00FF7F" }}
                    >
                      {experiences[index].period}
                    </Typography>
                  </Box>
                  <Box mt={isMobile ? 2 : 0} ml={isMobile ? 0 : 2}>
                    {" "}
                    {/* Add marginTop and marginLeft for spacing */}
                    <Typography variant="h5" style={{ fontWeight: "bold" }}>
                      {experiences[index].company}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {experiences[index].position}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {experiences[index].description}
                    </Typography>
                    <Box>
                      {experiences[index].skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          style={{
                            marginRight: "0.5rem",
                            marginBottom: "0.5rem",
                            backgroundColor: "#00FF7F",
                            color: "#2c3e50",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </StyledCard>
          </animated.div>
        ))}
      </Box>
    </Container>
  );
};

export default Experience;
