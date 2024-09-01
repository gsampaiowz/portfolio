import { BsGithub } from "react-icons/bs";
import Button from "../button";
import { cn } from "@/lib/utils";
import { CgArrowTopRight } from "react-icons/cg";
import React from "react";
import Image from "next/image";
import { IconType } from "react-icons/lib";

type projectCardProps = {
  nome: string;
  link: string;
  repo: string;
  description: string;
  techs: IconType[];
  focus: boolean;
  img: string;
};

export default function ProjectCard({
  nome,
  link,
  repo,
  description,
  techs,
  focus,
  img,
}: projectCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 transition-[background, size] duration-300 ease-in w-96 xs:w-72 p-2 rounded-xl",
        !focus && "scale-75"
      )}
    >
      <h1 className={cn("text-xl", !focus && "opacity-0")}>{nome}</h1>
      <div
        onClick={() => focus && window.open(link, "_blank")}
        className={cn(
          "relative aspect-video duration-300 rounded-xl overflow-hidden after:duration-300 after:content-normal after:absolute after:top-0 after:left-0 after:w-full after:h-full hover:after:bg-black/25 group",
          focus && "border-2 border-border ring-2 ring-ring"
        )}
      >
        <Image
          priority
          src={img}
          className={cn(
            "w-full h-full object-cover duration-300 group-hover:scale-125",
            focus ? "" : "opacity-75 brightness-50 blur-sm grayscale-[75%]"
          )}
          width={1280}
          height={720}
          quality={100}
          alt={`Projeto ${nome}`}
        />
      </div>

      <div
        className={cn(
          "transition-opacity duration-300 flex flex-col gap-[12px]",
          focus
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <p className="text-sm">{description}</p>
        <div className="flex gap-2 [&>*]:size-8">
          {techs.map((TechIcon, index) => (
            <TechIcon className="rounded-md" key={index} />
          ))}
        </div>
        <div className="flex xs:flex-col gap-4 mt-1 justify-between">
          <Button
            f={() => window.open(link, "_blank")}
            text="Ver Projeto"
            icon={<CgArrowTopRight size={20} />}
            additionalClass="group hover:pr-6"
          />
          <Button
            f={() => window.open(repo, "_blank")}
            text="Repositório"
            icon={<BsGithub />}
          />
        </div>
      </div>
    </div>
  );
}
