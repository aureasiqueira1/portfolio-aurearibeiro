import "./styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";

export function ProjectCard(props) {
  const labels = props?.tecnology?.split(", ");

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />

      <Card.Body>
        <Card.Title>
          <strong>{props.title}</strong>
        </Card.Title>

        <Card.Text style={{ fontSize: "18px" }}>{props.description}</Card.Text>

        <div className="labelGroup">
          <Row
            style={{
              justifyContent: "center",
              paddingBottom: "10px",
            }}
          >
            {labels.map((label) => (
              <Col md={4}>
                <div className="label">{label}</div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="buttonProject">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10%" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
