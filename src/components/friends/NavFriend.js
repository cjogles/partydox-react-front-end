import React from "react";
import { Link, useHistory} from "react-router-dom";
import { getFriend } from "../../actions/friendActions";
import { connect } from "react-redux";
import { resetStore } from "../../actions/friendActions";

function NavFriend(props) {
  let history = useHistory();
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
            <Link to="/profile">
              <h2>{props.name}</h2>
            </Link>
          </div>
          <div>
            <h2>Log out</h2>
          </div>
        </div>
      ) : (
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
              {props.name ? <h2>{props.name}</h2> : "Name"}
            </Link>
          </div>
          <div>
            <a onClick={() => props.resetStore(history)}>
              <h2>Log out</h2>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.signUpReducer.friend.id,
    name: state.signUpReducer.friend.friend_name,
    username: state.signUpReducer.friend.username,
  };
};

const mapDispatchToProps = { getFriend, resetStore };

export default connect(mapStateToProps, mapDispatchToProps)(NavFriend);
