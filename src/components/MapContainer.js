import React from 'react'
import {GoogleApiWrapper, Map, InfoWindow, Marker} from 'google-maps-react';
import GoogleMapReact from 'google-maps-react';
import Geocode from "react-geocode";


export class MapContainer extends React.Component {
  static defaultProps = {
    center: {
      lat: 4.76,
      lng: 3.97
    },
    zoom: 11
  }
  constructor(props){
    console.log('props: ', props.filteredClasses)
    super(props)
    this.state = {
      classes: props.filteredClasses || props.coordinatesArr,
      renderMap: true
    }
  }
  async componentDidMount(){
    this.setState({
      address: this.props.address,
      renderMap: true,
    })
  }


  shouldComponentUpdate(prevProps, nextProps){
    console.log("----------------------------")
    console.log("----------------------------")
    console.log("----------------------------")
    console.log(
      "this.props: ", this.props.filteredClasses,
      "prevProps", prevProps.filteredClasses,
      'nextProps', nextProps
    )
      return this.props.filteredClasses != prevProps.filteredClasses
  }

  componentWillReceiveProps(nextProps){
    if(this.props.address != this.state.address){
      this.setState({
        address: nextProps.address,
        renderMap: true
      })
    }
  }

  style = {
    width: '100%',
    height: '100%'
  }

  renderMarkers = () => {
    const { coordinatesArr, filteredClasses } = this.props
    console.log('render markers: ', filteredClasses)
    if(filteredClasses) return filteredClasses.map( coord =>{
      console.log(coord)
      return <Marker  position={coord}/>}
    )
    else return coordinatesArr.map( coord => <Marker  position={coord}/>)
    //setting array variable to the filtered classes that are being passed down as props
    //if no filtered classes, it will default to coordinatesArr

  }

  returnMap(){

    return(
      <Map
          google={this.props.google}
          style={this.style}
          zoom={this.props.zoom}
          initialCenter={{
            lat: 40.7634977,
            lng: -73.96202439999999
          }}
          >

          <Marker
            position={{lat: 40.7634977,
                      lng: -73.96202439999999
                    }}
          />
          {this.renderMarkers()}
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>New York</h1>
              </div>
          </InfoWindow>
        </Map>
    )
  }

  render() {
    const { renderMap } = this.state

    return(
      renderMap ? this.returnMap()  : null
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDrRzgxssfS7vlV28d7z-aNHqweThTs7Sw")
})(MapContainer)
