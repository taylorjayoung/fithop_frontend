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
        <a href="/">The Logo</a>
      </div>
      <div className="spacer"> </div>
      <div className="toolbar_items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
