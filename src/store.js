import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension/developmentOnly";
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./epics";

const epicMiddleware = createEpicMiddleware();

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const enhancer = compose(
    applyMiddleware(routerMiddleware(history), epicMiddleware),
    devToolsEnhancer({
      name: "Re-cyclist",
      trace: true,
      traeLimit: 30
    })
  );

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,

    enhancer
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers/index").default; // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }
  epicMiddleware.run(rootEpic);
  return store;
}
