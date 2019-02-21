import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
import { authReducer } from "./authReducer.js";

export default combineReducers({
  notesReducer,
  authReducer
});
