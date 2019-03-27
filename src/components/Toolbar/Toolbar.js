import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle_button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/" style={{ fontSize: "3rem", fontWeight: "bold" }}>
          FitHop
        </a>
      </div>
      <div className="spacer"> </div>
      <div className="toolbar_items">
        <ul>
          <li>
            <a onClick={props.handleClickExplore}>Classes</a>
          </li>
          <li>
            <a>Gym Registration</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li onClick={props.handleClickLogin}>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
