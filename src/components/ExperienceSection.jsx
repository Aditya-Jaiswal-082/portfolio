// src/components/ExperienceSection.jsx

import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

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
  background: linear-gradient(180deg, #0a0e27 0%, #16213e 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    top: -200px;
    left: -200px;
    border-radius: 50%;
    animation: ${pulse} 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
    bottom: -250px;
    right: -250px;
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
  margin: 0 auto 4rem;
  line-height: 1.8;
`;

const TimelineContainer = styled.div`
  max-width: 900px;
  width: 100%;
  position: relative;
  margin: 0 auto;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, #6366f1, #8b5cf6, #ec4899);
  opacity: 0.5;

  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${({ align }) => (align === "left" ? "flex-start" : "flex-end")};
  padding: 2rem 0;
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 70px;
  }
`;

const TimelineDot = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: 4px solid rgba(30, 41, 59, 0.8);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.6);

  @media (max-width: 768px) {
    left: 30px;
  }
`;

const Card = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  padding: 2rem;
  width: 45%;
  position: relative;
  transition: all 0.3s ease;

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

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(99, 102, 241, 0.6);
    box-shadow: 0 20px 60px rgba(99, 102, 241, 0.3);
  }

  @media (max-width: 768px) {
    width: calc(100% - 70px);
  }
`;

const DateBadge = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
  border: 1px solid rgba(99, 102, 241, 0.4);
  border-radius: 20px;
  font-size: 0.9rem;
  color: #8b5cf6;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const JobTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.5rem;
`;

const Company = styled.p`
  font-size: 1.1rem;
  color: #8b5cf6;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '🏢';
    font-size: 1.2rem;
  }
`;

const Description = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #cbd5e1;
  line-height: 1.8;
`;

const DescriptionItem = styled.li`
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #6366f1;
    font-weight: bold;
    font-size: 1.2rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const experiences = [
  {
    title: "Asst. Manager",
    company: "Gita Online Service, Tata Play service center",
    duration: "Mar 2024 – Aug 2024",
    description: [
      "Managed customer queries and coordinated with tech team for timely service delivery",
      "Handled service operations, inventory management, and daily operational reports",
      "Improved customer satisfaction scores through efficient problem resolution",
    ],
    align: "left",
  },
];

export const ExperienceSection = () => {
  return (
    <Section id="experience">
      <Container>
        <Title
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional journey and hands-on experience in the field
        </Subtitle>

        <TimelineContainer>
          <TimelineLine />
          {experiences.map((exp, i) => (
            <TimelineItem key={i} align={exp.align}>
              <TimelineDot
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.2 }}
              />
              <Card
                initial={{ opacity: 0, x: exp.align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <DateBadge>{exp.duration}</DateBadge>
                <JobTitle>{exp.title}</JobTitle>
                <Company>{exp.company}</Company>
                <Description>
                  {exp.description.map((item, j) => (
                    <DescriptionItem key={j}>{item}</DescriptionItem>
                  ))}
                </Description>
              </Card>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Container>
    </Section>
  );
};
