"use client";
import { motion } from "framer-motion";
import ThemeSwitch from "./../themeSwitch/index";
import { usePathname } from "next/navigation";
import Nav from "../nav";

export default function Header() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const pathname = usePathname();

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
        <Nav />
        <ThemeSwitch />
      </div>
    </motion.header>
  );
}
