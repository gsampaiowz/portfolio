"use client";
import BgCircle from "@/components/bgcircle";
import Container from "@/components/container";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "@/components/button";
import { BriefcaseBusiness, Download, Mail } from "lucide-react";
import HomeTechs from "@/components/homeTechs";
import { useTranslations } from "next-intl";

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

  const t = useTranslations("HomePage");

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
          <motion.li
            className="flex flex-col items-center gap-2"
            variants={item}
          >
            <h1 className="text-2xl text-center hover-title  pb-1">
              Gabriel Sampaio
            </h1>
            <hr className="hidden w-full xs:block" />
            <h1 className="text-[64px] md:text-[48px] xs:text-3xl xs:font-bold text-center leading-none">
              {t("title")}
            </h1>
            <hr className="hidden w-full xs:block" />
          </motion.li>

          <motion.li variants={item} className="flex gap-4 items-center">
            <h2 className="text-2xl">Open to Work</h2>
            <BriefcaseBusiness size={24} />
          </motion.li>

          <motion.li
            className="xs:hidden relative overflow-hidden p-[5px] rounded-lg"
            variants={item}
          >
            <HomeTechs />
          </motion.li>

          <motion.li variants={item}>
            <div className="flex flex-wrap justify-center gap-8">
              <a download href="/cv.pdf">
                <Button
                  text="Download C.V"
                  icon={<Download size={20} />}
                  additionalClass="w-44"
                />
              </a>
              <a href="mailto:gabrielsampaio1216@gmail.com">
                <Button
                  text="Contact Me"
                  icon={<Mail size={20} />}
                  additionalClass="w-44"
                />
              </a>
              <Button
                text="My Projects"
                link="/projects"
                icon={<FaArrowRight />}
                additionalClass="w-44 group hover:pr-6"
              />
            </div>
          </motion.li>

          <motion.li variants={item}>
            <div className="flex gap-8 *:cursor-pointer">
              <FaLinkedin
                onClick={() =>
                  window.open("https://www.linkedin.com/in/gsampaiowz/")
                }
                size={50}
                className="duration-300 text-primary rounded-[4px] hover:opacity-50 "
              />
              <FaGithub
                onClick={() => window.open("https://github.com/gsampaiowz")}
                size={50}
                className="duration-300 text-primary rounded-full p-1 hover:opacity-50 "
              />
            </div>
          </motion.li>
        </motion.ul>
      </Container>
    </>
  );
}
