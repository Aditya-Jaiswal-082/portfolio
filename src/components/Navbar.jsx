// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme, scrolled }) => 
    scrolled 
      ? theme === 'dark' 
        ? 'rgba(10, 14, 39, 0.95)' 
        : 'rgba(255, 255, 255, 0.95)'
      : 'transparent'
  };
  backdrop-filter: blur(20px);
  border-bottom: ${({ scrolled }) => 
    scrolled ? '1px solid rgba(99, 102, 241, 0.2)' : 'none'
  };
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme === 'dark' ? '#cbd5e1' : '#475569'};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme === 'dark' ? '#f1f5f9' : '#1e293b'};
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggle = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => 
    theme === 'dark' 
      ? 'rgba(99, 102, 241, 0.2)' 
      : 'rgba(99, 102, 241, 0.1)'
  };
  color: ${({ theme }) => theme === 'dark' ? '#f1f5f9' : '#1e293b'};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => 
      theme === 'dark' 
        ? 'rgba(99, 102, 241, 0.3)' 
        : 'rgba(99, 102, 241, 0.2)'
    };
    transform: scale(1.05);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  width: 45px;
  height: 45px;
  border: none;
  background: rgba(99, 102, 241, 0.2);
  border-radius: 10px;
  color: ${({ theme }) => theme === 'dark' ? '#f1f5f9' : '#1e293b'};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  right: 2rem;
  background: ${({ theme }) => 
    theme === 'dark' 
      ? 'rgba(30, 41, 59, 0.98)' 
      : 'rgba(255, 255, 255, 0.98)'
  };
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  min-width: 200px;
`;

const MobileNavLink = styled.a`
  color: ${({ theme }) => theme === 'dark' ? '#cbd5e1' : '#475569'};
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    color: ${({ theme }) => theme === 'dark' ? '#f1f5f9' : '#1e293b'};
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <Nav
      theme={theme}
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContainer>
        <Logo
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          AJ
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href} theme={theme}>
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <RightSection>
          <ThemeToggle onClick={toggleTheme} theme={theme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </ThemeToggle>

          <MobileMenuButton 
            theme={theme}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </RightSection>
      </NavContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            theme={theme}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <MobileNavLink
                key={item.label}
                href={item.href}
                theme={theme}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};
