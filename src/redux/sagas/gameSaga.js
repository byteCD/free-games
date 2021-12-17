import { takeEvery, call, put } from "redux-saga/effects";
import gameService from "../../services/GameService";
import { setGameError, setGamesError } from "../actions/errorActions";
import {
  GET_GAME,
  GET_GAMES,
  setGame,
  setGameLoaded,
  setGames,
  setGamesLoaded,
} from "../actions/gameActions";

function* getGamesWorker(action) {
  try {
    const games = yield call(gameService.getGames, action.payload);

    yield put(setGames(games.data));
    yield put(setGamesLoaded(true));
  } catch (error) {
    yield put(setGamesError(error.response.data.status_message));
    yield put(setGamesLoaded(true));
  }
}

function* getGameWorker(action) {
  try {
    yield put(setGameLoaded(false));
    const game = yield call(gameService.getGame, action.payload);

    yield put(setGame(game.data));
    yield put(setGameLoaded(true));
  } catch (error) {
    yield put(setGameError(error.response.data.status_message));
    yield put(setGameLoaded(true));
  }
}

export function* gameSagaWatcher() {
  yield takeEvery(GET_GAMES, getGamesWorker);
  yield takeEvery(GET_GAME, getGameWorker);
}
