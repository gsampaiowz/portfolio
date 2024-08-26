import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

type ProjectProps = {
  title: string;
  description: string;
  img: string;
  link: string;
  repo: string;
  techs: React.ReactNode[];
};

const ProjectsList: ProjectProps[] = [
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

export default ProjectsList;