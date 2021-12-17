import { SET_GAMES_ERROR, SET_GAME_ERROR } from "../actions/errorActions";

const initialState = {
  gameError: "",
  gamesError: "",
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_ERROR:
      return { ...state, gameError: action.payload };
    case SET_GAMES_ERROR:
      return { ...state, gamesError: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
