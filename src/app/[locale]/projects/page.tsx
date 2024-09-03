import Carousel from "@/components/carousel";
import Container from "@/components/container";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Projects({
  params: { locale },
}: {
  params: { locale: string };
}) {
  //STATIC RENDERING
  unstable_setRequestLocale(locale);
  return (
    <Container className="justify-center gap-8">
      <hr className="w-full" />
      <Carousel />
      <hr className="w-full mt-4" />
    </Container>
  );
}
