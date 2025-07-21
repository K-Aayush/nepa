"use client";

import { motion } from "framer-motion";

const blogs = [
  {
    title: "AI in Robotics",
    description: "Exploring the integration of AI in modern robotics systems.",
  },
  {
    title: "IoT Security Challenges",
    description: "Understanding security concerns in IoT devices and networks.",
  },
  {
    title: "Machine Learning Applications",
    description: "How ML is transforming industries and driving innovation.",
  },
  {
    title: "Sustainable Tech Solutions",
    description: "Developing eco-friendly IoT and robotics systems.",
  },
  {
    title: "Future of Automation",
    description: "The role of automation in shaping the future of industries.",
  },
  {
    title: "Smart Cities with IoT",
    description: "Leveraging IoT for smarter and more connected cities.",
  },
];

export function BlogSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 px-8">
      <div className="max-w-6xl mx-auto text-center px-8 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8, y: -40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          BLOGS
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Discover our latest insights, research papers, and blogs on IoT, robotics, AI, and more.
        </motion.p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              className="bg-white/90 backdrop-blur-lg px-8 py-6 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 25px 60px rgba(59, 130, 246, 0.15)",
                borderColor: "#38bdf8",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-bold mb-3 text-gray-900">{blog.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base">{blog.description}</p>
            </motion.div>
          ))}
        </div>
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