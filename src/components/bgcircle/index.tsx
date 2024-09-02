"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function BgCircle() {
  //CONFIG MOTION
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      transition={{ duration: 1 }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="xs:hidden duration-500 border-gray-500 border-[12px] w-[500px] h-[500px] absolute top-[calc(50%-250px)] -z-[1] left-[calc(50%-250px)] rounded-full blur-lg"
    />
  );
}
