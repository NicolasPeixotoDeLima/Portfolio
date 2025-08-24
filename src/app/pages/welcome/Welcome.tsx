import "./Welcome.css";

export const Welcome = () => {
  return (
    <div className="welcomeSection" id="welcome">
      <h1 className="nameAbout">Nicolas Peixoto de Lima</h1>
      <h1 className="role">Desenvolvedor de Software Front-End</h1>
      <h2 className="firstImpression">
        Desenvolvedor baseado em São Caetano do Sul, Brasil. Especializado em
        design de interfaces, desenvolvimento e manutenção de aplicações web e
        mobile. teste
      </h2>

      <a href="./dist/docs/Curriculum Vitae Nicolas Peixoto.pdf" download>
        <button className="curriculum">📄 Baixar Currículo</button>
      </a>
    </div>
  );
};
