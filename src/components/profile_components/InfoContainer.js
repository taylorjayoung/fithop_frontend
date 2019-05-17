import React, { Component } from "react";
import "./InfoContainer.css";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

const InfoContainer = props => {
  return(
  <div className="ProfileInfoDiv">
    <Toolbar />
    <div className="ProfilePictureDiv">
      <div className="ProfilePic">
      </div>
    </div>
    <div className="Info">
      <div className="ProfileLink">
        <span>Name</span>
      </div>
      <div className="ProfileLink">
        <span>Settings</span>
      </div>
      <div className="ProfileLink">
        <span>Invite Friends</span>
      </div>
      <div className="ProfileLink">
        <span>Contact</span>
      </div>
      <div className="ProfileLink">
        <span>Report an Issue</span>
      </div>
    </div>
  </div>
  )
}

export default InfoContainer
