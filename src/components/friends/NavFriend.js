import React from 'react';
import {Link} from 'react-router-dom';
import { getFriend } from '../../actions/friendActions';
import { connect } from 'react-redux';

function NavFriend(props) {
  return (
    <div className="nav">
        <Link to='/'><h1>Party Dox! <span role='img' aria-label="tada">🎉</span></h1></Link>
        <Link to='/profile'>
          <h2>{props.name}</h2>
        </Link>
    </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavFriend);