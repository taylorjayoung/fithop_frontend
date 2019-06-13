import React, { Component, Fragment } from "react";
import "./TrainersMain.css"

export default class TrainersMain extends Component {
  render() {
    return (
      <div className="trainers__main">
        <div className="trainers__container">

          <div className="calendar__week">
            <div>Day of week</div>
          </div>

          <div className="trainer__container">

            <div className="trainer">
              <div className="trainer__header">Trainer 1</div>
              <div className="trainer__content">
                <div className="trainer__info">
                  <div className="trainer__info--main">
                    <img className="trainer__img"
                      src="data:image/jpeg;base64,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"
                      alt="Trainer Profile Picture"/>
                    <div className="trainer__rating">★★★★★</div>
                  </div>
                  <div className="trainer__info--sub">Trainer Information</div>
                </div>
                <div className="calendar__times">calendar times</div>
              </div>
            </div>

          </div>

        </div>
        <div className="trainers__map__container">Map</div>
      </div>
    );
  }
}
