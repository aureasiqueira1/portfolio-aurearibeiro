import "./styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

export function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />

      <Card.Body>
        <Card.Title>
          <strong>{props.title}</strong>
        </Card.Title>

        <Card.Text style={{ fontSize: "18px" }}>{props.description}</Card.Text>

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
