"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaStar } from "react-icons/fa";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Smart IoT Security System",
    tagline: "Advanced Protection for Modern Homes",
    description:
      "Our flagship IoT security system combines cutting-edge sensors, real-time monitoring, and intelligent alerts to keep your property safe. Features include motion detection, door/window sensors, camera integration, and mobile app control.",
    features: [
      "24/7 Real-time monitoring",
      "Mobile app integration",
      "AI-powered threat detection",
      "Cloud data storage",
      "Easy installation",
    ],
    image: "/iotandroboticsabout.jpeg",
    price: "Starting at $299",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Educational Robotics Kit",
    tagline: "Learn, Build, and Innovate",
    description:
      "Perfect for students and educators, this comprehensive robotics kit includes everything needed to build and program robots. Designed for STEAM education with step-by-step tutorials and project guides.",
    features: [
      "Arduino-based controller",
      "Multiple sensors included",
      "Programming tutorials",
      "Project-based learning",
      "Age-appropriate design",
    ],
    image: "/schoolabout.jpeg",
    price: "Starting at $149",
    badge: "Educational Choice",
  },
  {
    id: 3,
    name: "Industrial Automation Suite",
    tagline: "Streamline Your Operations",
    description:
      "Transform your industrial processes with our comprehensive automation suite. Includes programmable controllers, sensor networks, and monitoring software designed for manufacturing and industrial applications.",
    features: [
      "PLC integration",
      "Real-time analytics",
      "Remote monitoring",
      "Scalable architecture",
      "24/7 support",
    ],
    image: "/exhibitionabout.jpg",
    price: "Custom Pricing",
    badge: "Enterprise",
  },
  {
    id: 4,
    name: "Smart Energy Management",
    tagline: "Optimize Your Energy Consumption",
    description:
      "Monitor and control your energy usage with our intelligent energy management system. Track consumption patterns, identify savings opportunities, and automate energy-efficient operations.",
    features: [
      "Energy consumption tracking",
      "Cost optimization",
      "Automated scheduling",
      "Mobile dashboard",
      "Environmental impact reports",
    ],
    image: "/communityworkshopabout.jpg",
    price: "Starting at $199",
    badge: "Eco-Friendly",
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative pt-32 py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-blue-100"
          >
            <FaStar className="text-yellow-500" />
            <span className="text-sm font-semibold text-slate-700">
              Featured Products
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent"
          >
            Our Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our innovative IoT and robotics solutions designed to
            transform the way you live, learn, and work.
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-24 last:mb-0"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image Section */}
                <motion.div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Badge */}
                    <div className="absolute top-6 left-6">
                      <span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                      >
                        <FaStar className="w-3 h-3" />
                        {product.badge}
                      </span>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-white/20">
                        <span className="text-lg font-bold text-slate-800">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-5xl font-bold text-slate-800 mb-3"
                    >
                      {product.name}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-lg font-medium mb-6 text-blue-600"
                    >
                      {product.tagline}
                    </motion.p>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-slate-600 text-lg leading-relaxed"
                  >
                    {product.description}
                  </motion.p>

                  {/* Features List */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      Key Features:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.6 + featureIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm"
                        >
                          <FaCheckCircle className="w-4 h-4 text-blue-500" />
                          <span className="text-slate-700 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 pt-6"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    >
                      Learn More
                      <FaArrowRight className="w-4 h-4" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-2xl font-semibold text-slate-700 bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-slate-300 shadow-lg transition-all duration-300"
                    >
                      Request Quote
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900" />
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width=&#34;60&#34; height=&#34;60&#34; viewBox=&#34;0 0 60 60&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;%3E%3Cg fill=&#34;none&#34; fill-rule=&#34;evenodd&#34;%3E%3Cg fill=&#34;%23ffffff&#34; fill-opacity=&#34;0.05&#34;%3E%3Ccircle cx=&#34;30&#34; cy=&#34;30&#34; r=&#34;2&#34;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Ideas?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            Let`s discuss how our innovative IoT and robotics solutions can help
            you achieve your goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
