// src/components/Footer.tsx
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Instagram } from "@mui/icons-material";

const FooterContainer = styled("footer")(({ theme }) => ({
  marginTop: "2rem",
  padding: "1rem",
  backgroundColor: "#2c3e50",
  color: "#ffffff",
  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem",
  },
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Box
            display="flex"
            alignItems="center"
            mb={1}
            flexDirection={{ xs: "column", sm: "row" }}
            textAlign={{ xs: "center", sm: "left" }}
          >
            <EmailIcon sx={{ mr: { xs: 0, sm: 1 }, mb: { xs: 1, sm: 0 } }} />
            <Typography variant="body1">hemrajbhatia38@gmail.com</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexDirection={{ xs: "column", sm: "row" }}
            textAlign={{ xs: "center", sm: "left" }}
          >
            <LocationOnIcon
              sx={{ mr: { xs: 0, sm: 1 }, mb: { xs: 1, sm: 0 } }}
            />
            <Typography variant="body1">
              364/1 Raja Park, Jaipur, Rajasthan, India - 302004
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mb={2} flexWrap="wrap">
          <IconButton color="inherit" href="https://github.com/hemraj-007">
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/hemraj7/"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/hemraj_bhatia7/"
          >
            <Instagram />
          </IconButton>
        </Box>
        <Typography variant="body1" align="center">
          © 2024 Hemraj Bhatia
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
