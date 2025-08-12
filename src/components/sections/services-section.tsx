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
    icon: "🛠️",
    title: "Prototyping & Product Design",
    description:
      "Rapid prototyping, custom electronics, and product design for startups and innovators.",
  },
  {
    icon: "📦",
    title: "Learning Kits & Tools",
    description:
      "Custom IoT and robotics kits, STEM/STEAM learning tools, and classroom innovation bundles.",
  },
  {
    icon: "🛡️",
    title: "Security & Compliance",
    description:
      "Robust cybersecurity, data privacy, and regulatory compliance solutions for IoT and automation systems.",
  },
];

export function ServiceSection() {
  return (
    <section className="min-h-screen py-8 md:py-16 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white px-8">
      <div className="max-w-5xl  mx-auto text-center px-8 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8, y: -40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          OUR SERVICES
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.05,
                boxShadow: "0 25px 60px rgba(59, 130, 246, 0.15)",
                borderColor: "#38bdf8",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0"
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

              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-base text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
