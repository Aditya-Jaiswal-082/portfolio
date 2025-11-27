// src/components/ProjectsSection.jsx

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Import all project images
import mindlyticsImg from '../assets/mindlytics.jpg';
import parcelswiftImg from '../assets/parcelswift.jpg';
import finotesImg from '../assets/finotes.jpg';
import mytodoImg from '../assets/mytodo.jpg';
import ticgridtoeImg from '../assets/ticgridtoe.jpg';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #0a0e27 0%, #16213e 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: ${float} 20s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  color: #94a3b8;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 2.5rem;
  }
`;

const FilterButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: ${({ active }) => 
    active 
      ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' 
      : 'rgba(99, 102, 241, 0.1)'
  };
  color: white;
  border: 2px solid ${({ active }) => active ? '#6366f1' : 'rgba(99, 102, 241, 0.3)'};
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
  font-size: 1rem;

  &:hover {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-color: #6366f1;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.65rem 1.25rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media(min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const Card = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 0;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(99, 102, 241, 0.1),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: rgba(99, 102, 241, 0.5);
    box-shadow: 0 20px 60px rgba(99, 102, 241, 0.3);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-5px) scale(1.01);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.1) 0%,
      transparent 100%
    );
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const ProjectImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 15px;
  z-index: 1;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ProjectName = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #f1f5f9;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #94a3b8;
  margin-bottom: 1.25rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }
`;

const TechTag = styled.span`
  padding: 0.4rem 0.8rem;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #a78bfa;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;

  @media (max-width: 480px) {
    padding: 0.35rem 0.7rem;
    font-size: 0.75rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.75rem;
    flex-direction: column;
  }
`;

const LinkButton = styled(motion.a)`
  flex: 1;
  padding: 0.75rem;
  text-align: center;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
  text-decoration: none;
  background: ${({ primary }) =>
    primary
      ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
      : 'rgba(99, 102, 241, 0.2)'
  };
  border: 1px solid rgba(99, 102, 241, 0.4);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
    border-color: #6366f1;
  }

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.65rem;
    font-size: 0.8rem;
  }
`;

const projects = [
  {
    name: "Mindlytics",
    description: "AI-powered mental wellness platform with chatbots & real-time feedback",
    techStack: ["Flask", "Python", "HTML", "CSS", "Jinja", "AI/ML"],
    category: "Full Stack",
    liveDemo: "https://mindlytics-1.onrender.com",
    githubRepo: "https://github.com/Aditya-Jaiswal-082/Mindlytics",
    image: mindlyticsImg,
  },
  {
    name: "Parcel Swift",
    description: "City-wide parcel delivery web platform with live tracking & role management",
    techStack: ["React", "Node.js", "MongoDB", "Express", "CSS"],
    category: "Full Stack",
    liveDemo: "https://parcelswift.vercel.app",
    githubRepo: "https://github.com/Aditya-Jaiswal-082/parcel",
    image: parcelswiftImg,
  },
  {
    name: "Finotes",
    description: "Modern note-taking app with React front end and intuitive UI",
    techStack: ["React", "HTML", "CSS", "JavaScript"],
    category: "Frontend",
    liveDemo: "#",
    githubRepo: "https://github.com/Aditya-Jaiswal-082/Finotes",
    image: finotesImg,
  },
  {
    name: "MY-TO-DO",
    description: "Productive to-do tracker with clean design and task management",
    techStack: ["React", "HTML", "CSS", "LocalStorage"],
    category: "Frontend",
    liveDemo: "#",
    githubRepo: "https://github.com/Aditya-Jaiswal-082/MY-TO-DO",
    image: mytodoImg,
  },
  {
    name: "Tic-Grid-Toe",
    description: "Fun React Native tic-tac-toe game with smooth animations",
    techStack: ["React Native", "Expo", "JavaScript"],
    category: "Mobile",
    liveDemo: "https://ticgridtoe.vercel.app",
    githubRepo: "https://github.com/Aditya-Jaiswal-082/TicTacToeApp-Expo",
    image: ticgridtoeImg,
  },
];

export const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Full Stack", "Frontend", "Mobile"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Section id="projects">
      <Container>
        <Title
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Showcasing my best work in full-stack development and beyond
        </Subtitle>

        <FilterButtons
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>

        <AnimatePresence mode="wait">
          <ProjectsGrid
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, i) => (
              <Card
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ImageWrapper>
                  <ProjectImage src={project.image} alt={`${project.name} logo`} />
                </ImageWrapper>
                <CardContent>
                  <ProjectName>
                    {project.name}
                    <span style={{ fontSize: '1.2rem' }}>✨</span>
                  </ProjectName>
                  <Description>{project.description}</Description>
                  <TechStack>
                    {project.techStack.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ButtonGroup>
                    <LinkButton
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      primary
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      🚀 Live Demo
                    </LinkButton>
                    <LinkButton
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      💻 Code
                    </LinkButton>
                  </ButtonGroup>
                </CardContent>
              </Card>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </Container>
    </Section>
  );
};
