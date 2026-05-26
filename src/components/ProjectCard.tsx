import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cardSx, type Project } from "../data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
  onPreviewImage: (src: string, title: string) => void;
  prefersReducedMotion: boolean;
  enableTilt: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onPreviewImage,
  prefersReducedMotion,
  enableTilt,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!enableTilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={handlePointerLeave}
      style={
        enableTilt && !prefersReducedMotion
          ? {
              rotateX,
              rotateY,
              transformPerspective: 900,
            }
          : undefined
      }
      sx={{
        ...cardSx,
        p: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "box-shadow 0.25s ease",
        boxShadow: isHovered
          ? "0 20px 48px rgba(28, 43, 58, 0.14)"
          : cardSx.boxShadow,
      }}
    >
      <Box
        component="button"
        type="button"
        onClick={() => onPreviewImage(project.image, project.title)}
        aria-label={`Preview ${project.title} screenshot`}
        sx={{
          border: "none",
          padding: 0,
          cursor: "zoom-in",
          width: "100%",
          display: "block",
          bgcolor: "transparent",
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          sx={{
            width: "100%",
            height: { xs: 160, sm: 190 },
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
      <Box
        sx={{
          p: { xs: 2, sm: 2.5 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: "secondary.main", fontWeight: 700, letterSpacing: "0.08em" }}
        >
          {project.tagline}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
          {project.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1, lineHeight: 1.65, flex: 1 }}>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap" sx={{ mt: 1.5 }}>
          {project.tech.map((t) => (
            <Chip key={t} label={t} size="small" variant="outlined" />
          ))}
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }} flexWrap="wrap" useFlexGap>
          <Button
            size="small"
            variant="contained"
            startIcon={<GitHubIcon />}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            component="a"
          >
            View code
          </Button>
          {project.liveUrl && (
            <Button
              size="small"
              variant="outlined"
              startIcon={<OpenInNewIcon />}
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              component="a"
            >
              Live demo
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
