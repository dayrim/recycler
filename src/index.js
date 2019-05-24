import React, { Component,Suspense } from 'react';
import * as WebFont from "webfontloader";
import defaultFonts from './fonts'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store.js'
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import {Layout } from './components'
import routes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'video-react/dist/video-react.css';

const store = configureStore()

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Recyclist'
    };
  }

  loadFonts() {
    console.log(defaultFonts)
    WebFont.load({
      google: {
        families: defaultFonts
      }
    });
  }
  willMount(){
    this.loadFonts();
  }
  render(){
    return(

      <Provider store={store}>
       <CssBaseline />
            <ConnectedRouter history={history}>

            <Layout>
                <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                {routes.map((route,key)=><Route path={route.path} key={key} component={React.lazy(() => import(`./pages/${route.componentpath}`))} />)}
              </Suspense>
               
              </Switch>
            </Layout>
              </ConnectedRouter>

      </Provider>

    )
  }
  
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();