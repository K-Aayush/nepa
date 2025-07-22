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
  // Group by hierarchy
  const lead = teamMembers.filter((m) => m.hierarchy === 1);
  const others = teamMembers.filter((m) => m.hierarchy === 2);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white py-26 md:py-32 px-2 md:px-8">
      <div className="max-w-7xl w-full mx-auto text-center px-2 md:px-8">
        <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Our Team
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Meet the talented individuals behind our innovative projects and
          solutions.
        </p>
        {/* Team Lead */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-700 mb-8 uppercase tracking-widest">
            Team Lead
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {lead.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-white rounded-2xl border-2 border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group p-8 max-w-xs"
              >
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-200 group-hover:border-blue-500 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="bg-gradient-to-br from-blue-100 to-purple-100"
                    sizes="128px"
                    priority
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-200">
                  {member.name}
                </h4>
                <span className="text-blue-600 font-semibold mb-2 text-base uppercase tracking-wide">
                  {member.role}
                </span>
                <p className="text-gray-600 text-base text-center mb-2">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Other Members */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-8 uppercase tracking-widest">
            Team Members
          </h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {others.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group p-6"
              >
                <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-blue-100 group-hover:border-blue-400 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="bg-gradient-to-br from-blue-100 to-purple-100"
                    sizes="112px"
                    priority
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-200">
                  {member.name}
                </h4>
                <span className="text-blue-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                  {member.role}
                </span>
                <p className="text-gray-600 text-base text-center mb-2">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsPage;
