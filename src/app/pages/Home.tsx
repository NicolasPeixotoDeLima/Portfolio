import "./Home.css";
import { Header } from "./header/Header";
import { Welcome } from "./welcome/Welcome";
import { Experiences } from "./experiences/Experiences";
import { Skills } from "./skills/Skills";

export const Home = () => {
  return [
    <>
      <Header />
      <Welcome />
      <Experiences />
      <Skills />
    </>,
  ];
};
