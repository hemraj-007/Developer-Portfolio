import React from "react";
import Marquee from "react-fast-marquee";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { skills } from "../data/portfolio";

interface SkillsMarqueeProps {
  play: boolean;
}

const SkillsMarquee: React.FC<SkillsMarqueeProps> = ({ play }) => {
  if (!play) {
    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mt: 2,
          width: "100%",
          maxWidth: "100%",
          minWidth: 0,
        }}
      >
        {skills.map((skill) => (
          <Chip key={skill} label={skill} variant="outlined" size="small" />
        ))}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mt: 2,
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        overflow: "hidden",
        position: "relative",
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        "& .rfm-marquee-container": {
          maxWidth: "100%",
          minWidth: 0,
        },
      }}
    >
      <Marquee speed={35} gradient={false} pauseOnHover style={{ maxWidth: "100%" }}>
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            variant="outlined"
            size="small"
            sx={{ mx: 0.75 }}
          />
        ))}
      </Marquee>
    </Box>
  );
};

export default SkillsMarquee;
