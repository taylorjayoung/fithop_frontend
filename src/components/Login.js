import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    showPassword: false,
    username: "",
    password: ""
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleSubmitLogin = event => {
    event.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(data => {
        data.message === "Username or password is incorrect."
          ? window.alert("Incorrect username or password.")
          : this.props.setUser(data);
      })
      .catch(err => console.log(err));
  };

  handleChangeInput = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div id="login">
        <div id="login_container">
          <div className="close" onClick={this.props.handleClickFalse}>
            X
          </div>
          <form id="login_form_container" onSubmit={this.handleSubmitLogin}>
            <input
              className="login_form input"
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChangeInput}
            />
            <label className="login_form_label label" htmlFor="Username">
              Username
            </label>
            {this.state.showPassword ? (
              <input
                className="login_form input"
                id="password"
                type="text"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChangeInput}
              />
            ) : (
              <input
                className="login_form input"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChangeInput}
              />
            )}
            <label className="login_form_label label" htmlFor="Password">
              Password
            </label>
            {this.state.showPassword ? (
              <i
                id="eye_image"
                className="fa fa-eye"
                aria-hidden="true"
                onClick={this.handleClickShowPassword}
              />
            ) : (
              <i
                id="eye_image"
                className="fa fa-eye-slash"
                aria-hidden="true"
                onClick={this.handleClickShowPassword}
              />
            )}
            <button className="btn login">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
