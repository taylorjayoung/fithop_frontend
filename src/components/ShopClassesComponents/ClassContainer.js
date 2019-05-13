import React, { Component } from "react";
import Geocode from "react-geocode";


import MapContainer from "../MapContainer";
import GoogleApiWrapper from "../MapContainer";
import "./ClassContainer.css";
import listCards from "./listCards";

export default class ClassContainer extends Component {
  constructor(props){
    super(props)
    this.getCoordinatesArray = this.getCoordinatesArray.bind(this)
  }

  state = {
    classes: null,
    view: true,
    currentClass: "",
    address: null,
    locationFilters: [],
    gymFilters: [],
    priceFilters: [],
    typeFilters: [],
    filteredClasses: null,
    searchterm: "",
    coordinatesArr: []
  };

  async componentDidMount() {
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

  async componentWillReceiveProps(nextProps) {
    if (
      nextProps.locationFilters.length > 0 ||
      nextProps.gymFilters.length > 0 ||
      nextProps.priceFilters.length > 0 ||
      nextProps.typeFilters.length > 0
    ) {
      //matches will be the  classes that have a neighborhood attribute matching a location filter

      const matches = this.state.classes.filter(c => {
        return (
          nextProps.locationFilters.includes(c.neighborhood) ||
          nextProps.gymFilters.includes(c.gym) ||
          nextProps.typeFilters.includes(c.type) ||
          nextProps.priceFilters.includes(c.price)
        );
      });
      const coords = await this.getCoordinatesArray(matches)
      this.setState({
        priceFilters: nextProps.priceFilters || this.state.priceFilters,
        typeFilters: nextProps.typeFilters || this.state.typeFilters,
        locationFilters:
          nextProps.locationFilters || this.state.locationFilters,
        gymFilters: nextProps.gymFilters || this.state.gymFilters,
        filteredClasses: matches,
        coordinatesArr: coords
      });
    } else {
      this.setState({
        priceFilters: nextProps.priceFilters || this.state.priceFilters,
        typeFilters: nextProps.typeFilters || this.state.typeFilters,
        locationFilters:
          nextProps.locationFilters || this.state.locationFilters,
        gymFilters: nextProps.gymFilters || this.state.gymFilters,
        filteredClasses: this.state.classes
      });
    }
  }

  getClasses = () => {
    fetch("http://localhost:3000/fitness_classes")
      .then(res => res.json())
      .then(jsonData => {
        this.setState(
          {
            classes: jsonData,
            filteredClasses: jsonData
          }, () => {
            this.getCoordinatesArray()

          },
          classes => this.props.setParentClasses(jsonData)
        )

      })
      .catch(e => console.log(e));
  };

  setCurrentAddress = async () => {
    let currentAddress;

    if (this.state.currentClass) {
      currentAddress = this.state.currentClass.address;
    } else {
      currentAddress = "New York City";
    }

    this.setState({
      address: await this.translateAddressToCoordinates(currentAddress).then(
        function(response) {
          return response;
        }
      )
    });
  };
  setCurrentClass = async event => {
    //this async function takes the click event from an individual class card
    // it matches the id of the card with a class in the state classes array
    if (
      event.target.value === "View Class" ||
      event.target.value === "Book Now"
    ) {
      return;
    }
    const selectedClass = this.state.classes.find(c => {
      return c.id === parseInt(event.target.id);
    });

  };

  async getCoordinatesArray(matches){
    if(!matches){
      const {classes} = this.state
      const coordArray = await Promise.all(classes.map(c => {
          if (c.address) return { "id": c.id, "coordinates": this.getCoordinates(c.address)}
      }))
      this.setState({coordinatesArr: coordArray })
    } else {
      const coordArray = await Promise.all(matches.map(c => {
          if (c.address) return { "id": c.id, "coordinates": this.getCoordinates(c.address)}
      }))
      return coordArray
    }
  }

  async getCoordinates(address){
    try {
      const result = await Geocode.fromAddress(address).then(
        response => response.results[0].geometry.location
      );
      return result;
    } catch (e) {
      console.log(e);
    }

  }

  renderMap() {
    return (
      <div className="mapDiv">
        <MapContainer
          coordinatesArr={this.state.coordinatesArr}
          filteredClasses={this.state.filteredClasses}
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
        {this.props.displaySearchAndViewTab ? this.displaySearch() : null}

        <div
          className={
            this.state.view === "List" ? "CardContainer" : "SkinnyCardContainer"
          }
        >
          {this.state.filteredClasses
            ? listCards(
                this.state.view,
                this.state.filteredClasses,
                this.setCurrentClass,
                this.props.viewClass,
                this.props.bookNow,
                this.state.searchterm
              )
            : null}
        </div>

        <div id="mapDiv">
          {this.state.classes ? this.renderMap() : null}
        </div>

      </div>
    );
  }
}
