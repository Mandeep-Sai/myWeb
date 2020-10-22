import React from "react";
import { Container } from "react-bootstrap";
import { FaUniversity } from "react-icons/fa";

import Bounce from "react-reveal/Bounce";

export default function Education() {
  return (
    <Container className="mt-5 mb-5" id="education">
      <p>Education</p>
      <Bounce left>
        <div>
          <div>
            <FaUniversity />
          </div>
          <div id="details">
            <p>2020-present</p>
            <p>Fullstack Web Development</p>
            <p>Strive school</p>
            <p>
            Acquired advanced skills in Javascript and also basics of Typescript.
Built  a few frontend websites with help of REST API's.
Got familiar with Code Review and PairProgramming while building few team projects.
            </p>
          </div>
        </div>
      </Bounce>
      <hr style={{ marginLeft: "10%" }} />
      <Bounce left delay={300}>
        <div>
          <div>
            <FaUniversity />
          </div>
          <div id="details">
            <p>2018-present</p>
            <p>Masters's in Computational Methods in Engineering</p>
            <p>Leibniz University</p>
            <p>
            Fluid flow analysis using Matlab.
Material Simulation of composite and fibres using ANSYS.
Risk and reliability analysis of transmission shaft using Matlab.
            </p>
          </div>
        </div>
      </Bounce>
      <hr style={{ marginLeft: "10%" }} />
      <Bounce left delay={500}>
        <div>
          <div>
            <FaUniversity />
          </div>
          <div id="details">
            <p>2013-2017</p>
            <p>Bachelor's in Mechanical Engineering</p>
            <p>Lovely Professional University</p>
            <p>
            Acquired basic knowledge in C,C++,SQL database.
Participated in HVC challenge which involves building a Go-Kart in Team.
            </p>
          </div>
        </div>
      </Bounce>
    </Container>
  );
}
