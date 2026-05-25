import React from "react";
import Typical from "react-typical";
import { styled } from "@mui/material/styles";

interface StyledHeadingProps {
  align?: "left" | "center" | "right";
}

const StyledHeading = styled(Typical, {
  shouldForwardProp: (prop) => prop !== "align",
})<StyledHeadingProps>(({ theme, align = "center" }) => ({
  color: "#00FF7F",
  fontSize: "2.5rem",
  textAlign: align,
  [theme.breakpoints.up("sm")]: {
    fontSize: "3.5rem",
  },
  fontWeight: "bold",
  "&::after": {
    content: "''",
  },
}));

interface TypewriterHeadingProps {
  steps: (string | number)[];
  align?: "left" | "center" | "right";
}

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({
  steps,
  align,
}) => {
  return <StyledHeading steps={steps} loop={1} wrapper="h1" align={align} />;
};

export default TypewriterHeading;
