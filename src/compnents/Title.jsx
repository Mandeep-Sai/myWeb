import React, { Component } from "react";
import "./styles/title.css";
import Typewriter from "typewriter-effect";
import Reveal from "react-reveal";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

class Title extends Component {
  tryFunc = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div className="Title" onScrollCapture={this.tryFunc}>
        <div className="Title__titleWrapper">
          <RubberBand duration={1000}>
            <div className="Title__introduction">hey! I am</div>
          </RubberBand>

          <Bounce top cascade delay={1000}>
            <div className="Title__mainTitle"> Mandeep</div>
          </Bounce>

          <div className="Title__profession">
            I'm a&nbsp;
            <div className="Title__dynamicProfession">
              <Typewriter
                options={{
                  strings: [
                    "MERN Fullstack Developer.",
                    "React Frontend Developer.",
                    "Swimmer.",
                    "Gamer."
                  ],
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
          <div id="contactIcons">
            <Fade right>
              <a href="https://github.com/Mandeep-Sai" target="_blank">
                {" "}
                <AiFillGithub />
              </a>
            </Fade>
            <Fade right delay={500}>
              <AiFillLinkedin />
            </Fade>
            <Fade right delay={1000}>
              <SiGmail />
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
