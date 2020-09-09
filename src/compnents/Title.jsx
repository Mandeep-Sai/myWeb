import React, { Component } from "react";
import "./styles/title.css";
import Typing from "react-typing-animation";
const textArray = ["hey", "Developer", "Swimmer"];
class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textIndex: 0,
    };
  }
  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIndex;
      this.setState({ textIndex: currentIdx + 1 });
    }, 1500);
  }

  render() {
    let textThatChanges = textArray[this.state.textIndex % textArray.length];

    return (
      <div className="Title">
        <div className="Title__titleWrapper">
          <div className="Title__introduction">hey! I am</div>
          <div className="Title__mainTitle">Ronaldo Fredrickson</div>
          <div className="Title__profession">
            I'm a{" "}
            <div className="Title__dynamicProfession">
              <Typing>
                <span>{textThatChanges}</span>
                <Typing.Backspace count={20} />
              </Typing>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
