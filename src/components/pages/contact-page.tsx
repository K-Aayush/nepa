"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Users,
  Award,
} from "lucide-react";

// Define variants for animations
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  consent: string;
  marketing: string;
  [key: string]: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    consent: "false",
    marketing: "false",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    // Type guard to ensure name is a key of FormData
    if (name in formData) {
      setFormData((prev) => ({
        ...prev,
        [name]:
          type === "checkbox" && e.target instanceof HTMLInputElement
            ? e.target.checked
              ? "true"
              : "false"
            : value,
      }));
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen py-8 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 4 }}
      />

      <motion.div
        className="relative z-10 px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="bg-white rounded-full px-6 py-2">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let&apos;s Connect
              </span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? We&apos;re here to help
            you every step of the way.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          variants={itemVariants}
        >
          {[
            { icon: Clock, stat: "< 24hrs", label: "Response Time" },
            { icon: Users, stat: "500+", label: "Happy Clients" },
            { icon: Award, stat: "99%", label: "Success Rate" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 shadow-xl"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <item.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <div className="text-3xl font-bold text-slate-800 mb-1">
                {item.stat}
              </div>
              <div className="text-slate-600">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-3">
                Send us a message
              </h2>
              <p className="text-slate-600">
                We&apos;d love to hear from you. Fill out the form below and
                we&apos;ll get back to you soon.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-600">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24 hours.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "firstName",
                      placeholder: "First Name",
                      type: "text",
                    },
                    {
                      name: "lastName",
                      placeholder: "Last Name",
                      type: "text",
                    },
                  ].map((field, index) => (
                    <div key={index} className="relative">
                      <motion.input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className="w-full p-4 bg-slate-50/80 border-2 border-transparent rounded-xl focus:border-blue-400 focus:bg-white transition-all duration-300 outline-none"
                        whileFocus={{ scale: 1.02 }}
                        required
                      />
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 -z-10"
                        animate={{
                          opacity: focusedField === field.name ? 0.1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  ))}
                </div>

                {[
                  {
                    name: "email",
                    placeholder: "Email Address",
                    type: "email",
                  },
                  { name: "phone", placeholder: "Phone Number", type: "tel" },
                  {
                    name: "company",
                    placeholder: "Company (Optional)",
                    type: "text",
                  },
                  { name: "subject", placeholder: "Subject", type: "text" },
                ].map((field, index) => (
                  <div key={index} className="relative">
                    <motion.input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full p-4 bg-slate-50/80 border-2 border-transparent rounded-xl focus:border-blue-400 focus:bg-white transition-all duration-300 outline-none"
                      whileFocus={{ scale: 1.02 }}
                      required={field.name !== "company"}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 -z-10"
                      animate={{
                        opacity: focusedField === field.name ? 0.1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                ))}

                <div className="relative">
                  <motion.textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full p-4 bg-slate-50/80 border-2 border-transparent rounded-xl focus:border-blue-400 focus:bg-white transition-all duration-300 outline-none resize-none"
                    whileFocus={{ scale: 1.01 }}
                    required
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 -z-10"
                    animate={{
                      opacity: focusedField === "message" ? 0.1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <motion.input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent === "true"}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-400"
                      whileTap={{ scale: 0.95 }}
                      required
                    />
                    <span className="text-sm text-slate-600">
                      I agree to NepaTronix&apos;s Privacy Policy and Terms of
                      Service. *
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <motion.input
                      type="checkbox"
                      name="marketing"
                      checked={formData.marketing === "true"}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-400"
                      whileTap={{ scale: 0.95 }}
                    />
                    <span className="text-sm text-slate-600">
                      I would like to receive updates and marketing
                      communications.
                    </span>
                  </label>
                </div>

                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!formData.consent}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Quick Contact */}
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@nepatronix.com",
                    href: "mailto:info@nepatronix.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+977 1 555 1234",
                    href: "tel:+97715551234",
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "Kupondole, Lalitpur, Nepal",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-medium">
                        {contact.label}
                      </div>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-slate-800 hover:text-blue-600 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-slate-800">{contact.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold mb-6">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <p className="text-sm">
                  <strong>Emergency Support:</strong> Available 24/7 for
                  critical issues
                </p>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {[
                  {
                    question: "What makes NepaTronix different?",
                    answer:
                      "We combine local expertise with cutting-edge IoT technology, offering personalized solutions and comprehensive support.",
                  },
                  {
                    question: "How secure are your services?",
                    answer:
                      "We implement industry-leading security measures and maintain strict privacy standards to protect your data.",
                  },
                  {
                    question: "Do you offer ongoing support?",
                    answer:
                      "Yes, we provide 24/7 emergency support and regular maintenance to ensure optimal performance.",
                  },
                ].map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-slate-50/80 rounded-xl overflow-hidden"
                  >
                    <summary className="p-4 cursor-pointer font-semibold text-blue-700 hover:text-blue-800 transition-colors list-none">
                      <div className="flex justify-between items-center">
                        {faq.question}
                        <motion.span
                          className="text-blue-600"
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 90 }}
                          transition={{ duration: 0.2 }}
                        >
                          +
                        </motion.span>
                      </div>
                    </summary>
                    <motion.div
                      className="px-4 pb-4 text-slate-600"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </details>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
