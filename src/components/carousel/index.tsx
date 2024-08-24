"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "@/app/favicon.ico";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import ProjectCard from "../projectCard";
import Button from "../button";

export default function Carousel() {
  type ProjectProps = {
    title: string;
    description: string;
    img: string;
    link: string;
    repo: string;
    techs: React.ReactNode[];
  };

  const items: ProjectProps[] = [
    {
      title: "Projeto 1",
      description: "Descricão do projeto",
      img: "https://picsum.photos/200/300",
      link: "https://github.com/gsampaiowz",
      repo: "https://github.com/gsampaiowz",
      techs: [<RiNextjsFill key={0} />, <RiTailwindCssFill key={1} />],
    },
    {
      title: "Projeto 1",
      description: "Descricão do projeto",
      img: "https://picsum.photos/200/300",
      link: "https://github.com/gsampaiowz",
      repo: "https://github.com/gsampaiowz",
      techs: [<RiNextjsFill key={0} />, <RiTailwindCssFill key={1} />],
    },
    {
      title: "Projeto 1",
      description: "Descricão do projeto",
      img: "https://picsum.photos/200/300",
      link: "https://github.com/gsampaiowz",
      repo: "https://github.com/gsampaiowz",
      techs: [<RiNextjsFill key={0} />, <RiTailwindCssFill key={1} />],
    },
    {
      title: "Projeto 1",
      description: "Descricão do projeto",
      img: "https://picsum.photos/200/300",
      link: "https://github.com/gsampaiowz",
      repo: "https://github.com/gsampaiowz",
      techs: [<RiNextjsFill key={0} />, <RiTailwindCssFill key={1} />],
    },
    {
      title: "Projeto 1",
      description: "Descricão do projeto",
      img: "https://picsum.photos/200/300",
      link: "https://github.com/gsampaiowz",
      repo: "https://github.com/gsampaiowz",
      techs: [<RiNextjsFill key={0} />, <RiTailwindCssFill key={1} />],
    },
  ];

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
    left1: { x: "-50%", scale: 0.7, zIndex: 2 },
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 2 },
  };
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row gap-32 w-full h-full self-end items-end justify-center">
        <Button additionalClass="px-8" text="Back" f={() => handleBack()} />
        <Button additionalClass="px-8" text="Next" f={() => handleNext()} />
      </div>
      <div className="flex items-center justify-center relative h-[450px]">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-[12px]"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            onClick={() => handleClick(positionIndexes[index])}
            style={{ position: "absolute" }}
          >
            <ProjectCard
              focus={positionIndexes[index] === 0}
              nome={item.title}
              img={item.img}
              link={item.link}
              repo={item.repo}
              description={item.description}
              techs={item.techs}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
