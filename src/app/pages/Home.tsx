import "./Home.css";
import { Header } from "./header/Header";
import { Welcome } from "./welcome/Welcome";

export const Home = () => {
  return [
    <>
      <Header />
      <Welcome />
    </>,
  ];
};
