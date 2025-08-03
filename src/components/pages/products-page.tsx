

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    name: "RFID-Based Attendance System",
    img: "/file.svg",
    tagline: "Touch and Go – Smart Attendance for Smart Classrooms",
    description: "Track attendance with RFID tags and cloud logging.",
  },
  {
    name: "Smart Sanitary Pad Vending Machine",
    img: "/file.svg",
    tagline: "Empowering Hygiene with Innovation",
    description: "Coin or RFID-enabled automatic pad dispenser.",
  },
  {
    name: "Smart Energy Meter",
    img: "/file.svg",
    tagline: "Monitor. Manage. Save Energy",
    description: "IoT-based real-time energy usage tracker.",
  },
  {
    name: "Smart Mushroom Farming System",
    img: "/file.svg",
    tagline: "Grow Smart with Tech",
    description: "Automates humidity, temperature, and light for mushroom farming.",
  },
  {
    name: "LoRa Message Transmission System",
    img: "/file.svg",
    tagline: "Stay Connected Across Mountains",
    description: "Long-distance text transmission using LoRa modules.",
  },
  {
    name: "Radar Security System",
    img: "/file.svg",
    tagline: "Invisible Eyes, Stronger Security",
    description: "Ultrasonic or microwave-based detection system with display.",
  },
  {
    name: "Automatic Street Light System",
    img: "/file.svg",
    tagline: "Brightening Roads the Smart Way",
    description: "Lights up based on ambient light or motion.",
  },
  {
    name: "Smart Dustbin",
    img: "/file.svg",
    tagline: "Clean Hands, Clean Cities",
    description: "Opens automatically when motion is detected.",
  },
];


import { useState } from "react";

type Product = {
  name: string;
  img: string;
  tagline: string;
  description: string;
};
import { FaStar, FaTimes, FaMagic } from "react-icons/fa";


const ProductsPage = () => {
  const [modal, setModal] = useState<Product | null>(null);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white text-gray-800 relative overflow-x-hidden pb-16">
      {/* Animated Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none fixed inset-0 z-0"
      >
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-gradient-to-br from-blue-300/40 via-purple-200/30 to-pink-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-purple-200/40 to-blue-100/30 rounded-full blur-2xl animate-float" />
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-gradient-to-br from-pink-200/30 to-blue-200/20 rounded-full blur-2xl animate-float2" />
      </motion.div>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-r from-blue-100/70 to-purple-100/60 z-10 relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-blue-500 mb-4 text-center drop-shadow-lg"
        >
          Explore Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-2xl text-gray-700 mb-8 text-center max-w-2xl"
        >
          Smart, Reliable, and Custom-Built Solutions for Today’s Needs
        </motion.p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full mb-2 mx-auto" />
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto py-12 px-4 z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.name}
              whileHover={{ scale: 1.07, boxShadow: "0 12px 40px 0 rgba(99,102,241,0.18)" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: 'easeOut' }}
              className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-7 flex flex-col items-center text-center hover:shadow-2xl transition-all border border-blue-100/30 relative overflow-hidden group"
            >
              {/* Featured badge for first product */}
              {i === 0 && (
                <span className="absolute top-4 left-4 flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce z-10">
                  <FaStar className="text-white text-xs" /> Featured
                </span>
              )}
              {/* Floating glassmorphism shape */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-200/40 to-purple-200/30 rounded-full blur-xl opacity-60 animate-float2" />
              <div className="relative w-24 h-24 mb-4 z-10">
                <Image src={product.img} alt={product.name} fill style={{ objectFit: "contain" }} className="drop-shadow-lg" />
              </div>
              <h3 className="font-semibold text-lg mb-1 text-blue-700 group-hover:text-purple-700 transition-colors duration-200">{product.name}</h3>
              <span className="text-xs text-purple-500 font-medium mb-2">{product.tagline}</span>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <motion.button
                whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#6366f1,#a21caf)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-full text-sm transition-all duration-200 mt-auto shadow-md"
                onClick={() => setModal(product)}
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for product details */}
      {modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative flex flex-col items-center text-center"
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-xl" onClick={() => setModal(null)}>
              <FaTimes />
            </button>
            <div className="relative w-20 h-20 mb-4">
              <Image src={modal.img} alt={modal.name} fill style={{ objectFit: "contain" }} />
            </div>
            <h3 className="font-bold text-xl mb-1 text-blue-700">{modal.name}</h3>
            <span className="text-xs text-purple-500 font-medium mb-2">{modal.tagline}</span>
            <p className="text-gray-700 mb-4">{modal.description}</p>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-xs text-gray-400">For more info, contact us for a custom solution!</span>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-6 rounded-full mt-2 hover:from-purple-600 hover:to-blue-600 transition-all">Contact Now</button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="w-full flex flex-col items-center justify-center py-12 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100/80 to-purple-100/80 rounded-2xl shadow-xl px-8 py-10 relative overflow-hidden"
        >
          <FaMagic className="text-4xl text-purple-500 mb-3 animate-float2" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl md:text-3xl font-bold text-blue-700 text-center mb-4 drop-shadow"
          >
            Want a custom solution?
          </motion.h2>
          <p className="text-gray-700 text-center mb-6 max-w-xl">We build tech tailored to your needs. Let’s create something amazing together.</p>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 24px 0 #a21caf55" }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg text-lg transition-all animate-glow"
          >
            Contact Now
          </motion.button>
          {/* Glowing animated ring */}
          <div className="absolute -inset-2 rounded-2xl border-4 border-purple-400/30 animate-glow pointer-events-none" />
        </motion.div>
      </section>

      {/* Custom keyframes for floating/animated shapes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(12px) scale(1.08); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 32px 0 #a21caf33; }
          50% { box-shadow: 0 0 64px 8px #a21caf55; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float2 { animation: float2 3.5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-glow { animation: glow 2.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default ProductsPage;
