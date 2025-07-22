"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const navItems = [
    { name: "HOME", id: "" },
    { name: "COLLABORATION", id: "collaboration" },
    { name: "SERVICES", id: "services" },
    { name: "PRODUCTS", id: "products" },
    { name: "TEAMS", id: "teams" },
    { name: "BLOGS", id: "blogs" },
    { name: "GALLERY", id: "gallery" },
    { name: "PATNER", id: "patner" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full flex justify-center items-center z-10"
      style={{ backgroundColor: "transparent", padding: "20px 60px" }}
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
          <Link
            key={item.id}
            href={`/${item.id}`}
            className={`relative flex items-center px-5 py-2 font-semibold transition-colors duration-200 rounded-full
              ${
                activeSection === item.id
                  ? "bg-green-200 text-black"
                  : "bg-transparent text-slate-700 hover:bg-slate-100"
              }`}
          >
            <span>{item.name}</span>
            {activeSection === item.id && (
              <span className=" text-green-200 font-bold text-sm"></span>
            )}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
