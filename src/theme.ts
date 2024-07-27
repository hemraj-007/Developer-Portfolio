import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000a1f", // Darker Navy Blue
    },
    background: {
      default: "#000a1f", // Darker background
      paper: "#00122f", // Darker paper background for cards, dialogs, etc.
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5", // Slightly lighter color for secondary text
    },
  },
  typography: {
    h2: {
      color: "#ffffff",
    },
    h3: {
      color: "#ffffff",
    },
    body1: {
      color: "#ffffff",
    },
    body2: {
      color: "#b0bec5", // Use secondary text color for body2
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#00122f", // Darker paper background for components like cards, dialogs, etc.
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#003366", // Darker hover effect for buttons
          },
        },
      },
    },
  },
});

export default theme;
