"use client";

import { motion } from "framer-motion";

const contactOptions = [
  {
    icon: "🏫",
    title: "School Partnerships",
    description:
      "Interested in bringing IoT and Robotics education to your school? Let's create a customized program for your students.",
  },
  {
    icon: "🏭",
    title: "Industrial Solutions",
    description:
      "Need automation systems or IoT solutions for your business? We develop custom hardware and software solutions.",
  },
  {
    icon: "🎓",
    title: "Training & Workshops",
    description:
      "Want to learn Arduino, ESP32, or robotics? Join our hands-on workshops and certification programs.",
  },
  {
    icon: "💡",
    title: "Project Collaboration",
    description:
      "Have an innovative IoT idea? Let's work together to bring your vision to life with cutting-edge technology.",
  },
];

interface ContactSectionProps {
  onVisitWebsite: () => void;
}

export function ContactSection({ onVisitWebsite }: ContactSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50 pl-8 pr-80">
      <div className="max-w-4xl mx-auto text-left px-8 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-black mb-6 text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Connect With NepaTronix
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-700 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Ready to revolutionize your IoT and robotics journey? Let&apos;s
          collaborate on your next innovative project!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
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
                className="text-4xl mb-4"
                whileHover={{
                  scale: 1.2,
                  rotate: 8,
                }}
                transition={{ duration: 0.3 }}
              >
                {option.icon}
              </motion.div>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {option.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-base">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Get In Touch Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-600 mb-4">
            Get In Touch
          </h3>
          <p className="text-lg mb-6 text-gray-700">
            Visit us at{" "}
            <strong className="text-cyan-600">www.nepatronix.org</strong> to
            explore our full range of IoT and robotics solutions, browse our
            latest projects, and discover educational resources.
          </p>

          <motion.button
            onClick={onVisitWebsite}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-400 relative overflow-hidden"
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
            Visit NepaTronix.org
          </motion.button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
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
