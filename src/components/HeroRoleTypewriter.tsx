import React from "react";
import Typical from "react-typical";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { heroRoleSteps } from "../data/portfolio";

const RoleTypical = styled(Typical)(({ theme }) => ({
  display: "inline",
  color: theme.palette.secondary.main,
  fontSize: "inherit",
  fontWeight: 600,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
}));

interface HeroRoleTypewriterProps {
  align?: "left" | "center" | "right";
}

const HeroRoleTypewriter: React.FC<HeroRoleTypewriterProps> = ({
  align = "left",
}) => {
  return (
    <Typography
      variant="h4"
      component="div"
      sx={{
        mb: 2,
        maxWidth: 560,
        mx: { xs: "auto", md: 0 },
        textAlign: align,
        minHeight: { xs: "3.2rem", sm: "3.5rem" },
      }}
    >
      <RoleTypical steps={heroRoleSteps} loop={Infinity} wrapper="span" />
    </Typography>
  );
};

export const HeroRoleStatic: React.FC<{ text: string; align?: "left" | "center" | "right" }> = ({
  text,
  align = "left",
}) => (
  <Typography
    variant="h4"
    sx={{
      mb: 2,
      mx: { xs: "auto", md: 0 },
      maxWidth: 560,
      textAlign: align,
    }}
  >
    {text}
  </Typography>
);

export default HeroRoleTypewriter;
