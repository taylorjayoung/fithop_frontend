import React, { Component } from "react";
import "./Checkout.css";
import PaypalButton from "./PaypalButton";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="CheckoutWrapper">
        <div className="CheckoutBox">Checkout</div>
        <div className="CheckoutButtonDiv">
          <PaypalButton />
        </div>
        <div className="NavigationDiv">
          <input
            type="button"
            value="Back to Classes"
            onClick={event => this.props.rerenderClasses(event)}
          />
        </div>
      </div>
    );
  }
}
