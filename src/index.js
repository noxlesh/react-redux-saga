import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";
import Counter from "./components/Counter";
import "./index.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <h1>Counter:</h1>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
