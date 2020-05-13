import React, { useEffect } from "react";
import NavFriend from "../friends/NavFriend";
import Nav from "../Nav";
import ActivityList from "../activities/ActivityList";
import Footer from "../FooterSignUp";
import { connect } from "react-redux";
import { getAllActivities } from "../../actions/activityActions";

function ActivityDash(props) {
  // utils for activity dash component
  // update activities after an update/deletion/addition
  useEffect(() => {
    props.getAllActivities(props.location.state.tripId);
  }, [props.update, props.deleteTrip, props.addition]);

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
            <div className="dashContainer1">
              <h2 className="dashH">Welcome to your Activity List View!</h2>
              <ActivityList
                activities={props.activities}
                tripName={props.location.state.tripName}
                tripId={props.location.state.tripId}
              />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

// necessary state and action creators for Dashboard component
const mapStateToProps = (state) => {
  return {
    name: state.signUpReducer.friend.name,
    errorMessage: state.signUpReducer.errorMessage,
    error: state.signUpReducer.error,
    loggedIn: state.signUpReducer.loggedIn,
    loggingIn: state.signUpReducer.loggingIn,
    loggingInMessage: state.signUpReducer.loggingInMessage,
    activities: state.activityReducer.activities,
  };
};

const mapDispatchToProps = { getAllActivities };

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDash);
