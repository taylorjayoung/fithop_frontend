import React, { Component } from "react";
import Geocode from "react-geocode";


import MapContainer from "../MapContainer";
import GoogleApiWrapper from "../MapContainer";
import "./ClassContainer.css";
import ListCards from "./listCards";

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
    searchterm: "",
    gyms: []
  };

  async componentDidMount() {
    Geocode.setApiKey("AIzaSyDMIBD2wef6TI6cS-AkncJd7FmaSnWfoyM");
    this.getGyms();
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

  getGyms = () => {
    fetch("http://localhost:3001/gyms")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
            gyms: jsonData
          });
      })
      .catch(e => console.log(e));
  };


  renderMap() {
    return (
      <div className="mapDiv">
        <MapContainer
          gyms={this.state.gyms}
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
        {this.displaySearch()}
        //below is style for each class, will have to be moved to list classes
        // link to indvidual class will have to use info from map function in list classes

        {this.listCards}

        <div id="mapDiv">
          {this.state.gyms ? this.renderMap() : null}
        </div>

      </div>
    );
  }
}
