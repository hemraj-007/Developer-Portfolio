import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
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
      onClick={handleDrawerToggle}
      sx={{
        width: 250,
        padding: 2,
        backgroundColor: theme.palette.primary.main,
        height: "100%",
      }}
      role="presentation"
    >
      <List>
        <ListItem button component={RouterLink} to="/">
          <ListItemText
            primary="Home"
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem button component={RouterLink} to="/about">
          <ListItemText
            primary="About"
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem button component={RouterLink} to="/experience">
          <ListItemText
            primary="Experience"
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem button component={RouterLink} to="/projects">
          <ListItemText
            primary="Projects & Skills"
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.primary.main }}
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
            }}
          >
            Hemraj Bhatia
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sx={{
                  "& .MuiDrawer-paper": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.text.primary,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                component={RouterLink}
                to="/"
                sx={{ color: theme.palette.text.primary }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/about"
                sx={{ color: theme.palette.text.primary }}
              >
                About
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/experience"
                sx={{ color: theme.palette.text.primary }}
              >
                Experience
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/projects"
                sx={{ color: theme.palette.text.primary }}
              >
                Projects & Skills
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
