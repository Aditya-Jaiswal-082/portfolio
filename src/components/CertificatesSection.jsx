// src/components/CertificatesSection.jsx

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

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #0a0e27 0%, #16213e 100%);
  min-height: 80vh;
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

const CertificatesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    transform: translateY(-10px);
    border-color: rgba(99, 102, 241, 0.6);
    box-shadow: 0 20px 60px rgba(99, 102, 241, 0.4);
  }
`;

const BadgeWrapper = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 3rem;
  box-shadow: 0 15px 40px rgba(99, 102, 241, 0.5);
  animation: ${float} 3s ease-in-out infinite;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
  }

  ${Card}:hover &::after {
    opacity: 0.5;
  }
`;

const CertName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.75rem;
`;

const Issuer = styled.p`
  font-size: 1.05rem;
  color: #8b5cf6;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &::before {
    content: '✓';
    width: 20px;
    height: 20px;
    background: rgba(99, 102, 241, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: #6366f1;
    font-weight: bold;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #cbd5e1;
  line-height: 1.7;
`;

const ViewButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
  }
`;

const certificates = [
  {
    name: "Python",
    issuer: "Kaggle",
    icon: "🐍",
    description: "Comprehensive certification in Python programming fundamentals and advanced concepts",
  },
  // Add more certificates as you earn them
  // Example:
  // {
  //   name: "React Developer",
  //   issuer: "Meta",
  //   icon: "⚛️",
  //   description: "Advanced React development and best practices",
  // },
];

export const CertificatesSection = () => {
  return (
    <Section id="certificates">
      <Container>
        <Title
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certificates
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional certifications and achievements
        </Subtitle>

        <CertificatesContainer>
          {certificates.map((cert, i) => (
            <Card
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <BadgeWrapper>{cert.icon}</BadgeWrapper>
              <CertName>{cert.name}</CertName>
              <Issuer>{cert.issuer}</Issuer>
              <Description>{cert.description}</Description>
              <ViewButton>View Certificate</ViewButton>
            </Card>
          ))}
        </CertificatesContainer>
      </Container>
    </Section>
  );
};
