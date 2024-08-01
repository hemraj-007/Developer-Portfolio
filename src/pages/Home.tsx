import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logo from "../assets/r3.png";
import Button from "@mui/material/Button";
import { GitHub, LinkedIn } from "@mui/icons-material";
import leetcode from "../assets/leetcode.svg";
import ContactDialog from "../components/ContactDialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <Container>
      <animated.div style={fadeIn}>
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
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                gutterBottom
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Hello,
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h3"
                gutterBottom
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                This is <span>HEMRAJ BHATIA</span>,
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h3"
                gutterBottom
                style={{
                  color: "#00FF7F",
                  fontWeight: "bold",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                I'm a Professional Software Developer.
              </Typography>
            </motion.div>
            <Box
              mt={2}
              display="flex"
              justifyContent={isMobile ? "center" : "flex-start"}
              flexDirection="row"
              alignItems="center"
              gap="1rem"
              flexWrap="wrap"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href="https://github.com/hemraj-007"
                >
                  <GitHub />
                </Button>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href="https://www.linkedin.com/in/hemraj7/"
                >
                  <LinkedIn />
                </Button>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href="https://leetcode.com/u/hemrajbhatia38/"
                >
                  <Box
                    component="img"
                    src={leetcode}
                    alt="LeetCode"
                    sx={{ width: 24, height: 24, filter: "invert(1)" }}
                  />
                </Button>
              </motion.div>
            </Box>
            <Box
              mt={4}
              display="flex"
              justifyContent={isMobile ? "center" : "flex-start"}
              flexDirection="row"
              alignItems="center"
              gap="1rem"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClickOpen}
                >
                  Contact Me
                </Button>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  href="https://drive.google.com/file/d/1lXCQYO2w4tON2yBDipFXCBR6jRnEy0k0/view?usp=sharing"
                >
                  Get Resume
                </Button>
              </motion.div>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
            </motion.div>
          </Grid>
        </Grid>
      </animated.div>
      <ContactDialog open={open} onClose={handleClose} />
    </Container>
  );
};

export default Home;
