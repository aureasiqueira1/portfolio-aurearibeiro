import "./styles.css";
import contact from "../../assets/img/contact.png";
import outlook from "../../assets/img/outlook.png";
import linkedin from "../../assets/img/linkedin.png";
import github from "../../assets/img/github.png";

export function Footer() {
  return (
    <footer>
      <div id="contato" className="contact">
        <figure>
          <img src={contact} alt="Contate-me" />
        </figure>

        <div className="infoContact">
          <h1>Contatos</h1>
          <div className="infoDetails">
            <div className="gmail">
              <a href="mailto:aurea@gec.inatel.br">
                <img src={outlook} alt="Gmail" />
                <p>aurea@gec.inatel.br</p>
              </a>
            </div>

            <div className="linkedin">
              <a href="https://www.linkedin.com/in/aureasiqueira/">
                <img src={linkedin} alt="Linkedin" />
                <p>Áurea Ribeiro</p>
              </a>
            </div>

            <div className="github">
              <a href="https://github.com/aureasiqueira1">
                <img src={github} alt="GitHub" />
                <p>@aureasiqueira1</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
