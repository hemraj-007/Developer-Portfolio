// src/pages/About.tsx
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from 'react-spring';

const About: React.FC = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <Container>
      <animated.div style={props}>
        <Typography variant="h3" gutterBottom>About Me</Typography>
        <Typography variant="body1" paragraph>
          I am currently pursuing my B.Tech in Computer and Communication Engineering at Manipal University Jaipur. I have a strong foundation in software development with experience in various programming languages and technologies.
        </Typography>
        <Typography variant="body1" paragraph>
          My skills include Python, C, C++, JavaScript, TypeScript, Material UI, Tailwind CSS, Next.js, and the MERN stack (MongoDB, Express.js, React, Node.js). I am proficient in using Git, VS Code, Postman, and PyScripter for development.
        </Typography>
      </animated.div>
    </Container>
  );
};

export default About;
