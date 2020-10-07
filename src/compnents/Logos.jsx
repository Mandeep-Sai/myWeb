import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";

import Fade from "react-reveal/Fade";

export default function Logos() {
  return (
    <Container id="logos" fluid>
      <p>Technical Skills</p>
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
        <Fade bottom delay={1100}>
          <Col>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
              alt=""
            />
          </Col>
        </Fade>
        <Fade bottom delay={1200}>
          <Col>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </Col>
        </Fade>
      </Row>
    </Container>
  );
}
