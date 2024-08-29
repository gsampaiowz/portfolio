import Container from "@/components/container";
import Image from "next/image";
import perfil from "@/assets/img/eu.jpg";
import aboutMe from "@/data/about-me";
import React from "react";

export default function Me() {
  return (
    <Container className="items-center justify-center flex-row gap-6">
      <Image
        width={250}
        quality={100}
        height={250}
        src={perfil.src}
        className="aspect-square grayscale-[75%] object-cover rounded-full border-primary border-2"
        alt="Foto Perfil Gabriel Sampaio"
      />
      <div className="flex flex-col gap-2">
        {aboutMe.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex gap-2 [&>*]:min-w-5">
              {item.icon}
              <p className="w-full">
                {item.label}: {item.value}
              </p>
            </div>
            <hr className="w-full border-primary opacity-25" />
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
}
