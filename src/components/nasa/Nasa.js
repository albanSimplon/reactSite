import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import NasaApiDay from "./NasaApiDay";

import "./Nasa.css";

const Nasa = () => {
  document.body.style.cssText = `background: url("backgroundNasa.jpg") no-repeat center center fixed;background-size: cover`;
  useEffect(() => {
    document.querySelector(
      ".footer"
    ).style.cssText = `position: relative;bottom: 0;`;
  });

  return (
    <Container className="nasa">
      <NasaApiDay />
    </Container>
  );
};

export default Nasa;
