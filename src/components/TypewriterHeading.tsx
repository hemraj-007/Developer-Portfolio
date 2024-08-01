import React from "react";
import Typical from "react-typical";
import { styled } from "@mui/material/styles";

// Modify StyledHeading to accept and use align for styling but do not pass it to Typical
const StyledHeading = styled(({ align, ...otherProps }:any) => <Typical {...otherProps} />)(({ theme, align }: any) => ({
  color: "#00FF7F",
  fontSize: "2.5rem",
  textAlign: align || "center", // Use the align prop or default to center
  [theme.breakpoints.up("sm")]: {
    fontSize: "3.5rem",
  },
  fontWeight: "bold",
  "&::after": {
    content: "''", // Fixes the content none issue, use empty string for CSS content
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
