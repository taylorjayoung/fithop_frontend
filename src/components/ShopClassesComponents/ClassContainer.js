import React, {Component} from 'react'
import MapContainer from '../MapContainer'
import './ClassContainer.css'
import Geocode from "react-geocode";

export default class ClassContainer extends Component {
  constructor(props){
    super(props)
    console.log("bound")
  }
  async componentDidMount(){
    Geocode.setApiKey("AIzaSyDMIBD2wef6TI6cS-AkncJd7FmaSnWfoyM");
    let address

    if(!this.state.currentClass){
       address = "New York City"
    } else {
       address = this.state.currentClass.address
    }
    this.setState({
      address: await this.translateAddressToCoordinates(address).then(function (response) {
           return response
         })
    }, () => console.log(this.state))
}

  state = ({
    view: "List",
    classes: null,
    currentClass: null,
    address: null
  })

  viewHandler = (event) => {
    if(event.target.innerText === "List"){
      if(this.state.view === "List"){
        return
      }
      this.setState({
        view: "List"
      }, () => console.log(this.state))
    }

    else if(event.target.innerText === "Map"){
      if(this.state.view === "Map"){
        return
      }
      this.setState({
        view: "Map"
      }, () => console.log(this.state))
    }

  }

  listCards = () => {
    return (
      <>
        <div className={this.state.view === "List" ? "ClassCard" : "SkinnyCard"}>Card1
          <div className={this.state.view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div className={this.state.view === "List" ? "ClassCard" : "SkinnyCard"}>Card2
          <div className={this.state.view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div className={this.state.view === "List" ? "ClassCard" : "SkinnyCard"}>Card3
          <div className={this.state.view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div className={this.state.view === "List" ? "ClassCard" : "SkinnyCard"}>Card4
          <div className={this.state.view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div className={this.state.view === "List" ? "ClassCard" : "SkinnyCard"}>Card5
          <div className={this.state.view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div className={this.state.view === "List" ? "ClassCard" : "SkinnyCard"}>Card6
          <div className={this.state.view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div className={this.state.view === "List" ? "ClassCard" : "SkinnyCard"}>Card7
          <div className={this.state.view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div className={this.state.view === "List" ? "ClassCard" : "SkinnyCard"}>Card8
          <div className={this.state.view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div className={this.state.view === "List" ? "ClassCard" : "SkinnyCard"}>Card9
          <div className={this.state.view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div className={this.state.view === "List" ? "ClassCard" : "SkinnyCard"}>Card10
          <div className={this.state.view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div className={this.state.view === "List" ? "ClassCard" : "SkinnyCard"}>Card11
          <div className={this.state.view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div className={this.state.view === "List" ? "ClassCard" : "SkinnyCard"}>Card12
          <div className={this.state.view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
      < />
    )
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
      <MapContainer data={this.state.address}/>
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
          {this.listCards()}
        </div>
          {this.state.view === "Map" ? this.renderMap() : null}

      </div>

    )
  }
}
