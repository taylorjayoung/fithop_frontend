import React, { Component } from "react";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import "./Home.css";
// import "./Home2.css";

export default class Home extends Component {
  render() {
    return (
      <div className="HomeDivWrapper">
        <div className="HomeBackgroundLineDiv">
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>

        <div className="HomeDiv">
          <div className="Div1">
            <div className="SolganDiv">
              <span>Fitness Classes </span>
              <span>For 90% Off </span>
            </div>

            <div className="SignUpDiv">
              <p className="SignUpLink" onClick={this.props.handleClickSignUp}>
                Sign Up Free
              </p>
            </div>
          </div>

          <div className="Div2">
            <div className="ImageDiv">
              <div className="ExploreClassesDiv">
                <p
                  className="ExploreClassesLink"
                  onClick={this.props.handleClickExplore}
                >
                  Explore Classes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default class Home extends Component {
//   render() {
//     return (
//       <div className="home">
//         <div class="image--container">
//           <img className="background-img" src="image-1.jpg" />
//           <img className="background-img" src="image-2.jpeg" />
//           <img className="background-img" src="image-3.jpeg" />
//           <img className="background-img" src="image-4.jpeg" />
//           <img className="background-img" src="image-5.jpeg" />
//         </div>
//         <div class="home--container">
//           <div class="home__header">Fitness Classes for 90% Off</div>
//           <div class="home__content">
//             <div className="home--signupLink divLink" onClick={this.props.handleClickSignUp}>Sign Up Free</div>
//             <div className="home--classLink divLink" onClick={this.props.handleClickExplore}>Explore Classes</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
