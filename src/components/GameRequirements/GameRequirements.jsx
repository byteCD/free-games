import React from "react";
import "./GameRequirements.css";

const GameRequirements = ({ requirements }) => {
  return (
    <div className="GameRequirements">
      <div className="GameRequirements__block">
        <h4>Система</h4>
        <h5>{requirements?.os}</h5>
      </div>
      <div className="GameRequirements__block">
        <h4>Процессор</h4>
        <h5>{requirements?.processor}</h5>
      </div>
      <div className="GameRequirements__block">
        <h4>Оперативная память</h4>
        <h5>{requirements?.memory}</h5>
      </div>
      <div className="GameRequirements__block">
        <h4>Видеокарта</h4>
        <h5>{requirements?.graphics}</h5>
      </div>
      <div className="GameRequirements__block">
        <h4>Память на диске</h4>
        <h5>{requirements?.storage}</h5>
      </div>
    </div>
  );
};

export default GameRequirements;
