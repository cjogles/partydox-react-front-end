import React from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function Dashboard(props) {
  return (
    <>
      <div>{props.id}</div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.user.id,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
