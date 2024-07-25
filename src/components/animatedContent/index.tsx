"use client";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { poppinsExtraLight } from "@/assets/fonts";
import {
  TooltipTrigger,
  Tooltip,
  TooltipProvider,
  TooltipContent,
} from "../ui/tooltip";
import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { SiCsharp, SiDotnet, SiMicrosoftsqlserver } from "react-icons/si";

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

export const AnimatedContent = ({}) => {
  return (
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
                  poppinsExtraLight.className + " text-[64px] cursor-pointer"
                }
              >
                Open To Work
              </h1>
            </TooltipTrigger>
            <TooltipContent className="flex gap-4 p-4">
              <RiReactjsLine size={50} />
              <RiNextjsFill size={50} />
              <SiCsharp size={50} />
              <SiDotnet size={50} />
              <SiMicrosoftsqlserver size={50} />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.li>
      <motion.li variants={item}>
        <h2 className="text-xl">FullStack Developer</h2>
      </motion.li>

      <motion.li
        className="relative overflow-hidden p-[2px] _border-loop "
        variants={item}
      >
        <div
          className={
            "text-lg flex gap-4 p-4 bg-background duration-500 [&>*]:cursor-pointer"
          }
        >
          <span>React</span>
          <span>NextJS</span>
          <span>C#</span>
          <span>DotNet</span>
          <span>SQL Server</span>
        </div>
      </motion.li>

      <motion.li variants={item}>
        <div className="flex gap-8">
          <a download href="/cv.pdf">
            <Button className="w-40 btn-hover">Download C.V</Button>
          </a>
          <Button className="w-40 gap-2 btn-hover">
            My Projects <FaArrowRight />{" "}
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
  );
};
