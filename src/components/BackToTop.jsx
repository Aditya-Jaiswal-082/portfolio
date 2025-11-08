// src/components/BackToTop.jsx

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Button = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 15px 40px rgba(99, 102, 241, 0.7);
  }
`;

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </Button>
      )}
    </AnimatePresence>
  );
};
