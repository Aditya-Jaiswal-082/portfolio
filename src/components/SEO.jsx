// src/components/SEO.jsx

import React, { useEffect } from "react";

export const SEO = ({
  title = "Aditya Jaiswal | Full Stack Developer",
  description = "Full Stack Web Developer specializing in React, Node.js, MongoDB. Building modern, responsive web applications.",
  keywords = "Full Stack Developer, React Developer, Node.js, MongoDB, Web Developer, Aditya Jaiswal",
  image = "/og-image.jpg",
  url = "https://adityajaiswal.dev"
}) => {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Aditya Jaiswal');
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', url, true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('theme-color', '#6366f1');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, image, url]);

  return null;
};
