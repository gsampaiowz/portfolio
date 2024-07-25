"use client";

import { useEffect } from "react";
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1
  },
}

export const BgCircle = () => {
  useEffect(() => {
    const bgCircle = window.document.getElementById("bgcircle");
    const title = window.document.getElementById("title");
    if (title && bgCircle) {

      title.addEventListener("mouseover", () => {
        bgCircle.style.width = "600px";
        bgCircle.style.height = "600px";
        bgCircle.style.left = `calc(50vw - 300px)`;
        bgCircle.style.top = `calc(50vh - 300px)`;
      });

      title.addEventListener("mouseout", () => {
        bgCircle.style.width = "500px";
        bgCircle.style.height = "500px";
        bgCircle.style.left = `calc(50vw - 250px)`;
        bgCircle.style.top = `calc(50vh - 250px)`;
      });
    }
  }, []);
  return (
    <motion.div 
    transition={{ duration: 1 }} variants={container} initial="hidden" animate="visible"
      id="bgcircle"
      className="transition-all border-gray-500 border-[8px] z-10 w-[500px] h-[500px] absolute top-[calc(50%-250px)] left-[calc(50%-250px)] rounded-full blur-md"
    ></motion.div>
  );
};
