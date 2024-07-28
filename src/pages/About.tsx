import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../assets/profile3.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imageVariants = {
    visible: { opacity: 1, scale: 1, rotate: 0 },
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  };

  const textVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <Container>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "#ffffff",
            fontSize: "2.5rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          About Me
        </Typography>
      </motion.div>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row-reverse"}
        alignItems={isMobile ? "center" : "flex-start"}
        mt={4}
        ref={ref}
      >
        <Box flexShrink={0} mb={isMobile ? 4 : 0} ml={isMobile ? 0 : 4}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
          </motion.div>
        </Box>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
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
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
