import { Col, Row } from "react-bootstrap";
import {
  SiMongodb,
  SiBootstrap,
  SiTailwindcss,
  SiStorybook,
  SiStrapi,
} from "react-icons/si";

export function StudyStack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "60px",
      }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p>MongoDB</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p>Bootstrap</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p>Tailwind</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiStorybook />
        <p>Storybook</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiStrapi />
        <p>Strapi</p>
      </Col>
    </Row>
  );
}
