// src/pages/Experience.tsx
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSpring, animated } from 'react-spring';

const Experience: React.FC = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <Container>
      <animated.div style={props}>
        <Typography variant="h3" gutterBottom>Experience</Typography>
        <Box mb={4}>
          <Typography variant="h5">Vesta: Quality Assurance Platform by CheckInn</Typography>
          <Typography variant="subtitle1">Software Developer Intern | Mar'24-present</Typography>
          <Typography variant="body1" paragraph>
            Revitalized CheckInn's web UI by updating and enhancing user interfaces using React, TypeScript, and Material-UI, improving user experience and interface fluidity.
          </Typography>
          <Typography variant="body1" paragraph>
            Optimized back-end operations by debugging and refining PHP Laravel code and APIs, enhancing system performance and reliability.
          </Typography>
          <Typography variant="body1" paragraph>
            Advanced quality assurance for Vesta by conducting thorough API testing and troubleshooting, significantly boosting system robustness and operational efficiency.
          </Typography>
        </Box>
        <Box mb={4}>
          <Typography variant="h5">Netfotech Solutions</Typography>
          <Typography variant="subtitle1">Software Engineer Trainee | Jan'24-Mar'24</Typography>
          <Typography variant="body1" paragraph>
            Developed "BookMyStall” using React, focusing on dynamic interfaces and responsive styling with Tailwind CSS to enhance user engagement across devices.
          </Typography>
          <Typography variant="body1" paragraph>
            Enhanced application performance with React Hooks for state management and led the creation of reusable components, promoting modular design and collaborative development through GitHub contributions.
          </Typography>
        </Box>
      </animated.div>
    </Container>
  );
};

export default Experience;
