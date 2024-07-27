import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#2c3e50"
    >
      <CircularProgress style={{ color: '#00FF7F' }} />
    </Box>
  );
};

export default Loading;
