"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { blogAPI, Blog, getImageUrl } from "@/lib/api";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async (pageNum: number = 0) => {
    try {
      setLoading(true);
      const newBlogs = await blogAPI.getBlogs(pageNum);

      if (pageNum === 0) {
        setBlogs(newBlogs);
      } else {
        setBlogs((prev) => {
          const existingIds = new Set(prev.map((b) => b._id));
          const uniqueNew = newBlogs.filter((b) => !existingIds.has(b._id));
          return [...prev, ...uniqueNew];
        });
      }

      setHasMore(newBlogs.length === 12);
      setPage(pageNum);
    } catch (err) {
      setError("Failed to fetch blogs");
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      fetchBlogs(page + 1);
    }
  };

  const handleBlogClick = async (blog: Blog) => {
    try {
      // Increment view count by fetching the blog
      await blogAPI.getBlogById(blog._id);
      console.log("Blog clicked:", blog.title);
    } catch (err) {
      console.error("Error viewing blog:", err);
    }
  };

  if (loading && blogs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error && blogs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-red-600 mb-4">{error}</p>
          <button
            onClick={() => fetchBlogs(0)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-26 md:py-32 px-2 md:px-8">
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
          Discover our latest insights, research papers, and blogs on IoT,
          robotics, AI, and more.
        </motion.p>

        {/* Blog Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {blogs.map((blog, index) => {
            const getShortDescription = (desc: string) => {
              const words = desc.split(" ");
              return (
                words.slice(0, 15).join(" ") + (words.length > 15 ? "..." : "")
              );
            };

            return (
              <motion.div
                key={`${blog._id}-${index}`}
                className="flex flex-col h-full bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                onClick={() => handleBlogClick(blog)}
                style={{ cursor: "pointer" }}
              >
                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                  <img
                    src={getImageUrl(blog.image)}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/robot.svg";
                    }}
                  />
                </div>
                <div className="flex flex-col flex-1 px-6 py-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 leading-tight group-hover:text-blue-700 transition-colors duration-200">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-6 flex-1">
                    {getShortDescription(blog.description)}
                  </p>

                  {/* Blog Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>👁️ {blog.views} views</span>
                    <span>❤️ {blog.likes} likes</span>
                    <span>💬 {blog.comments} comments</span>
                  </div>

                  <button
                    className="mt-auto inline-block bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-800 transition-colors duration-200 text-sm tracking-wide"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBlogClick(blog);
                    }}
                  >
                    READ ARTICLE
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={loadMore}
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Loading...
                </div>
              ) : (
                "Load More Blogs"
              )}
            </button>
          </motion.div>
        )}
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
