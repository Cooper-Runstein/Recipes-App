/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from "redux";
import searchReducer from "App/components/SearchBar/container/searchReducer";
export default combineReducers({
  searchReducer
});
