import "./styles.css";
import { Container } from "react-bootstrap";
import { Techstack } from "../../components/TechStack";
import { StudyStack } from "../../components/StudyStack";

export function Skills() {
  return (
    <>
      <section id="skills-section">
        <Container fluid className="skills-section">
          <Container>
            <section id="habilidades">
              <h1 className="skills-heading">
                <strong>HABILIDADES</strong>
              </h1>
              <Techstack />
            </section>
            <section id="estudos">
              <h1 className="skills-heading">
                <strong>ESTUDANDO</strong>
              </h1>
              <StudyStack />
            </section>
          </Container>
        </Container>
      </section>
    </>
  );
}
