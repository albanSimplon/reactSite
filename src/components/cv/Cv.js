import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Cv.css";

const Cv = () => {
  useEffect(() => {
    document.body.style.background = "white";
  }, []);

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col className="left" md={3}>
          <h3>Alban Veux</h3>
        </Col>
        <Col md={8}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            nam at rerum pariatur repudiandae rem. Natus, rem. Labore, atque
            quaerat. Inventore tenetur at quis nihil iure nisi repudiandae
            culpa.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Cv;
