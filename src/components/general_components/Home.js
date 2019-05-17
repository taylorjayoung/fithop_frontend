import React, { Component } from "react";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="HomeDivWrapper">
        <div className="HomeBackgroundLineDiv">
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>

        <div className="HomeDiv">
          <div className="Div1">
            <div className="SolganDiv">
              <span>Fitness Classes </span>
              <span>For 90% Off </span>
            </div>

            <div className="SignUpDiv">
              <p className="SignUpLink" onClick={this.props.handleClickSignUp}>
                Sign Up Free
              </p>
            </div>
          </div>

          <div className="Div2">
            <div className="ImageDiv">
              <div className="ExploreClassesDiv">
                <p
                  className="ExploreClassesLink"
                  onClick={this.props.handleClickExplore}
                >
                  Explore Classes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
