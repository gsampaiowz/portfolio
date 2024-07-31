"use client";
import { motion } from "framer-motion";
import { ThemeSwitch } from "./../themeSwitch/index";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const Header = () => {
  return (
    <motion.header
      transition={{ duration: 1 }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative w-full h-20 max-w-3xl mx-auto"
    >
      <div className="w-full h-full flex justify-between items-center">
        <h1 className="text-3xl cursor-pointer leading-[50px] hover-title">
          Gabriel Sampaio
        </h1>
        <nav className="flex items-center gap-8">
          <ul className="flex flex-row items-center _underline-hover">
            <li className="_underline-hover-item">Home</li>
            <li className="_underline-hover-item">Projects</li>
            <li className="_underline-hover-item">Contact</li>
          </ul>
          <ThemeSwitch />
        </nav>
      </div>
    </motion.header>
  );
};
