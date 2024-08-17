import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        backgroundColor: theme.palette.background.default,
        borderRadius: "10px 10px 0 0",
        boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <List>
        <ListItem
          button
          component={RouterLink}
          to="/"
          onClick={handleDrawerToggle}
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            },
          }}
        >
          <ListItemText
            primary="Home"
            sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
          />
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/about"
          onClick={handleDrawerToggle}
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            },
          }}
        >
          <ListItemText
            primary="About"
            sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
          />
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/experience"
          onClick={handleDrawerToggle}
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            },
          }}
        >
          <ListItemText
            primary="Experience"
            sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
          />
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/projects"
          onClick={handleDrawerToggle}
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            },
          }}
        >
          <ListItemText
            primary="Projects & Skills"
            sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.primary.main,
          boxShadow: "none",
          borderBottom: "none",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: theme.palette.text.primary,
              fontWeight: "bold",
              fontSize: "1.5rem",
              "&:hover": {
                color: "#00FF7F",
              },
            }}
          >
            Hemraj Bhatia
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: "#ffffff",
                  background: "radial-gradient(circle, #673ab7, #512da8)",
                  borderRadius: "50%",
                  padding: 1.5,
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "rotate(360deg)",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
                  },
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Modal
                open={drawerOpen}
                onClose={handleDrawerToggle}
                closeAfterTransition
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    overflow: "hidden",
                    borderColor: "divider",
                  }}
                >
                  {drawer}
                </Box>
              </Modal>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                component={RouterLink}
                to="/"
                sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/about"
                sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
              >
                About
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/experience"
                sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
              >
                Experience
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/projects"
                sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
              >
                Projects & Skills
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </ThemeProvider>
  );
};

export default Header;
