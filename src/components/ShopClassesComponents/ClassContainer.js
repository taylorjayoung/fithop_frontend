import React, {Component} from 'react'
import MapContainer from '../MapContainer'
import GoogleApiWrapper from '../MapContainer'
import './ClassContainer.css'
import Geocode from "react-geocode";
import listCards from "./listCards"
export default class ClassContainer extends Component {
  constructor(props){
    super(props)
    this.translateAddressToCoordinates = this.translateAddressToCoordinates.bind(this)
    console.log("bound")
  }

  async componentDidMount(){
    Geocode.setApiKey("AIzaSyDMIBD2wef6TI6cS-AkncJd7FmaSnWfoyM");
    let currentAddress
    if(this.state.currentClass){
      currentAddress = this.state.currentClass.address
    } else {
       currentAddress = "New York City"

    }
    this.setState({
      address: await this.translateAddressToCoordinates(currentAddress).then(function (response) {
           return response
         })
    })
}

  state = ({
    classes:
    [
      {
        name: "Pilates",
        id: 1,
        prie: 50,
        address: "1216 2nd Ave, New York, NY 10065",
        time: "2:00"
      },
      {
        name: "Cycling",
        id: 2,
        price: 20,
        address: "107 E 27th St, New York, NY 10016",
        time: "4:00"
      },
      {
        name: "Cycling",
        id: 3,
        price: 20,
        address: "135 W 20th St, New York, NY 10011",
        time: "4:00"
      }
    ],
      view: "List",
      currentClass: "",
      address: null
  })

  viewHandler = (event) => {
    if(event.target.innerText === "List"){
      if(this.state.view === "List"){
        return
      }
      this.setState({
        view: "List"
      })
    }

    else if(event.target.innerText === "Map"){
      if(this.state.view === "Map"){
        return
      }
      this.setState({
        view: "Map"
      })
    }

  }


setCurrentClass = async (event) => {
//this async function takes the click event from an individual class card
// it matches the id of the card with a class in the state classes array

  const selectedClass = this.state.classes.filter(c => {
    return c.id === parseInt(event.target.id)
  })

  //then it calls an async function to convert the address of the class
  //into a coordinate pair for the google maps api
  const address = await this.translateAddressToCoordinates(selectedClass[0].address).then(function (response) {
       return response
     })

//finally it sets the state
  this.setState({
    currentClass: selectedClass[0],
    address: address
  }, () => console.log('class container state change'))
}


 async translateAddressToCoordinates(address){
   try {
     const result = await Geocode.fromAddress(address).then(response => response.results[0].geometry.location)
     return result
  } catch(e){ console.log(e)}
}


renderMap(){
  return (
    <div className="mapDiv">
      <MapContainer address={this.state.address}/>
    </div>
  )
}

  render(){
    return (
      <div className="ClassListingContainer">
        <div className="ViewControlTab">
          <div className="ListView" onClick={(event)=> this.viewHandler(event)} >List</div>
          <div className="MapView"  onClick={(event)=> this.viewHandler(event)}>Map</div>
        </div>

        <h2 className="ClassContainerHeader"> Class container </h2>
        <input className="ClassSearchBar" type="search" placeholder="Search by Gym or Class"/>

        <div className={this.state.view === "List" ? "CardContainer" : "SkinnyCardContainer"}>
          {listCards(this.state.view, this.setCurrentClass)}
        </div>
        <div id="mapDiv">{this.state.view === "Map" ? this.renderMap() : null}
        </div>
        <div>{this.state.currentClass.name ?  this.state.currentClass.name  :"New"}</div>

      </div>

    )
  }
}
