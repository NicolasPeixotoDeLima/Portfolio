import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">Contatos</h1>

      <div className="contact-wrapper">
        {/* Lado esquerdo - Métodos de contato */}
        <div className="contact-left">
          <div className="contact-card">
            <h3 className="gmail">
              <FontAwesomeIcon
                className="google-icon"
                icon={faGoogle}
                style={{ marginRight: "8px", color: "#DB4437" }}
              />
              Email
            </h3>
            <p className="gmail">nicolaspeixoto2003@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3 className="wpp">
              <FontAwesomeIcon
                className="whatsapp-icon"
                icon={faWhatsapp}
                style={{ marginRight: "8px" }}
              />
              WhatsApp
            </h3>
            <p className="wpp">+55 11 94745-7809</p>
            <a
              href="https://wa.me/5511947457809"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-wpp"
            >
              Abrir WhatsApp →
            </a>
          </div>

          <div className="contact-card">
            <h3 className="lkd">
              <FontAwesomeIcon
                className="linkedin-icon"
                icon={faLinkedin}
                style={{ marginRight: "8px" }}
              />
              LinkedIn
            </h3>
            <p className="lkd">Nicolas Peixoto de Lima</p>
            <a
              href="https://www.linkedin.com/in/nicolas-peixoto-de-lima-650a94208/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-lkd"
            >
              Abrir LinkedIn →
            </a>
          </div>
        </div>

        {/* Lado direito - Formulário */}
        <div className="contact-right">
          <form className="contact-form">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Insira seu nome"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Insira seu email"
            />

            <label htmlFor="project">Projeto</label>
            <textarea
              id="project"
              name="project"
              placeholder="Descreva seu projeto"
            ></textarea>

            <button type="submit" className="send-button">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
