import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Error from "../../components/Error/Error";
import GameInfo from "../../components/GameInfo/GameInfo";
import GameRequirements from "../../components/GameRequirements/GameRequirements";
import GameScreenshots from "../../components/GameScreenshots/GameScreenshots";
import { getGame } from "../../redux/actions/gameActions";
import "./Game.css";

const Game = () => {
  const dispatch = useDispatch();
  const { game, gameLoaded } = useSelector((state) => state.gameReducer);
  const error = useSelector((state) => state.errorReducer.gameError);
  const params = useParams();

  useEffect(() => {
    dispatch(getGame(params.id));
  }, []);

  return (
    gameLoaded && (
      <div className="Game">
        {error && <Error error={error} />}
        {!error && (
          <>
            <div className="Game__block Game__block-left">
              <img
                src={game.thumbnail}
                alt={`Изображение игры ${game.title}`}
              />
              <button
                className="Game__button"
                onClick={() => (window.location.href = game.game_url)}
              >
                Играть
              </button>
            </div>
            <div className="Game__block Game__block-right">
              <h1>{game.title}</h1>
              <p>{game.description}</p>
              <GameInfo game={game} />
              <GameScreenshots
                screenshots={game.screenshots}
                title={game.title}
                thumbnail={game.thumbnail}
              />
              <GameRequirements
                requirements={game.minimum_system_requirements}
              />
            </div>
          </>
        )}
      </div>
    )
  );
};

export default Game;
