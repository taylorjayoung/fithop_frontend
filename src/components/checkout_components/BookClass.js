import React, {Component} from 'react'

export default class BookClass extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  componentDidMount(){
    debugger
  }

  render(){
    return(
      <h1>
      Book Now</h1>
    )
  }
}
