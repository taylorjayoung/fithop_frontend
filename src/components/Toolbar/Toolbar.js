import React from "react";
import "./Toolbar.css";
// import "./Toolbar2.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle_button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          FitHop
        </a>
      </div>
      <div className="spacer"> </div>
      <div className="toolbar_items">
        <ul>
          <li>
            <a onClick={props.handleClickClasses}>Classes</a>
          </li>
          <li>
            <a>Gym Registration</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>

          {props.loggedIn
            ? renderProfileButton(props.renderProfile)
            : renderLoginButton(props.handleClickLogin)}
        </ul>
      </div>
    </nav>
  </header>
);

// const toolbar = props => (
//   <div className="navbar">
//     <div className="navbar__logo">
//       <a className=""href="/"><img className="navbar__logo--img" src="logo.png" alt="logo"/></a>
//     </div>
//     <div className="navbar__links">
//       <ul>
//         <li><a onClick={props.handleClickExplore}>Classes</a></li>
//         <li><a>Gym Registration</a></li>
//         <li><a>Pricing</a></li>
//         {props.loggedIn
//           ? renderProfileButton(props.renderProfile)
//           : renderLoginButton(props.handleClickLogin)}
//       </ul>
//     </div>
//     <div className="navbar__small">
//       <DrawerToggleButton click={props.drawerClickHandler} />
//     </div>
//   </div>
// );

function renderLoginButton(click) {
  return (
    <li onClick={click}>
      <a>Login</a>
    </li>
  );
}

function renderProfileButton(click) {
  return (
    <li onClick={click}>
      <a>Profile</a>
    </li>
  );
}

export default toolbar;
