import React from "react";
import "./GameScreenshots.css";

const GameScreenshots = ({ screenshots, title, thumbnail }) => {
  return (
    <div className="GameScreenshots">
      {screenshots?.length === 0 && (
        <img src={thumbnail} alt={`Изображение игры ${title}`} />
      )}
      {screenshots?.map((screenshot) => (
        <img
          key={screenshot.id}
          src={screenshot.image}
          alt={`Изображение игры ${title}`}
        />
      ))}
    </div>
  );
};

export default GameScreenshots;
