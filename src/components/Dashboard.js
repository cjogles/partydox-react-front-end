import React from "react";
import NavFriend from './friends/NavFriend';
import { getFriend } from '../actions/friendActions';
import { connect } from 'react-redux';

function Dashboard(props) {

  return (
    <>
      <NavFriend friend={props.name} />
      <div>welcome to dashboard</div>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.username}</p>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.signUpReducer.friend.id,
    name: state.signUpReducer.friend.name,
    username: state.signUpReducer.friend.username
  }
}

const mapDispatchToProps = { getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
