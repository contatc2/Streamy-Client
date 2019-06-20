import { combineReducers } from "redux";
import authReduder from "./authReducer";

export default combineReducers({
  auth: authReduder
});
