import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  imageSrc: string | null;
  title: string;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  imageSrc,
  title,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {imageSrc && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 1200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "rgba(26, 35, 50, 0.85)",
            p: { xs: 2, sm: 3 },
          }}
        >
          <IconButton
            onClick={onClose}
            aria-label="Close preview"
            sx={{
              position: "absolute",
              top: { xs: 12, sm: 24 },
              right: { xs: 12, sm: 24 },
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.15)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component={motion.img}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            src={imageSrc}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            sx={{
              maxWidth: "100%",
              maxHeight: { xs: "80vh", sm: "90vh" },
              borderRadius: "12px",
              objectFit: "contain",
              boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            }}
          />
        </Box>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
