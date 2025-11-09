// src/components/StatsSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(180deg, #0a0e27 0%, #16213e 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
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
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(99, 102, 241, 0.6);
    box-shadow: 0 20px 60px rgba(99, 102, 241, 0.4);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Number = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const Label = styled.div`
  font-size: 1.1rem;
  color: #94a3b8;
  font-weight: 600;
`;

const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const increment = end / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration, start]);

  return [count, ref];
};

const stats = [
  { icon: "🚀", end: 5, label: "Projects Completed", suffix: "" },
  { icon: "💼", end: 6, label: "Months Experience", suffix: "+" },
  { icon: "💻", end: 10, label: "Technologies", suffix: "+" },
  { icon: "⭐", end: 100, label: "Commits", suffix: "+" },
];

export const StatsSection = () => {
  return (
    <Section>
      <Container>
        <StatsGrid>
          {stats.map((stat, i) => {
            const [count, ref] = useCountUp(stat.end, 2000);
            return (
              <StatCard
                key={i}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Icon>{stat.icon}</Icon>
                <Number>
                  {count}
                  {stat.suffix}
                </Number>
                <Label>{stat.label}</Label>
              </StatCard>
            );
          })}
        </StatsGrid>
      </Container>
    </Section>
  );
};
