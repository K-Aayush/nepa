"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface RobotGuideProps {
  currentSection: string;
  onRobotClick: () => void;
  isVisible: boolean;
  speechEnabled?: boolean;
}

const sectionMessages = {
  welcome: {
    title: "🚀 Welcome to NepaTronix!",
    description:
      "I'm your IoT guide! Let's explore where creativity meets innovation. Click me to start your journey!",
    position: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
    messageDirection: "bottom",
  },
  home: {
    title: "🏠 Our Amazing Home",
    description:
      "Discover NepaTronix - Nepal's leading IoT and Robotics company with 67+ happy students and 15+ completed projects.",
    position: { top: "30%", left: "120px" },
    messageDirection: "right",
  },
  about: {
    title: "🔬 Meet Our Team",
    description:
      "Learn about our vision and expertise in IoT development, automation, STEAM education, and cutting-edge research.",
    position: { top: "25%", right: "120px" },
    messageDirection: "left",
  },
  services: {
    title: "⚙️ Our Services",
    description:
      "From school IoT programs to industrial automation, mobile app integration, and technical training - we've got you covered!",
    position: { top: "30%", left: "120px" },
    messageDirection: "right",
  },
  projects: {
    title: "🚀 Innovation Showcase",
    description:
      "Explore our fire detection systems, LoRa networks, ultrasonic radar, smart street lights, and award-winning projects.",
    position: { top: "25%", right: "120px" },
    messageDirection: "left",
  },
  contact: {
    title: "📞 Let's Connect",
    description:
      "Ready to collaborate? Whether it's school partnerships, industrial solutions, or training programs - let's build the future together!",
    position: { top: "30%", left: "120px" },
    messageDirection: "right",
  },
};

