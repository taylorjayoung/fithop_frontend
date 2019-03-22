import React, {Component} from 'react'
import './ShopClasses.css'
import FilterBar from './FilterBar'
import ClassContainer from './ClassContainer'

export default class ShopClasses extends Component {
  state = {
    locationFilters: [],
    gymFilters: [],
    priceFilters: [],
    typeFilters: []
  }

  locationCheckHandler = (event) => {
    event.target.checked ? this.locationAddFilter(event.target.value) : this.locationRemoveFilter(event.target.value)
  }

  locationAddFilter = (filter) => {
    this.setState({
      locationFilters: [...this.state.locationFilters, filter]
    })
  }

  locationRemoveFilter = (filter) => {
    const arrayCopy = this.state.locationFilters
    const arrayFiltered = arrayCopy.filter(location => location !== filter)
    this.setState({
      locationFilters: arrayFiltered
    })
  }

  gymCheckHandler = (event) => {
    event.target.checked ? this.gymAddFilter(event.target.value) : this.gymRemoveFilter(event.target.value)
  }

  gymAddFilter = (filter) => {
    this.setState({
      gymFilters: [...this.state.gymFilters, filter]
    })
  }

  gymRemoveFilter = (filter) => {
    const arrayCopy = this.state.gymFilters
    const arrayFiltered = arrayCopy.filter(gym => gym !== filter)
    this.setState({
      gymFilters: arrayFiltered
    })
  }

  priceCheckHandler = (event) => {
    event.target.checked ? this.priceAddFilter(event.target.value) : this.priceRemoveFilter(event.target.value)
  }

  priceAddFilter = (filter) => {
    this.setState({
      priceFilters: [...this.state.priceFilters, filter]
    })
  }

  priceRemoveFilter = (filter) => {
    const arrayCopy = this.state.priceFilters
    const arrayFiltered = arrayCopy.filter(price => price !== filter)
    this.setState({
      priceFilters: arrayFiltered
    })
  }

  typeCheckHandler = (event) => {
    event.target.checked ? this.typeAddFilter(event.target.value) : this.typeRemoveFilter(event.target.value)
  }

  typeAddFilter = (filter) => {
    this.setState({
      typeFilters: [...this.state.typeFilters, filter]
    })
  }

  typeRemoveFilter = (filter) => {
    const arrayCopy = this.state.typeFilters
    const arrayFiltered = arrayCopy.filter(type => type !== filter)
    this.setState({
      typeFilters: arrayFiltered
    })
  }


  render(){
    return (
      <div className="ShopContainer">
        <div className="ShopContainerHeader"> <h1> ShopContainer </h1> </div>
        <FilterBar
            locationCheckHandler={this.locationCheckHandler}
            gymCheckHandler={this.gymCheckHandler}
            priceCheckHandler={this.priceCheckHandler}
            typeCheckHandler={this.typeCheckHandler}

            />
        <ClassContainer locationFilters={this.state.locationFilters} gymFilters={this.state.gymFilters}  priceFilters={this.state.priceFilters} typeFilters={this.state.typeFilters} />
      </div>
    )
  }
}
