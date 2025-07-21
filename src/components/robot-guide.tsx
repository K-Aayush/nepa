"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface RobotGuideProps {
  currentSection: string;
  isVisible: boolean;
}

const sectionPositions = {
  home: { top: "50%", left: "100px" },
  about: { top: "30%", right: "150px" },
  services: { top: "20%", left: "50%", transform: "translateX(-50%)" },
  projects: { bottom: "25%", left: "200px" },
  contact: { top: "40%", right: "120px" },
};

const robotMessages = {
  home: "🏠 Welcome to NepaTronix! Where creativity meets innovation in IoT and robotics. Ready to explore?",
  about:
    "🔬 Meet our amazing team! We're Nepal's leading IoT developers creating high-end automation solutions.",
  services:
    "⚙️ Discover our services! From school programs to industrial automation - we've got you covered!",
  projects:
    "🚀 Check out our innovations! From fire detection to LoRa systems - real solutions for real problems.",
  contact:
    "📞 Let's collaborate! Ready to start your IoT journey or bring robotics to your school?",
};

export function RobotGuide({ currentSection, isVisible }: RobotGuideProps) {
  const [showSpeech, setShowSpeech] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentPosition =
    sectionPositions[currentSection as keyof typeof sectionPositions];

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setShowSpeech(true);
        setIsAnimating(false);
        setTimeout(() => setShowSpeech(false), 4000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentSection, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed z-[999] w-30 h-35"
      style={currentPosition}
      animate={currentPosition}
      transition={{
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Robot Speech Bubble */}
      <AnimatePresence>
        {showSpeech && (
          <motion.div
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white px-4 py-3 rounded-2xl text-sm font-semibold max-w-xs text-center border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {robotMessages[currentSection as keyof typeof robotMessages]}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-900/90" />
            <motion.div
              animate={{ y: [-25, -20, -25] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Robot Container */}
      <motion.div
        className="relative w-full h-full cursor-pointer"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
      >
        {/* Robot Body */}
        <motion.div
          className="w-18 h-20 mx-auto relative rounded-2xl"
          style={{
            background: "linear-gradient(145deg, #333333, #1a1a1a, #000000)",
          }}
          animate={{
            boxShadow: [
              "0 0 30px rgba(0, 0, 0, 0.3)",
              "0 0 50px rgba(0, 0, 0, 0.5)",
              "0 0 30px rgba(0, 0, 0, 0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Robot Head */}
          <motion.div
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-11 rounded-xl"
            style={{
              background: "linear-gradient(145deg, #333333, #1a1a1a)",
            }}
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Eyes */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-3">
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    opacity: [1, 0.3, 1],
                    scaleY: [1, 0.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.9, 1],
                  }}
                  style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
                />
              ))}
            </div>

            {/* Mouth */}
            <motion.div
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-white rounded-sm"
              animate={{ width: [20, 12, 20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Antenna */}
            <motion.div
              className="absolute -top-9 left-1/2 transform -translate-x-1/2 w-1 h-4"
              style={{
                background: "linear-gradient(to top, #333333, #666666)",
              }}
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute -top-1.5 -left-1 w-2 h-2 rounded-full"
                style={{
                  background: "radial-gradient(circle, #ff0000, #cc0000)",
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
            className="absolute top-5 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-2 border-white/40"
            style={{
              background:
                "linear-gradient(45deg, rgba(100, 100, 100, 0.3), rgba(50, 50, 50, 0.2))",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Arms */}
          {["left", "right"].map((side, index) => (
            <motion.div
              key={side}
              className={`absolute top-4 w-6 h-1.5 rounded-sm ${
                side === "left" ? "-left-4" : "-right-4"
              }`}
              style={{
                background: "linear-gradient(45deg, #333333, #1a1a1a)",
                transformOrigin:
                  side === "left" ? "right center" : "left center",
              }}
              animate={{ rotate: [0, 35, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1.5,
              }}
            />
          ))}

          {/* Propulsion (when traveling) */}
          {isAnimating && (
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className={`absolute bottom-0 w-2 h-3 rounded-t-full ${
                    i === 0 ? "left-1" : "right-1"
                  }`}
                  style={{
                    background: "linear-gradient(to top, #666666, #999999)",
                  }}
                  animate={{
                    scaleY: [1, 1.2, 1],
                    scaleX: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
