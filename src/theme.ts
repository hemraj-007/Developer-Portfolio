import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1c2b3a",
    },
    secondary: {
      main: "#2d6a4f",
    },
    background: {
      default: "#f6f4ef",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a2332",
      secondary: "#4a5568",
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', 'Space Grotesk', sans-serif",
    h1: {
      fontFamily: "'Fraunces', 'Plus Jakarta Sans', serif",
      fontWeight: 600,
      fontSize: "clamp(2rem, 8vw, 4.2rem)",
      lineHeight: 1.12,
      color: "#1a2332",
      letterSpacing: "-0.02em",
      wordBreak: "break-word",
    },
    h2: {
      fontFamily: "'Fraunces', 'Plus Jakarta Sans', serif",
      fontWeight: 600,
      fontSize: "clamp(1.75rem, 4vw, 2.6rem)",
      color: "#1a2332",
      letterSpacing: "-0.02em",
    },
    h4: {
      fontSize: "clamp(1rem, 3.5vw, 1.45rem)",
      fontWeight: 500,
      color: "#2d6a4f",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": {
            paddingLeft: 16,
            paddingRight: 16,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f6f4ef",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 600,
          borderColor: "rgba(45, 106, 79, 0.35)",
          background: "rgba(255, 255, 255, 0.85)",
          color: "#1a2332",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          background: "linear-gradient(135deg, #1c2b3a 0%, #2d4a3e 100%)",
          color: "#ffffff",
          boxShadow: "0 8px 24px rgba(28, 43, 58, 0.22)",
          "&:hover": {
            background: "linear-gradient(135deg, #243548 0%, #356354 100%)",
          },
        },
        outlined: {
          borderColor: "rgba(28, 43, 58, 0.35)",
          color: "#1a2332",
          "&:hover": {
            borderColor: "#2d6a4f",
            background: "rgba(45, 106, 79, 0.08)",
          },
        },
        root: {
          borderRadius: 12,
          fontWeight: 700,
          paddingInline: "1.1rem",
          textTransform: "none",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#1a2332",
          border: "1px solid rgba(28, 43, 58, 0.12)",
          background: "#ffffff",
          "&:hover": {
            background: "rgba(45, 106, 79, 0.1)",
            borderColor: "rgba(45, 106, 79, 0.4)",
          },
        },
      },
    },
  },
});

export default theme;
