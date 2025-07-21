"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "School A",
    logo: "/partners/school-a.png",
    description: "Empowering students with IoT and Robotics education.",
  },
  {
    name: "Industry B",
    logo: "/partners/industry-b.png",
    description: "Innovative automation solutions for industrial growth.",
  },
  {
    name: "Tech C",
    logo: "/partners/tech-c.png",
    description: "Collaborating on AI and ML research projects.",
  },
  {
    name: "Academy D",
    logo: "/partners/academy-d.png",
    description: "Leading workshops and training for future innovators.",
  },
  {
    name: "Startup E",
    logo: "/partners/startup-e.png",
    description: "Driving new ideas in IoT and smart devices.",
  },
  {
    name: "School F",
    logo: "/partners/school-f.png",
    description: "Expanding STEAM education across Nepal.",
  },
];

interface ContactSectionProps {
  onVisitWebsite: () => void;
}

export function ContactSection({ onVisitWebsite }: ContactSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50 px-8">
      <div className="max-w-5xl mx-auto text-center px-8 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8, y: -40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          OUR PARTNERS
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          We are proud to collaborate with leading schools, industries, and
          organizations to drive innovation in IoT and robotics across Nepal.
        </motion.p>

        {/* Animated horizontal scrolling partners list */}
        <motion.div
          className="w-full overflow-x-auto py-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-8 min-w-full animate-scroll-x">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                className="bg-white/90 backdrop-blur-lg px-8 py-6 rounded-2xl border border-blue-100 shadow-xl flex flex-col items-center min-w-[260px] max-w-[260px] mx-2"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 25px 60px rgba(59, 130, 246, 0.18)",
                  borderColor: "#06b6d4",
                }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-16 mb-4 rounded-full shadow-md object-contain bg-white"
                />
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Get In Touch Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-600 mb-4">
            Become a Partner
          </h3>
          <p className="text-lg mb-6 text-gray-700">
            Interested in joining our partner network? Visit{" "}
            <strong className="text-cyan-600">www.nepatronix.org</strong> to
            connect and collaborate on future projects.
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

      {/* Add scrolling animation keyframes */}
      <style>
        {`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            animation: scroll-x 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
