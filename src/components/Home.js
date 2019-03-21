import React, {Component} from 'react'

export default class Home extends Component {
  render(){
    return (
      <div id="app_container">
        <div className="btn app_login_btn" onClick={this.props.handleClickLogin}>Login</div>
        <div id="app_header_container">
          <span id="app_header_main">Welcome To</span>
          <span id="app_header_sub">
            <div className="Title">C</div>
            <div className="Title lowercase">l</div>
            <div className="Title lowercase">a</div>
            <div className="Title lowercase">s</div>
            <div className="Title lowercase">s</div>
            <div className="Title">F</div>
            <div className="Title lowercase">a</div>
            <div className="Title lowercase">s</div>
            <div className="Title lowercase">t</div>
          </span>
        </div>
        <div id="app_btns_container">
          <div className="btn" onClick={this.props.handleClickExplore}>Explore Classes</div>
          <div className="btn" onClick={this.props.handleClickSignUp}>Sign Up</div>
        </div>
      </div>
    )
  }
}
