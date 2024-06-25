import { BgCircle } from "@/components/bgcircle";
import { Header } from "./../components/header/index";
import { Container } from "./../components/container/index";
import { Footer } from "./../components/footer/index";
import { AnimatedContent } from "./../components/animatedContent/index";

export default function Home() {
  return (
    <main>
      <BgCircle />
      <Header />
      <Container>
          <AnimatedContent />
      </Container>
      <Footer />
    </main>
  );
}
