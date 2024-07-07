// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001f3f', // Navy Blue
    },
    background: {
      default: '#001f3f',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    h2: {
      color: '#ffffff',
    },
    h3: {
      color: '#ffffff',
    },
    body1: {
      color: '#ffffff',
    },
    body2: {
      color: '#ffffff',
    },
  },
});

export default theme;
