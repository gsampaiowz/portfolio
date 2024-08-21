import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

type projectCardProps = {
  img: string;
  nome: string;
  link: string;
  repo: string;
  description: string;
  techs: React.ReactElement[];
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
          src={img}
          className="w-full h-full object-cover duration-300 group-hover:scale-125"
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
        <div className="flex gap-2">{techs}</div>
        <div className="flex justify-between [&>a]:text-background [&>a]:bg-primary [&>a]:rounded-lg [&>a]:flex [&>a]:transition-all [&>a]:items-center [&>a]:gap-2 [&>a]:py-2 [&>a]:px-3">
          <Button
            text="Ver Projeto"
            icon={<FaArrowRight />}
            link={link}
            additionalClass="group hover:pr-6"
          />
          <Button text="Repositório" link={repo} icon={<BsGithub />} />
        </div>
      </div>
    </div>
  );
}
