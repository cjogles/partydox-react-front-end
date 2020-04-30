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
import TripDetails from './components/trips/TripDetails';
import Activities from './components/activities/Activities';
import ActivityDetails from './components/activities/ActivityDetails';
import ParkingLots from './components/parking/ParkingLots';
import ParkingLotDetails from './components/parking/ParkingLotDetails';
import ShoppingLists from './components/shopping/ShoppingLists';
import ShoppingListDetails from './components/shopping/ShoppingListDetails';
import Flights from './components/flights/Flights';
import FlightDetails from './components/flights/FlightDetails';

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
          <Route path="/tripDetails" component={TripDetails}/>
          <Route path="/activities" component={Activities}/>
          <Route path="/activityDetails" component={ActivityDetails}/>
          <Route path="/parkingLots" component={ParkingLots}/>
          <Route path="/parkingDetails" component={ParkingLotDetails}/>
          <Route path="/shoppingLists" component={ShoppingLists}/>
          <Route path="/shoppingDetails" component={ShoppingListDetails}/>
          <Route path="/flights" component={Flights}/>
          <Route path="/flightDetails" component={FlightDetails}/>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
