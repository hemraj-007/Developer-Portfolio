// src/components/Footer.tsx
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
  return (
    <footer style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#708090' }}>
      <Container maxWidth="sm">
        <Typography variant="body1">© 2024 Hemraj Bhatia</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
