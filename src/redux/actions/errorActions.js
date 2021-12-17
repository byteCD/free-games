export const SET_GAMES_ERROR = "SET_GAMES_ERROR";
export const SET_GAME_ERROR = "SET_GAME_ERROR";

export const setGamesError = (error) => ({
  type: SET_GAMES_ERROR,
  payload: error,
});
export const setGameError = (error) => ({
  type: SET_GAME_ERROR,
  payload: error,
});
