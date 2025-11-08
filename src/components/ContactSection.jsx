// src/components/ContactSection.jsx

import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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
  margin: 0 auto 1rem;
  line-height: 1.8;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const InfoItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.75rem;
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: white;
  border-radius: 15px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(99, 102, 241, 0.6);
    box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
    background: rgba(30, 41, 59, 0.8);
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
`;

const FormWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const FormContainer = styled(motion.form)`
  width: 100%;
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  position: relative;

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

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormGroup = styled(motion.div)`
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 2.5rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #f1f5f9;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.6);
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  color: #f1f5f9;
  transition: all 0.3s ease;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
    background: rgba(15, 23, 42, 0.8);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.6);
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  color: #f1f5f9;
  min-height: 160px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
    background: rgba(15, 23, 42, 0.8);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.25rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(99, 102, 241, 0.6);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Message = styled(motion.p)`
  margin-top: 1.5rem;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background: ${({ success }) => 
    success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
  border: 1px solid ${({ success }) => 
    success ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'};
  color: ${({ success }) => (success ? '#10b981' : '#ef4444')};
`;

export const ContactSection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your EmailJS credentials
    emailjs
      .sendForm(
        "service_ip76gts", // Replace with your EmailJS service ID
        "template_0zezcrq", // Replace with your EmailJS template ID
        formRef.current,
        "A0QhgCQqXpQWvecS_" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully! I'll get back to you soon.");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again or email directly.");
          setLoading(false);
        }
      );
  };

  return (
    <Section id="contact">
      <Container>
        <Title
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </Subtitle>

        <ContactInfo
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <InfoItem
            href="mailto:adityajaiswal2704@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon>📧</Icon> Email
          </InfoItem>
          <InfoItem
            href="https://linkedin.com/in/aditya-j-b949b2242"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon>💼</Icon> LinkedIn
          </InfoItem>
          <InfoItem
            href="https://github.com/Aditya-Jaiswal-082"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon>💻</Icon> GitHub
          </InfoItem>
          <InfoItem
            href="tel:+919722404430"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon>📱</Icon> Phone
          </InfoItem>
        </ContactInfo>

        <FormWrapper>
          <FormContainer
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="user_name"
                required
                placeholder="Your Name"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="user_email"
                required
                placeholder="your.email@example.com"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                required
                placeholder="Your message here..."
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message 🚀"}
            </SubmitButton>

            {status && (
              <Message
                success={status.includes("success")}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {status}
              </Message>
            )}
          </FormContainer>
        </FormWrapper>
      </Container>
    </Section>
  );
};
