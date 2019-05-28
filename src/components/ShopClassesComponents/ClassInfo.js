import React, { Component } from "react";
// import "./ClassInfo.css";

export default class ClassInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ClassInfoDiv">

      </div>
    );
  }
}


// <div className="ClassInfoWrapper">
//   <div className="ClassInfoHeader">
//     <h1>{this.state.class.name}</h1>
//   </div>
//   <div className="ClassPicture">Image Goes Here</div>
//   <div className="ClassInfo">
//     <div className="ClassDescription">
//       Class Description: Lorem Ipsum Dorset
//     </div>
//     <div className="ClassPrice">${this.state.class.price}</div>
//     <div className="ClassAddress">{this.state.class.address}</div>
//     <div className="ButtonDiv">
//       <input
//         className="GoBackButton"
//         type="button"
//         value="Go Back"
//         onClick={() => this.props.rerenderClasses()}
//       />
//       <input
//         className="BookNowButton"
//         type="button"
//         value="Book Now"
//         onClick={event => this.props.bookNow(event)}
//       />
//     </div>
//   </div>
// </div>
