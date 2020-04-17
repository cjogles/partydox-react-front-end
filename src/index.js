import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import App from "./App";
import ScrollToTop from './03_utils/ScrollToTop';
import reducer from './02_reducers';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <Provider store={createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))}>
          <App />
        </Provider>
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
