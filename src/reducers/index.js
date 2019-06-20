import { combineReducers } from "redux";
import authReduder from "./authReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReduder,
  form: formReducer
});
