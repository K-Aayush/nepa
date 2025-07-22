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
import { ProgressIndicator } from "./progress-indicator";

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

export default function Main() {
  const [currentSection, setCurrentSection] = useState("welcome");
  const [isLoading, setIsLoading] = useState(true);
  const [robotSpeechEnabled, setRobotSpeechEnabled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigateToSection = (section: string) => {
    if (section === currentSection) return;

    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleRobotClick = () => {
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    navigateToSection(sections[nextIndex]);
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

  const toggleRobotSpeech = () => {
    setRobotSpeechEnabled(!robotSpeechEnabled);
  };

  // Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
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
            className="text-4xl md:text-6xl font-black text-gray-800 mb-4"
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
            className="text-xl text-cyan-600"
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
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Effects */}
      <AnimatedBackground />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar onNavigate={navigateToSection} activeSection={""} />

      {/* Progress Indicator */}
      <ProgressIndicator
        currentSection={currentSection}
        onNavigate={navigateToSection}
      />

      {/* Robot Guide */}
      <RobotGuide
        currentSection={currentSection}
        onRobotClick={handleRobotClick}
        isVisible={true}
        speechEnabled={robotSpeechEnabled}
      />

      {/* Robot Controls */}
      <div className="fixed bottom-12 right-12 z-[1000]">
        <motion.button
          onClick={toggleRobotSpeech}
          className={`w-16 h-16 rounded-full border-2 transition-all duration-300 flex items-center justify-center text-2xl ${
            robotSpeechEnabled
              ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white border-blue-400"
              : "bg-white/80 text-gray-600 border-gray-300"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Toggle Robot Speech"
        >
          💬
        </motion.button>
      </div>

      {/* Chatbot */}
      <Chatbot />

      {/* Main Content */}
      <main className="relative z-5">
        {/* Welcome Section */}
        <section
          id="welcome"
          className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden"
        >
          <div className="text-center text-gray-800 z-10 relative">
            <motion.h1
              className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-gray-800 via-cyan-400 to-gray-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              NepaTronix
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl mb-8 text-cyan-600 font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Where Creativity Meets Innovation
            </motion.p>
            <motion.p
              className="text-lg md:text-xl mb-12 text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Welcome to Nepal&apos;s leading IoT and Robotics company. Click
              the robot guide to explore our innovative solutions!
            </motion.p>
            <motion.div
              className="text-cyan-600 text-lg font-semibold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👆 Click the robot to start exploring!
            </motion.div>
          </div>
        </section>

        {/* Home Section */}
        <section id="home" className="min-h-screen">
          <HomeSection onNavigate={navigateToSection} />
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen">
          <AboutSection />
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen">
          <ServicesSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
          <ProjectsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen">
          <ContactSection onVisitWebsite={handleVisitWebsite} />
        </section>
        <Footer />
      </main>
    </div>
  );
}
