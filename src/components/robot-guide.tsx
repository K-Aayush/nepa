"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface RobotGuideProps {
  currentSection: string;
  onRobotClick: () => void;
  isVisible: boolean;
}

const sectionMessages = {
  welcome: {
    title: "Welcome to NepaTronix! 🚀",
    description:
      "Where Creativity Meets Innovation in IoT and Robotics. I'm your guide through our amazing journey of technology and education. Click me to explore!",
    position: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
    size: "large",
  },
  home: {
    title: "🏠 Our Amazing Home",
    description:
      "Discover NepaTronix - Nepal's leading IoT and Robotics company with 67+ happy students, 15+ completed projects, and innovative solutions.",
    position: { top: "20%", right: "5%", transform: "none" },
    size: "medium",
  },
  about: {
    title: "🔬 Meet Our Team",
    description:
      "Learn about our vision and expertise in IoT development, automation, STEAM education, and cutting-edge research in AI and robotics.",
    position: { top: "15%", left: "5%", transform: "none" },
    size: "medium",
  },
  services: {
    title: "⚙️ Our Services",
    description:
      "From school IoT programs to industrial automation, mobile app integration, and technical training - we've got comprehensive solutions!",
    position: { bottom: "20%", right: "5%", transform: "none" },
    size: "medium",
  },
  projects: {
    title: "🚀 Innovation Showcase",
    description:
      "Explore our fire detection systems, LoRa networks, ultrasonic radar, smart street lights, and award-winning automation projects.",
    position: { bottom: "15%", left: "5%", transform: "none" },
    size: "medium",
  },
  contact: {
    title: "📞 Let's Connect",
    description:
      "Ready to collaborate? Whether it's school partnerships, industrial solutions, or training programs - let's build the future together!",
    position: { top: "25%", left: "50%", transform: "translateX(-50%)" },
    size: "medium",
  },
};

