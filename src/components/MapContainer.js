import React from 'react'
import {GoogleApiWrapper, Map, InfoWindow, Marker} from 'google-maps-react';


export class MapContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      address: {lat: 0, lng:0}
    }
  }

  componentWillMount(){
    this.setState({
      address: this.props.address
    })
  }

  shouldComponentUpdate(prevProps, nextProps){
    console.log('Should update?')
      return this.props.address != this.state.address
  }
  componentWillReceiveProps(nextProps){
    debugger
    if(this.props.address != this.state.address){
      this.setState({
        address: nextProps.address
      })
    }
  }

  style = {
    width: '100%',
    height: '100%'
  }

  render() {
    return(
      <Map
        google={this.props.google}
        style={this.style}
        center={{
           lat: this.state.address.lat,
           lng: this.state.address.lng
         }}
         zoom={15}  >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>New York</h1>
            </div>
        </InfoWindow>
      </Map>    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDrRzgxssfS7vlV28d7z-aNHqweThTs7Sw")
})(MapContainer)
