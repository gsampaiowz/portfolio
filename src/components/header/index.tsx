import { FaRegMoon } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="w-full h-20 bg-black py-8 px-16">
      <div className="flex flex-row">
        <h1>Gabriel Sampaio</h1>
        <nav>
          <ul className="flex flex-row">
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <FaRegMoon color="white" />
      </div>
    </header>
  );
};
