import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { CgArrowTopRight } from "react-icons/cg";
import React, { cloneElement } from "react";

type projectCardProps = {
  img: string;
  nome: string;
  link: string;
  repo: string;
  description: string;
  techs: React.ReactNode[];
  focus: boolean;
};

export default function ProjectCard({
  nome,
  img,
  link,
  repo,
  description,
  techs,
  focus,
}: projectCardProps) {
  return (
    <div className="flex flex-col gap-2 transition-[background] duration-300 ease-in bg-background p-6 rounded-xl">
      <div className="relative w-80 h-52 duration-300 rounded-xl overflow-hidden after:duration-300 after:content-normal after:absolute after:top-0 after:w-full after:h-full hover:after:bg-black/25 group">
        <Image
          priority
          src={img}
          className={cn(
            "w-full h-full object-cover duration-300 group-hover:scale-125",
            focus ? "" : "opacity-75 brightness-50 blur-sm"
          )}
          width={320}
          height={208}
          alt={`Projeto ${nome}`}
        />
      </div>

      <div
        className={cn(
          "transition-opacity duration-700 flex flex-col gap-2",
          focus
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <h1 className="text-xl">{nome}</h1>
        <p className="text-sm">{description}</p>
        <div className="flex gap-2 [&>*]:size-8">
          {techs.map((TechIcon, index) => (
            <React.Fragment key={index}>{TechIcon}</React.Fragment>
          ))}
        </div>
        <div className="flex justify-between">
          <a href={link} target="_blank">
            <Button
              text="Ver Projeto"
              icon={<CgArrowTopRight size={20} />}
              additionalClass="group hover:pr-6"
            />
          </a>
          <a target="_blank" href={repo}>
            <Button text="Repositório" icon={<BsGithub />} />
          </a>
        </div>
      </div>
    </div>
  );
}
