import { IconType } from "react-icons/lib";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import eventplus from "@/assets/img/eventplus.jpeg";
import simonsays from "@/assets/img/simonsays.jpeg";
import todolist from "@/assets/img/todolist.jpeg";
import dashboard from "@/assets/img/dashboard.jpeg";
import vitalhub from "@/assets/img/vitalhub.jpeg";
import { FaReact } from "react-icons/fa";
import {
  SiAxios,
  SiDotnet,
  SiJavascript,
  SiMui,
  SiStyledcomponents,
  SiSwiper,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { CgFramer } from "react-icons/cg";
import { VscAzure } from "react-icons/vsc";

type ProjectProps = {
  title: string;
  description: string;
  img: string;
  link: string;
  repo: string;
  techs: IconType[];
};

const ProjectsList: ProjectProps[] = [
  {
    title: "Event +",
    description: "Site de cadastro de eventos",
    img: eventplus.src,
    link: "https://event-plus-gs.vercel.app/",
    repo: "https://github.com/gsampaiowz/event-plus",
    techs: [FaReact, SiAxios, CgFramer, SiSwiper, SiDotnet, VscAzure],
  },
  {
    title: "Simon Says",
    description: "Site com postagens da Simon Says",
    img: simonsays.src,
    link: "https://simon-says-films.vercel.app/",
    repo: "https://github.com/gsampaiowz/simon-says",
    techs: [FaReact, SiVite, SiJavascript],
  },
  {
    title: "To Do List",
    description: "Em desevolvimento...",
    img: todolist.src,
    link: "https://todo-list-next-gs.vercel.app/",
    repo: "https://github.com/gsampaiowz/todo-list-next",
    techs: [RiNextjsFill, RiTailwindCssFill, SiTypescript],
  },
  {
    title: "Dashboard",
    description: "Dashboard para empresa de fotografia",
    img: dashboard.src,
    link: "https://wepic-dashboard-frontend.vercel.app/",
    repo: "https://github.com/gsampaiowz/wepic-dashboard-frontend",
    techs: [FaReact, SiVite, SiMui, SiJavascript],
  },
  {
    title: "Vital Hub",
    description: "Aplicativo de agendamento de consultas",
    img: vitalhub.src,
    link: "https://github.com/gsampaiowz/vital-hub",
    repo: "https://github.com/gsampaiowz/vital-hub",
    techs: [FaReact, SiStyledcomponents, SiAxios, SiDotnet, VscAzure],
  },
];

export default ProjectsList;
