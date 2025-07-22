"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const { scrollY } = useScroll();
  const padding = useTransform(scrollY, [0, 100], ["25px 60px", "20px 60px"]);

  const navItems = [
    { name: "HOME", id: "home" },
    { name: "COLLABORATION", id: "about" },
    { name: "SERVICES", id: "services" },
    { name: "PRODUCTS", id: "projects" },
    { name: "TEAMS", id: "teams" },
    { name: "BLOGS", id: "blogs" },
    { name: "GALLERY", id: "gallery" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full flex justify-center items-center z-10"
      style={{ backgroundColor: "transparent", padding }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex items-center bg-white rounded-full shadow-md px-4 py-1.5 gap-0">
        {/* Logo in the left first corner with extra spacing and subtle border */}
        <div className="flex items-center justify-center bg-white rounded-full shadow-sm mr-6 p-2 border border-gray-200">
          <img src="/logo.png" alt="Logo" className="h-8 w-35" />
        </div>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`relative flex items-center px-5 py-2 font-semibold transition-colors duration-200 rounded-full
              ${
                activeSection === item.id
                  ? "bg-green-200 text-black"
                  : "bg-transparent text-slate-700 hover:bg-slate-100"
              }`}
          >
            <span>{item.name}</span>
            {activeSection === item.id && (
              <span className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-black text-green-200 font-bold text-sm">
                4
              </span>
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
