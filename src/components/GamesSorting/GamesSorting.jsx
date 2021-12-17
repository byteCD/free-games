import React from "react";
import "./GamesSorting.css";

const GamesSorting = ({ setPlatform, setCategory }) => {
  return (
    <div className="GamesSorting">
      <select
        className="GamesSorting__select"
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option value="all">Все платформы</option>
        <option value="pc">ПК</option>
        <option value="browser">Браузер</option>
      </select>
      <select
        className="GamesSorting__select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Все жанры</option>
        <option value="shooter">Шутеры</option>
        <option value="strategy">Стратегии</option>
        <option value="mmorpg">MMORPG</option>
        <option value="moba">Moba</option>
        <option value="sports">Спортивные</option>
        <option value="pvp">PvP</option>
        <option value="pve">PvE</option>
        <option value="anime">Аниме</option>
      </select>
    </div>
  );
};

export default GamesSorting;
