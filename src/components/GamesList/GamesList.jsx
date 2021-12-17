import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getGames, setGamesSlice } from "../../redux/actions/gameActions";
import Error from "../Error/Error";
import GameItem from "../GameItem/GameItem";
import GamesPagination from "../GamesPagination/GamesPagination";
import GamesSorting from "../GamesSorting/GamesSorting";
import "./GamesList.css";

const GamesList = () => {
  const games = useSelector((state) => state.gameReducer.games);
  const { gamesSlice, gamesLoaded } = useSelector((state) => state.gameReducer);
  const error = useSelector((state) => state.errorReducer.gamesError);
  const [platform, setPlatform] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames({ platform, category }));
    dispatch(setGamesSlice([0, 48]));
  }, [platform, category]);

  return (
    gamesLoaded && (
      <>
        {error && <Error error={error} />}
        {!error && (
          <>
            <GamesSorting setPlatform={setPlatform} setCategory={setCategory} />
            <div className="GamesList">
              {games.slice(...gamesSlice).map((game) => (
                <GameItem key={game.id} game={game} />
              ))}
            </div>
            <GamesPagination />
          </>
        )}
      </>
    )
  );
};

export default GamesList;
