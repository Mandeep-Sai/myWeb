import React from "react";
import { Container } from "react-bootstrap";
import { FaUniversity } from "react-icons/fa";

import Bounce from "react-reveal/Bounce";

export default function Education() {
  return (
    <Container className="mt-5" id="education">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              dolorum magnam officiis asperiores veritatis voluptas, aspernatur,
              architecto nemo ullam iusto, consequatur animi facere inventore
              unde laborum qui nesciunt repellendus illo.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              nisi ad officiis cum, perferendis optio. Totam aliquid dolorem
              quis vel est. Ea deleniti, quo placeat nam modi laudantium
              explicabo temporibus!
            </p>
          </div>
        </div>
      </Bounce>
      <hr style={{ marginLeft: "10%" }} />
    </Container>
  );
}
