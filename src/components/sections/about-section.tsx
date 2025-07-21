"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🤖",
    title: "IoT Development",
    description:
      "Advanced Internet of Things solutions with Arduino, ESP32, and ESP8266 for smart automation systems",
  },
  {
    icon: "⚙️",
    title: "Automation & Instrumentation",
    description:
      "High-performance automation systems and precision instrumentation for industrial applications",
  },
  {
    icon: "🎓",
    title: "STEAM Education",
    description:
      "Comprehensive IoT and Robotics education programs for students from Class 5 to 10",
  },
  {
    icon: "🔬",
    title: "Research & Innovation",
    description:
      "Cutting-edge research in AI, ML, and robotics to solve real-world challenges",
  },
];

export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center px-8 relative z-10">
        <motion.h2
          className="text-5xl md:text-7xl font-black mb-12 text-gray-900"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          Our Amazing Team & Vision
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl mb-16 text-gray-700 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          NepaTronix is a growing organization that positions itself as an IoT
          developer of high-end devices and automation systems. We specialize in
          instrumentation, capturing the growing demand for cutting-edge
          technology products and services.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.02,
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="text-6xl mb-6"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
}
