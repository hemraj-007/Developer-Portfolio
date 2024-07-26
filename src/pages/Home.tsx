import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logo from "../assets/r3.png";
import Button from "@mui/material/Button";
import { GitHub, LinkedIn } from "@mui/icons-material";
import leetcode from "../assets/leetcode.svg"; // Import the LeetCode SVG as a module
import ContactDialog from "../components/ContactDialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <animated.div style={props}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }} // Ensure the container takes up the full viewport height
        >
          <Grid
            item
            xs={12}
            md={6}
            container
            direction="column"
            justifyContent="center"
            alignItems={isMobile ? "center" : "flex-start"}
            style={{ height: "100%" }} // Ensure the grid item takes up the full height
          >
            <Typography
              variant="h3"
              gutterBottom
              style={{ color: "#ffffff", fontWeight: "bold", textAlign: isMobile ? "center" : "left" }}
            >
              Hello,
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              style={{ color: "#ffffff", fontWeight: "bold", textAlign: isMobile ? "center" : "left" }}
            >
              This is <span>HEMRAJ BHATIA</span>,
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              style={{ color: "#00FF7F", fontWeight: "bold", textAlign: isMobile ? "center" : "left" }}
            >
              I'm a Professional Software Developer.
            </Typography>
            <Box
              mt={2}
              display="flex"
              justifyContent={isMobile ? "center" : "flex-start"}
              flexDirection="row"
              alignItems="center"
              gap="1rem"
              flexWrap="wrap"
            >
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/hemraj-007" // Replace with your GitHub URL
              >
                <GitHub />
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="https://www.linkedin.com/in/hemraj7/" // Replace with your LinkedIn URL
              >
                <LinkedIn />
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="https://leetcode.com/u/hemrajbhatia38/" // Replace with your LeetCode URL
              >
                <Box
                  component="img"
                  src={leetcode}
                  alt="LeetCode"
                  sx={{ width: 24, height: 24, filter: "invert(1)" }} // Invert color to make it white
                />
              </Button>
            </Box>
            <Box
              mt={4}
              display="flex"
              justifyContent={isMobile ? "center" : "flex-start"}
              flexDirection="row"
              alignItems="center"
              gap="1rem"
            >
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClickOpen} // Open the dialog on button click
              >
                Contact Me
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href="/resume.pdf" // Replace with the URL to your resume
              >
                Get Resume
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              alt="Profile Image"
              src={logo}
              sx={{
                width: { xs: "100%", md: 500 },
                height: { xs: "auto", md: 400 },
                objectFit: "cover",
                borderRadius: "10%",
              }}
            />
          </Grid>
        </Grid>
      </animated.div>
      <ContactDialog open={open} onClose={handleClose} />
    </Container>
  );
};

export default Home;
