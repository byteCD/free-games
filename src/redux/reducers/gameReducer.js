import {
  SET_GAME,
  SET_GAMES,
  SET_GAME_LOADED,
  SET_GAMES_SLICE,
  SET_GAMES_LOADED,
} from "../actions/gameActions";

const initialState = {
  games: [],
  game: {},
  gamesSlice: [0, 48],
  gamesLoaded: false,
  gameLoaded: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES:
      return { ...state, games: action.payload };
    case SET_GAME:
      return { ...state, game: action.payload };
    case SET_GAME_LOADED:
      return { ...state, gameLoaded: action.payload };
    case SET_GAMES_LOADED:
      return { ...state, gamesLoaded: action.payload };
    case SET_GAMES_SLICE:
      return { ...state, gamesSlice: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
