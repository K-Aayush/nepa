"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/nepatronix",
      label: "Facebook",
    },
    { icon: Twitter, href: "https://twitter.com/nepatronix", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://instagram.com/nepatronix",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/nepatronix",
      label: "LinkedIn",
    },
  ];

  const services = [
    "IoT Development",
    "Robotics Education",
    "Industrial Automation",
    "STEAM Programs",
    "Technical Training",
    "Hardware & Software",
  ];

  const projects = [
    "Fire Detection System",
    "LoRa Alert Network",
    "Ultrasonic Radar",
    "Smart Street Lights",
    "Home Automation",
    "Educational Robotics",
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #00d4ff 0%, #0099cc 100%)",
          }}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 12, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-20 right-20 w-0 h-0 opacity-10"
          style={{
            borderLeft: "70px solid transparent",
            borderRight: "70px solid transparent",
            borderBottom: "120px solid #00d4ff",
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [18, 30, 18],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        <motion.div
          className="absolute bottom-10 left-1/2 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl opacity-10"
          animate={{
            y: [0, -40, 0],
            x: [-20, 20, -20],
            rotate: [18, 30, 18],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Decorative Lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-black mb-6 text-cyan-400 flex items-center gap-2"
              animate={{
                textShadow: [
                  "0 2px 12px #00d4ff33",
                  "0 4px 20px #00d4ff66",
                  "0 2px 12px #00d4ff33",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-3xl">🤖</span> NepaTronix
            </motion.h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nepal&apos;s leading IoT and Robotics company,
              <br />
              pioneering innovation in automation, AI, and smart technology
              solutions.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg"
                  whileHover={{
                    scale: 1.2,
                    rotate: -8,
                    boxShadow: "0 8px 32px rgba(6, 182, 212, 0.4)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-cyan-400">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer relative pl-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <span className="absolute left-0 text-cyan-400">◆</span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-cyan-400">
              Featured Projects
            </h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <motion.li
                  key={project}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer relative pl-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <span className="absolute left-0 text-cyan-400">◆</span>
                  {project}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-cyan-400">
              Contact Info
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center gap-2">
                <span>📍</span> <strong>Nepal</strong>
              </p>
              <p className="flex items-center gap-2">
                <span>🌐</span>
                <a
                  href="https://www.nepatronix.org"
                  target="_blank"
                  rel="noopener"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  www.nepatronix.org
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:info@nepatronix.org"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  info@nepatronix.org
                </a>
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                📱 Connect with us for IoT solutions and educational programs
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 pt-8 text-center text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg">
            &copy; 2024 <strong className="text-cyan-400">NepaTronix</strong>.
            All rights reserved. |{" "}
            <span className="text-cyan-400">
              Innovating the future of IoT and Robotics in Nepal
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
