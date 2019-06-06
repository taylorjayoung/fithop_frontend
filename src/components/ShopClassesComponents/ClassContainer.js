import React, { Component } from "react";
import Geocode from "react-geocode";


import MapContainer from "../MapContainer";
import GoogleApiWrapper from "../MapContainer";
import "./ClassContainer.css";
import listCards from "./listCards";

export default class ClassContainer extends Component {
  constructor(props){
    super(props)
  }

  state = {
    view: true,
    address: null,
    locationFilters: [],
    gymFilters: [],
    priceFilters: [],
    typeFilters: [],
    filteredClasses: null,
    searchterm: ""
  };

  async componentDidMount() {
    console.log('class container component mounted')
    Geocode.setApiKey("AIzaSyDMIBD2wef6TI6cS-AkncJd7FmaSnWfoyM");
    this.getClasses();
  }

  shouldComponentUpdate(prevProps, nextProps) {
    return (
      this.props.locationFilters !== nextProps.locationFilters ||
      this.props.typeFilters !== nextProps.typeFilters ||
      this.props.gymFilters !== nextProps.gymFilters ||
      this.props.priceFilters !== nextProps.priceFilters ||
      nextProps.view
    );
  }

  getClasses = () => {
    fetch("http://localhost:3000/fitness_classes")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
            fitness_classes: jsonData,
            displayed_classes: jsonData.slice(0, 20)
          }, () => console.log('found classes'));
      })
      .catch(e => console.log(e));
  };


  renderMap() {
    return (
      <div className="mapDiv">
        <MapContainer
          classes={this.state.fitness_classes}
        />
      </div>
    );
  }
  searchHandler = event => {
    this.setState({
      searchterm: event.target.value
    });
  };

  displaySearch = () => {
    return (
      <>
        <input
          className="ClassSearchBar"
          type="search"
          placeholder="Search by Gym or Class"
          onChange={event => this.searchHandler(event)}
        />
      </>
    );
  };

  render() {
    return (
      <div className="ClassListingContainer">
        <div className="listings__container">
          {this.displaySearch()}
          <div className="class_listing_div">
            {this.state.fitness_classes ? listCards(this.state.displayed_classes) : null}
          </div>
        </div>
        <div id="mapDiv">
          {this.state.fitness_classes ? this.renderMap() : null}
        </div>

      </div>
    );
  }
}
