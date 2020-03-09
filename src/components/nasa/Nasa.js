import React, { useState, useEffect } from "react";
import NasaApiDay from "./NasaApiDay";

import "./Nasa.css";

const Nasa = () => {
  const [apiDay, setApiDay] = useState([]);

  const GetApiDay = async () => {
    const resp = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=OUJhf1VdULAcPwDuby2GmcafBrHqMwzLiWBn7Hxh`
    );
    const data = await resp.json();

    setApiDay(data.date);
  };

  useEffect(() => {
    GetApiDay();
  }, []);

  return (
    <div>
      nasa{apiDay}
      <NasaApiDay />
    </div>
  );
};

export default Nasa;
