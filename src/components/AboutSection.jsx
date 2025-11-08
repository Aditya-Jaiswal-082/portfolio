// src/components/AboutSection.jsx

import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #16213e 0%, #0a0e27 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
    top: -250px;
    right: -250px;
    border-radius: 50%;
    animation: ${pulse} 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    bottom: -200px;
    left: -200px;
    border-radius: 50%;
    animation: ${pulse} 6s ease-in-out infinite;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #f1f5f9;
  text-align: center;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #94a3b8;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 1rem;
  line-height: 1.8;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #cbd5e1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.8;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
`;

const SkillsTitle = styled(motion.h3)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #f1f5f9;
  text-align: center;
`;

const SkillsHint = styled(motion.p)`
  font-size: 1rem;
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: ${({ $expanded }) => ($expanded ? 100 : 1)};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
    background-size: 200% 200%;
    animation: ${gradientMove} 3s ease infinite;
  }

  &:hover {
    border-color: rgba(99, 102, 241, 0.5);
    box-shadow: 0 10px 40px rgba(99, 102, 241, 0.2);
  }

  ${({ $expanded }) => $expanded && `
    border-color: rgba(99, 102, 241, 0.8);
    box-shadow: 0 20px 60px rgba(99, 102, 241, 0.4);
  `}
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
`;

const CategoryName = styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  color: #f1f5f9;
`;

const ExpandIcon = styled.div`
  width: 35px;
  height: 35px;
  background: rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b5cf6;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.3s ease;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(45deg)' : 'rotate(0deg)')};
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.span`
  color: #cbd5e1;
  font-weight: 600;
  font-size: 1rem;
`;

const SkillPercentage = styled.span`
  color: #8b5cf6;
  font-weight: 700;
  font-size: 0.9rem;
`;

const SkillBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const SkillBarFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
  background-size: 200% 100%;
  border-radius: 10px;
  animation: ${gradientMove} 3s ease infinite;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 50;
`;

const ExpandedCardModal = styled(motion.div)`
  position: fixed;
  width: 520px;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 100;
  background: rgba(30, 41, 59, 0.98);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(99, 102, 241, 0.6);
  border-radius: 20px;
  padding: 2.5rem 2.5rem 4rem 2.5rem;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(99, 102, 241, 0.1);
    border-radius: 10px;
    margin: 15px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.5);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(99, 102, 241, 0.7);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
    background-size: 200% 200%;
    animation: ${gradientMove} 3s ease infinite;
    border-radius: 20px 20px 0 0;
  }

  @media (max-width: 768px) {
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 90%;
    max-height: 85vh;
    padding: 2rem 2rem 3rem 2rem;
  }
`;

const ExpandedSection = styled.div`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 1.5rem;
  }
`;

const ExpandedTitle = styled.h5`
  font-size: 1.4rem;
  color: #8b5cf6;
  font-weight: 700;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ExpandedText = styled.p`
  font-size: 1.05rem;
  color: #cbd5e1;
  line-height: 1.9;
  margin-bottom: 1.25rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
`;

const ProjectItem = styled.div`
  background: rgba(99, 102, 241, 0.1);
  padding: 1.5rem;
  border-radius: 14px;
  border: 1px solid rgba(99, 102, 241, 0.3);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.15);
    border-color: rgba(99, 102, 241, 0.5);
    transform: translateY(-2px);
  }
`;

const ProjectName = styled.div`
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.75rem;
  font-size: 1.15rem;
`;

const ProjectDesc = styled.div`
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.6;
`;

const HighlightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HighlightItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.7;
  padding: 1rem 1.25rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 10px;
  border-left: 3px solid #6366f1;

  &::before {
    content: '✨';
    font-size: 1.3rem;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36px;
  height: 36px;
  background: rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b5cf6;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  transform: rotate(45deg);
  z-index: 10;

  &:hover {
    background: rgba(99, 102, 241, 0.4);
    transform: rotate(45deg) scale(1.1);
  }
`;

const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    position: 0,
    description: "Building beautiful, responsive, and interactive user interfaces with modern frameworks and best practices.",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML & CSS", level: 95 },
      { name: "Responsive Design", level: 90 },
    ],
    projects: [
      { name: "Parcel Swift", desc: "Built entire frontend with React, responsive UI, and real-time updates" },
      { name: "Finotes", desc: "Modern note-taking interface with React hooks and state management" },
      { name: "MY-TO-DO", desc: "Clean task management UI with React components and LocalStorage" },
    ],
    highlights: [
      "Expert in React hooks (useState, useEffect, useContext, custom hooks)",
      "Component-based architecture for scalable applications",
      "CSS3 animations, Flexbox, Grid for modern layouts",
      "Mobile-first responsive design approach",
      "Performance optimization with lazy loading and code splitting"
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    position: 1,
    description: "Designing robust server-side applications with scalable architectures, RESTful APIs, and database management.",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 88 },
    ],
    projects: [
      { name: "Parcel Swift", desc: "Built Node.js backend with Express, MongoDB for delivery tracking system" },
      { name: "Mindlytics", desc: "Flask backend with Python for AI-powered mental wellness chatbot" },
    ],
    highlights: [
      "RESTful API design with proper HTTP methods and status codes",
      "MongoDB schema design with Mongoose ODM",
      "JWT authentication and authorization implementation",
      "Middleware creation for logging, error handling, and validation",
      "Database optimization with indexing and aggregation pipelines"
    ]
  },
  {
    category: "Data Tools",
    icon: "📊",
    position: 2,
    description: "Analyzing and visualizing data to extract insights, create dashboards, and support data-driven decision making.",
    items: [
      { name: "Python", level: 80 },
      { name: "PowerBI", level: 75 },
      { name: "Excel", level: 85 },
      { name: "MySQL", level: 78 },
    ],
    projects: [
      { name: "Mindlytics", desc: "Used Python for AI/ML models and data processing" },
    ],
    highlights: [
      "Python libraries: Pandas, NumPy for data manipulation",
      "Data visualization with Matplotlib and interactive dashboards",
      "PowerBI for business intelligence and reporting",
      "Advanced Excel formulas, pivot tables, and macros",
      "SQL queries for complex data retrieval and analysis"
    ]
  },
  {
    category: "Others",
    icon: "🚀",
    position: 3,
    description: "Modern development tools and methodologies for efficient workflow, version control, and deployment.",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "DSA", level: 75 },
      { name: "UI/UX Design", level: 80 },
    ],
    projects: [
      { name: "All Projects", desc: "Version control, collaboration, and deployment via GitHub" },
    ],
    highlights: [
      "Git workflows: branching, merging, pull requests, conflict resolution",
      "Docker containerization for consistent development environments",
      "Data Structures & Algorithms for optimized solutions",
      "UI/UX principles: user research, wireframing, prototyping",
      "Figma for design mockups and component libraries"
    ]
  },
];

export const AboutSection = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const cardRefs = useRef({});
  const sectionRef = useRef(null);

  // Close modal on scroll away from section
  useEffect(() => {
    const handleScroll = () => {
      if (expandedCategory && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If section is mostly out of view (more than 50% scrolled away), close modal
        if (sectionRect.bottom < windowHeight * 0.3 || sectionRect.top > windowHeight * 0.7) {
          setExpandedCategory(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [expandedCategory]);

  const toggleCategory = (category, position) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
      return;
    }

    const cardElement = cardRefs.current[category];
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const modalHeight = windowHeight * 0.8;
      
      let top, left;
      
      if (position === 0 || position === 2) {
        left = rect.right + 25;
      } else {
        left = rect.left - 545;
      }

      top = rect.top;
      
      if (top + modalHeight > windowHeight - 20) {
        top = Math.max(20, windowHeight - modalHeight - 20);
      }

      setModalPosition({ top, left });
    }

    setExpandedCategory(category);
  };

  const expandedSkill = skills.find(s => s.category === expandedCategory);

  return (
    <Section id="about" ref={sectionRef}>
      <Container>
        <Title
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Passionate Full Stack Developer | Problem Solver | Tech Enthusiast
        </Subtitle>
        <Description
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Detail-oriented Computer Science student specializing in full-stack web
          development. Experienced in building responsive, user-focused web
          applications with modern stacks and a passion for clean, efficient
          digital products. I thrive on turning complex problems into elegant solutions.
        </Description>

        <SkillsTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Technical Skills
        </SkillsTitle>
        
        <SkillsHint
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          💡 Click on any skill category to see detailed information
        </SkillsHint>

        <SkillsGrid>
          {skills.map((category, i) => (
            <SkillCategory
              key={category.category}
              ref={(el) => (cardRefs.current[category.category] = el)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              onClick={() => toggleCategory(category.category, category.position)}
              $expanded={expandedCategory === category.category}
            >
              <CategoryHeader>
                <CategoryLeft>
                  <CategoryIcon>{category.icon}</CategoryIcon>
                  <CategoryName>{category.category}</CategoryName>
                </CategoryLeft>
                <ExpandIcon $expanded={expandedCategory === category.category}>
                  +
                </ExpandIcon>
              </CategoryHeader>
              
              <SkillsList>
                {category.items.map((skill, j) => (
                  <SkillItem
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 + j * 0.05 }}
                  >
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillPercentage>{skill.level}%</SkillPercentage>
                    </SkillHeader>
                    <SkillBarContainer>
                      <SkillBarFill
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 + i * 0.1 + j * 0.05 }}
                      />
                    </SkillBarContainer>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}

          <AnimatePresence>
            {expandedCategory && expandedSkill && (
              <>
                <Backdrop
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setExpandedCategory(null)}
                />
                <ExpandedCardModal
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8,
                    top: modalPosition.top,
                    left: modalPosition.left 
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    top: modalPosition.top,
                    left: modalPosition.left
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.8,
                    top: modalPosition.top,
                    left: modalPosition.left
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <CloseButton onClick={() => setExpandedCategory(null)}>
                    +
                  </CloseButton>

                  <CategoryHeader style={{ marginBottom: '2.5rem', paddingRight: '2rem' }}>
                    <CategoryLeft>
                      <CategoryIcon>{expandedSkill.icon}</CategoryIcon>
                      <CategoryName>{expandedSkill.category}</CategoryName>
                    </CategoryLeft>
                  </CategoryHeader>

                  <ExpandedSection>
                    <ExpandedTitle>📝 Overview</ExpandedTitle>
                    <ExpandedText>{expandedSkill.description}</ExpandedText>
                  </ExpandedSection>

                  <ExpandedSection>
                    <ExpandedTitle>🚀 Projects Using {expandedSkill.category}</ExpandedTitle>
                    <ProjectsGrid>
                      {expandedSkill.projects.map((project, idx) => (
                        <ProjectItem key={idx}>
                          <ProjectName>{project.name}</ProjectName>
                          <ProjectDesc>{project.desc}</ProjectDesc>
                        </ProjectItem>
                      ))}
                    </ProjectsGrid>
                  </ExpandedSection>

                  <ExpandedSection>
                    <ExpandedTitle>⭐ Key Expertise</ExpandedTitle>
                    <HighlightsList>
                      {expandedSkill.highlights.map((highlight, idx) => (
                        <HighlightItem key={idx}>
                          {highlight}
                        </HighlightItem>
                      ))}
                    </HighlightsList>
                  </ExpandedSection>
                </ExpandedCardModal>
              </>
            )}
          </AnimatePresence>
        </SkillsGrid>
      </Container>
    </Section>
  );
};
