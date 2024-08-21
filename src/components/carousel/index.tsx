"use client";

import { useState } from "react";
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
    techs: React.ReactElement[];
  };

  const items: ProjectProps[] = [
    {
      title: "Projeto 1",
      description: "Descricão do projeto",
      img: "https://picsum.photos/200/300",
      link: "https://github.com/gsampaiowz",
      repo: "https://github.com/gsampaiowz",
      techs: [<RiNextjsFill key={0} />, <RiTailwindCssFill key={0} />],
    },
    {
      title: "Projeto 1",
      description: "Descricão do projeto",
      img: "https://picsum.photos/200/300",
      link: "https://github.com/gsampaiowz",
      repo: "https://github.com/gsampaiowz",
      techs: [<RiNextjsFill key={0} />, <RiTailwindCssFill key={0} />],
    },
    {
      title: "Projeto 1",
      description: "Descricão do projeto",
      img: "https://picsum.photos/200/300",
      link: "https://github.com/gsampaiowz",
      repo: "https://github.com/gsampaiowz",
      techs: [<RiNextjsFill key={0} />, <RiTailwindCssFill key={0} />],
    },
    {
      title: "Projeto 1",
      description: "Descricão do projeto",
      img: "https://picsum.photos/200/300",
      link: "https://github.com/gsampaiowz",
      repo: "https://github.com/gsampaiowz",
      techs: [<RiNextjsFill key={0} />, <RiTailwindCssFill key={0} />],
    },
    {
      title: "Projeto 1",
      description: "Descricão do projeto",
      img: "https://picsum.photos/200/300",
      link: "https://github.com/gsampaiowz",
      repo: "https://github.com/gsampaiowz",
      techs: [<RiNextjsFill key={0} />, <RiTailwindCssFill key={0} />],
    },
  ];

  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    console.log("teste");
    
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <>
      <div className="flex items-center justify-center mb-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-[12px]"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute", top: 40 }}
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
      <div className="flex flex-row gap-8 w-full h-full self-end items-end justify-center">
        <Button text="Back" f={() => handleBack()} />
        <Button text="Next" f={() => handleNext()} />
      </div>
    </>
  );
}
