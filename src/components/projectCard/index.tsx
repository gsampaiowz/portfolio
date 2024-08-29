import { BsGithub } from "react-icons/bs";
import Button from "../button";
import { cn } from "@/lib/utils";
import { CgArrowTopRight } from "react-icons/cg";
import React from "react";

type projectCardProps = {
  nome: string;
  canvasDataURL: string;
  link: string;
  repo: string;
  description: string;
  techs: React.ReactNode[];
  focus: boolean;
};

export default function ProjectCard({
  nome,
  canvasDataURL,
  link,
  repo,
  description,
  techs,
  focus,
}: projectCardProps) {
  return (
    <div className="flex flex-col gap-2 transition-[background] duration-300 ease-in bg-background p-6 rounded-xl">
      <div className="relative w-80 xs:w-64 aspect-video duration-300 rounded-xl overflow-hidden after:duration-300 after:content-normal after:absolute after:top-0 after:w-full after:h-full hover:after:bg-black/25 group">
        <img src={canvasDataURL} alt={nome} />
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
        <div className="flex xs:flex-col gap-4 justify-between">
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
