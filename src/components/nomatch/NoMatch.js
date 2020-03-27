import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
  let location = useLocation();
  return (
    <div className="text-center">
      Désolé la page {location.pathname} n'existe pas :(
    </div>
  );
};

export default NoMatch;
