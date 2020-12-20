import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/Badge";
import { FaGithub } from "react-icons/fa";
import projects from "./content/projects.json";
import "./styles/Projects.scss";

const Projects = () => {
  return (
    <section id="projects">
      <Container fluid>
        <h1>
          Projects <hr />
        </h1>

        <Row className="project-row">
          {projects.projects.map((project) => (
            <Col lg="4" md="6">
              <Card>
                <Card.Header>
                  <h4>{project.title}</h4>
                </Card.Header>

                <Card.Body>
                  {project.skills.map((skill) => (
                    <Badge pill variant="primary">
                      {skill}
                    </Badge>
                  ))}

                  <ul>
                    {project.bullets.map((bullet) => (
                      <li>{bullet}</li>
                    ))}
                  </ul>

                  {project.githubLinks.map((ghLink) => (
                    <a href={ghLink}>
                      <FaGithub />
                    </a>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
