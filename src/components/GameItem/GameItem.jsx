import React from "react";
import { useNavigate } from "react-router-dom";
import "./GameItem.css";

const GameItem = ({ game }) => {
  const navigate = useNavigate();

  return (
    <div className="GameItem" onClick={() => navigate(`/game/${game.id}`)}>
      <img src={game.thumbnail} alt={`Изображение игры ${game.title}`} />
      <h3>{game.title}</h3>
    </div>
  );
};

export default GameItem;
