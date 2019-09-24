import React, { Component, Suspense } from "react";
import * as WebFont from "webfontloader";
import defaultFonts from "./fonts";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store.js";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";
import { Layout } from "./components";
import routes from "./routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import "video-react/dist/video-react.css";
import App from "./App";

const store = configureStore();
const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
if (module.hot) {
  module.hot.accept("./App", () => {
    // eslint-disable-next-line global-require
    const NextApp = require("./App").default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl
    );
  });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
