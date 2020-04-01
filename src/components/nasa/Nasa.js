import React, { useState } from "react";
import NasaApiDay from "./NasaApiDay";

import "./Nasa.css";

const Nasa = () => {
  document.body.style.cssText = `background-color: black;`;

  const [apiUrl, setApiUrl] = useState("");
  console.log(apiUrl);

  const selectApi = e => {
    setApiUrl(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    console.log("envoyer");
  };

  if (apiUrl !== "") {
    return <NasaApiDay />;
  }

  return (
    <form className="text-center form" onSubmit={submit}>
      <label htmlFor="api-select">
        Choose API what you want see
        <br />
        <select name="api" id="api-select" onChange={selectApi}>
          <option value="">--Please choose API--</option>
          <option value="https://api.nasa.gov/planetary/apod?api_key=OUJhf1VdULAcPwDuby2GmcafBrHqMwzLiWBn7Hxh">
            Picture of DAY
          </option>
          <option value="cat">Cat</option>
        </select>
      </label>
      <input type="submit" value="send" />
    </form>
  );
};

export default Nasa;
