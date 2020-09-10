import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./styles/about.css";
import AboutDetails from "./AboutDetails";

function About() {
  return (
    <Container className="About">
      <Row xs={1} md={2}>
        <Col style={{ paddingRight: "0px" }}>
          <img src="/personalProfile.jpg" style={{ width: "100%" }} />
        </Col>
        <Col>
          <div className="About__wrapper">
            <h2 className="About__header">About Me</h2>
            <div className="About__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus adipisci sunt unde.
            </div>
            <AboutDetails />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
