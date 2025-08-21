import "./Skills.css";

export const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h1 className="skillsTitle">Habilidades</h1>

      <ul className="skills-list">
        <li>
          <div style={{ marginBottom: "16px", fontWeight: "bold" }}>
            Desenvolvimento:
          </div>
          <ul className="tech-sublist">
            <li>Python</li>
            <li>MENDIX</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
          </ul>
        </li>
        <li>Scrum / Kanban</li>
        <li>Metodologias Ágeis</li>
        <li>Resolução de problemas</li>
        <li>Trabalho em equipe</li>
        <li>Aprendizado rápido</li>
        <li>Comunicação</li>
        <li>Autonomia</li>
        <li>Adaptabilidade</li>
        <li>Inglês Técnico</li>
      </ul>
    </section>
  );
};
