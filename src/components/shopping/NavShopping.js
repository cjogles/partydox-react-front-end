import React from "react";
import { Link } from "react-router-dom";
import { getFriend } from "../../actions/friendActions";
import { connect } from "react-redux";

function NavShopping(props) {
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
            <Link to="/shoppingDash">
              <h2>Back to Shopping List</h2>
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
    name: state.signUpReducer.friend.friend_name,
    username: state.signUpReducer.friend.username,
  };
};

const mapDispatchToProps = { getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(NavShopping);
