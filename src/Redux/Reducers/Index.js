import { combineReducers } from "redux";
import { movieReducers } from "./Details";
export const rootReducer = combineReducers({ movieReducers });
