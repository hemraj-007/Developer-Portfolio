import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { motion } from "framer-motion";
import profilePhoto from "../assets/profile3.jpg";
import { links } from "../data/portfolio";
import HeroRoleTypewriter, { HeroRoleStatic } from "../components/HeroRoleTypewriter";

interface HeroProps {
  isMobile: boolean;
  prefersReducedMotion: boolean;
  onContactOpen: () => void;
}

const Hero: React.FC<HeroProps> = ({
  isMobile,
  prefersReducedMotion,
  onContactOpen,
}) => {
  return (
    <Box
      id="home"
      className="page-section"
      component={motion.section}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: { xs: "1fr", md: "1fr 0.85fr" },
        gap: { xs: 3, md: 6 },
        py: { xs: 4, sm: 6, md: 10 },
      }}
    >
      <Box
        component={motion.div}
        className="hero-photo-wrap"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        sx={{
          order: { xs: -1, md: 2 },
          justifySelf: { xs: "center", md: "end" },
          width: "100%",
          maxWidth: { xs: "min(100%, 320px)", sm: 400, md: 420 },
        }}
      >
        <Box
          component={motion.div}
          className={`hero-photo-frame${prefersReducedMotion ? "" : " hero-float"}`}
          animate={
            prefersReducedMotion || isMobile ? undefined : { y: [0, -6, 0] }
          }
          transition={
            prefersReducedMotion || isMobile
              ? undefined
              : { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <Box
            component="img"
            src={profilePhoto}
            alt="Hemraj Bhatia — software developer"
            className="hero-photo"
            loading="eager"
            decoding="async"
          />
        </Box>
      </Box>

      <Box
        sx={{
          order: { xs: 0, md: 1 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Chip
          icon={<WbSunnyOutlinedIcon />}
          label={
            isMobile
              ? "Open to full-time roles"
              : "Building clean, confident product experiences"
          }
          sx={{
            mb: 2,
            fontWeight: 600,
            maxWidth: "100%",
            height: "auto",
            bgcolor: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(45, 106, 79, 0.2)",
            color: "secondary.main",
            "& .MuiChip-label": {
              whiteSpace: "normal",
              py: 0.75,
              px: 0.5,
              lineHeight: 1.35,
            },
          }}
        />
        <Typography variant="h1" sx={{ mb: 1 }}>
          Hemraj Bhatia
        </Typography>
        {prefersReducedMotion ? (
          <HeroRoleStatic
            text="Software Engineer · Next.js · Full Stack"
            align={isMobile ? "center" : "left"}
          />
        ) : (
          <HeroRoleTypewriter align={isMobile ? "center" : "left"} />
        )}
        <Typography
          sx={{
            maxWidth: 560,
            color: "text.secondary",
            mb: 3,
            lineHeight: 1.75,
            mx: { xs: "auto", md: 0 },
          }}
        >
          I take ownership from architecture to deployment — migrating legacy frontends,
          integrating APIs, and shipping features that are clear for users and reliable for
          teams. Based in Jaipur, open to full-time roles.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          flexWrap="wrap"
          useFlexGap
          alignItems={{ xs: "stretch", sm: "center" }}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Button
            variant="contained"
            fullWidth={isMobile}
            endIcon={<ArrowOutwardIcon />}
            onClick={onContactOpen}
          >
            Hire Me
          </Button>
          <Button
            variant="outlined"
            fullWidth={isMobile}
            endIcon={<ArrowOutwardIcon />}
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            component="a"
          >
            View Resume
          </Button>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            <IconButton href={links.github} aria-label="GitHub" target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton href={links.linkedin} aria-label="LinkedIn" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton href={`mailto:${links.email}`} aria-label="Email">
              <EmailIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
