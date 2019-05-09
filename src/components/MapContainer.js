import React from 'react'
import {GoogleApiWrapper, Map, InfoWindow, Marker} from 'google-maps-react';


export class MapContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      address: {lat: 0, lng:0},
      renderMap: false
    }
  }

  componentWillMount(){
    this.setState({
      address: this.props.address,
      renderMap: true
    })
  }

  shouldComponentUpdate(prevProps, nextProps){
    console.log('Should update?')
      return this.props.address != this.state.address
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
  // newMap(){
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 10,
  //     center: {lat: -33.9, lng: 151.2}
  //   });
  // }

  returnMap(){

    const map =  <Map
                  google={this.props.google}
                  style={this.style}
                  center={{
                     lat: this.state.address.lat,
                     lng: this.state.address.lng
                   }}
                   zoom={15}  >
                  <InfoWindow onClose={this.onInfoWindowClose}>
                      <div>
                        <h1>New York</h1>
                      </div>
                  </InfoWindow>
                </Map>
    const marker = <Marker
            onClick={this.onMarkerClick}
            map={map}
            name={'Current location'}
            position={this.state.address}
    />


    return(map)
  }

  render() {
    return(
      this.state.renderMap ? this.returnMap() : null
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDrRzgxssfS7vlV28d7z-aNHqweThTs7Sw")
})(MapContainer)
