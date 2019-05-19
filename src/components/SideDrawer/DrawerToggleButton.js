import React from "react";
// import "./DrawerToggleButton.css";
import "./DrawerToggleButton2.css";

// const DrawerToggleButton = props => (
//   <button className="toggle_button" onClick={() => props.click()}>
//     <div className="toggle_button_line" />
//     <div className="toggle_button_line" />
//     <div className="toggle_button_line" />
//   </button>
// );

const DrawerToggleButton = props => (
  <button className="toggle__btn" onClick={() => props.click()}>
    <div className="toggle__line" />
    <div className="toggle__line" />
    <div className="toggle__line" />
  </button>
);

export default DrawerToggleButton;
