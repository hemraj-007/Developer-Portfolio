// src/pages/About.tsx
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";
import Box from "@mui/material/Box";
import logo from "../assets/profile3.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const About: React.FC = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <animated.div style={props}>
        <Typography
          variant="h3"
          gutterBottom
          style={{ color: "#ffffff", fontSize: "2.5rem" }}
        >
          About Me
        </Typography>
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row-reverse"}
          alignItems={isMobile ? "center" : "flex-start"}
          mt={4}
        >
          <Box flexShrink={0} mb={isMobile ? 4 : 0} ml={isMobile ? 0 : 4}>
            <Box
              component="img"
              alt="Hemraj Bhatia"
              src={logo}
              sx={{
                width: 300,
                height: 300,
                objectFit: "cover",
                objectPosition: "center top 30%",
                borderRadius: "10%",
                mb: isMobile ? 4 : 0,
                ml: isMobile ? 0 : 4,
              }}
            />
          </Box>
          <Box flex={1} pr={isMobile ? 0 : 4}>
            <Typography
              variant="body1"
              style={{
                color: "#ffffff",
                fontSize: "1.2rem",
                lineHeight: "2",
                textAlign: isMobile ? "center" : "justify",
              }}
            >
              I'm Hemraj Bhatia, a passionate and dedicated Full Stack Developer
              with a keen interest in learning and exploring new technologies.
              With a strong foundation in JavaScript, React, TypeScript, and
              Next.js, I excel in developing dynamic and responsive web
              applications. I have experience in various projects, including
              payment systems and blog platforms. I am enthusiastic about
              problem-solving and making the web more accessible and open to
              everyone. With professional experience at CheckInn Technologies as
              a Full Stack Developer, I am eager for new opportunities to
              contribute my skills and expertise to exciting and innovative
              projects.
            </Typography>
          </Box>
        </Box>
      </animated.div>
    </Container>
  );
};

export default About;
