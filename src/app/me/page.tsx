import Container from "@/components/container";
import Image from "next/image";
import perfil from "@/assets/img/eu.jpg";

export default function Me() {
  return (
    <Container className="items-center justify-center flex-row gap-6">
      <Image
        width={250}
        quality={100}
        height={250}
        src={perfil.src}
        className="aspect-square object-cover rounded-full border-primary border-2"
        alt="Foto Perfil Gabriel Sampaio"
      />
      <div className="flex flex-col gap-2">
        <p>Nome: Gabriel Oliveira Sampaio</p>
        <hr className="w-full" />
        <p>Idade: 19 anos</p>
        <hr className="w-full" />
        <p>
          Cursando: Técnico em Desenvolvimento de Sistemas - Senai Paulo Antonio
          Skaf
        </p>
        <hr className="w-full" />
        <p>
          Diploma: Técnico em Informática para Internet - Etec Profª Maria
          Cristina Medeiros - {" "}
          <a
            href="https://drive.google.com/file/d/104QQ4QIJNlCHmR5BBQjQh4HsfJf6TLXN/view?usp=sharing"
            target="_blank"
            className="underline"
          >
            Ver Diploma
          </a>
        </p>
        <hr className="w-full" />
        <p>
          Experiência Profissional: PJ - Desenvolvedor FullStack - PHP,
          WordPress, React, APIs, Excel
        </p>
        <hr className="w-full" />
        <p>Localidade: São Paulo</p>
      </div>
    </Container>
  );
}
