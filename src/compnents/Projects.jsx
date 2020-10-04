import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Projects() {
  return (
    <Container id="projects">
      <p>My Projects</p>
      <Row>
        <Col>
          <div>
            <img
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
              alt=""
            />
            <div id="details">
              <p>Twitter Clone</p>
              <div>
                <p>Live Demo</p>
                <p>Frontend Code</p>
                <p>Backend Code</p>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <img
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
              alt=""
            />
          </div>
        </Col>
        <Col>
          <div>
            <img
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
              alt=""
            />
          </div>
        </Col>
        <Col>
          <div>
            <img
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
