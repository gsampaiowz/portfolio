import Container from "@/components/container";
import skills from "@/data/skills";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export default function Skills({
  params: { locale },
}: {
  params: { locale: string };
}) {
  //STATIC RENDERING
  unstable_setRequestLocale(locale);
  return (
    <Container className="justify-center items-center gap-8">
      {skills.map((group, index) => (
        <React.Fragment key={index}>
          <div className="flex gap-6 [&>*]:size-24 flex-wrap items-center justify-center">
            {group.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col gap-2 text-center items-center duration-300 hover:opacity-50 justify-center"
              >
                {item.icon}
                <small>{item.name}</small>
              </div>
            ))}
          </div>
          {index < skills.length - 1 && (
            <hr className="w-full border-primary opacity-25" />
          )}
        </React.Fragment>
      ))}
    </Container>
  );
}
