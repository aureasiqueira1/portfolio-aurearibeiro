import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "../../components/ProjectCard";
import kanban from "../../assets/img/kanban.png";
import financeiro from "../../assets/img/financeiro.png";
import shoppingcart from "../../assets/img/shoppingcart.png";
import githubsearch from "../../assets/img/githubsearch.png";
import spotify from "../../assets/img/spotify.png";
import quiz from "../../assets/img/quiz.png";
import marvel from "../../assets/img/marvel.png";
import audio from "../../assets/img/audio-text.png";
import metaverso from "../../assets/img/metaverso.png";
import veículos from "../../assets/img/veículos.png";
import clientlist from "../../assets/img/client-list.png";

export function Projects() {
  return (
    <>
      <section id="projetos" className="projects">
        <strong>PROJETOS</strong>
      </section>

      <section id="projects-section">
        <Container fluid className="project-section">
          <Container>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={kanban}
                  isBlog={false}
                  title="Agenda - Kanban"
                  description="Aplicação para gerenciar tarefas de forma simpls e fácil, seja ela qual for. Inspirado no Kanban."
                  ghLink="https://github.com/aureasiqueira1/ProjectSchedule"
                  demoLink="https://project-schedule-neon.vercel.app/"
                />
              </Col>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={veículos}
                  isBlog={false}
                  title="Veículos"
                  description="Aplicação para gerenciar carros. Permite cadastrar, editar, excluir e pesquisar um carro e simular score do usuário."
                  ghLink="https://github.com/aureasiqueira1/oncar-app"
                  demoLink="https://front-oncar.vercel.app/"
                />
              </Col>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={clientlist}
                  isBlog={false}
                  title="Lista de Clientes"
                  description="Aplicação para gerenciar clientes. Permite cadastrar, editar, apagar cliente e classificá-lo como Vip ou Premium "
                  ghLink="https://github.com/aureasiqueira1/client-list"
                  demoLink="https://client-list-one.vercel.app/"
                />
              </Col>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={financeiro}
                  isBlog={false}
                  title="Sistema Financeiro"
                  description="Aplicação de um Sistema Financeiro para controlar os gastos. Permite adicionar saldos positivos e negativos."
                  ghLink="https://github.com/aureasiqueira1/App-financeiro"
                  demoLink="https://app-financeiro-nu.vercel.app/"
                />
              </Col>

              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={metaverso}
                  isBlog={false}
                  title="Metaverso App"
                  description="Aplicação de uma tela que permite maximizar tela, minimizar tela, fechar tela e minimizar menu."
                  ghLink="https://github.com/aureasiqueira1/metaverso-app"
                  demoLink="https://metaverso-app.vercel.app/"
                />
              </Col>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={shoppingcart}
                  isBlog={false}
                  title="E-Commerce"
                  description="Aplicação de um E-Commerce que contém sistema de cadastro, login, carrinho de compras e favoritos."
                  ghLink="https://github.com/aureasiqueira1/Shopping"
                  demoLink="https://shopping-umber.vercel.app/"
                />
              </Col>

              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={spotify}
                  isBlog={false}
                  title="Spotify"
                  description="Landing page do Spotify"
                  ghLink="https://github.com/aureasiqueira1/landing-page-spotify"
                  demoLink="https://landing-page-spotify-eight.vercel.app/"
                />
              </Col>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={quiz}
                  isBlog={false}
                  title="Quiz"
                  description="Aplicação de um quiz com 5 perguntas de verdadeiro ou falso que englobam conhecimentos da disciplina de engenharia de software, foi desenvolvido em flutter utilizando o dart como linguagem."
                  ghLink="https://github.com/aureasiqueira1/AppQuiz"
                  demoLink="https://aureasiqueira1.github.io/AppQuiz/#/"
                />
              </Col>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={marvel}
                  isBlog={false}
                  title="Marvel"
                  description="Aplicação sobre a Marvel, composto por três telas: Personagens, Filmes e HQs. Aqui, é possível acessar informações detalhadas de cada seção ao clicar nelas, além de um carrossel que permite visualizar mais cards ao ser clicado."
                  ghLink="https://github.com/aureasiqueira1/marvel"
                  demoLink="https://marvel-three-sandy.vercel.app/"
                />
              </Col>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={audio}
                  isBlog={false}
                  title="Notas"
                  description="Aplicação que grava notas utilizando áudio ou texto"
                  ghLink="https://github.com/aureasiqueira1/audio-text"
                  demoLink="https://audio-text-ruby.vercel.app/"
                />
              </Col>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={githubsearch}
                  isBlog={false}
                  title="Pesquisa de Repositórios"
                  description="Aplicação que faz buscas de repositórios no github pesquisando usuário/repositório e exibe as informações básicas no front-end."
                  ghLink="https://github.com/aureasiqueira1/FrontEndDesafio"
                  demoLink="https://front-end-desafio-eight.vercel.app/"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
}
