// src/components/TypewriterHeading.tsx
import React from "react";
import Typical from "react-typical";
import { styled } from "@mui/material/styles";

const StyledHeading = styled(Typical)(({ theme, align }) => ({
  color: "#00FF7F",
  fontSize: "2.5rem",
  textAlign: align || "center", // Use the align prop or default to center
  [theme.breakpoints.up("sm")]: {
    fontSize: "3.5rem",
  },
  fontWeight: "bold",
  "&::after": {
    content: "none", // Ensures the cursor is not shown
  },
}));

interface TypewriterHeadingProps {
  steps: (string | number)[];
  align?: string;
}

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({
  steps,
  align,
}) => {
  return <StyledHeading steps={steps} loop={1} wrapper="h1" align={align} />;
};

export default TypewriterHeading;
