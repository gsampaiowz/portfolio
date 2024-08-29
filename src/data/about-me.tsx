import { HiPencilAlt } from "react-icons/hi";
import { GiDiploma, GiLifeBar } from "react-icons/gi";
import { FaLaptopCode, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";

const aboutMe = [
  {
    icon: <HiPencilAlt size={20} />,
    label: "Nome",
    value: "Gabriel Oliveira Sampaio",
  },
  {
    icon: <GiLifeBar size={20} />,
    label: "Idade",
    value: new Date().getFullYear() - 2005 + " anos",
  },
  {
    icon: <FaLaptopCode size={20} />,
    label: "Cursando",
    value: "Técnico em Desenvolvimento de Sistemas - Senai Paulo Antonio Skaf",
  },
  {
    icon: <GiDiploma size={20} />,
    label: "Diploma",
    value: (
      <span>
        Técnico em Informática para Internet - Etec Profª Maria Cristina
        Medeiros -{" "}
        <a
          href="https://drive.google.com/file/d/104QQ4QIJNlCHmR5BBQjQh4HsfJf6TLXN/view?usp=sharing"
          target="_blank"
          className="underline"
        >
          Ver Diploma
        </a>
      </span>
    ),
  },
  {
    icon: <MdOutlineWorkHistory size={20} />,
    label: "Experiência",
    value: "PJ - Desenvolvedor FullStack - PHP, WordPress, React, APIs, Excel",
  },
  {
    icon: <FaMapMarkerAlt size={20} />,
    label: "Localidade",
    value: "São Paulo",
  },
];

export default aboutMe;
