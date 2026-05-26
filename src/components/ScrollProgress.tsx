import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <Box
      aria-hidden
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1100,
        bgcolor: "rgba(28, 43, 58, 0.06)",
        pointerEvents: "none",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          bgcolor: "secondary.main",
          transform: `scaleX(${progress})`,
          transformOrigin: "left center",
          transition: "transform 0.1s ease-out",
        }}
      />
    </Box>
  );
};

export default ScrollProgress;
