import { createStore, combineReducers } from "redux";
import redux from "./redux";

export const initializeStore = state => createStore(redux, state);
