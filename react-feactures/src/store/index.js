import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { IntlReducer as Intl } from "react-redux-multilingual";
import appReducers from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers(Object.assign(appReducers, { Intl }));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  { Intl: { locale: "en" } },
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
