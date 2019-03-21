import React, { Component } from 'react';
import './SignUp.css'

class SignUp extends Component {
  state = {
    showPassword: false,
    name: '',
    email: '',
    username: '',
    password: ''
  }

  handleSubmitSignUp = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      data.error === "Failed to create user." ? window.alert("Please fill out correct information.") : this.props.setUser(data)
    })
  }

  handleClickShowPassword = () => {
    this.setState ({ showPassword: !this.state.showPassword })
  }

  handleChangeInput = (event) => {
    event.preventDefault()
    this.setState ({ [event.target.name] : event.target.value})
  }

  render() {
    return (
      <div id="SignUp">
        <div id="SignUp_container">
          <div className="close" onClick={this.props.handleClickFalse}>X</div>
          <form id="SignUp_form_container" onSubmit={this.handleSubmitSignUp}>
            <input className="SignUp_form input" id="name" type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChangeInput}></input>
            <label className="SignUp_form_label label" htmlFor="Name">Name</label>
            <input className="SignUp_form input" id="email" type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChangeInput}></input>
            <label className="SignUp_form_label label" htmlFor="Email">Email</label>
            <input className="SignUp_form input" id="username" type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChangeInput}></input>
            <label className="SignUp_form_label label" htmlFor="Username">Username</label>
            {this.state.showPassword ? <input className="SignUp_form input" id="password" type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChangeInput}></input> : <input className="SignUp_form input" id="password" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChangeInput}></input>}
            <label className="SignUp_form_label label" htmlFor="Password">Password</label>
            {this.state.showPassword ? <i id="eye_image" className="fa fa-eye" aria-hidden="true" onClick={this.handleClickShowPassword}></i> : <i id="eye_image" className="fa fa-eye-slash" aria-hidden="true" onClick={this.handleClickShowPassword}></i>}
            <button className="btn SignUp">SignUp</button>
          </form>

        </div>
      </div>
    );
  }
}

export default SignUp;
