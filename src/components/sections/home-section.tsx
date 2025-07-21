"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

interface StatData {
  number: number;
  label: string;
  target: number;
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  const [stats, setStats] = useState<StatData[]>([
    { number: 0, label: "Happy Students", target: 67 },
    { number: 0, label: "Completed Projects", target: 15 },
    { number: 0, label: "Running Projects", target: 8 },
    { number: 0, label: "School Partnerships", target: 5 },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      stats.forEach((stat, index) => {
        const increment = stat.target / 30;
        const statTimer = setInterval(() => {
          setStats((prevStats) =>
            prevStats.map((s, i) =>
              i === index
                ? { ...s, number: Math.min(s.number + increment, s.target) }
                : s
            )
          );
        }, 50);

        setTimeout(() => clearInterval(statTimer), 1500);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center px-8 relative z-10">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-10xl font-black mb-8 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundSize: "300% 300%" }}
        >
          <motion.span
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "linear-gradient(45deg, #000000, #333333, #000000, #1a1a1a)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            NepaTronix
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl mb-6 font-bold text-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Where Creativity Meets Innovation
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-12 text-gray-700 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your one-stop solution for cutting-edge IoT services and products.
          Nepal&apos;s leading IoT and Robotics company, pioneering the future of
          automation, artificial intelligence, and smart technology solutions.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-black text-gray-800 mb-4"
                animate={stat.number > 0 ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 3 }}
              >
                {Math.floor(stat.number)}+
              </motion.div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          onClick={() => onNavigate("about")}
          className="px-12 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-400 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{
            y: -5,
            scale: 1.05,
            boxShadow: "0 20px 50px rgba(59, 130, 246, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          Explore Innovation
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
}
