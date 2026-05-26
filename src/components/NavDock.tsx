import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { scrollToSection, type SectionId } from "../data/portfolio";

const sections: { id: SectionId; label: string; icon: React.ReactNode }[] = [
  { id: "home", label: "Home", icon: <HomeOutlinedIcon fontSize="small" /> },
  { id: "about", label: "About", icon: <PersonOutlineIcon fontSize="small" /> },
  { id: "work", label: "Work", icon: <WorkOutlineIcon fontSize="small" /> },
  { id: "projects", label: "Projects", icon: <FolderOpenIcon fontSize="small" /> },
];

interface NavDockProps {
  activeSection: SectionId;
}

const NavDock: React.FC<NavDockProps> = ({ activeSection }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component={motion.nav}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="nav-dock"
      role="navigation"
      aria-label="Main sections"
      sx={{
        position: "fixed",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: { xs: 0.25, sm: 0.5 },
        p: { xs: 0.5, sm: 0.75 },
        borderRadius: { xs: "20px", sm: "999px" },
        border: "1px solid rgba(28, 43, 58, 0.1)",
        backdropFilter: "blur(16px)",
        background: "rgba(255, 255, 255, 0.92)",
        boxShadow: "0 12px 40px rgba(28, 43, 58, 0.12)",
        left: { xs: 12, sm: "50%" },
        right: { xs: 12, sm: "auto" },
        bottom: "max(12px, env(safe-area-inset-bottom, 0px))",
        transform: { xs: "none", sm: "translateX(-50%)" },
        width: { xs: "calc(100% - 24px)", sm: "auto" },
        maxWidth: { xs: "100%", sm: "none" },
        justifyContent: { xs: "space-around", sm: "flex-start" },
      }}
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <Button
            key={section.id}
            className="nav-item"
            size={isMobile ? "medium" : "small"}
            startIcon={section.icon}
            onClick={() => scrollToSection(section.id)}
            aria-label={section.label}
            aria-current={isActive ? "page" : undefined}
            sx={{
              borderRadius: { xs: "14px", sm: "999px" },
              px: { xs: 1.25, sm: 1.5 },
              py: { xs: 1, sm: 0.5 },
              flex: { xs: 1, sm: "0 0 auto" },
              color: isActive ? "secondary.main" : "text.primary",
              textTransform: "none",
              fontWeight: 600,
              minWidth: { xs: 44, sm: "fit-content" },
              justifyContent: "center",
              bgcolor: isActive ? "rgba(45, 106, 79, 0.14)" : "transparent",
              boxShadow: isActive
                ? "inset 0 0 0 1px rgba(45, 106, 79, 0.35)"
                : "none",
              "& .MuiButton-startIcon": {
                margin: { xs: 0, sm: "0 8px 0 -4px" },
              },
              "&:hover": {
                background: "rgba(45, 106, 79, 0.12)",
                color: "secondary.main",
              },
            }}
          >
            <span className="nav-label">{section.label}</span>
          </Button>
        );
      })}
    </Box>
  );
};

export default NavDock;
