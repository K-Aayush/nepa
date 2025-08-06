"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RobotGuideProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  isVisible?: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speed: number;
}

interface RobotEmotion {
  eyes: string;
  mouth: string;
  color: string;
  animation: string;
}

interface SectionInfo {
  name: string;
  title: string;
  description: string;
  tips: string[];
  nextSection?: string;
}

const sectionData: Record<string, SectionInfo> = {
  welcome: {
    name: "welcome",
    title: "🎉 Welcome to NepaTronix!",
    description: "Hi there! I'm Robo, your intelligent AI guide. I'll help you explore our amazing IoT and Robotics innovations!",
    tips: [
      "🚀 I can auto-guide you through our entire website!",
      "💡 Click me anytime for personalized help and tips!",
      "🎯 I know exactly what you need at each section!",
      "✨ Watch me change colors and animations as we explore!"
    ],
    nextSection: "Home"
  },
  Home: {
    name: "Home",
    title: "🏠 Our Amazing Story",
    description: "Let me tell you about NepaTronix's incredible journey in IoT and Robotics innovation!",
    tips: [
      "🌟 We're Nepal's leading IoT & Robotics company",
      "🎓 Pioneering STEAM education for future innovators",
      "🔬 Cutting-edge research and development facilities",
      "🌍 Global impact with local innovation expertise"
    ],
    nextSection: "COLLABORATION"
  },
  COLLABORATION: {
    name: "COLLABORATION",
    title: "🤝 Strategic Partnerships",
    description: "Discover how we collaborate with industry leaders to create groundbreaking solutions!",
    tips: [
      "🏢 Partnerships with Fortune 500 companies",
      "🎓 University research collaborations",
      "🌐 International technology exchange programs",
      "💼 Joint ventures in emerging technologies"
    ],
    nextSection: "SERVICES"
  },
  SERVICES: {
    name: "SERVICES",
    title: "🛠️ Expert Services",
    description: "Explore our comprehensive suite of IoT and Robotics services designed for success!",
    tips: [
      "🔧 Custom IoT Development & Integration",
      "🤖 Advanced Robotics Design & Engineering", 
      "📚 Interactive STEAM Education Programs",
      "⚡ Intelligent Automation Solutions",
      "🔒 Secure IoT Infrastructure Design"
    ],
    nextSection: "PRODUCTS"
  },
  PRODUCTS: {
    name: "PRODUCTS",
    title: "🔧 Innovative Products",
    description: "Check out our revolutionary IoT and Robotics products that are changing the world!",
    tips: [
      "📱 Smart IoT Devices for homes and industries",
      "🎓 Educational Robot Kits for learning",
      "🏭 Industrial Automation & Control Systems",
      "🔧 Custom Hardware Solutions for any need",
      "🧠 AI-Powered Intelligent Systems"
    ],
    nextSection: "TEAMS"
  },
  TEAMS: {
    name: "TEAMS",
    title: "👥 Meet Our Brilliant Team",
    description: "Get to know the amazing people behind NepaTronix's innovations!",
    tips: [
      "👨‍💻 Expert Engineers & Software Developers",
      "🔬 Research Scientists & Innovation Specialists",
      "🎨 Creative Designers & UX Experts", 
      "📈 Business Development & Strategy Leaders",
      "🎓 Educational Consultants & Trainers"
    ],
    nextSection: "BLOGS"
  },
  BLOGS: {
    name: "BLOGS",
    title: "📝 Knowledge Hub",
    description: "Dive into our latest insights on IoT, Robotics, and cutting-edge technology trends!",
    tips: [
      "📊 Industry insights and market analysis",
      "🛠️ Step-by-step technical tutorials",
      "📋 Real-world project case studies",
      "🔮 Future technology predictions",
      "💡 Innovation spotlights and breakthroughs"
    ],
    nextSection: "GALLERY"
  },
  GALLERY: {
    name: "GALLERY",
    title: "📸 Success Showcase",
    description: "Explore our impressive portfolio of successful projects and client transformations!",
    tips: [
      "🏆 Award-winning project implementations",
      "📈 Before & after transformation showcases",
      "😊 Happy client testimonials and success stories",
      "🌟 Innovation highlights and achievements",
      "🎯 Real-world impact demonstrations"
    ],
    nextSection: "CONTACT"
  },
  CONTACT: {
    name: "CONTACT",
    title: "📞 Let's Connect!",
    description: "Ready to start your IoT or Robotics journey? I'm here to help you get started!",
    tips: [
      "💬 Free consultation with our experts available",
      "📧 Multiple contact channels for your convenience",
      "⚡ Quick response guaranteed within 24 hours",
      "📋 Custom project quotes and proposals",
      "🎯 Personalized solution recommendations"
    ]
  }
};

