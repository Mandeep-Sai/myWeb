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
        <a style={{color:"white",marginTop:"10px",fontSize:"20px"}} >
          bandimandeep7@gmail.com
        </a>
        <a href="www.linkedin.com/in/mandeep-sai">
          <AiFillLinkedin />
        </a>
        
      </div>
    </Container>
  );
}
