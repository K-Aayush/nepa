"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2018",
    title: "Founded in Kupondole",
    description:
      "NepaTronix was established in Kupondole, Lalitpur, Nepal, with a vision to innovate in IoT and web/app development.",
    image: "/nepatronixabout.jpeg",
    alt: "NepaTronix founding team in Kupondole",
  },
  {
    year: "2020",
    title: "First IoT Product Launch",
    description:
      "Launched our first smart IoT device, gaining traction in local and global markets.",
    image: "/iotandroboticsabout.jpeg",
    alt: "NepaTronix first IoT device",
  },
  {
    year: "2021",
    title: "Launched Tutoring Program",
    description:
      "Introduced comprehensive tutoring services to teach IoT and web/app development, empowering the next generation of tech innovators.",
    image: "/schoolabout.jpeg",
    alt: "NepaTronix tutoring session",
  },
  {
    year: "2023",
    title: "Global Recognition",
    description:
      "Recognized as a fast-growing tech leader, delivering solutions worldwide.",
    image: "/award.jpg",
    alt: "NepaTronix receiving global recognition",
  },
  {
    year: "2025",
    title: "Expanded Web/App Expertise",
    description:
      "Built a dedicated team for high-performance web and mobile app development.",
    image: "/teamabout.jpeg",
    alt: "NepaTronix web and app development team",
  },
];

export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white px-8 py-16">
      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-black mb-8 text-center bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8, y: -40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          ABOUT NEPATRONIX
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-12 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          NepaTronix, based in Kupondole, Lalitpur, Nepal, is a fast-growing
          technology company specializing in IoT and web/app development. We are
          passionate about creating innovative solutions that empower businesses
          and communities, blending cutting-edge technology with local
          expertise.
        </motion.p>

        {/* Timeline Section */}
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-blue-200 to-purple-200" />
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className={`mb-12 flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-start relative`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <span className="text-2xl font-bold text-blue-600">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
              <div className="w-1/2 px-8">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={milestone.image}
                    alt={milestone.alt}
                    className="w-full h-48 object-cover rounded-2xl shadow-lg border border-gray-100"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
              <div className="absolute top-2 left-1/2 -ml-2 w-4 h-4 bg-blue-600 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
