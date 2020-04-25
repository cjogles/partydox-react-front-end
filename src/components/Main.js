import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <div>
        <h1 className="title">Welcome to Partydox!</h1>
        <p className="titleHelper">Create Fun Trips with your friends!</p>
      </div>
      <div>
        <span role="img" aria-label="tada">
          🎉
        </span>
        <Link to="/login">
          <p>Click Here to Get Started!</p>
        </Link>
      </div>
    </div>
  );
}

export default Main;
