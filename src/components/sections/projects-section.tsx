"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "🔥 Fire Detection System with ESP32",
    description:
      "Advanced fire detection system using ESP32 microcontroller and flame sensors, with mobile app integration via Blynk platform for real-time alerts and monitoring.",
  },
  {
    title: "📡 LoRa Long Range Alert System",
    description:
      "Wireless communication system for long-distance, low-power data transmission using LoRa modules, perfect for remote monitoring applications.",
  },
  {
    title: "🎯 Ultrasonic Radar System",
    description:
      "Arduino-based obstacle detection system with servo motor control, ultrasonic sensors, and buzzer alerts for automated security applications.",
  },
  {
    title: "💡 Automatic Street Light Project",
    description:
      "Winner of Best Project Award! Smart street lighting system with automatic on/off functionality based on ambient light conditions.",
  },
  {
    title: "⚙️ Fan Speed Control with Potentiometer",
    description:
      "STEAM education project demonstrating variable resistance concepts using potentiometer for controlling motor fan speed.",
  },
  {
    title: "🏠 Home Automation System",
    description:
      "Comprehensive IoT solution for smart home control, featuring remote monitoring, automated lighting, and environmental sensors.",
  },
];

const achievements = [
  {
    title: "🏫 School Partnership Programs",
    description:
      "Successfully partnered with Children Environment School (Birtamod), Candid English Secondary School, and Rainbow English Secondary School for comprehensive IoT and Robotics education programs.",
  },
  {
    title: "🎓 7-Day IoT Workshop Success",
    description:
      "Organized successful IoT and Robotics workshop at Brahma Rupa Secondary School in collaboration with Yarsa Tech, engaging 67 students in 10 innovative tech projects.",
  },
];

export function ProjectsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 px-8">
      <div className="max-w-5xl mx-auto text-left px-8 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-black mb-6 text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Featured Projects & Innovations
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-700 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Explore our latest IoT and robotics projects that showcase real-world
          applications and innovative solutions
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 text-left relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 scale-y-0 origin-top"
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.4 }}
              />

              <h3 className="text-base font-bold mb-2 text-gray-900">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Recent Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-600 mb-6">
            Recent Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-500 text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 60px rgba(6, 182, 212, 0.15)",
                }}
              >
                <h4 className="text-lg font-bold mb-3 text-gray-900">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
