import "./About.css";

export const About = () => {
  return (
    <>
      <div className="abtContainer" id="about">
        <h1 className="abtTitle">Sobre Mim</h1>
        <div className="about">
          <div className="abtText">
            Olá, sou Nicolas Peixoto de Lima, desenvolvedor web e mobile
            apaixonado por criar experiências digitais intuitivas e impactantes.
            Com sólida experiência em tecnologias front-end como HTML, CSS,
            JavaScript, React e TypeScript, além de domínio em plataformas
            low-code como Mendix, atuo na interseção entre criatividade e
            funcionalidade. Ao longo da minha trajetória, venho aperfeiçoando
            minha habilidade de transformar ideias em soluções digitais
            robustas, seguras e escaláveis. Meus projetos vão desde aplicações
            móveis inovadoras até interfaces web responsivas, sempre com foco na
            performance, na usabilidade e na experiência do usuário. Acredito
            que tecnologia bem aplicada não apenas resolve problemas, mas também
            encanta. E é exatamente isso que busco em cada linha de código que
            escrevo.
          </div>
          <img src="/src/images/perfil.jpg" className="abtPic" />
        </div>
      </div>
    </>
  );
};
