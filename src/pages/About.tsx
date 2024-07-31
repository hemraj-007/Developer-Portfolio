// src/pages/About.tsx
import React, { useState,useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import logo from "../assets/profile3.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import TypewriterHeading from "../components/TypewriterHeading";
import Typography from "@mui/material/Typography";
import Loading from "../components/Loading";

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading,setLoading]=useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imageAnimation = useSpring({
    transform: inView ? "scale(1) rotate(0deg)" : "scale(0.8) rotate(-10deg)",
    opacity: inView ? 1 : 0,
    config: { mass: 1, tension: 170, friction: 14 },
  });

  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    config: { mass: 1, tension: 170, friction: 14 },
  });

  useEffect(() => {
    // Simulate a loading delay for the About page
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <Container>
       <animated.div style={textAnimation}>
        <TypewriterHeading steps={['A', 100, 'Ab', 100, 'Abo', 100, 'Abou', 100, 'About', 100, 'About M', 100, 'About Me']} />
      </animated.div>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row-reverse"}
        alignItems={isMobile ? "center" : "flex-start"}
        mt={4}
        ref={ref}
      >
        <Box flexShrink={0} mb={isMobile ? 4 : 0} ml={isMobile ? 0 : 4}>
          <animated.div style={imageAnimation}>
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
          </animated.div>
        </Box>
        <animated.div style={textAnimation}>
          <Box
            flex={1}
            sx={{
              backgroundColor: "#2c3e50",
              borderRadius: "10px",
              padding: "2rem",
              color: "#ffffff",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "1.2rem", lineHeight: "2" }}
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
        </animated.div>
      </Box>
    </Container>
  );
};

export default About;
