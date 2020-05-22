import React, { useEffect } from "react";
import NavFriend from "../friends/NavFriend";
import Nav from "../Nav";
import ProfileList from "../friends/ProfileList";
import Footer from "../FooterSignUp";
import { connect } from "react-redux";
import { getTrip } from "../../actions/tripActions";
import { useHistory, Link } from "react-router-dom";
import { getFriend } from "../../actions/friendActions";

function ProfileDash(props) {
  let history = useHistory();
  useEffect(() => {
    props.getFriend();
    props.getTrip(localStorage.getItem("tripId"));
  }, [props.gotTrip]);

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
                <div className="dashDetails">
                  <Link
                    to={{
                      pathname: "/dashboard",
                      state: {
                        tripId: localStorage.getItem("tripId"),
                      },
                    }}
                  >
                    <h2>Back to Dashboard</h2>
                  </Link>
                </div>
                <ProfileList
                  profile={props.profile}
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
    return (
      <>
        <Nav />
        <div className="dasherror">{props.errorMessage}</div>
      </>
    );
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
    name: state.signUpReducer.friend.friend_name,
    activities: state.activityReducer.activities,
    thisTrip: state.tripsReducer.trip,
    profile: state.signUpReducer.friend,
  };
};

const mapDispatchToProps = { getTrip, getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDash);
