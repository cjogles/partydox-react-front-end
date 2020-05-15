import React from "react";
import { Link } from "react-router-dom";
import { getFriend } from "../../actions/friendActions";
import { connect } from "react-redux";

function NavParking(props) {
  return (
    <>
      {window.location.pathname !== "/dashboard" ? (
        <div className="nav">
          <div>
            <Link to="/">
              <h1>
                Party Dox!{" "}
                <span role="img" aria-label="tada">
                  🎉
                </span>
              </h1>
            </Link>
          </div>
          <div>
            <Link to="/dashboard">
              <h2>Back to Trip List</h2>
            </Link>
          </div>
          <div>
            <Link to="/parkingDash">
              <h2>Back to Parking List</h2>
            </Link>
          </div>
          <div>
            <Link to="/profile">
              <h2>{props.name}</h2>
            </Link>
          </div>
        </div>
      ) : 
      <div className="nav">
      <div>
        <Link to="/">
          <h1>
            Party Dox!{" "}
            <span role="img" aria-label="tada">
              🎉
            </span>
          </h1>
        </Link>
      </div>
      <div>
        <Link to="/profile">
          <h2>{props.name}</h2>
        </Link>
      </div>
    </div>}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.signUpReducer.friend.id,
    name: state.signUpReducer.friend.name,
    username: state.signUpReducer.friend.username,
  };
};

const mapDispatchToProps = { getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(NavParking);