export function RobotGuide({
  currentSection,
  onRobotClick,
  isVisible,
  speechEnabled = true,
}: RobotGuideProps) {
  const [showMessage, setShowMessage] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const currentData =
    sectionMessages[currentSection as keyof typeof sectionMessages];
  const isWelcome = currentSection === "welcome";

  // Auto-hide message after 5 seconds (except for welcome)
  useEffect(() => {
    if (!isWelcome && speechEnabled) {
      const timer = setTimeout(() => {
        if (!isHovered) {
          setShowMessage(false);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSection, isHovered, isWelcome, speechEnabled]);

  // Show message when section changes
  useEffect(() => {
    if (speechEnabled) {
      setShowMessage(true);
      setIsMoving(true);
      const timer = setTimeout(() => setIsMoving(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentSection, speechEnabled]);

  if (!isVisible || !currentData) return null;

  // Enhanced robot size and glow
  const robotSize = isWelcome ? "w-36 h-44" : "w-24 h-32";
  const headSize = isWelcome ? "w-24 h-18" : "w-14 h-12";
  const eyeSize = isWelcome ? "w-3 h-3" : "w-2 h-2";
  const eyeGap = isWelcome ? "gap-6" : "gap-3";

  return (
    <motion.div
      className="fixed z-[200] cursor-pointer"
      style={currentData.position}
      initial={currentData.position}
      animate={currentData.position}
      transition={{
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={onRobotClick}
      onMouseEnter={() => {
        setIsHovered(true);
        if (speechEnabled) setShowMessage(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {/* Message Container */}
      <AnimatePresence>
        {showMessage && speechEnabled && (
          <motion.div
            className={`absolute z-10 ${
              currentData.messageDirection === "bottom"
                ? "top-full mt-6 left-1/2 transform -translate-x-1/2 w-80"
                : currentData.messageDirection === "right"
                ? "left-full ml-4 top-1/2 transform -translate-y-1/2 w-72"
                : currentData.messageDirection === "left"
                ? "right-full mr-4 top-1/2 transform -translate-y-1/2 w-72"
                : "bottom-full mb-6 left-1/2 transform -translate-x-1/2 w-72"
            }`}
            initial={{
              opacity: 0,
              scale: 0.8,
              x:
                currentData.messageDirection === "right"
                  ? -20
                  : currentData.messageDirection === "left"
                  ? 20
                  : 0,
              y:
                currentData.messageDirection === "bottom"
                  ? -20
                  : currentData.messageDirection === "top"
                  ? 20
                  : 0,
            }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.8,
              x:
                currentData.messageDirection === "right"
                  ? -10
                  : currentData.messageDirection === "left"
                  ? 10
                  : 0,
              y:
                currentData.messageDirection === "bottom"
                  ? -10
                  : currentData.messageDirection === "top"
                  ? 10
                  : 0,
            }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className={`bg-gradient-to-br from-cyan-900 via-gray-900 to-gray-800 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-cyan-400/30 text-white relative ${
                isWelcome ? "text-center" : "text-left"
              }`}
            >
              <h3
                className={`font-bold mb-2 ${
                  isWelcome ? "text-2xl md:text-3xl drop-shadow-lg" : "text-base"
                }`}
              >
                {currentData.title}
              </h3>
              <p
                className={`text-cyan-200 leading-relaxed ${
                  isWelcome ? "text-base md:text-lg" : "text-sm"
                }`}
              >
                {currentData.description}
              </p>
              {isWelcome && (
                <motion.div
                  className="mt-4 text-cyan-400 font-bold text-base"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👆 Click me to start exploring!
                </motion.div>
              )}
              {!isWelcome && (
                <div className="mt-2 text-xs text-gray-400">
                  Hover to keep message visible
                </div>
              )}

              {/* Speech bubble pointer */}
              <div
                className={`absolute ${
                  currentData.messageDirection === "bottom"
                    ? "top-0 left-1/2 transform -translate-x-1/2 -translate-y-full border-l-[12px] border-r-[12px] border-b-[8px] border-l-transparent border-r-transparent border-b-cyan-900"
                    : currentData.messageDirection === "right"
                    ? "right-full top-1/2 transform -translate-y-1/2 translate-x-1 border-t-[8px] border-b-[8px] border-r-[12px] border-t-transparent border-b-transparent border-r-cyan-900"
                    : currentData.messageDirection === "left"
                    ? "left-full top-1/2 transform -translate-y-1/2 -translate-x-1 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent border-l-cyan-900"
                    : "bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-l-[12px] border-r-[12px] border-t-[8px] border-l-transparent border-r-transparent border-t-cyan-900"
                }`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Robot Container */}
      <motion.div
        className={`relative ${robotSize}`}
        animate={{
          y: [0, -6, 0],
          rotate: isMoving ? [0, 5, -5, 0] : [0, 1, -1, 0],
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
          className={`${robotSize} mx-auto relative rounded-2xl`}
          style={{
            background: "linear-gradient(145deg, #2d3748, #1a202c, #000000)",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
          }}
          animate={{
            boxShadow: [
              "0 15px 40px rgba(0, 0, 0, 0.3)",
              "0 20px 50px rgba(59, 130, 246, 0.2)",
              "0 15px 40px rgba(0, 0, 0, 0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Robot Head */}
          <motion.div
            className={`absolute ${
              isWelcome ? "-top-6" : "-top-4"
            } left-1/2 transform -translate-x-1/2 ${headSize} rounded-xl`}
            style={{
              background: "linear-gradient(145deg, #4a5568, #2d3748)",
            }}
            animate={{
              rotate: [0, 2, -2, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Eyes */}
            <div
              className={`absolute ${
                isWelcome ? "top-4" : "top-2"
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
                  style={{ boxShadow: "0 0 10px rgba(6, 182, 212, 0.8)" }}
                />
              ))}
            </div>

            {/* Mouth */}
            <motion.div
              className={`absolute ${
                isWelcome ? "bottom-2" : "bottom-1"
              } left-1/2 transform -translate-x-1/2 ${
                isWelcome ? "h-1" : "h-0.5"
              } bg-cyan-400 rounded-sm`}
              animate={{
                width: [
                  isWelcome ? 24 : 16,
                  isWelcome ? 16 : 10,
                  isWelcome ? 24 : 16,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Antenna */}
            <motion.div
              className={`absolute ${
                isWelcome ? "-top-8" : "-top-6"
              } left-1/2 transform -translate-x-1/2 ${
                isWelcome ? "w-1 h-4" : "w-0.5 h-3"
              }`}
              style={{
                background: "linear-gradient(to top, #4a5568, #718096)",
              }}
              animate={{ rotate: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className={`absolute ${
                  isWelcome
                    ? "-top-2 -left-1 w-2 h-2"
                    : "-top-1 -left-0.5 w-1 h-1"
                } rounded-full`}
                style={{
                  background: "radial-gradient(circle, #ef4444, #dc2626)",
                }}
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
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
              isWelcome ? "top-8" : "top-4"
            } left-1/2 transform -translate-x-1/2 ${
              isWelcome ? "w-10 h-10" : "w-6 h-6"
            } rounded-full border-2 border-cyan-400/40`}
            style={{
              background:
                "linear-gradient(45deg, rgba(100, 100, 100, 0.3), rgba(50, 50, 50, 0.2))",
            }}
            animate={{
              scale: [1, 1.05, 1],
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
                isWelcome ? "w-3 h-3" : "w-1.5 h-1.5"
              } bg-cyan-400 rounded-full`}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              style={{ boxShadow: "0 0 15px rgba(6, 182, 212, 0.8)" }}
            />
          </motion.div>

          {/* Arms */}
          {["left", "right"].map((side, index) => (
            <motion.div
              key={side}
              className={`absolute ${
                isWelcome ? "top-6 w-8 h-2" : "top-3 w-4 h-1"
              } rounded-sm ${
                side === "left"
                  ? isWelcome
                    ? "-left-6"
                    : "-left-3"
                  : isWelcome
                  ? "-right-6"
                  : "-right-3"
              }`}
              style={{
                background: "linear-gradient(45deg, #4a5568, #2d3748)",
                transformOrigin:
                  side === "left" ? "right center" : "left center",
              }}
              animate={{ rotate: [0, 20, -8, 0] }}
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
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-cyan-400 text-xl"
              animate={{
                y: [0, -8, 0],
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
