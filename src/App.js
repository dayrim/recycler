import React, { Component, Suspense } from "react";
import * as WebFont from "webfontloader";
import defaultFonts from "./fonts";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store.js";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";
import routes from "./routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import "video-react/dist/video-react.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { WarningArea } from "components";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#742382",
      light: "#d0bad4",
      dark: "#320e38",
      contrastText: "#ffffff"
    },
    primary: {
      main: "#162a50",
      light: "#44527c",
      dark: "#000028",
      contrastText: "#ffffff"
    }
  },
  typography: {
    fontFamily: ["Roboto"].join(",")
  },
  overrides: {
    MuiDivider: {
      root: {
        height: "0",
        margin: "10px"
      }
    }
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Recyclist"
    };
  }

  loadFonts() {
    console.log(defaultFonts);
    WebFont.load({
      google: {
        families: defaultFonts
      }
    });
  }
  willMount() {
    this.loadFonts();
  }
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <WarningArea />
          <CssBaseline />
          <ConnectedRouter history={history}>
            <Switch>
              <Suspense fallback={<div>Loading...</div>}>
                {routes.map((route, key) => (
                  <Route
                    exact
                    path={route.path}
                    key={key}
                    component={React.lazy(() =>
                      import(`./pages/${route.componentpath}`)
                    )}
                  />
                ))}
              </Suspense>
            </Switch>
          </ConnectedRouter>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
