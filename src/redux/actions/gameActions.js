export const GET_GAMES = "GET_GAMES";
export const SET_GAMES = "SET_GAMES";
export const GET_GAME = "GET_GAME";
export const SET_GAME = "SET_GAME";
export const SET_GAME_LOADED = "SET_GAME_LOADED";
export const SET_GAMES_LOADED = "SET_GAMES_LOADED";
export const SET_GAMES_SLICE = "SET_GAMES_SLICE";

export const getGames = (query) => ({
  type: GET_GAMES,
  payload: query,
});
export const setGames = (games) => ({
  type: SET_GAMES,
  payload: games,
});
export const getGame = (id) => ({
  type: GET_GAME,
  payload: id,
});
export const setGame = (game) => ({
  type: SET_GAME,
  payload: game,
});
export const setGameLoaded = (gameLoaded) => ({
  type: SET_GAME_LOADED,
  payload: gameLoaded,
});
export const setGamesLoaded = (gamesLoaded) => ({
  type: SET_GAMES_LOADED,
  payload: gamesLoaded,
});
export const setGamesSlice = (gamesSlice) => ({
  type: SET_GAMES_SLICE,
  payload: gamesSlice,
});
