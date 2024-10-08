"use client";
import { motion } from "framer-motion";
import ThemeSwitch from "./../themeSwitch/index";
import Nav from "../nav";
import faviconDark from "@/app/favicon-dark.ico";
import favicon from "@/app/favicon.ico";
import MobileMenu from "../mobileMenu";

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
      className="relative w-full h-20 max-w-3xl mx-auto px-6"
    >
      <link
        rel="icon"
        href={
          !window.matchMedia("(prefers-color-scheme: dark)").matches
            ? faviconDark.src
            : favicon.src
        }
      />
      <div className="w-full h-full flex md:hidden justify-between items-center">
        <h1 className="text-3xl font-bold">GS</h1>
        <Nav />
        <ThemeSwitch />
      </div>
      <div className="w-full h-full hidden md:flex justify-between items-center">
        <h1 className="text-3xl font-bold">GS</h1>
        <MobileMenu />
      </div>
    </motion.header>
  );
}
