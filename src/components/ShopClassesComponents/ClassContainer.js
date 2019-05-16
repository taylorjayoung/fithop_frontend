import React, { Component } from "react";
import Geocode from "react-geocode";


import MapContainer from "../MapContainer";
import GoogleApiWrapper from "../MapContainer";
import "./ClassContainer.css";
import ListCards from "./ListCards";

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

  // async componentWillReceiveProps(nextProps) {
  //   if (
  //     nextProps.locationFilters.length > 0 ||
  //     nextProps.gymFilters.length > 0 ||
  //     nextProps.priceFilters.length > 0 ||
  //     nextProps.typeFilters.length > 0
  //   ) {
  //     //matches will be the  classes that have a neighborhood attribute matching a location filter
  //     const matches = this.state.classes.filter(c => {
  //       return (
  //         nextProps.locationFilters.includes(c.neighborhood) ||
  //         nextProps.gymFilters.includes(c.gym) ||
  //         nextProps.typeFilters.includes(c.type) ||
  //         nextProps.priceFilters.includes(c.price)
  //       );
  //     });
  //     this.setState({
  //       priceFilters: nextProps.priceFilters || this.state.priceFilters,
  //       typeFilters: nextProps.typeFilters || this.state.typeFilters,
  //       locationFilters:
  //         nextProps.locationFilters || this.state.locationFilters,
  //       gymFilters: nextProps.gymFilters || this.state.gymFilters,
  //       filteredClasses: matches
  //     });
  //   } else {
  //     this.setState({
  //       priceFilters: nextProps.priceFilters || this.state.priceFilters,
  //       typeFilters: nextProps.typeFilters || this.state.typeFilters,
  //       locationFilters:
  //         nextProps.locationFilters || this.state.locationFilters,
  //       gymFilters: nextProps.gymFilters || this.state.gymFilters,
  //       filteredClasses: this.state.classes
  //     });
  //   };
  // };

  getGyms = () => {
    fetch("http://localhost:3000/gyms")
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

        <div className={"SkinnyCardContainer"}>
          {this.state.gyms
            ? ListCards(
                this.state.gyms,
                this.setCurrentClass,
                this.props.viewClass,
                this.props.bookNow,
                this.state.searchterm
              )
            : null}
        </div>

        <div id="mapDiv">
          {this.state.gyms ? this.renderMap() : null}
        </div>

      </div>
    );
  }
}
