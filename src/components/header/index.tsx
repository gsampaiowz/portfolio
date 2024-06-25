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
      className="relative w-full h-20 max-w-5xl mx-auto"
    >
      <div className="w-full h-full flex justify-between items-center">
        <h1 className="text-3xl cursor-pointer leading-[50px] myhover">
          Gabriel Sampaio
        </h1>
        <nav className="flex items-center">
          <ul className="flex flex-row gap-8 items-center">
            <li className="cursor-pointer myhover2">About Me</li>
            <li className="cursor-pointer myhover2">Projects</li>
            <li className="cursor-pointer myhover2">Contact</li>
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};
