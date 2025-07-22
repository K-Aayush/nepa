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
      {/* Hero Section - Product in Center with Features on Both Sides */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        {isClient && (
          <>
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-200/30 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}
        
        <div className="max-w-7xl w-full mx-auto relative z-10">
          {/* Title */}
          {isClient ? (
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-black text-gray-800 leading-tight mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                Smart IoT Hub Pro
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-600"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                The Ultimate Smart Home Control Center
              </motion.p>
            </motion.div>
          ) : (
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-black text-gray-800 leading-tight mb-6">
                Smart IoT Hub Pro
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                The Ultimate Smart Home Control Center
              </p>
            </div>
          )}

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Features */}
            {isClient ? (
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                {[
                  { title: "AI-Powered Control", desc: "Intelligent automation for your entire home ecosystem" },
                  { title: "Voice Commands", desc: "Advanced voice recognition with natural language processing" },
                  { title: "Energy Optimization", desc: "Smart energy management reduces consumption by 40%" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                    whileHover={{ scale: 1.05, x: 10, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="space-y-8">
                {[
                  { title: "AI-Powered Control", desc: "Intelligent automation for your entire home ecosystem" },
                  { title: "Voice Commands", desc: "Advanced voice recognition with natural language processing" },
                  { title: "Energy Optimization", desc: "Smart energy management reduces consumption by 40%" }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Center Product Image */}
            {isClient ? (
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <motion.div 
                  className="relative w-80 h-80 lg:w-96 lg:h-96"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/file.svg"
                    alt="Smart IoT Hub Pro"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <Image
                    src="/file.svg"
                    alt="Smart IoT Hub Pro"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Right Features */}
            {isClient ? (
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                {[
                  { title: "Secure Connectivity", desc: "Military-grade encryption protects all your devices" },
                  { title: "Real-time Analytics", desc: "Advanced monitoring with predictive insights" },
                  { title: "Easy Setup", desc: "Plug-and-play installation in under 5 minutes" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                    whileHover={{ scale: 1.05, x: -10, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="space-y-8">
                {[
                  { title: "Secure Connectivity", desc: "Military-grade encryption protects all your devices" },
                  { title: "Real-time Analytics", desc: "Advanced monitoring with predictive insights" },
                  { title: "Easy Setup", desc: "Plug-and-play installation in under 5 minutes" }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          {isClient ? (
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <motion.button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-xl text-lg"
                whileHover={{ scale: 1.1, boxShadow: "0 15px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORE FEATURES
              </motion.button>
            </motion.div>
          ) : (
            <div className="text-center mt-16">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-xl text-lg">
                EXPLORE FEATURES
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Second Section - Image Left, Features Right */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        {isClient && (
          <>
            <motion.div
              className="absolute top-16 right-16 w-40 h-40 bg-green-200/20 rounded-full blur-2xl"
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-emerald-200/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}
        
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left - Product Image */}
          {isClient ? (
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative w-96 h-96"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.4 }}
                animate={{
                  rotateY: [0, 10, 0, -10, 0],
                }}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Image
                  src="/window.svg"
                  alt="Security Camera Pro"
                  fill
                  style={{ objectFit: "contain" }}
                  className="drop-shadow-2xl relative z-10"
                />
              </motion.div>
            </motion.div>
          ) : (
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                <Image
                  src="/window.svg"
                  alt="Security Camera Pro"
                  fill
                  style={{ objectFit: "contain" }}
                  className="drop-shadow-2xl relative z-10"
                />
              </div>
            </div>
          )}

          {/* Right - Features */}
          {isClient ? (
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 100 }}
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
                <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">
                  Security Camera Pro
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Advanced AI-powered surveillance for complete home security
                </p>
              </motion.div>

              {[
                { 
                  title: "4K Ultra HD Recording", 
                  desc: "Crystal clear footage with night vision capabilities",
                  icon: "🎥"
                },
                { 
                  title: "Smart Motion Detection", 
                  desc: "AI distinguishes between people, pets, and packages",
                  icon: "🔍"
                },
                { 
                  title: "Cloud Storage", 
                  desc: "Secure cloud backup with 30 days free storage",
                  icon: "☁️"
                },
                { 
                  title: "Mobile Alerts", 
                  desc: "Instant notifications sent directly to your phone",
                  icon: "📱"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.15)" }}
                >
                  <motion.div
                    className="text-3xl"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}

              <motion.button 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl text-lg mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, boxShadow: "0 15px 40px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                VIEW SECURITY FEATURES
              </motion.button>
            </motion.div>
          ) : (
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">
                  Security Camera Pro
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Advanced AI-powered surveillance for complete home security
                </p>
              </div>

              {[
                { 
                  title: "4K Ultra HD Recording", 
                  desc: "Crystal clear footage with night vision capabilities",
                  icon: "🎥"
                },
                { 
                  title: "Smart Motion Detection", 
                  desc: "AI distinguishes between people, pets, and packages",
                  icon: "🔍"
                },
                { 
                  title: "Cloud Storage", 
                  desc: "Secure cloud backup with 30 days free storage",
                  icon: "☁️"
                },
                { 
                  title: "Mobile Alerts", 
                  desc: "Instant notifications sent directly to your phone",
                  icon: "📱"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100"
                >
                  <div className="text-3xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}

              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl text-lg mt-8">
                VIEW SECURITY FEATURES
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Third Section - Features Left, Image Right */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        {isClient && (
          <>
            <motion.div
              className="absolute bottom-16 left-16 w-36 h-36 bg-purple-200/25 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/3 left-1/4 w-28 h-28 bg-indigo-200/30 rounded-full blur-2xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                rotate: [0, 360],
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
                <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">
                  Wireless Sensor Network
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Connect everything with our advanced wireless mesh technology
                </p>
              </motion.div>

              {[
                { 
                  title: "Mesh Network Technology", 
                  desc: "Self-healing network that adapts to changing conditions",
                  icon: "🌐"
                },
                { 
                  title: "Ultra-Low Power", 
                  desc: "10-year battery life with intelligent power management",
                  icon: "🔋"
                },
                { 
                  title: "Weather Resistant", 
                  desc: "IP67 rated for outdoor and indoor installations",
                  icon: "🌦️"
                },
                { 
                  title: "Real-time Data", 
                  desc: "Instant sensor readings with millisecond precision",
                  icon: "⚡"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: -10, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.15)" }}
                >
                  <motion.div
                    className="text-3xl"
                    whileHover={{ scale: 1.3, rotate: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}

              <motion.button 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl text-lg mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, boxShadow: "0 15px 40px rgba(147, 51, 234, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                DISCOVER NETWORK
              </motion.button>
            </motion.div>
          ) : (
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">
                  Wireless Sensor Network
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Connect everything with our advanced wireless mesh technology
                </p>
              </div>

              {[
                { 
                  title: "Mesh Network Technology", 
                  desc: "Self-healing network that adapts to changing conditions",
                  icon: "🌐"
                },
                { 
                  title: "Ultra-Low Power", 
                  desc: "10-year battery life with intelligent power management",
                  icon: "🔋"
                },
                { 
                  title: "Weather Resistant", 
                  desc: "IP67 rated for outdoor and indoor installations",
                  icon: "🌦️"
                },
                { 
                  title: "Real-time Data", 
                  desc: "Instant sensor readings with millisecond precision",
                  icon: "⚡"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100"
                >
                  <div className="text-3xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}

              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl text-lg mt-8">
                DISCOVER NETWORK
              </button>
            </div>
          )}

          {/* Right - Product Image */}
          {isClient ? (
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative w-96 h-96"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.4 }}
                animate={{
                  rotateX: [0, 5, 0, -5, 0],
                }}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-indigo-300/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Image
                  src="/globe.svg"
                  alt="Wireless Sensor Network"
                  fill
                  style={{ objectFit: "contain" }}
                  className="drop-shadow-2xl relative z-10"
                />
              </motion.div>
            </motion.div>
          ) : (
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                <Image
                  src="/globe.svg"
                  alt="Wireless Sensor Network"
                  fill
                  style={{ objectFit: "contain" }}
                  className="drop-shadow-2xl relative z-10"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
