import React, { useState } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import theme from "./theme";
import ScrollProgress from "./components/ScrollProgress";
import NavDock from "./components/NavDock";
import ProjectModal from "./components/ProjectModal";
import ContactDialog from "./components/ContactDialog";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import ProjectsSection from "./sections/Projects";
import Footer from "./sections/Footer";
import { SECTION_IDS } from "./data/portfolio";
import { useActiveSection } from "./hooks/useActiveSection";

const PortfolioContent: React.FC = () => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const isTouch = useMediaQuery("(hover: none)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const activeSection = useActiveSection(SECTION_IDS);

  const [contactOpen, setContactOpen] = useState(false);
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(
    null
  );

  const handlePreviewImage = (src: string, title: string) => {
    setPreview({ src, title });
  };

  return (
    <>
      <CssBaseline />
      <ScrollProgress />
      <Box className="ambient-bg" />
      <Box className="ambient-orbs" aria-hidden />

      <NavDock activeSection={activeSection} />

      <Container
        maxWidth="lg"
        sx={{
          pb: {
            xs: "calc(96px + env(safe-area-inset-bottom, 0px))",
            md: 10,
          },
          pt: { xs: 1, sm: 0 },
        }}
      >
        <Hero
          isMobile={isMobile}
          prefersReducedMotion={prefersReducedMotion}
          onContactOpen={() => setContactOpen(true)}
        />
        <About marqueeEnabled={!prefersReducedMotion} />
        <Work />
        <ProjectsSection
          onPreviewImage={handlePreviewImage}
          prefersReducedMotion={prefersReducedMotion}
          enableTilt={!isTouch && !prefersReducedMotion}
        />
        <Footer onContactOpen={() => setContactOpen(true)} />
      </Container>

      <ProjectModal
        imageSrc={preview?.src ?? null}
        title={preview?.title ?? ""}
        onClose={() => setPreview(null)}
      />
      <ContactDialog
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <PortfolioContent />
  </ThemeProvider>
);

export default App;
