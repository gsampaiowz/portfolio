"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../projectCard";
import Button from "../button";
import ProjectsList from "@/data/projects-list";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

export default function Carousel() {
  // * POSITIONS DO CAROUSEL
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  // TROCA DE SLIDE COM CLIQUE
  const handleClick = (clickedPositionIndex: number) => {
    setPositionIndexes((prevIndexes) => {
      return prevIndexes.map(
        (index, i) => (index - clickedPositionIndex + 5) % 5
      );
    });
  };

  //PROXIMO SLIDE
  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  //SLIDE ANTERIOR
  const handleBack = () => {
    console.log("teste");

    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );
      return updatedIndexes;
    });
  };

  //POSITION PARA ANIMACOES
  const positions = ["center", "left1", "left", "right", "right1"];

  //ANIMACOES
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 3 },
    left1: { y: "-5%", x: "-50%", scale: 0.7, zIndex: 2 },
    left: { y: "-8%", x: "-90%", scale: 0.5, zIndex: 1 },
    right: { y: "-8%", x: "90%", scale: 0.5, zIndex: 1 },
    right1: { y: "-5%", x: "50%", scale: 0.7, zIndex: 2 },
  };

  return (
    // <div className="flex flex-col w-full h-max">
    //   <div className="flex flex-row gap-20 w-full h-full self-end items-end justify-center">
    //     <Button additionalClass="px-8" text="Back" f={() => handleBack()} />
    //     <Button additionalClass="px-8" text="Next" f={() => handleNext()} />
    //   </div>
    //   <div className="flex items-center justify-center relative h-[450px]">
    //     {ProjectsList.map((item, index) => (
    //       <motion.div
    //         key={index}
    //         className="rounded-[12px]"
    //         initial="center"
    //         animate={positions[positionIndexes[index]]}
    //         variants={imageVariants}
    //         transition={{ duration: 0.5 }}
    //         onClick={() => handleClick(positionIndexes[index])}
    //         style={{ position: "absolute" }}
    //       >
    //         <ProjectCard
    //           focus={positionIndexes[index] === 0}
    //           nome={item.title}
    //           link={item.link}
    //           img={item.img}
    //           repo={item.repo}
    //           description={item.description}
    //           techs={item.techs}
    //         />
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>
    <Swiper
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={-250}
      pagination={{ clickable: true }}
      navigation
      keyboard={{ enabled: true}}
      modules={[Pagination, Navigation, Keyboard]}
      className=""
      loop={true}
    >
      {ProjectsList.map((item, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <ProjectCard
              focus={isActive}
              nome={item.title}
              link={item.link}
              img={item.img}
              repo={item.repo}
              description={item.description}
              techs={item.techs}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
