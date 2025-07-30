"use client";
import React from "react";
import { FaRobot, FaLightbulb, FaCogs, FaUniversity, FaFlask, FaUserTie, FaBoxOpen, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: <FaRobot className="text-4xl text-blue-500 mb-3" />, title: "IoT & Robotics Training",
    desc: "Hands-on workshops and structured training programs for schools, colleges, and tech enthusiasts.",
    points: [
      "School and college-level training",
      "7-day and 1.5-month certified courses",
      "Customized curriculum",
      "Onsite and online options"
    ]
  },
  {
    icon: <FaLightbulb className="text-4xl text-yellow-500 mb-3" />, title: "STEM & STEAM Education",
    desc: "Integrating Science, Technology, Engineering, Arts, and Mathematics through practical learning.",
    points: [
      "Curriculum planning",
      "Teacher training",
      "STEM Lab setup",
      "Student exhibitions and competitions"
    ]
  },
  {
    icon: <FaCogs className="text-4xl text-purple-500 mb-3" />, title: "Product Design & Development",
    desc: "From idea to prototype — we help you build your tech product.",
    points: [
      "Custom electronics hardware (RFID machines, vending machines, etc.)",
      "PCB design and manufacturing",
      "Firmware development",
      "3D design and enclosure prototyping"
    ]
  },
  {
    icon: <FaUniversity className="text-4xl text-green-500 mb-3" />, title: "Institutional Collaboration",
    desc: "Partner with us for innovation programs, event co-hosting, and lab development.",
    points: [
      "Innovation hubs",
      "IoT labs setup",
      "Institutional branding through collaboration",
      "Internship & project supervision"
    ]
  },
  {
    icon: <FaFlask className="text-4xl text-pink-500 mb-3" />, title: "R&D and Prototyping Support",
    desc: "Get expert help for research projects, pilot products, or startups.",
    points: [
      "Component sourcing",
      "Rapid prototyping",
      "Debugging and system integration"
    ]
  },
  {
    icon: <FaUserTie className="text-4xl text-blue-700 mb-3" />, title: "Tech Consulting & Mentorship",
    desc: "Guidance for startups, tech-based businesses, or institutional digital transformation.",
    points: [
      "Project evaluation",
      "Tech roadmap planning",
      "Custom solution consulting"
    ]
  },
  {
    icon: <FaBoxOpen className="text-4xl text-orange-500 mb-3" />, title: "Electronic Kits & Learning Tools",
    desc: "Order custom-designed learning kits, IoT starter kits, or classroom bundles.",
    points: [
      "Arduino, ESP32 kits",
      "STEM experiment tools",
      "Classroom innovation kits"
    ]
  }
];

const WHY_US = [
  "In-house R&D and product development",
  "Expert trainers and engineers",
  "Proven track record with real projects",
  "Strong network in education and tech sectors"
];

const TESTIMONIALS = [
  {
    quote: "Nepatronix's training transformed our students' interest in robotics!",
    author: "Principal, Subhakamana School"
  },
  {
    quote: "Their custom hardware solutions are top-notch and reliable.",
    author: "Tech Lead, Innovation Hub"
  }
];

const ServicesPage = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white text-gray-800 relative overflow-x-hidden pb-16">
    {/* Section Title & Intro */}
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-r from-blue-100/70 to-purple-100/60 z-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-blue-500 mb-4 text-center drop-shadow-lg"
      >
        Our Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="text-lg md:text-2xl text-gray-700 mb-8 text-center max-w-2xl"
      >
        Empowering Innovation Through Technology, Training, and Collaboration.
      </motion.p>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full mb-2 mx-auto" />
    </section>

    {/* Core Services */}
    <section className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(59,130,246,0.13)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all border border-blue-100/30"
          >
            {service.icon}
            <h3 className="font-semibold text-xl mb-2 text-blue-700">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
            <ul className="text-gray-500 text-sm space-y-1 text-left mx-auto">
              {service.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2"><FaCheckCircle className="text-green-400 mt-1" />{pt}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Why Choose Nepatronix?</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {WHY_US.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            className="flex items-center gap-3 bg-white rounded-xl shadow p-5 border border-blue-100/30"
          >
            <FaCheckCircle className="text-green-500 text-xl" />{item}
          </motion.li>
        ))}
      </ul>
    </section>

    {/* Testimonials */}
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Client Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-2 border border-blue-100/30"
          >
            <FaQuoteLeft className="text-blue-400 text-2xl mb-2" />
            <p className="italic text-gray-700">&quot;{t.quote}&quot;</p>
            <span className="text-sm text-gray-500 font-semibold mt-2">- {t.author}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Call to Action */}
    <section className="w-full flex flex-col items-center justify-center py-12 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-2xl md:text-3xl font-bold text-blue-700 text-center mb-6"
      >
        Want to bring innovation to your institution or build a smart product?
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-lg text-lg transition-all"
      >
        Contact Us Today
      </motion.button>
    </section>
  </div>
);

export default ServicesPage;
