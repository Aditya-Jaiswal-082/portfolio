// src/components/PageTransition.jsx

import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(-100%);
  }
`;

const TransitionOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(motion.div)`
  font-size: 5rem;
  font-weight: 800;
  color: white;
`;

export const PageTransition = ({ children }) => {
  return (
    <>
      <TransitionOverlay
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Logo
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          AJ
        </Logo>
      </TransitionOverlay>
      {children}
    </>
  );
};
