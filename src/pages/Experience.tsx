import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSpring, animated } from "react-spring";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

const StyledCard = styled(Card)(() => ({
  backgroundColor: "#2c3e50",
  color: "#ffffff",
  borderRadius: "10px",
  marginBottom: "1rem",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  },
}));

const skills = {
  blackcoffer: ["React", "Typescript", "Opensearch", "Elastic EUI", "GitHub"],
  vesta: [
    "React",
    "TypeScript",
    "Material-UI",
    "PHP Laravel",
    "Azure",
    "MySql",
    "GitHub",
  ],
  netfotech: ["React", "Tailwind CSS", "React Hooks", "GitHub"],
};

const Experience: React.FC = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <Container>
      <animated.div style={props}>
        <Typography variant="h3" gutterBottom style={{ color: "#ffffff" }}>
          Experience
        </Typography>
        <Box mb={4}>
          <StyledCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="subtitle1" style={{ color: "#00FF7F" }}>
                    July'24 - present
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    Blackcoffer
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Software Developer
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Working on Wazuh, a free and open source security platform
                    unifying XDR and SIEM capabilities. It protects workloads
                    across various environments. Handling frontend operations
                    using TSX and Elastic EUI to enhance data security and user
                    experience.
                  </Typography>
                  <Box>
                    {skills.blackcoffer.map((skill) => (
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
          <StyledCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="subtitle1" style={{ color: "#00FF7F" }}>
                    Mar'24 - July'24
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    Vesta: Quality Assurance Platform by CheckInn
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Software Developer Intern
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Revitalized CheckInn's web UI by enhancing user interfaces
                    using React, TypeScript, and Material-UI. Optimized back-end
                    operations by refining PHP Laravel code and APIs. Conducted
                    API testing and troubleshooting, boosting system robustness
                    and efficiency.
                  </Typography>
                  <Box>
                    {skills.vesta.map((skill) => (
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
          <StyledCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="subtitle1" style={{ color: "#00FF7F" }}>
                    Jan'24-Mar'24
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    Netfotech Solutions
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Software Engineer Trainee
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Developed "BookMyStall" using React, focusing on dynamic
                    interfaces and responsive styling with Tailwind CSS.
                    Enhanced application performance with React Hooks and led
                    the creation of reusable components, promoting modular
                    design and collaborative development through GitHub
                    contributions.
                  </Typography>
                  <Box>
                    {skills.netfotech.map((skill) => (
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
        </Box>
      </animated.div>
    </Container>
  );
};

export default Experience;
