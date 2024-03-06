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
import cep from "../../assets/img/cep.png";
import mobile from "../../assets/img/mobile.png";
import cook from "../../assets/img/cookApp.png";
import goals from "../../assets/img/mygoals.png";

export function Projects() {
  function handleCarouselMove(positive) {
    const carousel = document.querySelector(".carousel-container");
    const slide = document.querySelector(".carousel-slide");

    if (slide) {
      const slideWidth = slide.clientWidth;

      if (carousel) {
        carousel.scrollLeft = positive
          ? carousel.scrollLeft + slideWidth
          : carousel.scrollLeft - slideWidth;
      }
    }
  } 

  return (
    <>
      <section id="projetos" className="projects">
        <strong>PROJETOS</strong>
      </section>

      <section id="projects-section">
        <Container fluid className="project-section">
          <Container>
          <button
            className="carousel-arrow carousel-arrow--prev"
             onClick={() => handleCarouselMove(false)}
          >
            &#8249;
          </button>

          <button
            className="carousel-arrow carousel-arrow--next"
            onClick={() => handleCarouselMove(true)}
          >
            &#8250;
  </button> 

           <div className="carousel-container" dir="ltr"> 

           <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={kanban}
                  title="Agenda - Kanban"
                  description="Aplicação para gerenciar tarefas de forma simpls e fácil, seja ela qual for. Inspirado no Kanban."
                  ghLink="https://github.com/aureasiqueira1/ProjectSchedule"
                  demoLink="https://project-schedule-neon.vercel.app/"
                  tecnology="React, JavaScript, CSS, PostgreSQL, Express, TypeORM"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={veículos}
                  title="Veículos"
                  description="Aplicação para gerenciar carros. Permite cadastrar, editar, excluir e pesquisar um carro e simular score do usuário."
                  ghLink="https://github.com/aureasiqueira1/oncar-app"
                  demoLink="https://front-oncar.vercel.app/"
                  tecnology="React, TypeScript, Styled Components, NestJs, TypeORM, PostgreSQL"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={clientlist}
                  title="Lista de Clientes"
                  description="Aplicação para gerenciar clientes. Permite cadastrar, editar, apagar cliente e classificá-lo como Vip ou Premium "
                  ghLink="https://github.com/aureasiqueira1/client-list"
                  demoLink="https://client-list-one.vercel.app/"
                  tecnology="React, TypeScript, Styled Components, NestJs, TypeORM, PostgreSQL, Swagger"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={financeiro}
                  title="Sistema Financeiro"
                  description="Aplicação de um Sistema Financeiro para controlar os gastos. Permite adicionar saldos positivos e negativos."
                  ghLink="https://github.com/aureasiqueira1/App-financeiro"
                  demoLink="https://app-financeiro-nu.vercel.app/"
                  tecnology="React, TypeScript, Styled Components"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={metaverso}
                  title="Metaverso App"
                  description="Aplicação de uma tela que permite maximizar tela, minimizar tela, fechar tela e minimizar menu."
                  ghLink="https://github.com/aureasiqueira1/metaverso-app"
                  demoLink="https://metaverso-app.vercel.app/"
                  tecnology="NextJS, TypeScript, Styled Components"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={shoppingcart}
                  title="E-Commerce"
                  description="Aplicação de um E-Commerce que contém sistema de cadastro, login, carrinho de compras e favoritos."
                  ghLink="https://github.com/aureasiqueira1/Shopping"
                  demoLink="https://shopping-umber.vercel.app/"
                  tecnology="React, JavaScript, CSS3, HTML5, API Lorem Picsum"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={audio}
                  title="Notas"
                  description="Aplicação que grava notas utilizando áudio ou texto"
                  ghLink="https://github.com/aureasiqueira1/audio-text"
                  demoLink="https://audio-text-ruby.vercel.app/"
                  tecnology="NextJs, TypeScript, Tailwind, Speech Recognition API"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={cep}
                  title="Cep"
                  description="Aplicação que pesquisa um cep e retorna o endereço completo"
                  ghLink="https://github.com/aureasiqueira1/cep"
                  demoLink="https://cep-taupe.vercel.app/"
                  tecnology="NextJs, TypeScript, Tailwind, Jest, Storybook, API ViaCep"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={quiz}
                  title="Quiz"
                  description="Aplicação de um quiz com 5 perguntas de verdadeiro ou falso que englobam conhecimentos da disciplina de engenharia de software, foi desenvolvido em flutter utilizando o dart como linguagem."
                  ghLink="https://github.com/aureasiqueira1/AppQuiz"
                  demoLink="https://aureasiqueira1.github.io/AppQuiz/#/"
                  tecnology="Flutter, Dart, Mockito"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={marvel}
                  title="Marvel"
                  description="Aplicação sobre a Marvel, composto por três telas: Personagens, Filmes e HQs. Aqui, é possível acessar informações detalhadas de cada seção ao clicar nelas, além de um carrossel que permite visualizar mais cards ao ser clicado."
                  ghLink="https://github.com/aureasiqueira1/marvel"
                  demoLink="https://marvel-three-sandy.vercel.app/"
                  tecnology="NextJs, TypeScript, Styled Components"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={spotify}
                  title="Spotify"
                  description="Landing page do Spotify"
                  ghLink="https://github.com/aureasiqueira1/landing-page-spotify"
                  demoLink="https://landing-page-spotify-eight.vercel.app/"
                  tecnology="CSS, HTML, Figma"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={githubsearch}
                  title="Pesquisa de Repositórios"
                  description="Aplicação que faz buscas de repositórios no github pesquisando usuário/repositório e exibe as informações básicas no front-end."
                  ghLink="https://github.com/aureasiqueira1/FrontEndDesafio"
                  demoLink="https://front-end-desafio-eight.vercel.app/"
                  tecnology="React, TypeScript, Styled Components"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  imgPath={mobile}
                  title="Lanchonete"
                  description="Aplicativo de uma lanchonete que permite adicionar ao carrinho, remover do carrinho e enviar pedido."
                  ghLink="https://github.com/aureasiqueira1/hamburguer-delivery"
                  tecnology="React Native, Expo, Tailwind"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  className="mobile"
                  imgPath={cook}
                  title="Cook App"
                  description="Aplicação que sugere receitas conforme os ingredientes selecionados"
                  ghLink="https://github.com/aureasiqueira1/cook-app"
                  tecnology="React Native, Expo, Expo router, Supabase, React Native reanimated"
                />
              </Col>

              <Col md={4} className="project-card carousel-slide">
                <ProjectCard
                  className="mobile"
                  imgPath={goals}
                  title="My Goals"
                  description="App de metas financeiras pessoal"
                  ghLink="https://github.com/aureasiqueira1/MyGoals"
                  tecnology="React Native, Typescript, Expo, Expo router, NativeWind, Tailwindcss, SQLite"
                />
              </Col>
            </div> 

  
          </Container>

 
        </Container>
      </section>
    </>
  );
}
