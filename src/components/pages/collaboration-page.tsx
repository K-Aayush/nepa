"use client";
import React from "react";
import Image from "next/image";
import {
  FaUniversity,
  FaIndustry,
  FaHandsHelping,
  FaLightbulb,
  FaMicrophone,
  FaCheckCircle,
  FaQuoteLeft,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const PARTNER_LOGOS = [
  { name: "National Infotech College", img: "/logo.png" },
  { name: "Subhakamana School", img: "/logo.png" },
  { name: "Tech Innovation Hub", img: "/logo.png" },
  { name: "STEM Nepal", img: "/logo.png" },
];

const TESTIMONIALS = [
  {
    quote:
      "Nepatronix's workshops have transformed our students' interest in robotics and IoT!",
    author: "Principal, Subhakamana School",
  },
  {
    quote: "A reliable partner for tech innovation and hands-on learning.",
    author: "Coordinator, National Infotech College",
  },
];

const CollaborationPage = () => (
  <div className="w-full bg-gradient-to-br from-blue-50 via-purple-50 to-white text-gray-800 relative overflow-x-hidden">
    {/* Decorative Background Shapes */}
    <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-200/40 to-purple-200/30 rounded-full blur-3xl z-0" />
    <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-purple-200/40 to-blue-100/30 rounded-full blur-2xl z-0" />
    {/* Hero Section */}
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-r from-blue-100/70 to-purple-100/60 z-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-blue-500 mb-4 text-center drop-shadow-lg"
      >
        Collaborate with Nepatronix: Let’s Build the Future Together
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-lg md:text-2xl text-gray-700 mb-8 text-center max-w-2xl"
      >
        Join hands with us to revolutionize STEAM education, IoT innovations,
        and tech empowerment in Nepal.
      </motion.p>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full mb-2 mx-auto" />
    </section>

    {/* About Collaborations */}
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-5 text-blue-600 text-center">
        About Our Collaborations
      </h1>
      <p className="text-base md:text-lg text-gray-700">
        Nepatronix actively partners with educational institutions, tech
        companies, NGOs, and innovation hubs to create real-world impact through
        robotics, IoT, AI, and STEAM programs.
      </p>
    </section>

    {/* Types of Collaborations */}
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-5 text-blue-600 text-center">
        Types of Collaborations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {[
          {
            icon: <FaUniversity className="text-4xl text-blue-500 mb-3" />,
            title: "Educational Institutions",
            desc: "Workshops, bootcamps, student exhibitions, and IoT lab setup.",
          },
          {
            icon: <FaIndustry className="text-4xl text-purple-500 mb-3" />,
            title: "Corporate & Industry",
            desc: "Custom hardware/software development, product co-creation, tech consulting.",
          },
          {
            icon: <FaHandsHelping className="text-4xl text-green-500 mb-3" />,
            title: "NGOs & Government",
            desc: "STEM outreach programs, digital literacy, rural innovation.",
          },
          {
            icon: <FaLightbulb className="text-4xl text-yellow-500 mb-3" />,
            title: "Startups & Innovators",
            desc: "Prototype support, mentorship, R&D collaboration.",
          },
          {
            icon: <FaMicrophone className="text-4xl text-pink-500 mb-3" />,
            title: "Media & Content Creators",
            desc: "Tech podcast guests, YouTube collaborations, educational content co-creation.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 8px 32px rgba(59,130,246,0.13)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-lg p-7 flex flex-col items-center text-center hover:shadow-2xl transition-all border border-blue-100/30"
          >
            {item.icon}
            <h3 className="font-semibold text-lg mb-1 text-blue-700">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Past Collaborations */}
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
        Past Collaborations
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center mb-8">
        {PARTNER_LOGOS.map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
            className="flex flex-col items-center bg-white/70 rounded-xl shadow p-4 hover:shadow-lg transition-all border border-blue-100/30"
          >
            <div className="relative w-20 h-20 mb-2">
              <Image
                src={logo.img}
                alt={logo.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="text-xs text-gray-600 font-medium mt-1">
              {logo.name}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="bg-blue-50/80 rounded-2xl p-6 shadow border border-blue-100/30"
        >
          <h4 className="font-semibold mb-1 text-blue-700">
            National Infotech College
          </h4>
          <p className="text-sm text-gray-700">
            Organized IoT bootcamp for 100+ students, resulting in 10+
            student-led projects and ongoing mentorship.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="bg-blue-50/80 rounded-2xl p-6 shadow border border-blue-100/30"
        >
          <h4 className="font-semibold mb-1 text-blue-700">
            Subhakamana School
          </h4>
          <p className="text-sm text-gray-700">
            Robotics exhibition and hands-on workshops, sparking STEM interest
            among school children.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Why Collaborate With Us */}
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
        Why Collaborate with Us?
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          "Experienced in 30+ IoT/Robotics workshops",
          "In-house product development (RFID machines, smart energy meters, etc.)",
          "Skilled trainers and engineers",
          "Strong network of colleges and tech enthusiasts",
        ].map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="flex items-center gap-3 bg-white rounded-xl shadow p-5 border border-blue-100/30"
          >
            <FaCheckCircle className="text-green-500 text-xl" />
            {item}
          </motion.li>
        ))}
      </ul>
    </section>

    {/* Testimonials */}
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
        Testimonials
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-2 border border-blue-100/30"
          >
            <FaQuoteLeft className="text-blue-400 text-2xl mb-2" />
            <p className="italic text-gray-700">&quot;{t.quote}&quot;</p>
            <span className="text-sm text-gray-500 font-semibold mt-2">
              - {t.author}
            </span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* How to Collaborate */}
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
        How to Collaborate?
      </h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700 text-center">
        <li className="inline-block">Fill out the Collaboration Form</li>
        <li className="inline-block">
          Schedule an online or in-person meeting
        </li>
        <li className="inline-block">Co-design the program</li>
        <li className="inline-block">Begin the journey together!</li>
      </ol>
    </section>

    {/* Collaboration Form / CTA */}
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
        Ready to Collaborate?
      </h2>
      <form className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-5 border border-blue-100/30">
        <input
          type="text"
          placeholder="Name"
          className="border rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
        />
        <input
          type="text"
          placeholder="Organization"
          className="border rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
        />
        <select className="border rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base">
          <option>Type of Collaboration</option>
          <option>Educational Institution</option>
          <option>Corporate & Industry</option>
          <option>NGO & Government</option>
          <option>Startup & Innovator</option>
          <option>Media & Content Creator</option>
        </select>
        <textarea
          placeholder="Message"
          rows={3}
          className="border rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all"
        >
          Submit
        </button>
      </form>
      <div className="text-center mt-8">
        <span className="font-semibold text-lg">or</span>
        <button className="ml-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all">
          Let’s Collaborate – Contact Us Today
        </button>
      </div>
    </section>

    {/* Contact Info / Footer */}
    <footer className="w-full bg-gradient-to-r from-blue-100/60 to-purple-100/60 py-10 mt-12 border-t border-blue-200/30">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:contact@nepatronix.org" className="hover:underline">
              contact@nepatronix.org
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-600" />
            <span>+977 9803661701</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600" />
            <span>Kupondol, Lalitpur</span>
          </div>
        </div>
        <div className="flex gap-5 text-2xl">
          <a href="#" className="text-blue-700 hover:text-blue-900">
            <FaFacebook />
          </a>
          <a href="#" className="text-red-600 hover:text-red-800">
            <FaYoutube />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default CollaborationPage;
