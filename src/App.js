import React, { Fragment, Component } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ShopClasses from "./components/ShopClassesComponents/ShopClasses";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    home: false,
    showLogin: false,
    showSignUp: false,
    exploreClasses: false,
    user: null,
    loggedIn: false,
    renderProfile: false,
    sideDrawerOpen: false
  };

  handleClickLogin = () => {
    this.setState({ showLogin: true, home: false });
  };

  handleClickSignUp = () => {
    this.setState({ showSignUp: true, home: false });
  };

  handleClickExplore = () => {
    this.setState({
      exploreClasses: true,
      home: false
    });
  };

  handleClickFalse = () => {
    this.setState({ showLogin: false, showSignUp: false, home: true });
  };

  handleClickHome = () => {
    this.setState({ loggedIn: false, exploreClasses: false });
  };

  setUser = user => {
    debugger;
    this.setState({
      user: user,
      loggedIn: true,
      showSignUp: false,
      showLogin: false,
      exploreClasses: true
    });
  };

  handleClickLogout = () => {
    // fetch('http://localhost:3000/logout', {
    fetch("https://study-js-backened.herokuapp.com/logout", {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          showLogin: false,
          showSignUp: false,
          exploreClasses: false,
          loggedIn: false,
          user: null
        });
      });
  };

  renderProfileLink = () => {
    return (
      <div
        className="ProfileButton"
        id={this.state.user.id}
        onClick={event => this.renderProfile(event)}
      >
        Profile
      </div>
    );
  };

  renderProfile = event => {
    this.setState({
      renderProfile: true,
      exploreClasses: false
    });
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }
    return (
      <React.Fragment>
        <div style={{ height: "100%" }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: "64px" }}>
            <p>This is Content</p>
          </main>
          {this.state.home ? (
            <Home
              handleClickLogin={this.handleClickLogin}
              handleClickExplore={this.handleClickExplore}
              handleClickSignUp={this.handleClickSignUp}
            />
          ) : null}
          {this.state.showLogin || this.state.showSignUp ? (
            <div id="login_background" />
          ) : null}
          {this.state.showLogin ? (
            <Login
              handleClickFalse={this.handleClickFalse}
              setUser={this.setUser}
            />
          ) : null}
          {this.state.showSignUp ? (
            <SignUp
              handleClickFalse={this.handleClickFalse}
              setUser={this.setUser}
            />
          ) : null}
          <div className="NavBar">
            {this.state.loggedIn ? this.renderProfileLink() : null}
          </div>
          {this.state.exploreClasses ? <ShopClasses /> : null}
          {this.state.renderProfile ? <Profile user={this.state.user} /> : null}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
