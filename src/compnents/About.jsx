import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./styles/about.css";
import AboutDetails from "./AboutDetails";
import CountUp from "react-countup";
function About() {
  return (
    <Container className="About">
      <Row xs={1} md={2}>
        <Col style={{ paddingRight: "0px" }}>
          <img
            src="/"
            style={{ width: "100%", height: "100%" }}
          />
        </Col>
        <Col>
          <div className="About__wrapper">
            <h2 className="About__header">About Me</h2>
            <div className="About__description">
            A student in computational engineering, with great passion building websites from scratch.I started learning Fullstack development recently with a 6 months intensive program and I feel ready to kickstart my career as web developer and follow my dream.
            </div>
            <AboutDetails />
            <Button>Download CV</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
