import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function Shopping(props) {

  return (
    <>

      <div className="trip">
        <div className="tripdiv1">
          <div className="tripname">
            <h6>Item Names:</h6>
            <h2>{props.shopping.item_name}</h2>
          </div>
          <div className="tripdescription">
            <h6>Items Total Cost: </h6>
            <h2>{props.shopping.item_cost}</h2>
          </div>
          <div className="tripdescription">
            <h6>Bought By: </h6>
            <h2>{props.shopping.item_buyer}</h2>
          </div>
        </div>
        <div className="tripdiv2">
            <div>
                {/* access these props via props.location.state */}
                <Link to={{ pathname: '/shoppingDetails', state: { 
                    name: props.shopping.item_name,
                    cost: props.shopping.item_cost,
                    buyer: props.shopping.item_buyer,
                    likes: props.shopping.item_upvote,
                    notes: props.shopping.item_notes,
                    } 
                    }}><p>View Shopping List Details</p></Link>
            </div>
        </div>
        <div className="tripdiv3">
            <div>
                <Link to="/inviteFriend"><p>Invite a Friend to Collaborate!</p></Link>
            </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Shopping);
