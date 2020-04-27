import React, { useEffect, useState } from "react";
// import NavFriend from "./friends/NavFriend";
import { connect } from "react-redux";
// import { getTrips } from "../actions/tripActions";
import AxiosWithAuth from '../../utils/AxiosWithAuth';

function Trip(props) {

  const [trips, setTrips] = useState();

  // useEffect(() => {
  //     let id = localStorage.getItem("id");
  //   AxiosWithAuth()
  //       .get(`/trips/user/${id}`)
  //       .then(res => {
            
  //       })
  //       .catch(err => {
  //           console.log(err)
  //       })
  // }, [props.loggingIn, props.error, props.id]);

  return (
    <>
      {/* <NavFriend friend={props.name} /> */}
      <div className="dash">
        <h2>Your Trips</h2>
      </div>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
