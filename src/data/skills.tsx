import { BsWordpress } from "react-icons/bs";
import { DiReact } from "react-icons/di";
import { FaNodeJs, FaPhp } from "react-icons/fa";
import { FaNpm } from "react-icons/fa6";
import { PiFramerLogoFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAxios,
  SiCypress,
  SiDotnet,
  SiExpo,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMui,
  SiPrisma,
  SiRedux,
  SiShadcnui,
  SiStyledcomponents,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

const skills = [
  {
    group: "Frontend",
    items: [
      {
        name: "TypeScript",
        icon: <SiTypescript size={40} />,
      },
      {
        name: "React / Native",
        icon: <DiReact size={40} />,
      },
      {
        name: "Vite",
        icon: <SiVite size={40} />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill size={40} />,
      },
      {
        name: "WordPress",
        icon: <BsWordpress size={40} />,
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill size={40} />,
      },
      {
        name: "Material UI",
        icon: <SiMui size={40} />,
      },
      {
        name: "Styled Comp.",
        icon: <SiStyledcomponents size={40} />,
      },
      {
        name: "Framer Mot.",
        icon: <PiFramerLogoFill size={40} />,
      },
      {
        name: "Shadcn UI",
        icon: <SiShadcnui size={40} />,
      },
      {
        name: "Redux",
        icon: <SiRedux size={40} />,
      },
      {
        name: "Axios",
        icon: <SiAxios size={40} />,
      },
    ],
  },
  {
    group: "Backend",
    items: [
      {
        name: "C#",
        icon: <TbBrandCSharp size={40} />,
      },
      {
        name: "ASP.NET",
        icon: <SiDotnet size={40} />,
      },
      {
        name: "SQL Server",
        icon: <SiMicrosoftsqlserver size={40} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={40} />,
      },
      {
        name: "Azure Services",
        icon: <VscAzure size={40} />,
      },
    ],
  },
  {
    group: "Others",
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={40} />,
      },
      {
        name: "NPM",
        icon: <FaNpm size={40} />,
      },
      {
        name: "CyPress",
        icon: <SiCypress size={40} />,
      },
      {
        name: "Prisma",
        icon: <SiPrisma size={40} />,
      },
      {
        name: "Expo",
        icon: <SiExpo size={40} />,
      },
      {
        name: "PHP",
        icon: <FaPhp size={40} />,
      },
    ],
  },
];

export default skills;