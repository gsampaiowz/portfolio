"use client";
import { BgCircle } from "@/components/bgcircle";
import { Container } from "./../components/container/index";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./../components/ui/tooltip";
import { poppinsExtraLight } from "@/assets/fonts";
import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { SiCsharp, SiDotnet, SiMicrosoftsqlserver } from "react-icons/si";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Home() {
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  return (
    <main>
      <BgCircle />
      <Container>
        <motion.ul
          className="flex flex-col h-full self-center my-auto gap-6 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={item}>
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <h1
                    id="title"
                    className={
                      poppinsExtraLight.className +
                      " text-[64px] cursor-pointer"
                    }
                  >
                    Open To Work
                  </h1>
                </TooltipTrigger>
                <TooltipContent className="flex gap-4 p-4 [&>*]:cursor-pointer">
                  <RiReactjsLine
                    onClick={() => window.open("https://react.dev")}
                    size={50}
                  />
                  <RiNextjsFill
                    onClick={() => window.open("https://nextjs.org/")}
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
            <h2 className="text-xl">FullStack Developer</h2>
          </motion.li>

          <motion.li
            className="relative overflow-hidden p-[5px] rounded-lg"
            variants={item}
          >
            <motion.div
              onMouseMove={(e) => {
                const { left, top } = e.currentTarget.getBoundingClientRect();

                mouseX.set(e.clientX - left);
                mouseY.set(e.clientY - top);
              }}
              className={
                "text-lg flex gap-4 p-4 duration-500 [&>*]:cursor-pointer rounded-md _border-loop after:rounded-md"
              }
              style={{
                background: useMotionTemplate`
              radial-gradient(100px circle at ${mouseX}px ${mouseY}px, rgb(131, 131, 131, 0.25), hsl(var(--background)) 100%)
            `,
              }}
            >
              <span onClick={() => window.open("https://react.dev")}>
                React
              </span>
              <span onClick={() => window.open("https://nextjs.org/")}>
                NextJS
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
                DotNet
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
            </motion.div>
          </motion.li>

          <motion.li variants={item}>
            <div className="flex gap-8">
              <a download href="/cv.pdf">
                <Button className="w-40 btn-hover">Download C.V</Button>
              </a>
              <Button className="w-40 gap-2 btn-hover">
                My Projects <FaArrowRight />
              </Button>
            </div>
          </motion.li>

          <motion.li variants={item}>
            <div className="flex gap-8">
              <a target="_blank" href="https://www.linkedin.com/in/gsampaiowz/">
                <FaLinkedin
                  size={50}
                  className="cursor-pointer rounded-[4px] hover:text-[hsl(var(--background))] hover:bg-[hsl(var(--primary))] transition-colors duration-500"
                />
              </a>
              <a target="_blank" href="https://github.com/gsampaiowz">
                <FaGithub
                  size={50}
                  className="cursor-pointer rounded-full p-1 hover:text-[hsl(var(--background))] hover:bg-[hsl(var(--primary))] transition-colors duration-500"
                />
              </a>
            </div>
          </motion.li>
        </motion.ul>
      </Container>
    </main>
  );
}
