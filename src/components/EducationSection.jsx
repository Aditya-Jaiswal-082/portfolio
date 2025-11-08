// src/components/EducationSection.jsx

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
  margin: 0 auto 4rem;
  line-height: 1.8;
`;

const EducationContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
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
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
  flex-shrink: 0;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #f1f5f9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Institution = styled.p`
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
  color: #cbd5e1;
  font-weight: 500;
`;

const Location = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &::before {
    content: '📍';
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const RightContent = styled.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const YearBadge = styled.div`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
  border: 1px solid rgba(99, 102, 241, 0.4);
  border-radius: 20px;
  font-size: 1rem;
  color: #8b5cf6;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
`;

const education = [
  {
    degree: "B.Tech Computer Science Engineering (Big Data Analytics)",
    institution: "Parul Institute of Technology",
    location: "Vadodara",
    year: "2022 – 2026",
    icon: "🎓",
  },
  {
    degree: "HSC",
    institution: "St. Francis English Medium High School",
    location: "Vapi",
    year: "2021 – 2022",
    icon: "📚",
  },
  {
    degree: "SSC",
    institution: "Boon Max English Medium High School",
    location: "Vapi",
    year: "2019 – 2020",
    icon: "🏫",
  },
];

export const EducationSection = () => {
  return (
    <Section id="education">
      <Container>
        <Title
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Academic background and qualifications
        </Subtitle>

        <EducationContainer>
          {education.map((edu, i) => (
            <Card
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <LeftContent>
                <IconWrapper>{edu.icon}</IconWrapper>
                <ContentWrapper>
                  <Degree>{edu.degree}</Degree>
                  <Institution>{edu.institution}</Institution>
                  <Location>{edu.location}</Location>
                </ContentWrapper>
              </LeftContent>
              <RightContent>
                <YearBadge>{edu.year}</YearBadge>
              </RightContent>
            </Card>
          ))}
        </EducationContainer>
      </Container>
    </Section>
  );
};
