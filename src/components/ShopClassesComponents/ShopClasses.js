import React, { Component, Fragment } from "react";
import "./ShopClasses.css";
import FilterBar from "./FilterBar";
import ClassContainer from "./ClassContainer";
import ClassInfo from "./ClassInfo";

export default class ShopClasses extends Component {
  state = {
    locationFilters: [],
    gymFilters: [],
    priceFilters: [],
    typeFilters: [],
    displayFilterBar: true,
    displayClasses: true,
    displayClassInfo: false,
    currentClass: null,
    renderingCheckoutOrInfo: false,
    displayCheckout: false
  };

//Is this the best way to filter?
//Converse with react people
  locationCheckHandler = event => {
    event.target.checked
      ? this.locationAddFilter(event.target.value)
      : this.locationRemoveFilter(event.target.value);
  };

  locationAddFilter = filter => {
    this.setState({
      locationFilters: [...this.state.locationFilters, filter]
    });
  };

  locationRemoveFilter = filter => {
    const arrayCopy = this.state.locationFilters;
    const arrayFiltered = arrayCopy.filter(location => location !== filter);
    this.setState({
      locationFilters: arrayFiltered
    });
  };

  gymCheckHandler = event => {
    event.target.checked
      ? this.gymAddFilter(event.target.value)
      : this.gymRemoveFilter(event.target.value);
  };

  gymAddFilter = filter => {
    this.setState({
      gymFilters: [...this.state.gymFilters, filter]
    });
  };

  gymRemoveFilter = filter => {
    const arrayCopy = this.state.gymFilters;
    const arrayFiltered = arrayCopy.filter(gym => gym !== filter);
    this.setState({
      gymFilters: arrayFiltered
    });
  };

  priceCheckHandler = event => {
    event.target.checked
      ? this.priceAddFilter(event.target.value)
      : this.priceRemoveFilter(event.target.value);
  };

  priceAddFilter = filter => {
    this.setState({
      priceFilters: [...this.state.priceFilters, filter]
    });
  };

  priceRemoveFilter = filter => {
    const arrayCopy = this.state.priceFilters;
    const arrayFiltered = arrayCopy.filter(price => price !== filter);
    this.setState({
      priceFilters: arrayFiltered
    });
  };

  typeCheckHandler = event => {
    event.target.checked
      ? this.typeAddFilter(event.target.value)
      : this.typeRemoveFilter(event.target.value);
  };

  typeAddFilter = filter => {
    this.setState({
      typeFilters: [...this.state.typeFilters, filter]
    });
  };

  typeRemoveFilter = filter => {
    const arrayCopy = this.state.typeFilters;
    const arrayFiltered = arrayCopy.filter(type => type !== filter);
    this.setState({
      typeFilters: arrayFiltered
    });
  };

  filterBarHandler = () => {
    this.setState({
      displayFilterBar: !this.state.displayFilterBar
    });
  };

  viewClass = (event, id) => {
    event.preventDefault();
    this.setState({
      currentClass: this.state.classes.find(c => {
        return c.id === id;
      }),
      displayClassInfo: true,
      renderingCheckoutOrInfo: true,
      displayFilterBar: false,
      displayClasses: false
    });
  };

  bookNow = (event, id) => {
    event.preventDefault();
    this.setState({
      currentClass: this.state.classes.find(c => {
        return c.id === id;
      }),
      displayCheckout: true,
      renderingCheckoutOrInfo: true,
      displayFilterBar: false,
      displayClasses: false,
      displayClassInfo: false
    });
  };

  setParentClasses = classes => {
    this.setState({
      classes: classes
    });
  };

  rerenderClasses = () => {
    this.setState({
      displayCheckout: false,
      renderingCheckoutOrInfo: false,
      displayFilterBar: true,
      displayClasses: true,
      displayClassInfo: false
    });
  };

  render() {
    return (
      <div className="shop_classes_container">
        {this.state.displayFilterBar ? (
          <FilterBar
            locationCheckHandler={this.locationCheckHandler}
            gymCheckHandler={this.gymCheckHandler}
            priceCheckHandler={this.priceCheckHandler}
            typeCheckHandler={this.typeCheckHandler}
          />
        ) : null}

        {this.state.displayClasses ? (
          <ClassContainer
            viewClass={this.viewClass}
            bookNow={this.bookNow}
            locationFilters={this.state.locationFilters}
            gymFilters={this.state.gymFilters}
            priceFilters={this.state.priceFilters}
            typeFilters={this.state.typeFilters}
            filterBarHandler={this.filterBarHandler}
            displaySearchAndViewTab={this.state.displayFilterBar}
            setParentClasses={this.setParentClasses}
            renderingCheckoutOrInfo={this.state.renderingCheckoutOrInfo}
          />
        ) : null}

        {this.state.displayClassInfo ? (
          <ClassInfo
            class={this.state.currentClass}
            rerenderClasses={this.rerenderClasses}
            bookNow={this.bookNow}
          />
        ) : null}

      </div>
    );
  }
}
