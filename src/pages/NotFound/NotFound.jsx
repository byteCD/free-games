import React from "react";
import Error from "../../components/Error/Error";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="NotFound">
      <Error error="Страница не найдена" />
    </div>
  );
};

export default NotFound;
