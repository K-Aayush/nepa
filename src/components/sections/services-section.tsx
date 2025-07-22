"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🏫",
    title: "School IoT Programs",
    description:
      "Year-long IoT and Robotics programs for educational institutions, fostering hands-on learning and innovation",
  },
  {
    icon: "🏭",
    title: "Industrial Automation",
    description:
      "Smart factory solutions, sensor networks, and automated control systems for industrial applications",
  },
  {
    icon: "📱",
    title: "Mobile App Integration",
    description:
      "IoT mobile applications with ESP32 and Blynk platform for remote monitoring and control",
  },
  {
    icon: "🛡️",
    title: "Smart Security Systems",
    description:
      "Advanced fire detection, ultrasonic radar systems, and LoRa long-range alert systems",
  },
  {
    icon: "🌐",
    title: "Hardware & Software Development",
    description:
      "Custom IoT device development with both hardware design and software programming",
  },
  {
    icon: "📚",
    title: "Technical Training",
    description:
      "Workshops, courses, and certification programs in Arduino, ESP32, robotics, and automation",
  },
];

export function ServicesSection() {
  return (
    <section className="min-h-screen  flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50 px-8">
      <div className="max-w-5xl mx-auto text-center px-8 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8, y: -40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          OUR PRODUCTS
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Comprehensive IoT and Robotics solutions designed for education,
          industry, and innovation
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -20,
                scale: 1.03,
                boxShadow: "0 30px 70px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Top border animation */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl scale-x-0 origin-left"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />

              <motion.div
                className="text-4xl mb-4 relative z-10"
                whileHover={{
                  scale: 1.2,
                  rotate: 8,
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-lg font-bold mb-3 text-gray-900 relative z-10">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed relative z-10 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
