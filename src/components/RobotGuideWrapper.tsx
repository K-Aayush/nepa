"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RobotGuide } from "./robot-guide";

const sections = [
  "welcome",
  "Home", 
  "COLLABORATION",
  "SERVICES",
  "PRODUCTS", 
  "TEAMS",
  "BLOGS",
  "GALLERY",
  "CONTACT",
];

export function RobotGuideWrapper() {
  const [currentSection, setCurrentSection] = useState("welcome");
  const router = useRouter();

  const navigateToSection = (section: string) => {
    setCurrentSection(section);
    
    // Handle navigation based on section
    if (section === "welcome" || section === "Home") {
      // Stay on main page but scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      // Navigate to specific pages
      const pageRoutes: Record<string, string> = {
        "COLLABORATION": "/collaboration",
        "SERVICES": "/services", 
        "PRODUCTS": "/products",
        "TEAMS": "/teams",
        "BLOGS": "/blogs",
        "GALLERY": "/gallery",
        "CONTACT": "/contact"
      };
      
      const route = pageRoutes[section];
      if (route) {
        router.push(route);
      }
    }
  };

  // Detect current section based on URL
  useEffect(() => {
    const currentPath = window.location.pathname;
    
    if (currentPath === "/" || currentPath === "") {
      setCurrentSection("welcome");
    } else if (currentPath === "/collaboration") {
      setCurrentSection("COLLABORATION");
    } else if (currentPath === "/services") {
      setCurrentSection("SERVICES");
    } else if (currentPath === "/products") {
      setCurrentSection("PRODUCTS");
    } else if (currentPath === "/teams") {
      setCurrentSection("TEAMS");
    } else if (currentPath === "/blogs") {
      setCurrentSection("BLOGS");
    } else if (currentPath === "/gallery") {
      setCurrentSection("GALLERY");
    } else if (currentPath === "/contact") {
      setCurrentSection("CONTACT");
    }
  }, []);

  // Listen for scroll events on main page to update section
  useEffect(() => {
    if (window.location.pathname !== "/" && window.location.pathname !== "") {
      return; // Don't run intersection observer on other pages
    }

    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sections.includes(sectionId)) {
            setCurrentSection(sectionId);
          }
        }
      });
    }, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <RobotGuide
      currentSection={currentSection}
      onNavigate={navigateToSection}
      isVisible={true}
    />
  );
}
