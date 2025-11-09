// src/styles/GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
    transition: background 0.3s ease, color 0.3s ease;
  }

  #root {
    width: 100%;
    overflow-x: hidden;
  }

  /* Hide custom cursor on mobile/tablet */
  @media (max-width: 1024px) {
    * {
      cursor: auto !important;
    }
  }

  /* Only use custom cursor on desktop */
  @media (min-width: 1025px) {
    * {
      cursor: none !important;
    }
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
  }

  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 4px;
    }
  }

  /* Selection styles */
  ::selection {
    background: rgba(99, 102, 241, 0.3);
    color: ${({ theme }) => theme.colors.text};
  }

  /* Prevent horizontal scroll on mobile */
  body, html {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
