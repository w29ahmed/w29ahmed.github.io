import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./About.css";

const About = () => {
  return (
    <section id="about">
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={6}>
            <Image className="me-img" src="/img/me.jpg" roundedCircle fluid/>
          </Col>
          <Col lg={6}>
            <h1>Hello! I'm Waleed. An aspiring Software Engineer passionate about Robotics.</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;