import React, { useEffect } from "react";
import NavFriend from "../friends/NavFriend";
import Nav from "../Nav";
import ActivityList from "../activities/ActivityList";
import Footer from "../FooterSignUp";
import { connect } from "react-redux";
import { getAllActivities } from "../../actions/activityActions";
import { getTrip } from "../../actions/tripActions";
import { useHistory, Link } from "react-router-dom";
import { getFriend } from '../../actions/friendActions';

function ActivityDash(props) {
  // utils for activity dash component
  // update activities after an update/deletion/addition
  let history = useHistory();
  useEffect(() => {
    props.getFriend();
    props.getAllActivities(localStorage.getItem("tripId"));
    props.getTrip(localStorage.getItem("tripId"));
  }, [props.gotActivities, props.gotTrip]);

  if (props.thisTrip[0] !== undefined) {
    return (
      <>
        {/* If the axios request to retrieve all trips fails, 
    show an error message, while logging in, show a 
    logging in message, otherwise show the trips. */}

        {props.loggingIn ? (
          <>
            <Nav />
            <div className="loggingin">{props.loggingInMessage}</div>
            <Footer />{" "}
          </>
        ) : null}
        {props.error ? (
          <>
            <Nav />
            <div className="dasherror">{props.errorMessage}</div>
            <Footer />
          </>
        ) : null}

        {props.loggedIn && (
          <>
            <NavFriend friend={props.name} />
            <div className="dash">
              <div className="dashContainer1 dashDetailsContainer">
                {/* <h2 className="dashH">Welcome to your Activity List View!</h2> */}
                <div className="dashDetails">
                  <Link
                    to={{
                      pathname: "/tripDetails",
                      state: {
                        tripId: localStorage.getItem("tripId"),
                      },
                    }}
                  >
                    <h2>Back to Trip Details</h2>
                  </Link>
                </div>
                {/* pass trip name and trip id from Link component (react-router-dom) */}
                <ActivityList
                  activities={props.activities}
                  tripName={props.thisTrip[0].trip_name}
                  tripId={props.thisTrip[0].id}
                />
              </div>
            </div>
            <Footer />
          </>
        )}
      </>
    );
  } else {
    return null;
  }
}

// necessary state and action creators for Dashboard component
const mapStateToProps = (state) => {
  return {
    gotActivities: state.activityReducer.gotActivities,
    loggingIn: state.signUpReducer.loggingIn,
    loggingInMessage: state.signUpReducer.loggingInMessage,
    error: state.signUpReducer.error,
    errorMessage: state.signUpReducer.errorMessage,
    loggedIn: state.signUpReducer.loggedIn,
    name: state.signUpReducer.friend.name,
    activities: state.activityReducer.activities,
    thisTrip: state.tripsReducer.trip,
  };
};

const mapDispatchToProps = { getAllActivities, getTrip, getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDash);
