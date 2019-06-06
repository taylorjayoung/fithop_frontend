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
    super(props)
    this.state = {
      classes: props.classes,
      renderMap: true,
      markers: props.classes.map( g => {
        return(
        <Marker
          position={{
            lat: g.gym.latitude,
            lng: g.gym.longitude
        }}/>)
      })
    }
  }

  style = {
    width: '100%',
    height: '100%'
  }

  renderMarkers = () => {
      return this.state.markers
  }

  returnMap(){
    return(
      <Map
          google={this.props.google}
          style={this.style}
          zoom={11}
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

  render(){
    const { renderMap } = this.state

    return(
      renderMap ? this.returnMap()  : null
    )
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDrRzgxssfS7vlV28d7z-aNHqweThTs7Sw")
})(MapContainer)
