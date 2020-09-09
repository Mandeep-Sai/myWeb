import React, { Component } from "react";
import "./styles/title.css";
import Typewriter from "typewriter-effect";
const textArray = ["Developer", "Swimmer"];
class Title extends Component {
  render() {
    return (
      <div className="Title">
        <div className="Title__titleWrapper">
          <div className="Title__introduction">hey! We are</div>
          <div className="Title__mainTitle">Nathalie and Mandeep</div>
          <div className="Title__profession">
            I'm a&nbsp;
            <div className="Title__dynamicProfession">
              <Typewriter
                options={{
                  strings: ["Developer", "Swimmer"],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* <Typing.Backspace count={20} />
                <Typing.Delay ms={1000} /> */}
              {/* </Typing> */}
            </div>
          </div>
          <div id="rhombus">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
