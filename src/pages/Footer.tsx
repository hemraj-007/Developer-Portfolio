import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import ContactDialog from "../components/ContactDialog";
import { motion } from "framer-motion";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const FooterContainer = styled("footer")(({ theme }) => ({
  marginTop: "2rem",
  padding: "2rem 1rem",
  backgroundColor: "#2c3e50",
  color: "#ffffff",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
  },
  boxShadow: "0 -5px 15px rgba(0, 0, 0, 0.3)",
}));

const ContactButton = styled(Button)(() => ({
  color: "#ffffff",
  borderColor: "#00FF7F",
  "&:hover": {
    backgroundColor: "#00FF7F",
    color: "#2c3e50",
  },
  fontWeight: "bold",
}));

const LeftSide = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Footer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpand(!expand);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
              mb={4}
            >
              <LeftSide
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "center", md: "flex-start" }}
                textAlign={{ xs: "center", md: "left" }}
                mb={{ xs: 2, md: 0 }}
                flex={1}
              >
                <Box display="flex" alignItems="center" mb={1}>
                  <EmailIcon sx={{ mr: 1 }} />
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    hemrajbhatia38@gmail.com
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <LocationOnIcon sx={{ mr: 1 }} />
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    364/1 Raja Park, Jaipur, Rajasthan, India - 302004
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Roboto, sans-serif" }}
                >
                  © 2024 Hemraj Bhatia
                </Typography>
              </LeftSide>
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "center", md: "flex-end" }}
                textAlign={{ xs: "center", md: "right" }}
                flex={1}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    textAlign: { xs: "center", md: "right" },
                  }}
                >
                  Let's Collaborate
                </Typography>
                <Typography
                  variant="body2"
                  paragraph
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    textAlign: { xs: "center", md: "right" },
                  }}
                >
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </Typography>
                <Box
                  display="flex"
                  gap={1}
                  mb={2}
                  justifyContent={{ xs: "center", md: "flex-end" }}
                >
                  <IconButton
                    color="inherit"
                    href="https://github.com/hemraj-007"
                  >
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
                    <InstagramIcon />
                  </IconButton>
                </Box>
                <ContactButton variant="outlined" onClick={handleClickOpen}>
                  Contact Me
                </ContactButton>
              </Box>
            </Box>
          </motion.div>
          <Box display={{ xs: "block", md: "none" }} textAlign="center">
            <Button
              onClick={handleExpandClick}
              endIcon={expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              sx={{ color: "#00FF7F" }}
            >
              {expand ? "Show Less" : "Show More"}
            </Button>
            <Collapse in={expand}>
              <Box mt={2}>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Roboto, sans-serif", mb: 2 }}
                >
                  hemrajbhatia38@gmail.com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Roboto, sans-serif", mb: 2 }}
                >
                  364/1 Raja Park, Jaipur, Rajasthan, India - 302004
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Roboto, sans-serif" }}
                >
                  © 2024 Hemraj Bhatia
                </Typography>
              </Box>
            </Collapse>
          </Box>
        </motion.div>
        <ContactDialog open={open} onClose={handleClose} />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
