import "./styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";

export function ProjectCard(props) {
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
            <Col md={4}>
              {props?.tecnology?.split(",")[0] && (
                <div className="label">{props?.tecnology?.split(",")[0]}</div>
              )}
            </Col>

            <Col md={4}>
              {props?.tecnology?.split(",")[1] && (
                <div className="label">{props?.tecnology?.split(",")[1]}</div>
              )}
            </Col>

            <Col md={4}>
              {props?.tecnology?.split(",")[2] && (
                <div className="label">{props?.tecnology?.split(",")[2]}</div>
              )}
            </Col>

            <Col md={4}>
              {props?.tecnology?.split(",")[3] && (
                <div className="label">{props?.tecnology?.split(",")[3]}</div>
              )}
            </Col>

            <Col md={4}>
              {props?.tecnology?.split(",")[4] && (
                <div className="label">{props?.tecnology?.split(",")[4]}</div>
              )}
            </Col>

            <Col md={4}>
              {props?.tecnology?.split(",")[5] && (
                <div className="label">{props?.tecnology?.split(",")[5]}</div>
              )}
            </Col>

            <Col md={4}>
              {props?.tecnology?.split(",")[6] && (
                <div className="label">{props?.tecnology?.split(",")[6]}</div>
              )}
            </Col>

            <Col md={4}>
              {props?.tecnology?.split(",")[7] && (
                <div className="label">{props?.tecnology?.split(",")[7]}</div>
              )}
            </Col>

            <Col md={4}>
              {props?.tecnology?.split(",")[8] && (
                <div className="label">{props?.tecnology?.split(",")[8]}</div>
              )}
            </Col>

            <Col md={4}>
              {props?.tecnology?.split(",")[9] && (
                <div className="label">{props?.tecnology?.split(",")[9]}</div>
              )}
            </Col>

            <Col md={4}>
              {props?.tecnology?.split(",")[10] && (
                <div className="label">{props?.tecnology?.split(",")[10]}</div>
              )}
            </Col>
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
