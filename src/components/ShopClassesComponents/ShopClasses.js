import React, {Component} from 'react'
import './ShopClasses.css'
import FilterBar from './FilterBar'
import ClassContainer from './ClassContainer'

export default class ShopClasses extends Component {
  render(){
    return (
      <div className="ShopContainer">
        <div className="ShopContainerHeader"> <h1> ShopContainer </h1> </div>
        <FilterBar />
        <ClassContainer />
      </div>
    )
  }
}
