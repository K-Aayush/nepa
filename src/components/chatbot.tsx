"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X, Send, ArrowLeft } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

interface BookingForm {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  meetingType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm your NepaTronix assistant. I can help you book a consultation, workshop, or partnership meeting. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [showOptions, setShowOptions] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [formData, setFormData] = useState<BookingForm>({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    meetingType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const nepatronixInfo = {
    company: {
      name: "NepaTronix",
      description:
        "Nepal's leading IoT and Robotics company, pioneering the future of automation, artificial intelligence, and smart technology solutions.",
      vision: "Where Creativity Meets Innovation",
    },
    services: [
      "IoT Development with Arduino, ESP32, and ESP8266",
      "Industrial Automation and Smart Factory Solutions",
      "STEAM Education Programs for Class 5 to 10",
      "Mobile App Integration with Blynk platform",
    ],
    achievements: [
      "67+ Happy Students trained",
      "15+ Completed Projects",
      "8 Running Projects",
      "5 School Partnerships",
    ],
  };

  const getIntelligentResponse = (message: string): string => {
    const msg = message.toLowerCase();

    if (
      msg.includes("nepatronix") ||
      msg.includes("company") ||
      msg.includes("about")
    ) {
      return `${nepatronixInfo.company.name} is ${nepatronixInfo.company.description} Our vision is "${nepatronixInfo.company.vision}".`;
    }

    if (
      msg.includes("service") ||
      msg.includes("what do you do") ||
      msg.includes("offer")
    ) {
      return `We offer comprehensive IoT and Robotics solutions including:\n\n• ${nepatronixInfo.services
        .slice(0, 4)
        .join("\n• ")}\n\nWould you like to know about a specific service?`;
    }

    if (
      msg.includes("achievement") ||
      msg.includes("success") ||
      msg.includes("stats")
    ) {
      return `Our achievements include:\n• ${nepatronixInfo.achievements.join(
        "\n• "
      )}`;
    }

    if (
      msg.includes("contact") ||
      msg.includes("reach") ||
      msg.includes("location")
    ) {
      return `You can reach us at:\n📧 Email: info@nepatronix.org\n🌐 Website: www.nepatronix.org\n📍 Location: Nepal\n\nFeel free to use our booking options above to schedule a meeting!`;
    }

    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
      return `Hello! Welcome to NepaTronix! 👋 I'm here to help you learn about our IoT and Robotics solutions. What would you like to know?`;
    }

    return `Thank you for your question! I can provide information about NepaTronix's services, projects, and educational programs. You can also use the booking options above to schedule a meeting. Is there something specific you'd like to know?`;
  };

  const addMessage = (content: string, isBot: boolean = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isBot,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    addMessage(inputMessage, false);
    setInputMessage("");

    setTimeout(() => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        const response = getIntelligentResponse(inputMessage);
        addMessage(response, true);
      }, 1500);
    }, 500);
  };

  const handleOptionSelect = (type: string) => {
    const titles = {
      contact: "Contact NepaTronix",
      workshop: "Schedule Workshop/Training",
      partnership: "Partnership Meeting",
      general: "General Inquiry Meeting",
    };

    setShowOptions(false);
    setShowForm(true);
    setFormData((prev) => ({ ...prev, meetingType: type }));
    addMessage(
      `Great! Let's ${titles[
        type as keyof typeof titles
      ].toLowerCase()}. Please fill out the form and I'll send your request to our team.`,
      true
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const emailBody = `
New Meeting Request from NepaTronix Website

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Organization: ${formData.organization || "Not provided"}
Meeting Type: ${formData.meetingType}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}

Message/Requirements:
${formData.message}

---
This request was submitted through the NepaTronix website chatbot.
    `;

    const subject = `Meeting Request - ${formData.meetingType} - ${formData.fullName}`;
    const mailtoLink = `mailto:info@nepatronix.org?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsLoading(false);
      addMessage(
        `✅ Perfect! Your ${formData.meetingType} request has been prepared. Your email client should open now with the pre-filled message.`,
        true
      );
      addMessage(
        "Our team will respond within 24 hours to confirm your meeting details. Thank you for choosing NepaTronix!",
        true
      );

      setShowForm(false);
      setShowOptions(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        meetingType: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    }, 2000);
  };

  const goBackToOptions = () => {
    setShowForm(false);
    setShowOptions(true);
    addMessage("No problem! What would you like to do?", true);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-2xl z-[1000] flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={!isOpen ? { y: [0, -10, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-8 w-96 max-h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-[1000] overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
              >
                🤖
              </motion.div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">NepaTronix Assistant</h3>
              </div>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.isBot ? "" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                      message.isBot
                        ? "bg-gradient-to-br from-blue-600 to-purple-600"
                        : "bg-gradient-to-br from-green-500 to-green-600"
                    }`}
                  >
                    {message.isBot ? "🤖" : "👤"}
                  </div>
                  <div
                    className={`max-w-xs p-3 rounded-2xl ${
                      message.isBot
                        ? "bg-gray-100 text-gray-800"
                        : "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-line">
                      {message.content}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm">
                    🤖
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Options */}
            {showOptions && (
              <motion.div
                className="p-4 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    {
                      id: "contact",
                      label: "📞 Contact",
                      text: "Want to Contact",
                    },
                    {
                      id: "workshop",
                      label: "🎓 Workshop",
                      text: "Schedule Workshop",
                    },
                    {
                      id: "partnership",
                      label: "🤝 Partnership",
                      text: "Partnership Meeting",
                    },
                    {
                      id: "general",
                      label: "💬 General",
                      text: "General Inquiry",
                    },
                  ].map((option) => (
                    <Button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      variant="outline"
                      className="text-xs h-10 hover:bg-blue-50 hover:border-blue-300"
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Booking Form */}
            {showForm && (
              <motion.div
                className="p-4 border-t border-gray-200 max-h-80 overflow-y-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs font-medium text-gray-700">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }))
                        }
                        className="h-8 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-700">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="h-8 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs font-medium text-gray-700">
                        Phone
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="h-8 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-700">
                        Organization
                      </label>
                      <Input
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            organization: e.target.value,
                          }))
                        }
                        className="h-8 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs font-medium text-gray-700">
                        Preferred Date *
                      </label>
                      <Input
                        type="date"
                        required
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            preferredDate: e.target.value,
                          }))
                        }
                        className="h-8 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-700">
                        Time *
                      </label>
                      <select
                        required
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            preferredTime: e.target.value,
                          }))
                        }
                        className="w-full h-8 text-xs border border-gray-300 rounded px-2"
                      >
                        <option value="">Select Time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-700">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      placeholder="Please describe your requirements..."
                      className="text-xs"
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={goBackToOptions}
                      className="text-xs h-8"
                    >
                      <ArrowLeft size={12} className="mr-1" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-xs h-8"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Request"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
