import React, { Component } from "react";
import "./Profile.css";
import InfoContainer from './InfoContainer'

class Profile extends Component {
  state = {
    user: null
  };

  render() {
    return (
      <div className="ProfileDivWrapper">

        <div className="ProfileDiv">
          <div className="ProfileInfoComponentContainer">
            <InfoContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
