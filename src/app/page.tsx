"use client";
import BgCircle from "@/components/bgcircle";
import Container from "./../components/container/index";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./../components/ui/tooltip";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiCsharp,
  SiDotnet,
  SiExpo,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// ? PAGINA INICIAL

export default function Home() {
  //CONFIG DO MOTION
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <BgCircle />
      <Container>
        <motion.ul
          className="flex flex-col h-full self-center my-auto gap-6 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={item}>
            <h1 className="text-2xl text-center">Gabriel Sampaio</h1>
            <h1 id="title" className="text-[64px] cursor-pointer">
              Fullstack Developer
            </h1>
          </motion.li>
          <motion.li variants={item}>
            <h2 className="text-2xl">Open to Work</h2>
          </motion.li>

          <motion.li
            className="relative overflow-hidden p-[5px] rounded-lg"
            variants={item}
          >
            <TooltipProvider>
              <Tooltip delayDuration={250}>
                <TooltipTrigger>
                  <div
                    className={
                      "text-lg flex gap-4 p-4 [&>*]:cursor-pointer rounded-md _border-loop after:rounded-md"
                    }
                  >
                    <span onClick={() => window.open("https://react.dev")}>
                      React
                    </span>
                    <span onClick={() => window.open("https://expo.dev/")}>
                      Expo
                    </span>
                    <span
                      onClick={() =>
                        window.open(
                          "https://learn.microsoft.com/pt-br/dotnet/csharp/"
                        )
                      }
                    >
                      C#
                    </span>
                    <span
                      onClick={() =>
                        window.open("https://dotnet.microsoft.com/pt-br/")
                      }
                    >
                      Asp.Net
                    </span>
                    <span
                      onClick={() =>
                        window.open(
                          "https://www.microsoft.com/pt-br/sql-server/sql-server-2022"
                        )
                      }
                    >
                      SQL Server
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex gap-4 p-4 mb-2 [&>*]:cursor-pointer [&>*]:text-primary">
                  <RiReactjsLine
                    onClick={() => window.open("https://react.dev")}
                    size={50}
                  />
                  <SiExpo
                    onClick={() => window.open("https://expo.dev/")}
                    size={50}
                  />
                  <SiCsharp
                    onClick={() =>
                      window.open(
                        "https://learn.microsoft.com/pt-br/dotnet/csharp/"
                      )
                    }
                    size={50}
                  />
                  <SiDotnet
                    onClick={() =>
                      window.open("https://dotnet.microsoft.com/pt-br/")
                    }
                    size={50}
                  />
                  <SiMicrosoftsqlserver
                    onClick={() =>
                      window.open(
                        "https://www.microsoft.com/pt-br/sql-server/sql-server-2022"
                      )
                    }
                    size={50}
                  />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.li>

          <motion.li variants={item}>
            <div className="flex gap-8">
              <a download href="/cv.pdf">
                <Button className="w-40 btn-hover">Download C.V</Button>
              </a>
              <Button className="w-40 gap-2 btn-hover">
                <Link href="/projects">My Projects</Link>
                <FaArrowRight />
              </Button>
            </div>
          </motion.li>

          <motion.li variants={item}>
            <div className="flex gap-8">
              <a target="_blank" href="https://www.linkedin.com/in/gsampaiowz/">
                <FaLinkedin
                  size={50}
                  className="cursor-pointer text-primary rounded-[4px] hover:text-background hover:bg-primary "
                />
              </a>
              <a target="_blank" href="https://github.com/gsampaiowz">
                <FaGithub
                  size={50}
                  className="cursor-pointer text-primary rounded-full p-1 hover:text-background hover:bg-primary "
                />
              </a>
            </div>
          </motion.li>
        </motion.ul>
      </Container>
    </>
  );
}
