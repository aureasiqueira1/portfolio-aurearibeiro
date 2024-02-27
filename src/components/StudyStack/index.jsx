import { Col, Row } from "react-bootstrap";
import { SiMongodb, SiStorybook, SiNestjs, SiPostgresql } from "react-icons/si";

export function StudyStack() {
  return (
    <Row
      style={{
        justifyContent: "center",
      }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
        <p>NestJS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p>PostgreSQL</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p>MongoDB</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiStorybook />
        <p>Storybook</p>
      </Col>
    </Row>
  );
}
