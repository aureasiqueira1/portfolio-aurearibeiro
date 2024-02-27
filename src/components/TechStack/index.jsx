import { Col, Row } from "react-bootstrap";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiJest,
  SiFigma,
  SiNodedotjs,
  SiBootstrap,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";

export function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiReact />
          <p>React</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
          <p>NextJS</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
          <p>TypeScript</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiJest />
          <p>Jest</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiStyledcomponents />
          <p>CSS-in-JS</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiTailwindcss />
          <p>Tailwind</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiBootstrap />
          <p>Bootstrap</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiNodedotjs />
          <p>NodeJS</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
          <p>Git</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFigma />
          <p>Figma</p>
        </Col>
      </Row>
    </>
  );
}
