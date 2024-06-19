import { Header } from "./../components/header/index";

export default function Home() {
  return (
    <main>
      <div className="border-[10px] w-[30vw] h-[30vw] absolute top-[calc(50%-15vw)] left-[calc(50%-15vw)] rounded-full blur-md"></div>
      <Header />
    </main>
  );
}
