// src/components/Footer.jsx

import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const beat = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
`;

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0a0e27, #16213e, #0f3460);
  background-size: 200% 200%;
  animation: ${gradientMove} 10s ease infinite;
  color: white;
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
    background-size: 200% 200%;
    animation: ${gradientMove} 3s ease infinite;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(99, 102, 241, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const BrandSection = styled.div`
  flex: 1;
`;

const BrandName = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const BrandTagline = styled.p`
  font-size: 1rem;
  color: #94a3b8;
  max-width: 400px;
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const QuickLinksTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    color: #8b5cf6;
    transform: translateX(5px);
  }
`;

const SocialSection = styled.div`
  text-align: center;
`;

const SocialTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-color: transparent;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.5);
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.95rem;
  color: #94a3b8;
  margin: 0;
`;

const Heart = styled.span`
  color: #ec4899;
  display: inline-block;
  animation: ${beat} 1.5s infinite;
  margin: 0 0.2rem;
`;

const MadeWith = styled.span`
  font-size: 0.9rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TechBadge = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  font-size: 0.8rem;
  color: #8b5cf6;
  font-weight: 600;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <TopSection>
          <BrandSection>
            <BrandName>Aditya Jaiswal</BrandName>
            <BrandTagline>
              Full Stack Developer passionate about building modern web experiences
            </BrandTagline>
          </BrandSection>

          <QuickLinks>
            <QuickLinksTitle>Quick Links</QuickLinksTitle>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#experience">Experience</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </QuickLinks>

          <SocialSection>
            <SocialTitle>Connect With Me</SocialTitle>
            <SocialLinks>
              <SocialIcon
                href="https://github.com/Aditya-Jaiswal-082"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                💻
              </SocialIcon>
              <SocialIcon
                href="https://linkedin.com/in/aditya-j-b949b2242"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                💼
              </SocialIcon>
              <SocialIcon
                href="mailto:adityajaiswal2704@gmail.com"
                title="Email"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                📧
              </SocialIcon>
              <SocialIcon
                href="tel:+919722404430"
                title="Phone"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                📱
              </SocialIcon>
            </SocialLinks>
          </SocialSection>
        </TopSection>

        <BottomSection>
          <Copyright>
            © 2025 Aditya Jaiswal • Built with <Heart>❤️</Heart> and passion
          </Copyright>
          <MadeWith>
            <span>Made with</span>
            <TechStack>
              <TechBadge>React</TechBadge>
              <TechBadge>Styled Components</TechBadge>
              <TechBadge>Framer Motion</TechBadge>
            </TechStack>
          </MadeWith>
        </BottomSection>
      </FooterContent>
    </FooterContainer>
  );
};
