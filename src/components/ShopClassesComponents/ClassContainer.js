import React, { Component } from "react";
import MapContainer from "../MapContainer";
import GoogleApiWrapper from "../MapContainer";
import "./ClassContainer.css";
import Geocode from "react-geocode";
import listCards from "./listCards";
export default class ClassContainer extends Component {
  constructor(props) {
    super(props);
    this.translateAddressToCoordinates = this.translateAddressToCoordinates.bind(
      this
    );
  }

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

  componentWillReceiveProps(nextProps) {
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
      this.setState({
        priceFilters: nextProps.priceFilters || this.state.priceFilters,
        typeFilters: nextProps.typeFilters || this.state.typeFilters,
        locationFilters:
          nextProps.locationFilters || this.state.locationFilters,
        gymFilters: nextProps.gymFilters || this.state.gymFilters,
        filteredClasses: matches
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
          },
          classes => this.props.setParentClasses(jsonData)
        );
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

  state = {
    classes: null,
    view: "List",
    currentClass: "",
    address: null,
    locationFilters: [],
    gymFilters: [],
    priceFilters: [],
    typeFilters: [],
    filteredClasses: null
  };

  viewHandler = event => {
    if (event.target.innerText === "List") {
      if (this.state.view === "List") {
        return;
      }
      this.setState(
        {
          view: "List"
        },
        () => console.log(this.state.view)
      );
    } else if (event.target.innerText === "Map") {
      if (this.state.view === "Map") {
        return;
      }
      this.setState(
        {
          view: "Map"
        },
        () => console.log(this.state.view)
      );
    }
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
    //then it calls an async function to convert the address of the class
    //into a coordinate pair for the google maps api
    const address = await this.translateAddressToCoordinates(
      selectedClass.address
    ).then(function(response) {
      return response;
    });

    //finally it sets the state
    this.setState({
      currentClass: selectedClass,
      address: address
    });
  };

  async translateAddressToCoordinates(address) {
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
          address={this.state.address || this.state.classes[0].address}
        />
      </div>
    );
  }

  displaySearch = () => {
    return (
      <>
        {this.props.renderingCheckoutOrInfo ? null : (
          <div className="ViewControlTab">
            <div
              className="ListView"
              onClick={event => this.viewHandler(event)}
            >
              List
            </div>
            <div className="MapView" onClick={event => this.viewHandler(event)}>
              Map
            </div>
          </div>
        )}
        <input
          className="ClassSearchBar"
          type="search"
          placeholder="Search by Gym or Class"
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
                this.props.bookNow
              )
            : null}
        </div>

        <div id="mapDiv">
          {this.state.view === "Map" ? this.renderMap() : null}{" "}
        </div>
        <div>
          {this.state.currentClass.name ? this.state.currentClass.name : ""}{" "}
        </div>
      </div>
    );
  }
}
