// src/components/SkillsRadar.jsx

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const RadarContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 500px;
  position: relative;
  margin: 3rem auto;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const SkillLabel = styled(motion.text)`
  fill: #cbd5e1;
  font-size: 14px;
  font-weight: 600;
  text-anchor: middle;
`;

const skills = [
  { name: "React", value: 90 },
  { name: "Node.js", value: 85 },
  { name: "MongoDB", value: 85 },
  { name: "JavaScript", value: 85 },
  { name: "Python", value: 80 },
  { name: "CSS", value: 95 },
];

export const SkillsRadar = () => {
  const center = 250;
  const radius = 180;
  const levels = 5;
  const angleStep = (Math.PI * 2) / skills.length;

  const getPoint = (value, index) => {
    const angle = angleStep * index - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const getLabelPoint = (index) => {
    const angle = angleStep * index - Math.PI / 2;
    const r = radius + 40;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const dataPoints = skills.map((skill, i) => getPoint(skill.value, i));
  const pathData = dataPoints.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ') + ' Z';

  return (
    <RadarContainer>
      <SVG viewBox="0 0 500 500">
        {/* Background levels */}
        {[...Array(levels)].map((_, i) => {
          const r = (radius / levels) * (i + 1);
          const points = skills.map((_, j) => {
            const angle = angleStep * j - Math.PI / 2;
            return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
          }).join(' ');
          
          return (
            <polygon
              key={i}
              points={points}
              fill="none"
              stroke="rgba(99, 102, 241, 0.2)"
              strokeWidth="1"
            />
          );
        })}

        {/* Axis lines */}
        {skills.map((_, i) => {
          const point = getPoint(100, i);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={point.x}
              y2={point.y}
              stroke="rgba(99, 102, 241, 0.2)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data area */}
        <motion.path
          d={pathData}
          fill="rgba(99, 102, 241, 0.3)"
          stroke="url(#gradient)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Data points */}
        {dataPoints.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="6"
            fill="#6366f1"
            stroke="white"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.5 }}
          />
        ))}

        {/* Labels */}
        {skills.map((skill, i) => {
          const labelPos = getLabelPoint(i);
          return (
            <SkillLabel
              key={i}
              x={labelPos.x}
              y={labelPos.y}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              {skill.name}
            </SkillLabel>
          );
        })}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </SVG>
    </RadarContainer>
  );
};
