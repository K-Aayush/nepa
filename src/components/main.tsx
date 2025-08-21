"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { AnimatedBackground } from "@/components/animated-background";
import { CustomCursor } from "@/components/custom-cursor";
import { Chatbot } from "@/components/chatbot";
import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServiceSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { PatnerSection } from "@/components/sections/patner-section";
import { ProductsSection } from "./sections/products-section";
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
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
    // const router = useRouter();

  useEffect(() => {
    setMounted(true);
    setIsLoading(true);
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

  // Loading Screen (only after mount to avoid hydration mismatch)
  if (mounted && isLoading) {
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

      {/* Progress Indicator */}
      <ProgressIndicator
        currentSection={currentSection}
        onNavigate={navigateToSection}
      />



      {/* Chatbot */}
      <Chatbot />

      {/* Main Content */}
      <main className="relative z-5">
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
          <ServiceSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
          <ProjectsSection />
        </section>

        <section id="products" className="min-h-screen">
          <ProductsSection />
        </section>

        {/* Contact Section */}
        <section id="patner" className="min-h-screen">
          <PatnerSection onNavigate={() => {}} />
        </section>
      </main>
    </div>
  );
}
