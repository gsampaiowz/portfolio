"use client";

import { useEffect } from "react";
import { motion } from 'framer-motion';


export default function BgCircle() {
  //CONFIG MOTION
  const container = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1
    },
  }

  //CONFIG PRO TAMANHO DO CIRCULO
  useEffect(() => {
    const bgCircle = window.document.getElementById("bgcircle");
    const title = window.document.getElementById("title");
    if (title && bgCircle) {

      title.addEventListener("mouseover", () => {
        bgCircle.style.width = "600px";
        bgCircle.style.height = "600px";
        bgCircle.style.left = `calc(50% - 300px)`;
        bgCircle.style.top = `calc(50% - 300px)`;
      });

      title.addEventListener("mouseout", () => {
        bgCircle.style.width = "500px";
        bgCircle.style.height = "500px";
        bgCircle.style.left = `calc(50% - 250px)`;
        bgCircle.style.top = `calc(50% - 250px)`;
      });
    }
  }, []);
  
  return (
    <motion.div 
    transition={{ duration: 1 }} variants={container} initial="hidden" animate="visible"
      id="bgcircle"
      className="transition-all border-gray-500 border-[8px] w-[500px] h-[500px] absolute top-[calc(50%-250px)] -z-[1] left-[calc(50%-250px)] rounded-full blur-md"
    ></motion.div>
  );
};
