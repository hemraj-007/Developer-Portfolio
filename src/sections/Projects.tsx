import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

interface ProjectsSectionProps {
  onPreviewImage: (src: string, title: string) => void;
  prefersReducedMotion: boolean;
  enableTilt: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onPreviewImage,
  prefersReducedMotion,
  enableTilt,
}) => {
  return (
    <Box id="projects" className="page-section" sx={{ py: { xs: 5, md: 8 } }}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Featured Projects
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onPreviewImage={onPreviewImage}
            prefersReducedMotion={prefersReducedMotion}
            enableTilt={enableTilt}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsSection;
