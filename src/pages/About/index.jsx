import "./styles.css";
import { FaReact } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import perfil from "../../assets/img/perfil.png";

import { FaFigma } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import { GoMortarBoard } from "react-icons/go";
import pdf from "../../assets/CV/CV-ÁureaRibeiro.pdf";

export function About() {
  const handleDownloadClick = () => {
    // Substitua 'URL_DO_SEU_PDF' pela URL do seu arquivo PDF
    const pdfUrl = pdf;

    // Cria um elemento <a> temporário
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "CV-ÁureaRibeiro.pdf"; // Defina o nome do arquivo como desejar

    // Simula um clique no link para iniciar o download
    link.click();
  };

  return (
    <section id="sobre" className="about">
      <div className="aboutMe">
        <figure>
          <img className="foto" src={perfil} alt="Foto de Áurea Ribeiro" />
        </figure>
        <button onClick={handleDownloadClick} className="download">
          <FiDownload />
          <div>Baixar Currículo</div>
        </button>
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
