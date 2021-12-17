import React from "react";
import "./GameInfo.css";

const GameInfo = ({ game }) => {
  return (
    <div className="GameInfo">
      <div className="GameInfo__block">
        <h4>Жанр</h4>
        <h5>{game.genre}</h5>
      </div>
      <div className="GameInfo__block">
        <h4>Платформа</h4>
        <h5>{game.platform}</h5>
      </div>
      <div className="GameInfo__block">
        <h4>Дата релиза</h4>
        <h5>{new Date(game.release_date).toLocaleDateString()}</h5>
      </div>
      <div className="GameInfo__block">
        <h4>Разработчик</h4>
        <h5>{game.developer}</h5>
      </div>
      <div className="GameInfo__block">
        <h4>Издатель</h4>
        <h5>{game.publisher}</h5>
      </div>
    </div>
  );
};

export default GameInfo;
