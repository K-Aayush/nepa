"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { blogAPI, Blog, getImageUrl } from "@/lib/api";
import {
  ArrowLeft,
  Calendar,
  Eye,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";

interface BlogDetailPageProps {
  blogId: string;
}

const BlogDetailPage = ({ blogId }: BlogDetailPageProps) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const blogData = await blogAPI.getBlogById(blogId);
      setBlog(blogData);
      setLikeCount(blogData.likes);
    } catch (err) {
      setError("Failed to fetch blog details");
      console.error("Error fetching blog:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async () => {
    if (!blog) return;

    try {
      await blogAPI.likeBlog(blog._id);
      setLiked(!liked);
      setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    } catch (err) {
      console.error("Error liking blog:", err);
    }
  };

  const handleShare = async () => {
    if (navigator.share && blog) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <p className="text-lg text-red-600 mb-4">
            {error || "Blog not found"}
          </p>
          <button
            onClick={() => router.push("/blogs")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header with back button */}
      <div className="top-0 z-50 py-3 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => router.push("/blogs")}
            className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </button>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Image */}
        <motion.div
          className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={getImageUrl(blog.image)}
            alt={blog.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/robot.svg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>

        {/* Blog Header */}
        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {blog.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {blog.description}
          </p>

          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Eye size={16} />
              <span>{blog.views} views</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle size={16} />
              <span>{blog.comments} comments</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                liked
                  ? "bg-red-100 text-red-600 hover:bg-red-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={16} className={liked ? "fill-current" : ""} />
              <span>{likeCount}</span>
            </motion.button>

            <motion.button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 size={16} />
              <span>Share</span>
            </motion.button>
          </div>
        </motion.header>

        {/* Blog Content */}
        <motion.div
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {blog.content ? (
            <div
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">{blog.description}</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-800 font-medium">
                  This blog post is part of our ongoing series on IoT and
                  Robotics innovations. Stay tuned for more detailed content and
                  technical insights.
                </p>
              </div>
              <p>
                At NepaTronix, we&apos;re committed to sharing knowledge and
                insights about the latest developments in IoT, robotics, and
                automation technologies. Our team of experts regularly publishes
                articles covering various aspects of these exciting fields.
              </p>
              <p>
                Whether you&apos;re a student, educator, or industry
                professional, our blog aims to provide valuable information that
                can help you stay updated with the rapidly evolving world of
                technology.
              </p>
            </div>
          )}
        </motion.div>

        {/* Tags or Categories (if available) */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-wrap gap-2">
            {["IoT", "Robotics", "Technology", "Innovation"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related or CTA Section */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in Learning More?
          </h3>
          <p className="text-gray-600 mb-6">
            Explore our comprehensive IoT and Robotics programs, or get in touch
            with our team to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push("/services")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View Our Services
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogDetailPage;
