// src/pages/Home.tsx
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from 'react-spring';

const Home: React.FC = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <Container>
      <animated.div style={props}>
        <Typography variant="h2" gutterBottom>Welcome to My Portfolio</Typography>
        <Typography variant="h5">Hi, I'm Hemraj Bhatia, a Software Developer with experience in full-stack development and a passion for creating efficient and scalable applications.</Typography>
      </animated.div>
    </Container>
  );
};

export default Home;
