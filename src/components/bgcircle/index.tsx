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
        bgCircle.style.filter = "blur(12px)";
      });
      
      title.addEventListener("mouseout", () => {
        bgCircle.style.filter = "blur(24px)";
      });
    }
  }, []);
  
  return (
    <motion.div 
    transition={{ duration: 1 }} variants={container} initial="hidden" animate="visible"
      id="bgcircle"
      className="duration-500 border-primary/50 border-[8px] w-[500px] h-[500px] absolute top-[calc(50%-250px)] -z-[1] left-[calc(50%-250px)] rounded-full blur-xl"
    ></motion.div>
  );
};
