// src/components/TypewriterHeading.tsx
import React from 'react';
import Typical from 'react-typical';
import { styled } from '@mui/material/styles';

const StyledHeading = styled(Typical)(({ theme }) => ({
  color: '#00FF7F',
  fontSize: '2.5rem',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    fontSize: '3.5rem',
  },
  fontWeight: 'bold',
  '&::after': {
    content: 'none', // Ensures the cursor is not shown
  },
}));

interface TypewriterHeadingProps {
  steps: (string | number)[];
}

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({ steps }) => {
  return <StyledHeading steps={steps} loop={1} wrapper="h1" />;
};

export default TypewriterHeading;
