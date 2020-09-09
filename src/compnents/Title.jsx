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
          <div id="rhombus"></div>
        </div>
      </div>
    );
  }
}

export default Title;
