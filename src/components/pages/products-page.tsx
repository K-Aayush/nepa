"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProductsPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full scroll-smooth">
      {/* Hero Section - Clean White with Accent Colors */}
      <section className="bg-white min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
        {/* Floating decorative elements */}
        {isClient && (
          <>
            <motion.div
              className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-xl opacity-70"
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full blur-lg opacity-60"
              animate={{
                y: [0, 25, 0],
                x: [0, -15, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full blur-md opacity-50"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}
        
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left - Hero Content */}
          {isClient ? (
            <motion.div 
              className="text-gray-900"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <motion.div
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-sm font-semibold text-blue-600">✨ Premium Audio Collection</span>
              </motion.div>
              
              <motion.h1 
                className="text-6xl md:text-8xl font-black leading-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Discover The Power Of Great Music
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Experience premium sound quality with our cutting-edge audio technology and immersive design
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl text-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  SHOP NOW
                </motion.button>
                <motion.button 
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 bg-white hover:bg-gray-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <div className="text-gray-900">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6">
                <span className="text-sm font-semibold text-blue-600">✨ Premium Audio Collection</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Discover The Power Of Great Music
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
                Experience premium sound quality with our cutting-edge audio technology and immersive design
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl text-lg">
                  SHOP NOW
                </button>
                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 bg-white hover:bg-gray-50">
                  Watch Demo
                </button>
              </div>
            </div>
          )}

          {/* Right - Hero Product Image */}
          {isClient ? (
            <motion.div 
              className="flex justify-center relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              {/* Glowing background effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-purple-200/30 to-pink-200/30 rounded-full blur-3xl scale-150"
                animate={{
                  scale: [1.5, 1.8, 1.5],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div 
                className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-full p-8 shadow-2xl border border-gray-200"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.4 }}
                animate={{
                  y: [0, -20, 0],
                }}
                style={{
                  transitionDuration: "4s",
                  transitionTimingFunction: "ease-in-out",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/file.svg"
                    alt="Premium Headphones"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-xl filter brightness-110"
                    priority
                  />
                  
                  {/* Floating feature badges */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-white px-3 py-1 rounded-full shadow-lg border border-blue-100"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-xs font-semibold text-blue-600">40H Battery</span>
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-2 -left-4 bg-white px-3 py-1 rounded-full shadow-lg border border-purple-100"
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <span className="text-xs font-semibold text-purple-600">Noise Cancel</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <div className="flex justify-center relative">
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-full p-8 shadow-2xl border border-gray-200">
                <div className="relative w-full h-full">
                  <Image
                    src="/file.svg"
                    alt="Premium Headphones"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-xl filter brightness-110"
                    priority
                  />
                  
                  <div className="absolute -top-4 -right-4 bg-white px-3 py-1 rounded-full shadow-lg border border-blue-100">
                    <span className="text-xs font-semibold text-blue-600">40H Battery</span>
                  </div>
                  
                  <div className="absolute -bottom-2 -left-4 bg-white px-3 py-1 rounded-full shadow-lg border border-purple-100">
                    <span className="text-xs font-semibold text-purple-600">Noise Cancel</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Second Section - Enhanced White Background with Modern Cards */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 md:px-8">
        <div className="max-w-7xl w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Advanced Audio Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of cutting-edge technology and exceptional design
            </p>
          </div>

          {/* First Product Row - Features Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left - Features */}
            {isClient ? (
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">🎵</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Premium Sound Quality
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Experience crystal-clear audio with our advanced driver technology that delivers rich bass, 
                    detailed mids, and crisp highs for an immersive listening experience.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">🔋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    40-Hour Battery Life
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enjoy uninterrupted listening with our long-lasting battery that provides up to 40 hours 
                    of playback time with fast charging capabilities.
                  </p>
                </motion.div>

                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Features
                </motion.button>
              </motion.div>
            ) : (
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">🎵</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Premium Sound Quality
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Experience crystal-clear audio with our advanced driver technology that delivers rich bass, 
                    detailed mids, and crisp highs for an immersive listening experience.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">🔋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    40-Hour Battery Life
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enjoy uninterrupted listening with our long-lasting battery that provides up to 40 hours 
                    of playback time with fast charging capabilities.
                  </p>
                </div>

                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg">
                  Explore Features
                </button>
              </div>
            )}

            {/* Right - Product Image */}
            {isClient ? (
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/window.svg"
                    alt="Premium Audio Device"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-lg"
                  />
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200">
                  <Image
                    src="/window.svg"
                    alt="Premium Audio Device"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-lg"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Second Product Row - Image Left, Features Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Product Image */}
            {isClient ? (
              <motion.div 
                className="flex justify-center order-2 lg:order-1"
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200"
                  whileHover={{ scale: 1.05, rotate: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/globe.svg"
                    alt="Modern Design Technology"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-lg"
                  />
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200">
                  <Image
                    src="/globe.svg"
                    alt="Modern Design Technology"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-lg"
                  />
                </div>
              </div>
            )}

            {/* Right - Features */}
            {isClient ? (
              <motion.div 
                className="space-y-8 order-1 lg:order-2"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">📡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Wireless Connectivity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advanced Bluetooth 5.0 technology ensures stable connection and superior audio transmission 
                    with zero lag for seamless music and call experience.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Smart Noise Cancelling
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Intelligent active noise cancellation adapts to your environment, blocking unwanted sounds 
                    while preserving important audio details.
                  </p>
                </motion.div>

                <motion.button 
                  className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(239, 68, 68, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ) : (
              <div className="space-y-8 order-1 lg:order-2">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">📡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Wireless Connectivity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advanced Bluetooth 5.0 technology ensures stable connection and superior audio transmission 
                    with zero lag for seamless music and call experience.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Smart Noise Cancelling
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Intelligent active noise cancellation adapts to your environment, blocking unwanted sounds 
                    while preserving important audio details.
                  </p>
                </div>

                <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg">
                  Learn More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Third Section - Premium Showcase */}
      <section className="bg-white py-24 px-4 md:px-8 relative overflow-hidden">
        {/* Background decoration */}
        {isClient && (
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
        
        <div className="max-w-7xl w-full mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Features */}
            {isClient ? (
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                    Unleash Your Audio Experience
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Immerse yourself in studio-quality sound with our premium headphones featuring 
                    cutting-edge technology and unmatched comfort.
                  </p>
                </motion.div>
                
                {/* Premium Feature List */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {[
                    { icon: "🎧", text: "Active Noise Cancellation" },
                    { icon: "⚡", text: "Fast Charging Technology" },
                    { icon: "🛡️", text: "Premium Comfort Design" },
                    { icon: "🎼", text: "Studio-Quality Sound" }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-4 bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-2xl border border-gray-100"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="text-2xl">{feature.icon}</div>
                      <span className="text-gray-800 font-semibold text-lg">{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <motion.button 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Shop Collection
                  </motion.button>
                  <motion.button 
                    className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 bg-white hover:bg-gray-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Specs
                  </motion.button>
                </motion.div>
              </motion.div>
            ) : (
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                    Unleash Your Audio Experience
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Immerse yourself in studio-quality sound with our premium headphones featuring 
                    cutting-edge technology and unmatched comfort.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: "🎧", text: "Active Noise Cancellation" },
                    { icon: "⚡", text: "Fast Charging Technology" },
                    { icon: "🛡️", text: "Premium Comfort Design" },
                    { icon: "🎼", text: "Studio-Quality Sound" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-2xl border border-gray-100">
                      <div className="text-2xl">{feature.icon}</div>
                      <span className="text-gray-800 font-semibold text-lg">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg">
                    Shop Collection
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 bg-white hover:bg-gray-50">
                    View Specs
                  </button>
                </div>
              </div>
            )}

            {/* Right - Final Product Image */}
            {isClient ? (
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white to-gray-50 rounded-full p-8 shadow-2xl border border-gray-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <Image
                    src="/next.svg"
                    alt="Premium Audio Collection"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-2xl relative z-10"
                  />
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white to-gray-50 rounded-full p-8 shadow-2xl border border-gray-200">
                  <Image
                    src="/next.svg"
                    alt="Premium Audio Collection"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-2xl relative z-10"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-xl filter brightness-110"
                    priority
                  />
                  
                  <div className="absolute -top-4 -right-4 bg-white px-3 py-1 rounded-full shadow-lg border border-blue-100">
                    <span className="text-xs font-semibold text-blue-600">40H Battery</span>
                  </div>
                  
                  <div className="absolute -bottom-2 -left-4 bg-white px-3 py-1 rounded-full shadow-lg border border-purple-100">
                    <span className="text-xs font-semibold text-purple-600">Noise Cancel</span>
                  </div>
                </div>
              </div>
            </div>
          )}
                  style={{ objectFit: "contain" }}
                  className="drop-shadow-2xl filter brightness-110"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Second Section - White Background with Product Features */}
      <section className="bg-white py-24 px-4 md:px-8">
        <div className="max-w-7xl w-full mx-auto">
          {/* First Product Row - Image Right, Features Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left - Features */}
            {isClient ? (
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Kredo Came Up With The Latest Technology
                </motion.h2>
                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Experience the future of audio with our revolutionary noise-canceling technology, 
                  premium materials, and ergonomic design that delivers exceptional comfort for hours of listening.
                </motion.p>
                <motion.button 
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Kredo Came Up With The Latest Technology
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Experience the future of audio with our revolutionary noise-canceling technology, 
                  premium materials, and ergonomic design that delivers exceptional comfort for hours of listening.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg">
                  Learn More
                </button>
              </div>
            )}

            {/* Right - Product Image */}
            {isClient ? (
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative w-80 h-80 lg:w-96 lg:h-96"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/window.svg"
                    alt="Kredo Headphones"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-lg"
                  />
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <Image
                    src="/window.svg"
                    alt="Kredo Headphones"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-lg"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Second Product Row - Image Left, Features Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Product Image */}
            {isClient ? (
              <motion.div 
                className="flex justify-center order-2 lg:order-1"
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative w-80 h-80 lg:w-96 lg:h-96"
                  whileHover={{ scale: 1.05, rotate: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/globe.svg"
                    alt="Kredo Modern Design"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-lg"
                  />
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <Image
                    src="/globe.svg"
                    alt="Kredo Modern Design"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-lg"
                  />
                </div>
              </div>
            )}

            {/* Right - Features */}
            {isClient ? (
              <motion.div 
                className="space-y-6 order-1 lg:order-2"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Kredo Modern Design With Wireless Gadget
                </motion.h2>
                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Seamless wireless connectivity meets sleek modern aesthetics. Our advanced Bluetooth 5.0 
                  technology ensures crystal-clear audio transmission with zero lag, perfect for both music and calls.
                </motion.p>
                <motion.button 
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ) : (
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Kredo Modern Design With Wireless Gadget
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Seamless wireless connectivity meets sleek modern aesthetics. Our advanced Bluetooth 5.0 
                  technology ensures crystal-clear audio transmission with zero lag, perfect for both music and calls.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg">
                  Learn More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Third Section - Gray Background with Final Product */}
      <section className="bg-gray-50 py-24 px-4 md:px-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Features */}
            {isClient ? (
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Unleash Your Audio Experience
                </motion.h2>
                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Immerse yourself in studio-quality sound with our premium headphones. 
                  Featuring active noise cancellation, 40-hour battery life, and ergonomic design 
                  for the ultimate listening experience.
                </motion.p>
                
                {/* Feature List */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {[
                    "Active Noise Cancellation",
                    "40-Hour Battery Life",
                    "Premium Comfort Design",
                    "Studio-Quality Sound"
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex space-x-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <motion.button 
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(234, 179, 8, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Shop Now
                  </motion.button>
                  <motion.button 
                    className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Unleash Your Audio Experience
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Immerse yourself in studio-quality sound with our premium headphones. 
                  Featuring active noise cancellation, 40-hour battery life, and ergonomic design 
                  for the ultimate listening experience.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Active Noise Cancellation",
                    "40-Hour Battery Life",
                    "Premium Comfort Design",
                    "Studio-Quality Sound"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg">
                    Shop Now
                  </button>
                  <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            )}

            {/* Right - Final Product Image */}
            {isClient ? (
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative w-80 h-80 lg:w-96 lg:h-96"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <Image
                    src="/next.svg"
                    alt="Premium Kredo Headphones"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-2xl relative z-10"
                  />
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <Image
                    src="/next.svg"
                    alt="Premium Kredo Headphones"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-2xl relative z-10"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
