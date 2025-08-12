import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Aayush Kumar",
    role: "Team Lead",
    image: "/robot.svg",
    description:
      "Leads the team with a passion for robotics, AI, and innovative solutions.",
    hierarchy: 1,
  },
  {
    name: "Priya Sharma",
    role: "IoT Specialist",
    image: "/window.svg",
    description:
      "Expert in IoT systems, device integration, and smart city solutions.",
    hierarchy: 2,
  },
  {
    name: "Rahul Verma",
    role: "AI Engineer",
    image: "/globe.svg",
    description:
      "Focuses on machine learning, data analysis, and intelligent automation.",
    hierarchy: 2,
  },
  {
    name: "Sneha Patel",
    role: "UI/UX Designer",
    image: "/next.svg",
    description:
      "Designs user-friendly interfaces and ensures a seamless user experience.",
    hierarchy: 2,
  },
  {
    name: "Vikram Singh",
    role: "Full Stack Developer",
    image: "/vercel.svg",
    description:
      "Builds robust web applications and manages backend infrastructure.",
    hierarchy: 2,
  },
  {
    name: "Anjali Mehra",
    role: "Content Strategist",
    image: "/file.svg",
    description:
      "Crafts engaging content and manages communication strategies.",
    hierarchy: 2,
  },
];


const TeamsPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white py-26 md:py-32 px-2 md:px-8">
      <div className="flex flex-col items-center justify-center w-full h-full py-32">
        <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          Our Team
        </h2>
        <div className="flex flex-col items-center">
          <svg className="animate-spin mb-6" width="60" height="60" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" stroke="#38bdf8" strokeWidth="5" strokeDasharray="31.4 31.4" />
          </svg>
          <p className="text-2xl md:text-3xl text-cyan-700 font-bold mb-2 animate-pulse">Teams are updating...</p>
          <p className="text-lg text-gray-500">Please check back soon for our awesome team members!</p>
        </div>
      </div>
    </section>
  );
};

export default TeamsPage;
