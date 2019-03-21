import React from 'react'
import {GoogleApiWrapper, Map, InfoWindow, Marker} from 'google-maps-react';


export class MapContainer extends React.Component {
  style = {
    width: '100%',
    height: '100%'
  }

  function() {
  }
  render() {
  return (
    <Map
      google={this.props.google}
      style={this.style}
      initialCenter={{
         lat: this.props.data.lat,
         lng: this.props.data.lng
       }}
       zoom={15}  >
      {this.function()}
      <Marker onClick={this.onMarkerClick}
              name={'Current location'} />

      <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>New York</h1>
          </div>
      </InfoWindow>
    </Map>
  );
}
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDrRzgxssfS7vlV28d7z-aNHqweThTs7Sw")
})(MapContainer)
