import { ArrowRight } from "lucide-react";
import Image from "next/image";

type projectCardProps = {
  img: string;
  nome: string;
  link: string;
  repo: string;
  description: string;
  techs: React.ReactElement[];
};

export default function ProjectCard({
  nome,
  img,
  link,
  repo,
  description,
  techs,
}: projectCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <Image src={img} className="w-80 h-52 rounded-xl" width={320} height={208} alt={`Projeto ${nome}`} />
      <h1>{nome}</h1>
      <p>{description}</p>
      <div className="flex gap-2">{techs}</div>
      <div className="flex justify-between">
        <a className="flex gap-2" href={link} target="_blank">
          Acessar <ArrowRight />
        </a>
        <a href={repo} target="_blank">
          Repositório
        </a>
      </div>
    </div>
  );
}
