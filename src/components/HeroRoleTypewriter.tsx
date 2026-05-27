import React, { useEffect, useMemo, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { heroRoleSteps } from "../data/portfolio";

const TYPE_SPEED = 72;
const DELETE_SPEED = 42;
const HOLD_TIME = 1300;

interface HeroRoleTypewriterProps {
  align?: "left" | "center" | "right";
}

const HeroRoleTypewriter: React.FC<HeroRoleTypewriterProps> = ({
  align = "left",
}) => {
  const roles = useMemo(
    () => heroRoleSteps.filter((step): step is string => typeof step === "string"),
    []
  );
  const longestRoleLength = useMemo(
    () => Math.max(...roles.map((role) => role.length)),
    [roles]
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex] ?? "";

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && visibleLength < currentRole.length) {
          setVisibleLength((length) => length + 1);
          return;
        }

        if (!isDeleting && visibleLength === currentRole.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && visibleLength > 0) {
          setVisibleLength((length) => length - 1);
          return;
        }

        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      },
      !isDeleting && visibleLength === currentRole.length
        ? HOLD_TIME
        : isDeleting
          ? DELETE_SPEED
          : TYPE_SPEED
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, roleIndex, roles, visibleLength]);

  const roleText = roles[roleIndex]?.slice(0, visibleLength) ?? "";

  return (
    <Typography
      variant="h4"
      component="div"
      sx={{
        mb: 2,
        maxWidth: 560,
        mx: { xs: "auto", md: 0 },
        textAlign: align,
        minHeight: { xs: "3.6rem", sm: "3.5rem" },
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        component="span"
        sx={{
          display: "inline-block",
          minWidth: `${longestRoleLength}ch`,
          color: "secondary.main",
          fontWeight: 600,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          lineHeight: 1.5,
          whiteSpace: "nowrap",
        }}
      >
        {roleText}
        <Box
          component="span"
          aria-hidden
          sx={{
            display: "inline-block",
            width: "0.08em",
            height: "1em",
            ml: 0.35,
            transform: "translateY(0.12em)",
            bgcolor: "secondary.main",
            animation: "typewriterCaret 1s steps(1) infinite",
            "@keyframes typewriterCaret": {
              "0%, 48%": { opacity: 1 },
              "49%, 100%": { opacity: 0 },
            },
          }}
        />
      </Box>
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
