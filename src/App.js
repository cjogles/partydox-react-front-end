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
import Activities from './components/activities/ActivityList';
import ActivityDetails from './components/activities/ActivityDetails';
import ParkingLots from './components/parking/ParkingLots';
import ParkingLotDetails from './components/parking/ParkingLotDetails';
import ShoppingLists from './components/shopping/ShoppingLists';
import ShoppingListDetails from './components/shopping/ShoppingListDetails';
import Flights from './components/flights/Flights';
import FlightDetails from './components/flights/FlightDetails';

import ActivityDash from './components/activities/ActivityDash';
// import ShoppingDash from './components/trips/ShoppingDash';
// import FlightDash from './components/trips/FlightDash';
// import ParkingDash from './components/trips/ParkingDash';
import AddTrip from './components/trips/AddTrip';
import UpdateTrip from './components/trips/UpdateTrip';
import AddActivity from './components/activities/AddActivity';
import UpdateActivity from './components/activities/UpdateActivity';
import AddShoppingList from './components/shopping/AddShoppingList';
import UpdateShoppingList from './components/shopping/UpdateShoppingList';
import AddFlight from './components/flights/AddFlight';
import UpdateFlight from './components/flights/UpdateFlight';
import AddParkingLot from './components/parking/AddParkingLot';
import UpdateParkingLot from './components/parking/UpdateParkingLot';

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

          <Route path="/addTrip" component={AddTrip}/>
          <Route path="/updateTrip" component={UpdateTrip}/>
          <Route path="/addShoppingList" component={AddShoppingList}/>
          <Route path="/updateShoppingList" component={UpdateShoppingList}/>
          <Route path="/addParkingLot" component={AddParkingLot}/>
          <Route path="/updateParkingLot" component={UpdateParkingLot}/>
          <Route path="/addFlight" component={AddFlight}/>
          <Route path="/updateFlight" component={UpdateFlight}/>
          <Route path="/addActivity" component={AddActivity}/>
          <Route path="/updateActivity" component={UpdateActivity}/>
          <Route path="/activityDash" component={ActivityDash}/>
          {/* <Route path="/parkingDash" component={ParkingDash}/>
          <Route path="/shoppingDash" component={ShoppingDash}/>
          <Route path="/flightDash" component={FlightDash}/> */}

        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
