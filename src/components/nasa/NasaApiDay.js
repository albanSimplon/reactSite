import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";

const NasaApiDay = () => {
  const [apiDay, setApiDay] = useState([]);

  const GetApiDay = async () => {
    const resp = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=OUJhf1VdULAcPwDuby2GmcafBrHqMwzLiWBn7Hxh`
    );
    const data = await resp.json();

    setApiDay(data);
    console.log(data);
  };

  useEffect(() => {
    GetApiDay();
  }, []);
  const artist = apiDay.copyright ? <p>Artist: {apiDay.copyright}</p> : null;

  return (
    <Row className="mt-5">
      <Col>
        <Image src={apiDay.url} alt={apiDay.title} fluid rounded />
      </Col>
      <Col>
        <p className="text-center nasaTitreApiDay">
          Astronomy Picture of the Day ({apiDay.date})
        </p>
        <p className="text-center  nasaParaApiDay">Titre: {apiDay.title}</p>

        {artist}
      </Col>
      <Col sm={12}>
        <p className="mt-2 nasaParaApiDay ">{apiDay.explanation}</p>
      </Col>
    </Row>
  );
};

export default NasaApiDay;
