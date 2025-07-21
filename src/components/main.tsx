"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AnimatedBackground } from "@/components/animated-background";
import { CustomCursor } from "@/components/custom-cursor";
import { RobotGuide } from "@/components/robot-guide";
import { Chatbot } from "@/components/chatbot";
import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";
import { Navbar } from "./navbar";

const sections = [
  "welcome",
  "home",
  "about",
  "services",
  "projects",
  "contact",
];

export default function Main() {
  const [currentSection, setCurrentSection] = useState("welcome");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigateToSection = (section: string) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleRobotClick = () => {
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    setCurrentSection(sections[nextIndex]);
  };

  // Intersection Observer for section detection
  useEffect(() => {
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

  const handleVisitWebsite = () => {
    window.open("https://www.nepatronix.org", "_blank");
  };

  // Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="text-8xl mb-8"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🤖
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-black text-white mb-4"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            NepaTronix
          </motion.h1>
          <motion.p
            className="text-xl text-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Where Creativity Meets Innovation
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <AnimatedBackground />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar onNavigate={navigateToSection} />

      {/* Robot Guide */}
      <RobotGuide
        currentSection={currentSection}
        onRobotClick={handleRobotClick}
        isVisible={true}
      />

      {/* Chatbot */}
      <Chatbot />

      {/* Main Content */}
      <main className="relative z-5">
        {currentSection === "welcome" && (
          <div className="min-h-screen flex items-center justify-center">
            {/* Welcome content is handled by RobotGuide */}
          </div>
        )}

        {currentSection === "home" && (
          <div className="min-h-screen">
            <HomeSection onNavigate={handleRobotClick} />
          </div>
        )}

        {currentSection === "about" && (
          <div className="min-h-screen">
            <AboutSection />
          </div>
        )}

        {currentSection === "services" && (
          <div className="min-h-screen">
            <ServicesSection />
          </div>
        )}

        {currentSection === "projects" && (
          <div className="min-h-screen">
            <ProjectsSection />
          </div>
        )}

        {currentSection === "contact" && (
          <div className="min-h-screen">
            <ContactSection onVisitWebsite={handleVisitWebsite} />
            <Footer />
          </div>
        )}
      </main>
    </div>
  );
}
