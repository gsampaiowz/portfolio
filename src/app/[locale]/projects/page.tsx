import Carousel from "@/components/carousel";
import Container from "@/components/container";

export default function Projects() {
  return (
    <Container className="justify-center gap-8">
      <hr className="w-full" />
      <Carousel />
      <hr className="w-full mt-4" />
    </Container>
  );
}
