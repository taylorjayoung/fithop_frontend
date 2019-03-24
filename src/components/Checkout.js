import React, {Component} from 'react'
import  './Checkout.css'
import PaypalButton from './PaypalButton'


export default class Checkout extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    return (
      <div className="CheckoutWrapper">
        <PaypalButton />

      </div>

    )
  }
}
