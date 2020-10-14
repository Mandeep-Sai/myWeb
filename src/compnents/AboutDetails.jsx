import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/about.css";
import CountUp from "react-countup";
import "./../../node_modules/animate.css/animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import Zoom from "react-reveal/Zoom";
class AboutDetails extends Component {
  render() {
    return (
      <Container className="AboutDetails">
        <Row xs={2}>
          <Col xs={4} style={{ paddingLeft: "0px" }}>
            <div className="AboutDetails__list">Name:</div>
            <div className="AboutDetails__list">Date of birth:</div>
            <div className="AboutDetails__list">Address:</div>
            <div className="AboutDetails__list">Zip code:</div>
            <div className="AboutDetails__list">Email:</div>
            <div className="AboutDetails__list">Phone:</div>
          </Col>
          <Col xs={8}>
            <div className="AboutDetails__info">Mandeep</div>
            <div className="AboutDetails__info">15/08/1996</div>
            <div className="AboutDetails__info">Hannover, Germany</div>
            <div className="AboutDetails__info">30419</div>
            <div className="AboutDetails__info">bandimandeep7@gmail.com</div>
            <div className="AboutDetails__info">+49 1794253284</div>
          </Col>
          <div className="AboutDetails__projectsNb">
            <span>
              <CountUp start={0} end={6} duration={1} />
            </span>{" "}
            <Zoom top>Projects Complete</Zoom>
          </div>
        </Row>
      </Container>
    );
  }
}

export default AboutDetails;
