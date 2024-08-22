import Container from "@/components/container";
import { BsWordpress } from "react-icons/bs";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
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

export default function Skills() {
  return (
    <Container className="justify-center items-center gap-8">
      <div className="flex gap-6 [&>*]:size-24 flex-wrap items-center justify-center">
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiTypescript size={40} />
          <small>TypeScript</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <DiReact size={40} />
          <small>React / Native</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiVite size={40} />
          <small>Vite</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <RiNextjsFill size={40} />
          <small>Next.js</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <BsWordpress size={40} />
          <small>WordPress</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <RiTailwindCssFill size={40} />
          <small>Tailwind CSS</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiMui size={40} />
          <small>Material UI</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiStyledcomponents size={40} />
          <small>Styled Comp.</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <PiFramerLogoFill size={40} />
          <small>Framer Mot.</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiShadcnui size={40} />
          <small>Shadcn UI</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiRedux size={40} />
          <small>Redux</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiAxios size={40} />
          <small>Axios</small>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex gap-6 [&>*]:size-24 flex-wrap items-center justify-center">
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <TbBrandCSharp size={40} />
          <small>C#</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiDotnet size={40} />
          <small>ASP.NET</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiMicrosoftsqlserver size={40} />
          <small>SQL Server</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiMongodb size={40} />
          <small>MongoDB</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <VscAzure size={40} />
          <small>Azure Services</small>
        </div>
      </div>
      <hr className="w-full"/>
      <div className="flex gap-6 [&>*]:size-24 flex-wrap items-center justify-center">
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <FaNodeJs size={40} />
          <small>Node.js</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <FaNpm size={40} />
          <small>NPM</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiCypress size={40} />
          <small>CyPress</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiPrisma size={40} />
          <small>Prisma</small>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <SiExpo size={40} />
          <small>Expo</small>
        </div>
      </div>
    </Container>
  );
}
