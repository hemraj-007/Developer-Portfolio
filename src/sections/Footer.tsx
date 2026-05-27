import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSnackbar } from "notistack";
import { motion } from "framer-motion";
import { cardSx, links } from "../data/portfolio";

interface FooterProps {
  onContactOpen: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactOpen }) => {
  const { enqueueSnackbar } = useSnackbar();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      enqueueSnackbar("Email copied to clipboard", { variant: "success" });
    } catch {
      enqueueSnackbar("Could not copy email", { variant: "error" });
    }
  };

  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      sx={{ py: { xs: 4, md: 6 }, mt: 2 }}
    >
      <Box
        sx={{
          ...cardSx,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            Let&apos;s build remotely
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 0.5 }}>
            <EmailIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {links.email}
            </Typography>
            <IconButton size="small" onClick={copyEmail} aria-label="Copy email">
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <LocationOnIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {links.location}
            </Typography>
          </Stack>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: "block" }}>
            © {new Date().getFullYear()} Hemraj Bhatia
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
          <IconButton href={links.github} target="_blank" aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
          <IconButton href={links.linkedin} target="_blank" aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
          <Button variant="contained" onClick={onContactOpen}>
            Contact Me
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
