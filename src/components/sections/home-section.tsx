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
  const [stats, setStats] = useState<StatData[]>(
    [
      { number: 0, label: "Happy Students", target: 67 },
      { number: 0, label: "Completed Projects", target: 15 },
      { number: 0, label: "Running Projects", target: 8 },
      { number: 0, label: "School Partnerships", target: 5 },
    ]
  );

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
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-8">
      {/* Floating decorative blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl z-0"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto text-center px-8 relative z-10">
        {/* Logo with subtle animation */}
        <motion.img
        
          
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />

        <motion.h1
          className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          NepaTronix
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl mb-4 font-bold text-blue-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Where Creativity Meets Innovation
        </motion.p>

        <motion.p
          className="text-base md:text-lg mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your one-stop solution for cutting-edge IoT services and products.
          Nepal&apos;s leading IoT and Robotics company, pioneering the future
          of automation, artificial intelligence, and smart technology
          solutions.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 25px 60px rgba(59, 130, 246, 0.15)",
                borderColor: "#38bdf8",
              }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-black text-blue-700 mb-2"
                animate={stat.number > 0 ? { scale: [1, 1.08, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 3 }}
              >
                {Math.floor(stat.number)}+
              </motion.div>
              <div className="text-blue-500 font-semibold text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          onClick={() => onNavigate("about")}
          className="px-14 py-5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-400 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{
            y: -5,
            scale: 1.07,
            boxShadow: "0 20px 50px rgba(59, 130, 246, 0.3)",
            background: "linear-gradient(90deg, #06b6d4, #3b82f6, #a78bfa)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          Explore Innovation
        </motion.button>
      </div>
    </section>
  );
}
