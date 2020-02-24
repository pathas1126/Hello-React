import input from "./modules/input";
import data from "./modules/data";
import { combineReducers } from "redux";

// combineReducers(): 서로 다른 리듀서 함수들을 하나로 함쳐주는 함수
export default combineReducers({
  input,
  data
});
