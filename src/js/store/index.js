import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "./../middleware/index";
import thunk from "redux-thunk";

const storeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnchancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;
