import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setGamesSlice } from "../../redux/actions/gameActions";
import "./GamesPagination.css";

const GamesPagination = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.gameReducer.games);
  const pages = [];
  const pagesCount = Math.ceil(games.length / 48);

  for (let i = 0; i < pagesCount; i++) {
    pages.push(
      <h4
        key={i}
        className="GamesPagination__page"
        onClick={() =>
          dispatch(setGamesSlice([(i + 1) * 48 - 48, (i + 1) * 48]))
        }
      >
        {i + 1}
      </h4>
    );
  }
  return <div className="GamesPagination">{pages}</div>;
};

export default GamesPagination;
