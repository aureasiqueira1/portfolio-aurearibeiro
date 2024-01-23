import { Col, Row } from "react-bootstrap";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiJest,
  SiFigma,
  SiNodedotjs,
} from "react-icons/si";

export function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 />
          <p>HTML5</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 />
          <p>CSS3</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript />
          <p>JavaScript</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
          <p>TypeScript</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiReact />
          <p>React</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
          <p>NextJS</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiJest />
          <p>Jest</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiFigma />
          <p>Figma</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiNodedotjs />
          <p>NodeJS</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
          <p>Git</p>
        </Col>
      </Row>
    </>
  );
}
