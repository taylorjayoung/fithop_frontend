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
    const indexOfFilterToRemove = this.state.locationFilters.indexOf(this.state.locationFilters.find(f => f === filter))
    const updatedFilters = this.state.locationFilters.splice(indexOfFilterToRemove, 1)
    this.setState({
      locationFilters: updatedFilters
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
    const indexOfFilterToRemove = this.state.gymFilters.indexOf(this.state.gymFilters.find(f => f === filter))
    const updatedFilters = this.state.gymFilters.splice(indexOfFilterToRemove, 1)
    this.setState({
      gymFilters: updatedFilters
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
    const indexOfFilterToRemove = this.state.priceFilters.indexOf(this.state.priceFilters.find(f => f === filter))
    const updatedFilters = this.state.priceFilters.splice(indexOfFilterToRemove, 1)
    this.setState({
      priceFilters: updatedFilters
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
    const indexOfFilterToRemove = this.state.typeFilters.indexOf(this.state.typeFilters.find(f => f === filter))
    const updatedFilters = this.state.typeFilters.splice(indexOfFilterToRemove, 1)
    this.setState({
      typeFilters: updatedFilters
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