export function RobotGuide({
  currentSection,
  onRobotClick,
  isVisible,
}: RobotGuideProps) {
  const [showMessage, setShowMessage] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentData =
    sectionMessages[currentSection as keyof typeof sectionMessages];
  const isWelcome = currentSection === "welcome";

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setShowMessage(true);
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSection]);

  if (!isVisible || !currentData) return null;

  const robotSize = isWelcome ? "w-48 h-56" : "w-24 h-28";
  const headSize = isWelcome ? "w-32 h-28" : "w-16 h-14";
  const eyeSize = isWelcome ? "w-4 h-4" : "w-2 h-2";
  const eyeGap = isWelcome ? "gap-6" : "gap-3";

  return (
    <motion.div
      className="fixed z-[100] cursor-pointer"
      style={currentData.position}
      animate={currentData.position}
      transition={{
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={onRobotClick}
    >
      {/* Message Container */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className={`absolute ${
              isWelcome
                ? "top-full mt-8 left-1/2 transform -translate-x-1/2 max-w-2xl"
                : currentSection === "home" || currentSection === "services"
                ? "right-full mr-6 top-1/2 transform -translate-y-1/2 max-w-sm"
                : "left-full ml-6 top-1/2 transform -translate-y-1/2 max-w-sm"
            }`}
            initial={{ opacity: 0, scale: 0.8, y: isWelcome ? -20 : 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className={`bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-200/50 ${
                isWelcome ? "text-center" : "text-left"
              }`}
            >
              <h3
                className={`font-black mb-4 text-gray-900 ${
                  isWelcome ? "text-3xl md:text-4xl" : "text-xl"
                }`}
              >
                {currentData.title}
              </h3>
              <p
                className={`text-gray-700 leading-relaxed ${
                  isWelcome ? "text-lg md:text-xl" : "text-sm"
                }`}
              >
                {currentData.description}
              </p>
              {isWelcome && (
                <motion.div
                  className="mt-6 text-cyan-600 font-bold text-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👆 Click me to start exploring!
                </motion.div>
              )}
            </div>

            {/* Speech bubble pointer */}
            <div
              className={`absolute ${
                isWelcome
                  ? "top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
                  : currentSection === "home" || currentSection === "services"
                  ? "left-full top-1/2 transform -translate-y-1/2 -translate-x-2"
                  : "right-full top-1/2 transform -translate-y-1/2 translate-x-2"
              }`}
            >
              <div
                className={`${
                  isWelcome
                    ? "border-l-[20px] border-r-[20px] border-b-[15px] border-l-transparent border-r-transparent border-b-white/95"
                    : currentSection === "home" || currentSection === "services"
                    ? "border-t-[15px] border-b-[15px] border-l-[20px] border-t-transparent border-b-transparent border-l-white/95"
                    : "border-t-[15px] border-b-[15px] border-r-[20px] border-t-transparent border-b-transparent border-r-white/95"
                }`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Robot Container */}
      <motion.div
        className={`relative ${robotSize} hover:scale-110 transition-transform duration-300`}
        animate={{
          y: [0, -8, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: isWelcome ? 3 : 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: isWelcome ? 1.05 : 1.15 }}
        whileTap={{ scale: isWelcome ? 0.95 : 0.9 }}
      >
        {/* Robot Body */}
        <motion.div
          className={`${robotSize} mx-auto relative rounded-3xl`}
          style={{
            background: "linear-gradient(145deg, #2d3748, #1a202c, #000000)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          }}
          animate={{
            boxShadow: [
              "0 20px 60px rgba(0, 0, 0, 0.3)",
              "0 25px 80px rgba(59, 130, 246, 0.2)",
              "0 20px 60px rgba(0, 0, 0, 0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Robot Head */}
          <motion.div
            className={`absolute ${
              isWelcome ? "-top-8" : "-top-5"
            } left-1/2 transform -translate-x-1/2 ${headSize} rounded-2xl`}
            style={{
              background: "linear-gradient(145deg, #4a5568, #2d3748)",
            }}
            animate={{
              rotate: [0, 3, -3, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Eyes */}
            <div
              className={`absolute ${
                isWelcome ? "top-6" : "top-3"
              } left-1/2 transform -translate-x-1/2 flex ${eyeGap}`}
            >
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className={`${eyeSize} bg-cyan-400 rounded-full`}
                  animate={{
                    opacity: [1, 0.3, 1],
                    scaleY: [1, 0.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.9, 1],
                  }}
                  style={{ boxShadow: "0 0 15px rgba(6, 182, 212, 0.8)" }}
                />
              ))}
            </div>

            {/* Mouth */}
            <motion.div
              className={`absolute ${
                isWelcome ? "bottom-4" : "bottom-2"
              } left-1/2 transform -translate-x-1/2 ${
                isWelcome ? "h-2" : "h-1"
              } bg-cyan-400 rounded-sm`}
              animate={{
                width: [
                  isWelcome ? 40 : 20,
                  isWelcome ? 24 : 12,
                  isWelcome ? 40 : 20,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Antenna */}
            <motion.div
              className={`absolute ${
                isWelcome ? "-top-12" : "-top-9"
              } left-1/2 transform -translate-x-1/2 ${
                isWelcome ? "w-2 h-6" : "w-1 h-4"
              }`}
              style={{
                background: "linear-gradient(to top, #4a5568, #718096)",
              }}
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className={`absolute ${
                  isWelcome
                    ? "-top-3 -left-2 w-4 h-4"
                    : "-top-1.5 -left-1 w-2 h-2"
                } rounded-full`}
                style={{
                  background: "radial-gradient(circle, #ef4444, #dc2626)",
                }}
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Chest Light */}
          <motion.div
            className={`absolute ${
              isWelcome ? "top-12" : "top-5"
            } left-1/2 transform -translate-x-1/2 ${
              isWelcome ? "w-16 h-16" : "w-8 h-8"
            } rounded-full border-4 border-cyan-400/40`}
            style={{
              background:
                "linear-gradient(45deg, rgba(100, 100, 100, 0.3), rgba(50, 50, 50, 0.2))",
            }}
            animate={{
              scale: [1, 1.1, 1],
              borderColor: [
                "rgba(6, 182, 212, 0.4)",
                "rgba(6, 182, 212, 0.8)",
                "rgba(6, 182, 212, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                isWelcome ? "w-6 h-6" : "w-2.5 h-2.5"
              } bg-cyan-400 rounded-full`}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              style={{ boxShadow: "0 0 20px rgba(6, 182, 212, 0.8)" }}
            />
          </motion.div>

          {/* Arms */}
          {["left", "right"].map((side, index) => (
            <motion.div
              key={side}
              className={`absolute ${
                isWelcome ? "top-8 w-12 h-3" : "top-4 w-6 h-1.5"
              } rounded-sm ${
                side === "left"
                  ? isWelcome
                    ? "-left-8"
                    : "-left-4"
                  : isWelcome
                  ? "-right-8"
                  : "-right-4"
              }`}
              style={{
                background: "linear-gradient(45deg, #4a5568, #2d3748)",
                transformOrigin:
                  side === "left" ? "right center" : "left center",
              }}
              animate={{ rotate: [0, 25, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1.5,
              }}
            />
          ))}

          {/* Click indicator for welcome */}
          {isWelcome && (
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 text-2xl"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              👆
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
