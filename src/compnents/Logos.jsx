import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";

import Fade from "react-reveal/Fade";

export default function Logos() {
  return (
    <Container id="logos" fluid>
      <Row className="">
        <Fade bottom>
          <Col>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
              alt=""
            />
          </Col>
        </Fade>
        <Fade bottom delay={200}>
          <Col>
            <img
              src="https://iconape.com/wp-content/files/fe/83764/png/nodejs-1.png"
              alt=""
            />
          </Col>
        </Fade>
        <Fade bottom delay={300}>
          <Col>
            <img
              src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
              alt=""
            />
          </Col>
        </Fade>
        <Fade bottom delay={400}>
          <Col>
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png"
              alt=""
            />
          </Col>
        </Fade>
        <Fade bottom delay={500}>
          <Col>
            <img
              src="https://cdn.freebiesupply.com/logos/thumbs/2x/git-logo.png"
              alt=""
            />
          </Col>
        </Fade>
        <Fade bottom delay={600}>
          <Col>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png"
              alt=""
            />
          </Col>
        </Fade>
        <Fade bottom delay={700}>
          <Col>
            <img
              style={{
                height: "120px",
                marginTop: "40px",
                objectFit: "contain",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
          </Col>
        </Fade>
        <Fade bottom delay={800}>
          <Col>
            <img
              style={{
                height: "120px",
                marginTop: "40px",
                objectFit: "contain",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              alt=""
            />
          </Col>
        </Fade>
        <Fade bottom delay={900}>
          <Col>
            <img
              style={{
                height: "120px",
                marginTop: "40px",
                objectFit: "contain",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png"
              alt=""
            />
          </Col>
        </Fade>
        <Fade bottom delay={1000}>
          <Col>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png"
              alt=""
            />
          </Col>
        </Fade>
      </Row>
    </Container>
  );
}
