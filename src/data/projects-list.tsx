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
    title: "Event +",
    description: "Site de cadastro de eventos",
    img: "https://picsum.photos/200/300",
    link: "https://eventplus-sampaio.vercel.app/",
    repo: "https://github.com/gsampaiowz",
    techs: [<RiNextjsFill key={0} />, <RiTailwindCssFill key={1} />],
  },
  {
    title: "Simon Says",
    description: "Site com postagens da Simon Says",
    img: "https://picsum.photos/200/300",
    link: "https://simon-says-mu.vercel.app/",
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