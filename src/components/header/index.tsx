"use client";
import { motion } from "framer-motion";
import ThemeSwitch from "./../themeSwitch/index";
import Nav from "../nav";
import logo from "@/app/favicon.ico"
import Image from "next/image";

export default function Header() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.header
      transition={{ duration: 1 }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative w-full h-20 max-w-3xl mx-auto"
    >
      <div className="w-full h-full flex justify-between items-center">
        <Image className="dark:" src={logo.src} width={40} height={40} alt="Logo escrito GS" />
        <Nav />
        <ThemeSwitch />
      </div>
    </motion.header>
  );
}
