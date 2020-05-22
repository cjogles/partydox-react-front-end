import React, { useEffect } from "react";
import { getFriend } from "../../actions/friendActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";
import Footer from "../Footer";

function Profile(props) {
  useEffect(() => {
    props.getFriend();
  });
  
  return (
    <>
      <NavFriend friend={props.name} />
      <div className="dash">
        <div className="dashContainer1">
          <div className="tripList">
            <div className="addtrip1">
              <h2 className="tripListH">Your Profile Information: </h2>
              <div className="addtrip">
                <Link to="/updateProfile">
                  <p>Update Your Profile</p>
                </Link>
              </div>
            </div>
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
                  <a><img src={props.profile_pic}></img></a>
                </div>
                <div>
                  <a href={`tel:${props.phone}`}><p>{props.phone}</p></a>
                </div>
                <div>
                  <a href={`mailto:${props.email}?Subject=Hello%20Friend`}><p>{props.email}</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// add parking lot State if needed connects here
const mapStateToProps = (state) => {
  return {
    name: state.signUpReducer.friend.friend_name,
    username: state.signUpReducer.friend.username,
    email: state.signUpReducer.friend.friend_email,
    phone: state.signUpReducer.friend.friend_phone,
    profile_pic: state.signUpReducer.friend.profile_pic,
  };
};

const mapDispatchToProps = { getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
