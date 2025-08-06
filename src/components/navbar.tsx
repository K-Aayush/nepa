"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "HOME", id: "" },
    { name: "COLLABORATION", id: "collaboration" },
    { name: "SERVICES", id: "services" },
    { name: "PRODUCTS", id: "products" },
    { name: "TEAMS", id: "teams" },
    { name: "BLOGS", id: "blogs" },
    { name: "GALLERY", id: "gallery" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <>
      {/* Desktop and Tablet Navbar */}
      <motion.nav
        className="fixed top-0 w-full flex justify-center items-center z-50"
        style={{ backgroundColor: "transparent", padding: "20px 60px" }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Desktop View (lg and above) */}
        <div className="hidden lg:flex items-center bg-white rounded-full shadow-md px-4 py-1.5 gap-0">
          {/* Logo */}
          <div className="flex items-center justify-center bg-white rounded-full shadow-sm mr-6 p-2 border border-gray-200">
            <img src="/logo.png" alt="Logo" className="h-8 w-35" />
          </div>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/${item.id}`}
              className={`relative flex items-center px-5 py-2 font-semibold transition-colors duration-200 rounded-full text-sm
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

        {/* Tablet View (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center bg-white rounded-full shadow-md px-3 py-1.5 gap-0">
          {/* Logo */}
          <div className="flex items-center justify-center bg-white rounded-full shadow-sm mr-4 p-1.5 border border-gray-200">
            <img src="/logo.png" alt="Logo" className="h-6 w-28" />
          </div>
          {navItems.slice(0, 6).map((item) => (
            <Link
              key={item.id}
              href={`/${item.id}`}
              className={`relative flex items-center px-3 py-1.5 font-medium transition-colors duration-200 rounded-full text-xs
                ${
                  activeSection === item.id
                    ? "bg-green-200 text-black"
                    : "bg-transparent text-slate-700 hover:bg-slate-100"
                }`}
            >
              <span>{item.name}</span>
            </Link>
          ))}
          {/* More menu for remaining items */}
          <div className="relative group">
            <button className="flex items-center px-3 py-1.5 font-medium transition-colors duration-200 rounded-full text-xs bg-transparent text-slate-700 hover:bg-slate-100">
              MORE
            </button>
            <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-32">
              {navItems.slice(6).map((item) => (
                <Link
                  key={item.id}
                  href={`/${item.id}`}
                  className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg
                    ${
                      activeSection === item.id
                        ? "bg-green-200 text-black"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden items-center justify-between w-full bg-white rounded-full shadow-md px-4 py-2">
          {/* Logo */}
          <div className="flex items-center justify-center bg-white rounded-full shadow-sm p-1.5 border border-gray-200">
            
          </div>
          
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-slate-700 rounded-full"
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-slate-700 rounded-full"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-slate-700 rounded-full"
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={`/${item.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-6 py-4 font-semibold transition-colors duration-200 border-b border-gray-100 last:border-b-0
                        ${
                          activeSection === item.id
                            ? "bg-green-50 text-green-800 border-l-4 border-l-green-500"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {activeSection === item.id && (
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
