import "./Home.css";
import { Header } from "./header/Header";
import { Welcome } from "./welcome/Welcome";
import { Experiences } from "./experiences/Experiences";

export const Home = () => {
  return [
    <>
      <Header />
      <Welcome />
      <Experiences />
    </>,
  ];
};
