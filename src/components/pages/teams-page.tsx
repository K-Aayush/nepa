"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { teamsAPI, TeamMember, getImageUrl } from "@/lib/api";
import {
  User,
  Briefcase,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  FileText,
  X,
} from "lucide-react";

const TeamsPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const members = await teamsAPI.getTeamMembers();
      setTeamMembers(members);
    } catch (err) {
      setError("Failed to fetch team members");
      console.error("Error fetching team members:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleMemberClick = async (member: TeamMember) => {
    try {
      // Fetch detailed information for the selected member
      const detailedMember = await teamsAPI.getTeamMemberById(member._id);
      setSelectedMember(detailedMember);
    } catch (err) {
      console.error("Error fetching member details:", err);
      // Fallback to the basic member data
      setSelectedMember(member);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading our amazing team...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <p className="text-lg text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchTeamMembers}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (teamMembers.length === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white py-26 md:py-32 px-2 md:px-8">
        <div className="flex flex-col items-center justify-center w-full h-full py-32">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            Our Team
          </h2>
          <div className="flex flex-col items-center">
            <User className="w-16 h-16 text-gray-400 mb-6" />
            <p className="text-2xl md:text-3xl text-gray-600 font-bold mb-2">
              No team members found
            </p>
            <p className="text-lg text-gray-500">
              Check back soon for our awesome team members!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-26 md:py-32 px-2 md:px-8">
        <div className="max-w-7xl mx-auto text-center px-2 md:px-8 relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8, y: -40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            OUR TEAM
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Meet the brilliant minds behind NepaTronix&apos;s innovative IoT and
            robotics solutions.
          </motion.p>

          {/* Team Members Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member._id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => handleMemberClick(member)}
              >
                {/* Profile Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={getImageUrl(member.picture)}
                    alt={member.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/robot.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover overlay with social links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.facebook && (
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Facebook size={18} />
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-pink-600 hover:bg-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Instagram size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {member.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={16} className="text-blue-600" />
                    <p className="text-blue-600 font-medium">
                      {member.profession}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {member.about}
                  </p>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    View Profile
                  </button>
                </div>
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

      {/* Member Detail Modal */}
      {selectedMember && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto">
              {/* Image Section */}
              <div className="relative h-64 md:h-full">
                <img
                  src={getImageUrl(selectedMember.picture)}
                  alt={selectedMember.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/robot.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedMember.title}
                  </h2>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase size={20} className="text-blue-600" />
                    <p className="text-xl text-blue-600 font-medium">
                      {selectedMember.profession}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    About
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedMember.about}
                  </p>
                </div>

                {/* Links Section */}
                <div className="space-y-4">
                  {selectedMember.portfolio && (
                    <a
                      href={selectedMember.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={20} className="text-gray-600" />
                      <span className="text-gray-700 font-medium">
                        Portfolio
                      </span>
                    </a>
                  )}

                  {selectedMember.resume && (
                    <a
                      href={selectedMember.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <FileText size={20} className="text-gray-600" />
                      <span className="text-gray-700 font-medium">Resume</span>
                    </a>
                  )}

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4">
                    {selectedMember.linkedin && (
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {selectedMember.facebook && (
                      <a
                        href={selectedMember.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      >
                        <Facebook size={20} />
                      </a>
                    )}
                    {selectedMember.instagram && (
                      <a
                        href={selectedMember.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default TeamsPage;
