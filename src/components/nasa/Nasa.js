import React from "react";
import { Container } from "react-bootstrap";
import NasaApiDay from "./NasaApiDay";

import "./Nasa.css";

const Nasa = () => {
  document.body.style.cssText = `background: url("backgroundNasa.jpg") no-repeat center center fixed;background-size: cover`;

  return (
    <Container className="nasa">
      <NasaApiDay />
    </Container>
  );
};

export default Nasa;
