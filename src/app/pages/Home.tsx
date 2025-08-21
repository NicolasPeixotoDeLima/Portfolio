import "./Home.css";
import { Header } from "./header/Header";
import { Welcome } from "./welcome/Welcome";
import { Experiences } from "./experiences/Experiences";
import { Skills } from "./skills/Skills";
import { About } from "./about/About";
import { Contact } from "./contact/Contact";

export const Home = () => {
  return [
    <>
      <Header />
      <Welcome />
      <Experiences />
      <Skills />
      <About />
      <Contact />
    </>,
  ];
};
