"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { clientsAPI, Client, getImageUrl } from "@/lib/api";

interface ContactSectionProps {
  onNavigate: () => void;
}

export function PatnerSection({ onNavigate }: ContactSectionProps) {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const clientsData = await clientsAPI.getClients();
      setClients(clientsData);
    } catch (err) {
      setError("Failed to fetch clients");
      console.error("Error fetching clients:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-8 md:py-16 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50 px-8">
      <div className="max-w-6xl mx-auto text-center px-8 relative z-10">
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
          We are proud to work with leading organizations and institutions that
          trust us to deliver innovative IoT and robotics solutions.
        </motion.p>

        {/* Clients Slider */}
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={fetchClients}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : clients.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No clients to display yet.</p>
          </div>
        ) : (
          <motion.div
            className="relative overflow-hidden py-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Infinite scrolling slider */}
            <div className="flex animate-scroll-infinite">
              {/* First set of clients */}
              {clients.map((client, idx) => (
                <motion.div
                  key={`first-${client._id}`}
                  className="flex-shrink-0 mx-6 bg-white/90 backdrop-blur-lg rounded-2xl border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 p-6 w-48 h-32 flex items-center justify-center group"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 25px 60px rgba(59, 130, 246, 0.18)",
                    borderColor: "#06b6d4",
                  }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={getImageUrl(client.image)}
                    alt={`Client ${idx + 1}`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/logo.png";
                    }}
                  />
                </motion.div>
              ))}

              {/* Duplicate set for seamless loop */}
              {clients.map((client, idx) => (
                <motion.div
                  key={`second-${client._id}`}
                  className="flex-shrink-0 mx-6 bg-white/90 backdrop-blur-lg rounded-2xl border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 p-6 w-48 h-32 flex items-center justify-center group"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 25px 60px rgba(59, 130, 246, 0.18)",
                    borderColor: "#06b6d4",
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={getImageUrl(client.image)}
                    alt={`Client ${idx + 1}`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/logo.png";
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </motion.div>
        )}

        {/* Get In Touch Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-600 mb-4">
            Become Our Partner
          </h3>
          <p className="text-lg mb-6 text-gray-700">
            Ready to transform your business with innovative IoT and robotics
            solutions? <strong className="text-cyan-600"> Contact us</strong> to
            get started on your journey with us.
          </p>

          <motion.button
            onClick={onNavigate}
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
            Contact Us
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

      {/* Enhanced CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
          width: calc(200% + 48px); /* Account for margins */
        }

        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