export function RobotGuide({ currentSection, onNavigate, isVisible = true }: RobotGuideProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isAutoTour, setIsAutoTour] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [robotColor, setRobotColor] = useState("#00bcd4");
  const [robotEmotion, setRobotEmotion] = useState<RobotEmotion>({
    eyes: "◉ ◉",
    mouth: "‿",
    color: "#00bcd4",
    animation: "normal"
  });
  const [isThinking, setIsThinking] = useState(false);
  const [greetingShown, setGreetingShown] = useState(false);
  const speechRef = useRef<HTMLDivElement>(null);

  const currentSectionData = sectionData[currentSection] || sectionData.welcome;

  // Dynamic color and emotion based on section
  useEffect(() => {
    const sectionConfig = {
      welcome: { 
        color: "#ff6b6b", 
        emotion: { eyes: "◉ ◉", mouth: "‿", color: "#ff6b6b", animation: "excited" }
      },
      Home: { 
        color: "#4ecdc4", 
        emotion: { eyes: "● ●", mouth: "‿", color: "#4ecdc4", animation: "friendly" }
      },
      COLLABORATION: { 
        color: "#45b7d1", 
        emotion: { eyes: "◕ ◕", mouth: "‿", color: "#45b7d1", animation: "collaborative" }
      },
      SERVICES: { 
        color: "#96ceb4", 
        emotion: { eyes: "◎ ◎", mouth: "‿", color: "#96ceb4", animation: "professional" }
      },
      PRODUCTS: { 
        color: "#feca57", 
        emotion: { eyes: "★ ★", mouth: "‿", color: "#feca57", animation: "innovative" }
      },
      TEAMS: { 
        color: "#ff9ff3", 
        emotion: { eyes: "♥ ♥", mouth: "‿", color: "#ff9ff3", animation: "warm" }
      },
      BLOGS: { 
        color: "#54a0ff", 
        emotion: { eyes: "◈ ◈", mouth: "‿", color: "#54a0ff", animation: "thoughtful" }
      },
      GALLERY: { 
        color: "#5f27cd", 
        emotion: { eyes: "◆ ◆", mouth: "‿", color: "#5f27cd", animation: "artistic" }
      },
      CONTACT: { 
        color: "#00d2d3", 
        emotion: { eyes: "◉ ◉", mouth: "‿", color: "#00d2d3", animation: "helpful" }
      }
    };
    
    const config = sectionConfig[currentSection as keyof typeof sectionConfig] || sectionConfig.welcome;
    setRobotColor(config.color);
    setRobotEmotion(config.emotion);
  }, [currentSection]);

  // Auto-show speech bubble with personality
  useEffect(() => {
    setIsThinking(true);
    setShowSpeechBubble(true);
    setCurrentTipIndex(0);
    
    // Show greeting only once
    if (!greetingShown && currentSection === "welcome") {
      setGreetingShown(true);
    }
    
    const timer = setTimeout(() => {
      setIsThinking(false);
      if (!isExpanded) {
        setTimeout(() => setShowSpeechBubble(false), 2000);
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [currentSection, isExpanded, greetingShown]);

  // Enhanced particle effects with colors and physics
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => [
        ...prev.slice(-12),
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: robotColor,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 1
        }
      ]);
    }, 300);
    return () => clearInterval(interval);
  }, [robotColor]);

  // Auto tour functionality
  useEffect(() => {
    if (!isAutoTour) return;
    
    const timer = setTimeout(() => {
      const nextSection = currentSectionData.nextSection;
      if (nextSection) {
        onNavigate(nextSection);
      } else {
        setIsAutoTour(false);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [isAutoTour, currentSection, currentSectionData, onNavigate]);

  const handleRobotClick = () => {
    setIsExpanded(!isExpanded);
    setShowSpeechBubble(!isExpanded);
    setIsThinking(true);
    
    // Add click feedback emotion
    setRobotEmotion(prev => ({
      ...prev,
      eyes: "^ ^",
      mouth: "‿",
      animation: "happy"
    }));
    
    setTimeout(() => {
      setIsThinking(false);
      setRobotEmotion(prev => ({
        ...prev,
        eyes: "◉ ◉",
        animation: "normal"
      }));
    }, 800);
  };

  const handleNextSection = () => {
    const nextSection = currentSectionData.nextSection;
    if (nextSection) {
      setIsThinking(true);
      setRobotEmotion(prev => ({
        ...prev,
        eyes: "→ →",
        animation: "guiding"
      }));
      
      setTimeout(() => {
        onNavigate(nextSection);
        setIsThinking(false);
      }, 1000);
    }
  };

  const startAutoTour = () => {
    if (isAutoTour) {
      setIsAutoTour(false);
      setRobotEmotion(prev => ({
        ...prev,
        eyes: "◉ ◉",
        mouth: "‿",
        animation: "normal"
      }));
    } else {
      setIsAutoTour(true);
      setRobotEmotion(prev => ({
        ...prev,
        eyes: "★ ★", 
        mouth: "‿",
        animation: "touring"
      }));
      onNavigate("welcome");
    }
  };

  const nextTip = () => {
    setCurrentTipIndex((prev) => 
      (prev + 1) % currentSectionData.tips.length
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-32 right-6 z-[1000]">
      {/* Enhanced Particles with Physics */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{ 
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`
            }}
            initial={{ 
              x: particle.x + "%", 
              y: particle.y + "%", 
              opacity: 0,
              scale: 0 
            }}
            animate={{ 
              x: [particle.x + "%", (particle.x + 30 * particle.speed) + "%"],
              y: [particle.y + "%", (particle.y - 40 * particle.speed) + "%"],
              opacity: [0, 1, 0.5, 0],
              scale: [0, 1, 1.2, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 3 + particle.speed, 
              ease: "easeOut",
              times: [0, 0.2, 0.8, 1]
            }}
          />
        ))}
      </div>

      {/* Enhanced Speech Bubble */}
      <AnimatePresence>
        {(showSpeechBubble || isExpanded) && (
          <motion.div
            ref={speechRef}
            className="absolute bottom-24 right-0 mb-4 mr-4"
            initial={{ opacity: 0, scale: 0.5, y: 30, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 30, rotate: 5 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20,
              duration: 0.6 
            }}
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-5 max-w-sm border-2 relative overflow-hidden"
                 style={{ borderColor: robotColor }}>
              
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 opacity-10 rounded-3xl"
                style={{ backgroundColor: robotColor }}
                animate={{
                  opacity: [0.05, 0.15, 0.05]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Header with robot emotion */}
              <div className="flex items-center mb-3 relative z-10">
                <motion.div 
                  className="text-lg mr-2"
                  animate={{
                    scale: isThinking ? [1, 1.1, 1] : 1,
                    rotate: isThinking ? [0, -5, 5, 0] : 0
                  }}
                  transition={{ duration: 0.5, repeat: isThinking ? Infinity : 0 }}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-xs">{robotEmotion.eyes}</span>
                    <span className="text-xs">{robotEmotion.mouth}</span>
                  </div>
                </motion.div>
                <div className="text-sm font-bold text-gray-800 flex-1">
                  {isThinking ? "🤔 Thinking..." : currentSectionData.title}
                </div>
              </div>
              
              {!isThinking && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative z-10"
                >
                  <div className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {currentSectionData.description}
                  </div>
                  
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="border-t border-gray-200 pt-4 mt-4"
                    >
                      <motion.div 
                        className="text-xs text-gray-700 mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border"
                        key={currentTipIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <strong>💡 Pro Tip:</strong> {currentSectionData.tips[currentTipIndex]}
                      </motion.div>
                      
                      <div className="flex flex-wrap gap-2">
                        <motion.button
                          onClick={nextTip}
                          className="px-3 py-2 text-xs rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 font-medium shadow-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          💡 Next Tip ({(currentTipIndex + 1)}/{currentSectionData.tips.length})
                        </motion.button>
                        
                        {currentSectionData.nextSection && (
                          <motion.button
                            onClick={handleNextSection}
                            className="px-3 py-2 text-xs rounded-xl text-white font-medium transition-all duration-300 shadow-sm"
                            style={{ 
                              background: `linear-gradient(135deg, ${robotColor}, ${robotColor}dd)` 
                            }}
                            whileHover={{ scale: 1.05, boxShadow: `0 4px 15px ${robotColor}40` }}
                            whileTap={{ scale: 0.95 }}
                          >
                            ➡️ Next: {currentSectionData.nextSection}
                          </motion.button>
                        )}
                        
                        <motion.button
                          onClick={startAutoTour}
                          className={`px-3 py-2 text-xs rounded-xl transition-all duration-300 font-medium shadow-sm ${
                            isAutoTour 
                              ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
                              : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isAutoTour ? '⏹️ Stop Tour' : '🚀 Start Auto Tour'}
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
              
              {/* Enhanced speech bubble arrow */}
              <motion.div 
                className="absolute bottom-[-10px] right-8 w-5 h-5 rotate-45 border-r-2 border-b-2"
                style={{ 
                  backgroundColor: "white",
                  borderColor: robotColor 
                }}
                animate={{
                  y: [0, -2, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Robot with Personality */}
      <motion.div
        className="relative cursor-pointer group"
        onClick={handleRobotClick}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: isAutoTour ? [0, -12, 0] : [0, -6, 0],
          rotate: isThinking ? [0, 10, -10, 0] : [0, 3, -3, 0],
        }}
        transition={{
          y: { duration: isAutoTour ? 1.5 : 2.5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: isThinking ? 0.5 : 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Eilik-Style Robot Container */}
        <motion.div
          className="w-20 h-24 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden border-2 border-gray-200"
          style={{ 
            background: `linear-gradient(145deg, #ffffff, #f8f8f8, #f0f0f0)`,
            boxShadow: `
              0 0 25px ${robotColor}30,
              inset 0 2px 4px rgba(255,255,255,0.9),
              inset 0 -2px 4px rgba(0,0,0,0.1),
              0 8px 20px rgba(0,0,0,0.15)
            `
          }}
          animate={{
            boxShadow: [
              `0 0 25px ${robotColor}30, inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.15)`,
              `0 0 35px ${robotColor}40, inset 0 2px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(0,0,0,0.15), 0 12px 25px rgba(0,0,0,0.2)`,
              `0 0 25px ${robotColor}30, inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.15)`
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Subtle White Surface Highlight */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `linear-gradient(135deg, 
                rgba(255,255,255,0.6) 0%, 
                transparent 30%, 
                transparent 70%, 
                rgba(255,255,255,0.3) 100%)`
            }}
            animate={{
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Cute Color Accent Glow */}
          <motion.div
            className="absolute inset-3 rounded-2xl border"
            style={{ 
              backgroundColor: `${robotColor}08`,
              borderColor: `${robotColor}20`
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Eilik-Style Robot Design */}
          <motion.div
            className="flex flex-col items-center relative"
            animate={{
              scale: isThinking ? [1, 1.05, 1] : [1, 1.02, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {/* Eilik-Style Robot Head */}
            <motion.div 
              className="relative mb-1"
              animate={{
                opacity: isThinking ? [1, 0.7, 1] : 1
              }}
              transition={{ duration: 0.8, repeat: isThinking ? Infinity : 0 }}
            >
              {/* Main Head Structure - White rounded like Eilik */}
              <div className="w-14 h-10 bg-gradient-to-b from-white to-gray-100 rounded-2xl border-2 border-gray-200 relative shadow-lg">
                {/* Black Screen Face - Oval like Eilik */}
                <div className="absolute inset-2 bg-black rounded-2xl border border-gray-300 overflow-hidden">
                  {/* Eilik-style Eyes and Mouth */}
                  <div className="flex flex-col items-center justify-center h-full">
                    {/* Eyes */}
                    <div className="flex justify-center items-center space-x-2 mb-1">
                      <motion.div 
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{
                          scale: isThinking ? [1, 0.8, 1] : [1, 0.9, 1],
                          opacity: isThinking ? [1, 0.7, 1] : 1
                        }}
                        transition={{ 
                          duration: isThinking ? 0.6 : 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div 
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{
                          scale: isThinking ? [1, 0.8, 1] : [1, 0.9, 1],
                          opacity: isThinking ? [1, 0.7, 1] : 1
                        }}
                        transition={{ 
                          duration: isThinking ? 0.6 : 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.1
                        }}
                      />
                    </div>
                    
                    {/* Curved Smile */}
                    <motion.div
                      className="w-4 h-1 border-b-2 border-white rounded-full"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  
                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white opacity-5"
                    animate={{
                      opacity: [0.05, 0.15, 0.05]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
                
                {/* Small details on head */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="absolute top-1 right-2 w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
                <div className="absolute top-1 left-2 w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
              </div>
            </motion.div>

            {/* Eilik-Style Robot Body */}
            <motion.div 
              className="relative"
              animate={{
                scale: isExpanded ? [1, 1.05, 1] : 1
              }}
              transition={{ duration: 1, repeat: isExpanded ? Infinity : 0 }}
            >
              {/* Main Rounded Body - White like Eilik */}
              <div className="w-12 h-8 bg-gradient-to-b from-white to-gray-100 rounded-2xl border-2 border-gray-200 relative shadow-lg">
                {/* Cute pink/colored accent on chest */}
                <motion.div 
                  className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-3 rounded-full border border-gray-200"
                  style={{ 
                    background: `linear-gradient(135deg, ${robotColor}30, ${robotColor}20)` 
                  }}
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Small status indicator */}
                  <motion.div 
                    className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: robotColor }}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* Small detail buttons/ports */}
                <div className="absolute bottom-1 left-2 w-1 h-0.5 bg-gray-300 rounded"></div>
                <div className="absolute bottom-1 right-2 w-1 h-0.5 bg-gray-300 rounded"></div>
                
                {/* Subtle side curves to mimic Eilik's shape */}
                <div className="absolute -left-1 top-2 w-2 h-4 bg-gradient-to-r from-white to-gray-100 rounded-l-full border-l border-gray-200"></div>
                <div className="absolute -right-1 top-2 w-2 h-4 bg-gradient-to-l from-white to-gray-100 rounded-r-full border-r border-gray-200"></div>
              </div>
              
              {/* Small cute arms */}
              <motion.div 
                className="absolute -left-2 top-2 w-1.5 h-1 bg-white rounded-full border border-gray-200"
                animate={{
                  rotate: isThinking ? [0, 15, -15, 0] : [0, 8, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -right-2 top-2 w-1.5 h-1 bg-white rounded-full border border-gray-200"
                animate={{
                  rotate: isThinking ? [0, -15, 15, 0] : [0, -8, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>

            {/* Power/Status Indicator */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-green-400">●</span>
            </motion.div>
          </motion.div>
          
          {/* Multiple Pulsing Rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 rounded-full border-2 opacity-60"
              style={{ borderColor: robotColor }}
              animate={{
                scale: [1, 1.5 + (ring * 0.2), 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                delay: ring * 0.3,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Sparkle Effects */}
          {isExpanded && (
            <>
              {[1, 2, 3, 4].map((sparkle) => (
                <motion.div
                  key={sparkle}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: `${20 + Math.sin(sparkle) * 30}%`,
                    left: `${20 + Math.cos(sparkle) * 30}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: sparkle * 0.2
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* Auto tour indicator with better animation */}
        {isAutoTour && (
          <motion.div
            className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-sm shadow-lg"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              scale: { duration: 1, repeat: Infinity },
              rotate: { duration: 2, repeat: Infinity, ease: "linear" }
            }}
          >
            🚀
          </motion.div>
        )}

        {/* Enhanced section progress indicator */}
        <motion.div 
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-xs font-bold px-3 py-1 bg-white rounded-full shadow-lg border-2 flex items-center gap-2"
               style={{ borderColor: robotColor, color: robotColor }}>
            <span>📍</span>
            <span>{Object.keys(sectionData).indexOf(currentSection) + 1}/{Object.keys(sectionData).length}</span>
          </div>
        </motion.div>
        
        {/* Hover tooltip */}
        <motion.div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
          initial={{ opacity: 0, y: 5 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          Click me for help! 🤖
        </motion.div>
      </motion.div>
    </div>
  );
}
