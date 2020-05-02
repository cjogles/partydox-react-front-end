import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <div className="main1">
        <h1 className="title">Welcome to Partydox!</h1>
        <span className="mainspan1" role="img" aria-label="tada">
          🎉
        </span>
        <p className="titleHelper">Create Fun Trips with your friends!</p>
      </div>
      <div className="main2">
        <span className="mainspan2" role="img" aria-label="tada">
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
