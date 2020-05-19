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
    name: state.signUpReducer.friend.name,
  };
};

const mapDispatchToProps = { getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
