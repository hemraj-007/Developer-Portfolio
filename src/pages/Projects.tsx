import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTrail, animated } from "react-spring";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import Marquee from "react-fast-marquee";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TypewriterHeading from "../components/TypewriterHeading";
import { useSpring } from "react-spring";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiRecoil,
  SiMui,
  SiTailwindcss,
  SiCplusplus,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiPostman,
} from "react-icons/si";
import img from "../assets/project1.png";
import img2 from "../assets/project-3.png";

const StyledCard = styled(Card)(() => ({
  backgroundColor: "#2c3e50",
  color: "#ffffff",
  borderRadius: "10px",
  marginBottom: "1rem",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  },
}));

const SkillCard = styled(Card)(() => ({
  backgroundColor: "#34495e",
  color: "#ffffff",
  borderRadius: "10px",
  width: 120, // Fixed width for each card
  height: 120, // Fixed height for each card
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 1rem",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  },
}));

const skills = {
  payInstaWallet: [
    "React Js",
    "Express Js",
    "Node Js",
    "JWT Authentication",
    "Zod Validation",
    "MongoDB",
    "Tailwind CSS",
  ],
  dialogeDenBlog: [
    "React Js",
    "Tailwind CSS",
    "TypeScript",
    "Zod Validation",
    "Cloudflare Workers",
    "Prisma ORM",
    "PostgreSQL",
    "JWTs",
    "Monorepo",
  ],
};

// Define project images
const projectImages = {
  payInstaWallet: img,
  dialogeDenBlog: img2,
};

const projects = [
  {
    title: "Pay-Insta-Wallet",
    description:
      "Developed a Payment system using the MERN stack, featuring essential digital wallet functionalities from user registration to transactions. Implemented robust security with JWT authentication, Zod validation, and CORS, combined with MongoDB for efficient data management. Enhanced user interface and experience with React and Tailwind CSS, ensuring a responsive and intuitive design.",
    skills: skills.payInstaWallet,
    githubUrl: "https://github.com/hemraj-007/pay-insta-wallet",
    imageUrl: projectImages.payInstaWallet,
  },
  {
    title: "DialogeDen Blog",
    description:
      "Created a Medium-style blog with React and Tailwind CSS on the front-end and Cloudflare Workers for serverless back-end, ensuring type-safe data handling with TypeScript and Zod validation. Optimized database interactions using Prisma ORM with a PostgreSQL database and secured user authentication with JWTs. Streamlined development by packaging common validation logic into an npm package, utilizing a monorepo setup for efficient full-stack application maintenance.",
    skills: skills.dialogeDenBlog,
    githubUrl: "https://github.com/hemraj-007/DialogDen",
    imageUrl: projectImages.dialogeDenBlog,
  },
];

const Projects: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const [isHovered, setIsHovered] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const trail = useTrail(projects.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
  });

  const handleImageClick = (imageUrl: string) => {
    setExpandedImage(imageUrl);
  };

  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
  };

  const skillIcons = [
    { icon: <FaReact size={40} />, label: "React" },
    { icon: <SiTypescript size={40} />, label: "TypeScript" },
    { icon: <FaNodeJs size={40} />, label: "Node.js" },
    { icon: <SiNextdotjs size={40} />, label: "Next.js" },
    { icon: <SiExpress size={40} />, label: "Express.js" },
    { icon: <SiMongodb size={40} />, label: "MongoDB" },
    { icon: <SiRecoil size={40} />, label: "Recoil" },
    { icon: <FaJs size={40} />, label: "JavaScript" },
    { icon: <SiMui size={40} />, label: "Material UI" },
    { icon: <SiTailwindcss size={40} />, label: "Tailwind CSS" },
    { icon: <SiCplusplus size={40} />, label: "C++" },
    { icon: <FaGitAlt size={40} />, label: "Git" },
    { icon: <SiPostman size={40} />, label: "Postman" },
    { icon: <SiPrisma size={40} />, label: "Prisma" },
    { icon: <SiPostgresql size={40} />, label: "PostgreSQL" },
    { icon: <FaDocker size={40} />, label: "Docker" },
    { icon: <FaHtml5 size={40} />, label: "HTML5" },
    { icon: <FaCss3Alt size={40} />, label: "CSS3" },
    { icon: <FaPython size={40} />, label: "Python" },
  ];

  return (
    <Container>
      <animated.div style={props}>
        <Box textAlign="left">
          <TypewriterHeading
            steps={[
              "P",
              100,
              "Pr",
              100,
              "Pro",
              100,
              "Proj",
              100,
              "Proje",
              100,
              "Projec",
              100,
              "Project",
              100,
              "Projects",
            ]}
            align="left"
          />
        </Box>
        <Box mb={4}>
          {trail.map((style, index) => (
            <animated.div style={style} key={index}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height={isMobile ? "150" : "200"} // Set height based on screen size
                  image={projects[index].imageUrl}
                  alt={projects[index].title}
                  style={{ objectFit: "cover", width: "100%" }} // Set width to 100% for proper alignment
                  onClick={() => handleImageClick(projects[index].imageUrl)}
                />
                <CardContent>
                  <Box
                    display="flex"
                    flexDirection={isMobile ? "column" : "row"}
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography variant="h5" style={{ fontWeight: "bold" }}>
                        {projects[index].title}
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {projects[index].description}
                      </Typography>
                      <Box>
                        {projects[index].skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            style={{
                              marginRight: "0.5rem",
                              marginBottom: "0.5rem",
                              backgroundColor: "#00FF7F",
                              color: "#2c3e50",
                            }}
                          />
                        ))}
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        href={projects[index].githubUrl}
                        startIcon={<GitHubIcon />}
                        style={{ marginTop: "1rem" }}
                      >
                        View on GitHub
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </StyledCard>
            </animated.div>
          ))}
        </Box>

        {/* Expanded Image Modal */}
        {expandedImage && (
          <Box
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="rgba(0, 0, 0, 0.8)"
            zIndex={1000}
            onClick={handleCloseExpandedImage}
          >
            <Box
              maxWidth={isMobile ? "100%" : "90%"} // Adjust for mobile
              maxHeight={isMobile ? "80%" : "90%"} // Adjust for mobile
              overflow="hidden"
              px={isMobile ? 2 : 0} // Add padding on mobile
            >
              <img
                src={expandedImage}
                alt="Expanded Project"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Box>
        )}

        <Box textAlign="left">
          <TypewriterHeading
            steps={[
              "S",
              100,
              "Sk",
              100,
              "Ski",
              100,
              "Skil",
              100,
              "Skill",
              100,
              "Skills",
            ]}
            align="left"
          />
        </Box>
        <Box
          mt={4}
          position="relative"
          overflow="hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            overflowX: isMobile ? "auto" : "hidden",
            display: "flex",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <Marquee
            speed={30}
            gradient={false}
            pauseOnHover={true}
            play={!isHovered}
            style={{ width: isMobile ? "100%" : "auto" }}
          >
            {skillIcons.map((skill, index) => (
              <SkillCard key={index}>
                {skill.icon}
                <Typography
                  variant="subtitle1"
                  style={{ color: "#00FF7F", marginTop: "0.5rem" }}
                >
                  {skill.label}
                </Typography>
              </SkillCard>
            ))}
          </Marquee>
        </Box>
      </animated.div>
    </Container>
  );
};

export default Projects;
