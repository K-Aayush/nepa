"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.85)", "rgba(255, 255, 255, 0.95)"]
  );
  const padding = useTransform(scrollY, [0, 100], ["25px 60px", "20px 60px"]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full flex justify-between items-center z-50 backdrop-blur-xl border-b border-black/[0.03]"
      style={{ backgroundColor, padding }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="text-2xl font-black text-slate-800 relative"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        NepaTronix
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <div className="hidden md:flex gap-11">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="relative text-slate-600 font-semibold px-6 py-3 rounded-full overflow-hidden"
            whileHover={{ y: -3, color: "#4f46e5" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
              whileHover={{ width: "70%", x: "-50%" }}
              transition={{ duration: 0.4 }}
            />
            {item.name}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
