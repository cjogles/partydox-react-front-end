import React from "react";
import { getFriend } from "../../actions/friendActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";
import FooterSignUp from "../FooterSignUp";
import { Redirect, useHistory } from "react-router-dom";

function Profile(props) {
  return (
    <>
      <div className="trip">
        <div className="tripdiv1">
          <div className="tripname">
            <h6>Name:</h6>
            <h2>{props.name}</h2>
          </div>
          <div className="tripdescription">
            <h6>Username:</h6>
            <h2>{props.username}</h2>
          </div>
        </div>
        <div className="tripdiv3">
          <div>
            <a>
              <img src={props.profile_pic}></img>
            </a>
          </div>
          <div>
            {props.friend.friend_profile_pic ? (
              <a >
                <img src={props.friend.friend_profile_pic}></img>
              </a>
            ) : (
              <Link
                to={{
                  pathname: "/updateProfile",
                  state: {
                    tripId: props.friend.friend_phone,
                    friend: props.friend,
                  },
                }}
              >
                <img style={{width: "2rem", height: "2rem"}}src="./images/profilepic.png"></img>
              </Link>
            )}
          </div>
          <div>
            {props.phone ? (
              <a href={`tel:${props.phone}`}>
                <p>{props.friend.friend_phone}</p>
              </a>
            ) : (
              <Link
                to={{
                  pathname: "/updateProfile",
                  state: {
                    tripId: props.friend.friend_phone,
                    friend: props.friend,
                  },
                }}
              >
                Phone Here
              </Link>
            )}
          </div>
          <div>
            {props.email ? (
              <a href={`mailto:${props.friend.friend_email}?Subject=Hello%20Friend`}>
                <p>{props.friend.friend_email}</p>
              </a>
            ) : (
              <Link
                to={{
                  pathname: "/updateProfile",
                  state: {
                    tripId: props.tripId,
                    friend: props.friend,
                  },
                }}
              >
                Email Here
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// add parking lot State if needed connects here
const mapStateToProps = (state) => {
  return {
    friend: state.signUpReducer.friend,
  };
};

const mapDispatchToProps = { getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
