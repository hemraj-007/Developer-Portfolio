// src/pages/Projects.tsx
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSpring, animated } from 'react-spring';

const Projects: React.FC = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <Container>
      <animated.div style={props}>
        <Typography variant="h3" gutterBottom>Projects</Typography>
        <Box mb={4}>
          <Typography variant="h5">Pay-Insta-Wallet</Typography>
          <Typography variant="body1" paragraph>
            Developed a Payment system using the MERN stack, featuring essential digital wallet functionalities from user registration to transactions. Implemented robust security with JWT authentication, Zod validation, and CORS, combined with MongoDB for efficient data management. Enhanced user interface and experience with React and Tailwind CSS, ensuring a responsive and intuitive design.
          </Typography>
        </Box>
        <Box mb={4}>
          <Typography variant="h5">DialogeDen Blog</Typography>
          <Typography variant="body1" paragraph>
            Created a Medium-style blog with React and Tailwind CSS on the front-end and Cloudflare Workers for serverless back-end, ensuring type-safe data handling with TypeScript and Zod validation. Optimized database interactions using Prisma ORM with a PostgreSQL database and secured user authentication with JWTs. Streamlined development by packaging common validation logic into an npm package, utilizing a monorepo setup for efficient full-stack application maintenance.
          </Typography>
        </Box>
      </animated.div>
    </Container>
  );
};

export default Projects;
