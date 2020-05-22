import React, { useEffect } from "react";
import Nav from "../friends/NavFriend";
import FooterSignUp from "../FooterSignUp";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateProfile } from '../../actions/friendActions';

function UpdateProfile(props) {
  let history = useHistory();
  let thisProfile = props.location.state;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      username: thisProfile.friend.username,
      friend_name: thisProfile.friend.friend_name,
      friend_profile_pic: thisProfile.friend.friend_profile_pic,
      friend_email: thisProfile.friend.friend_email,
      friend_phone: thisProfile.friend.friend_phone,
    },
  });

  const onSubmit = (profile) => props.updateProfile(profile);

  return (
    <>
      <Nav />
      <div className="loginWrapper">
        <div className="login">
          <div className="logintitle">
            <span className="spanimage" role="img" aria-label="partyface">
              🥳
            </span>
            Update {thisProfile.tripName} Profile
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="friend_name">Name:</label>
            <input name="friend_name" autoFocus={true} ref={register}></input>
            <label htmlFor="username">Username:</label>
            <input name="username" ref={register}></input>
            <label htmlFor="friend_phone">Phone:</label>
            <input name="friend_phone" ref={register}></input>
            <label htmlFor="friend_email">Email:</label>
            <input name="friend_email" ref={register}></input>
            <label htmlFor="friend_profile_pic">Profile Pic:</label>
            <input encType='multipart/form-data' type="file" name="friend_profile_pic" ref={register}></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <FooterSignUp />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    friend: state.signUpReducer.friend,
  };
};

const mapDispatchToProps = { updateProfile };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
