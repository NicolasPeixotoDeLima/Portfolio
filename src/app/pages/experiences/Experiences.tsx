import "./Experiences.css";

export const Experiences = () => {
  return (
    <section className="experiences-container" id="experiences">
      <h1 className="experiencesTitle">Experiências</h1>

      <div className="experience-item">
        <h3 className="expRole">Desenvolvedor Low-Code MENDIX</h3>
        <div className="expDetails">
          <p className="expDuration">Fundação Ezute - SPTrans</p>
          <p className="expDuration">Novembro/2023</p>
        </div>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>
            Atuação no desenvolvimento e manutenção de sistemas de bilhetagem
            digital utilizando a plataforma Mendix.
          </li>
          <li>
            Integração de novos módulos e funcionalidades para melhorar a
            experiência do usuário no sistema de transporte público de São
            Paulo.
          </li>
          <li>
            Colaboração com a equipe técnica para identificar e corrigir bugs,
            além de implementar melhorias contínuas no sistema.
          </li>
          <li>
            Contribuição no processo de automação e simplificação dos fluxos de
            trabalho na bilhetagem digital.
          </li>
        </ul>
      </div>
    </section>
  );
};
