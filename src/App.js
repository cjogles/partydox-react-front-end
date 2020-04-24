import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";

import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

import "./css/index.css";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Nav />
          <Main />
          <About />
          <Footer />
        </Route>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute>
          <Route path="/dashboard" component={Dashboard}/>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
