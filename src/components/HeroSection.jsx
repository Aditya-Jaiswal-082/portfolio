// src/components/HeroSection.jsx - COMPLETE WITH PROFILE IMAGE

import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.5); }
  50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.8), 0 0 60px rgba(139, 92, 246, 0.6); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  min-height: 100vh;
  background: linear-gradient(-45deg, #0a0e27, #1a1a2e, #16213e, #0f3460);
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
  color: white;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  backdrop-filter: blur(10px);
  animation: ${float} 6s ease-in-out infinite;
  
  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    width: 200px;
    height: 200px;
    bottom: 20%;
    right: 15%;
    animation-delay: 2s;
  }
  
  &:nth-child(3) {
    width: 150px;
    height: 150px;
    top: 60%;
    left: 70%;
    animation-delay: 4s;
  }

  @media (max-width: 768px) {
    &:nth-child(1) {
      width: 200px;
      height: 200px;
      top: 5%;
      left: -20%;
    }
    
    &:nth-child(2) {
      width: 150px;
      height: 150px;
      bottom: 10%;
      right: -20%;
    }
    
    &:nth-child(3) {
      display: none;
    }
  }
`;

const TextContainer = styled(motion.div)`
  flex: 1;
  max-width: 600px;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 3s ease infinite;
  
  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #a78bfa;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Tagline = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #cbd5e1;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  display: inline-block;
  text-align: center;
  
  ${({ primary }) =>
    primary
      ? `
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(99, 102, 241, 0.6);
    }
  `
      : `
    background: transparent;
    color: white;
    border: 2px solid #6366f1;
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);

    &:hover {
      background: rgba(99, 102, 241, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
    }
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover::before {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.75rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    padding: 0.85rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  z-index: 2;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const ProfileImageWrapper = styled(motion.div)`
  position: relative;
  animation: ${glow} 3s ease-in-out infinite;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 4px solid rgba(99, 102, 241, 0.5);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    border: 3px solid rgba(99, 102, 241, 0.5);
  }
`;

const Particles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  
  span {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(99, 102, 241, 0.8);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
    animation: ${float} ${() => Math.random() * 3 + 2}s ease-in-out infinite;
    animation-delay: ${() => Math.random() * 2}s;
  }

  @media (max-width: 768px) {
    span {
      width: 3px;
      height: 3px;
    }
  }
`;

export const HeroSection = () => {
  return (
    <Section>
      <FloatingShape />
      <FloatingShape />
      <FloatingShape />
      
      <Particles>
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </Particles>

      <TextContainer
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Aditya Jaiswal
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Full Stack Web Developer
        </Subtitle>
        <Tagline
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Building creative and performance-driven digital solutions with modern technologies
        </Tagline>
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button 
            href="/Aditya_Jaiswal_Resume.pdf" 
            download 
            primary
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </Button>
          <Button 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </Button>
        </ButtonGroup>
      </TextContainer>

      <ImageContainer
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <ProfileImageWrapper
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ProfileImage
            src="/profile.jpg"
            alt="Aditya Jaiswal"
          />
        </ProfileImageWrapper>
      </ImageContainer>
    </Section>
  );
};
