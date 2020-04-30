import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function Activity(props) {

  return (
    <>

      <div className="trip">
        <div className="tripdiv1">
          <div>
            <h6>Name:</h6>
            <h2>{props.activity.activity_name}</h2>
          </div>
          <div>
            <h6>Description:</h6>
            <h2>{props.activity.activity_description}</h2>
          </div>
        </div>
        <div className="tripdiv2">
            <div>
                {/* access these props via props.location.state */}
                <Link to={{ pathname: '/activityDetails', state: { 
                    activityId: props.activity.id,
                    activityName: props.activity.activity_name,
                    activityDescription: props.activity.trip_description,
                    activityAddress: props.activity.activity_address,
                    activityPhone: props.activity.activity_phone,
                    activityStartDate: props.activity.activity_start_date,
                    activityEndDate: props.activity.activity_end_date,
                    activityLikes: props.activity.activity_upvotes,
                    activityNotes: props.activity.activity_notes
                    } 
                    }}>View Activity Details</Link>
            </div>
        </div>
        <div className="tripdiv3">
            <div>
                <Link to="/inviteFriend">Invite a Friend to Collaborate!</Link>
            </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    activities: state.activityReducer.activities,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
