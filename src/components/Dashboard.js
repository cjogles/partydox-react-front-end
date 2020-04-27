import React, { useEffect, useState } from "react";
import NavFriend from "./friends/NavFriend";
import Trip from "./trips/Trip";
import { connect } from "react-redux";
import { getTrips } from "../actions/tripActions";
import AxiosWithAuth from "../utils/AxiosWithAuth";

function Dashboard(props) {
  const [trips, setTrips] = useState([]);
  let id = localStorage.getItem("id");

  useEffect(() => {
    let id = localStorage.getItem("id");
    AxiosWithAuth()
      .get(`/trips/user/${id}`)
      .then((res) => {
        console.log("res.data", res.data)
        let tripList = res.data.map(trip => {
          return trip;
        })
        console.log("tripList mapping", tripList)
        setTrips([...tripList])
        console.log("trip state", trips)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.loggingIn, props.error, props.id]);

  return (
    <>
      {props.loggingIn && (
        <div className="loggingin">{props.loggingInMessage}</div>
      )}
      {props.error && <div className="dasherror">{props.errorMessage}</div>}
      {props.loggedIn && (
        <>
          <NavFriend friend={props.name} />

          <div className="dash">
            <h2>Your Trips</h2>
            {/* {AxiosWithAuth()
              .get(`/trips/user/${id}`)
              .then((res) => {
                let tripList = res.data.map(trip => {
                  return trip;
                <Trip></Trip>;
              })
              .catch((err) => {
                console.log(err);
              })} */}
          </div>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.signUpReducer.friend.id,
    name: state.signUpReducer.friend.name,
    username: state.signUpReducer.friend.username,
    errorMessage: state.signUpReducer.errorMessage,
    error: state.signUpReducer.error,
    loggedIn: state.signUpReducer.loggedIn,
    loggingIn: state.signUpReducer.loggingIn,
    loggingInMessage: state.signUpReducer.loggingInMessage,
    trips: state.tripsReducer.trip,
  };
};

const mapDispatchToProps = { getTrips };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
