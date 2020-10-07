import React from "react";
import { Container } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <Container id="contact" fluid>
      <div>
        <a href="https://github.com/Mandeep-Sai" target="_blank">
          <AiFillGithub />
        </a>
        <a href="">
          <AiFillLinkedin />
        </a>
        <a href="">
          <SiGmail />
        </a>
      </div>
    </Container>
  );
}
