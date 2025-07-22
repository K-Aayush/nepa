"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    title: "AI in Robotics",
    description:
      "Exploring the integration of AI in modern robotics systems. This blog delves into the latest advancements, challenges, and future prospects of combining artificial intelligence with robotics to create smarter, more efficient machines.",
    image: "/robot.svg",
  },
  {
    title: "IoT Security Challenges",
    description:
      "Understanding security concerns in IoT devices and networks. Learn about vulnerabilities, best practices, and how to safeguard your connected devices from emerging threats in the rapidly evolving Internet of Things landscape.",
    image: "/window.svg",
  },
  {
    title: "Machine Learning Applications",
    description:
      "How ML is transforming industries and driving innovation. Discover real-world use cases, success stories, and the impact of machine learning on business processes, healthcare, and technology sectors.",
    image: "/globe.svg",
  },
  {
    title: "Sustainable Tech Solutions",
    description:
      "Developing eco-friendly IoT and robotics systems. Explore green technologies, energy-efficient designs, and sustainable practices that are shaping the future of technology for a better planet.",
    image: "/next.svg",
  },
  {
    title: "Future of Automation",
    description:
      "The role of automation in shaping the future of industries. Analyze trends, benefits, and the transformative power of automation in manufacturing, logistics, and beyond.",
    image: "/vercel.svg",
  },
  {
    title: "Smart Cities with IoT",
    description:
      "Leveraging IoT for smarter and more connected cities. Uncover how smart infrastructure, data analytics, and IoT devices are revolutionizing urban living and city management.",
    image: "/file.svg",
  },
];



const BlogsPage = () => {
   return (
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 px-2 md:px-8">
        <div className="max-w-7xl mx-auto text-center px-2 md:px-8 relative z-10">
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
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {blogs.map((blog, index) => {
              // Helper to trim description to 15 words
              const getShortDescription = (desc: string) => {
                const words = desc.split(" ");
                return words.slice(0, 15).join(" ") + (words.length > 15 ? "..." : "");
              };
              return (
                <motion.div
                  key={blog.title}
                  className="flex flex-col h-full bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full h-48 md:h-56 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index < 2}
                    />
                  </div>
                  <div className="flex flex-col flex-1 px-6 py-5">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 leading-tight group-hover:text-blue-700 transition-colors duration-200">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-6 flex-1">
                      {getShortDescription(blog.description)}
                    </p>
                    <button
                      className="mt-auto inline-block bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-800 transition-colors duration-200 text-sm tracking-wide"
                    >
                      READ ARTICLE
                    </button>
                  </div>
                </motion.div>
              );
            })}
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
};

export default BlogsPage;
