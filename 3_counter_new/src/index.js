import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import counterReducer from "./reducers/counterReducer";
import resultsReducer from "./reducers/resultsReducer";

const rootReducer = combineReducers({
  ctr: counterReducer,
  rts: resultsReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
