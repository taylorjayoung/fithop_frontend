import React, {Component} from 'react'
import './FilterBar.css'

export default class FilterBar extends Component {
  render(){
    return (
        <div className="FilterBar">
          <div className="LocationPreferenceDiv">

            <form>
            <p className="filter-bar__header location">Location</p>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                UES
                <input type="checkbox"value="UES" className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                Midtown East
                <input type="checkbox"value="Midtown East" className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                Midtown
                <input type="checkbox"value="Midtown" className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                Midtown West
                <input type="checkbox"value="Midtown West" className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                UWS
                <input type="checkbox"value="UWS" className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                LES
                <input type="checkbox"value="LES" className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                East Village
                <input type="checkbox"value="East Village" className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                Tribeca
                <input type="checkbox"value="Tribeca" className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                Midtown West
                <input type="checkbox"value="Midtown West" className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                Brooklyn
                <input type="checkbox"value="Brooklyn" className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                Queens
                <input type="checkbox"value="Queens" className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                Harlem
                <input type="checkbox"value="Harlem" className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.locationCheckHandler(event)} className="locationListing">
                Soho
                <input type="checkbox"value="Soho" className="checkbox"/>
              </label>

            </form>

          </div>
          <div className="PricePreferenceDiv">

            <form>
              <p className="filter-bar__header">Price</p>

                <label onChange={(event) => this.props.priceCheckHandler(event)} className="priceListing">
                  5-10
                  <input type="checkbox"value="5-10" className="checkbox"/>
                </label>

                <label onChange={(event) => this.props.priceCheckHandler(event)} className="priceListing">
                  10-20
                  <input type="checkbox"value="10-20" className="checkbox"/>
                </label>

                <label onChange={(event) => this.props.priceCheckHandler(event)} className="priceListing">
                  20+
                  <input type="checkbox"value="20+" className="checkbox"/>
                </label>

            </form>

          </div>

          <div className="GymPreferenceDiv">
            <form>
              <p className="filter-bar__header">Gym</p>
              <label onChange={(event) => this.props.gymCheckHandler(event)} className="gymListing">
                Barry's Bootcamp
                <input type="checkbox" value="Barry's Bootcamp"  className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.gymCheckHandler(event)} className="gymListing">
                NYSC
                <input type="checkbox" value="NYSC"  className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.gymCheckHandler(event)} className="gymListing">
                Soul Cycle
                <input type="checkbox" value="Soul Cycle"  className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.gymCheckHandler(event)} className="gymListing">
                FlyWheel
                <input type="checkbox" value="FlyWheel"  className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.gymCheckHandler(event)} className="gymListing">
                Fhitting Room
                <input type="checkbox" value="Fhitting Room"  className="checkbox"/>
              </label>

              <label onChange={(event) => this.props.gymCheckHandler(event)} className="gymListing">
                KickAxe
                <input type="checkbox" value="KickAxe"  className="checkbox"/>
              </label>

            </form>

          </div>


          <div className="TypePreferenceDiv">

            <form>

              <p className="filter-bar__header">Type</p>

                <label onChange={(event) => this.props.typeCheckHandler(event)} className="typeListing">
                  KickBoxing
                  <input type="checkbox"value="KickBoxing" className="checkbox"/>
                </label>

                <label onChange={(event) => this.props.typeCheckHandler(event)} className="typeListing">
                  Cycling
                  <input type="checkbox"value="Cycling" className="checkbox"/>
                </label>

                <label onChange={(event) => this.props.typeCheckHandler(event)} className="typeListing">
                  Cardio
                  <input type="checkbox"value="Cardio" className="checkbox"/>
                </label>

                <label onChange={(event) => this.props.typeCheckHandler(event)} className="typeListing">
                  Bootcamp
                  <input type="checkbox"value="Bootcamp" className="checkbox"/>
                </label>

                <label onChange={(event) => this.props.typeCheckHandler(event)} className="typeListing">
                  Running
                  <input type="checkbox"value="Running" className="checkbox"/>
                </label>

            </form>

          </div>
        </div>
    )
  }
}
