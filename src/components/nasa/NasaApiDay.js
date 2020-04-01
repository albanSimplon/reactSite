import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Nasa from "./Nasa";

const NasaApiDay = () => {
  const [apiDay, setApiDay] = useState([]);

  const GetApiDay = async () => {
    try {
      const resp = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=OUJhf1VdULAcPwDuby2GmcafBrHqMwzLiWBn7Hxh`
      );

      const data = await resp.json();

      setApiDay(data);
    } catch (e) {
      console.log(e);
      var error = document.querySelector(".error");
      error.textContent =
        "Error from API N.A.S.A impossible to render this page sorry ...";
    }
  };

  useEffect(() => {
    GetApiDay();
  }, []);

  return (
    <>
      <Nasa />
      <Container fluid={true} className="nasa">
        <Row className="apiDay">
          <Col>
            <Image src={apiDay.url} alt={apiDay.title} fluid rounded />
          </Col>
          <div className="text-center error"></div>
          <Col>
            <p className="text-center nasaTitreApiDay">{apiDay.date}</p>
            <br />
            <br />
            <br />
            <p className="text-center  nasaParaApiDay">{apiDay.title}</p>

            <p className="text-center">{apiDay.copyright}</p>
          </Col>
          <Col sm={12}>
            <p className="mt-2 nasaParaApiDay ">{apiDay.explanation}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NasaApiDay;
