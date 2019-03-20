import React, { Fragment, Component } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import Login from './components/Login'
import ShopClasses from './components/ShopClassesComponents/ShopClasses'
import Home from './components/Home'

class App extends Component {
  state = {
  home: true,
  showLogin: false,
  showSignUp: false,
  exploreClasses: false,
  user: null,
  loggedIn: false
}


  handleClickLogin = () => {
    this.setState({ showLogin : true })
  }

  handleClickSignUp = () => {
    this.setState({ showSignUp : true })
  }

  handleClickExplore = () => {
    this.setState({
      exploreClasses : true,
      home: false
    })
  }

  handleClickFalse = () => {
    this.setState({ showLogin : false, showSignUp : false })
  }

  handleClickHome = () => {
    this.setState({ loggedIn : false, exploreClasses : false })
  }

  setUser = (user) => {
    this.setState({ user: user, loggedIn: true, showSignUp : false, showLogin : false, exploreClasses : true })
  }

  handleClickLogout = () => {
    // fetch('http://localhost:3000/logout', {
    fetch('https://study-js-backened.herokuapp.com/logout', {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      this.setState ({ showLogin : false, showSignUp : false, exploreClasses: false, loggedIn : false, user: null })
    })
  }

  render() {
    return (
      <React.Fragment>
        <div id="app">
          {this.state.home ? <Home handleClickExplore={this.handleClickExplore} handleClickSignUp={this.handleClickSignUp} /> : null }
          {this.state.showLogin || this.state.showSignUp ? <div id="login_background"></div> : null }
          {this.state.showLogin ? <Login handleClickFalse={this.handleClickFalse} setUser={this.setUser}/> : null }
          {this.state.showSignUp ? <SignUp handleClickFalse={this.handleClickFalse} setUser={this.setUser}/> : null }
          {this.state.exploreClasses ? <ShopClasses /> : null }
        </div>
      </React.Fragment>
    );
  }
}

export default App;
