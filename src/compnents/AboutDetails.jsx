import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/about.css";
import CountUp from "react-countup";
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
            <div className="AboutDetails__info">Nathalie</div>
            <div className="AboutDetails__info">27/07/1996</div>
            <div className="AboutDetails__info">Alicante, Spain</div>
            <div className="AboutDetails__info">03010</div>
            <div className="AboutDetails__info">nathaliemekahal@gmail.com</div>
            <div className="AboutDetails__info">+34665190507</div>
          </Col>
          <div className="AboutDetails__projectsNb">
            <span>
              <CountUp start={0} end={100} duration={7} />
            </span>{" "}
            Projects Complete
          </div>
        </Row>
      </Container>
    );
  }
}

export default AboutDetails;
