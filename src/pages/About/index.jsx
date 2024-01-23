import "./styles.css";
import { FaReact } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import perfil from "../../assets/img/perfil.png";

import { FaFigma } from "react-icons/fa";
import { GoMortarBoard } from "react-icons/go";

export function About() {
  return (
    <section id="sobre" className="about">
      <div className="aboutMe">
        <figure>
          <img className="foto" src={perfil} alt="Foto de Áurea Ribeiro" />
        </figure>
      </div>

      <div className="txtAboutMe">
        <h1>SOBRE MIM</h1>

        <p>
          <FaReact />
          Desenvolvedora Front-end com experiência em{" "}
          <b>React.js, JavaScript, TypeScript, Styled Components, Jest </b> e
          consumo de <b> APIs REST</b>
          .
          <br />
          <br />
          <IoSettingsOutline />
          Proficiente em projetos gerenciados por <b>Metodologias Ágeis</b>.
          <br />
          <br />
          <FaFigma />
          Habilidade no uso do <b>Figma</b> para criação e manipulação visual,
          incluindo imagens, mock-ups e arte em geral.
          <br />
          <br />
          <GoMortarBoard />
          Formada em <b>Engenharia de Computação</b>.
        </p>
      </div>
    </section>
  );
}
