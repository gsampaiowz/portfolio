"use client";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export default function Footer() {
  return (
    <motion.footer
      transition={{ duration: 1 }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full mt-8 pb-4"
    >
      <div className="w-full h-full flex justify-center items-center">
        <p className="text-md">2024 © Gabriel Sampaio</p>
      </div>
    </motion.footer>
  );
}
