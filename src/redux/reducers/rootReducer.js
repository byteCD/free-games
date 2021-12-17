import { combineReducers } from "redux";
import gameReducer from "../reducers/gameReducer";
import errorReducer from "../reducers/errorReducer";

const rootReducer = combineReducers({
  gameReducer,
  errorReducer,
});

export default rootReducer;
