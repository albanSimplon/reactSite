import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";

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
      console.log("error:" + e);
    }
  };
  const artist = apiDay.copyright ? (
    <p className="text-center">Artist: {apiDay.copyright}</p>
  ) : null;

  useEffect(() => {
    GetApiDay();
  }, []);

  return (
    <Row className="apiDay">
      <Col>
        <Image src={apiDay.url} alt={apiDay.title} fluid rounded />
      </Col>
      <Col>
        <p className="text-center nasaTitreApiDay">{apiDay.date}</p>
        <br />
        <br />
        <br />
        <p className="text-center  nasaParaApiDay">{apiDay.title}</p>

        {artist}
      </Col>
      <Col sm={12}>
        <p className="mt-2 nasaParaApiDay ">{apiDay.explanation}</p>
      </Col>
    </Row>
  );
};

export default NasaApiDay;
