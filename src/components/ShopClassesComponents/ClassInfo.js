import React, {Component} from 'react'
import PaypalButton from '../PaypalButton'
import './ClassInfo.css'

export default class ClassInfo extends Component {
  constructor(props){
    super(props)
    this.state  = {
      class: props.class
    }
  }

  render(){
    return (
      <div className="ClassInfoWrapper">
        <h1>{this.state.class.name}</h1>
        <PaypalButton />
      </div>

    )
  }
}
