import React, { Component } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
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
//
//         <div className="home__left--container">
//           <div className="home__logo">
//             <span>Fitness Classes</span><br/>
//             <span>for</span><br/>
//             <span>90% Off</span>
//           </div>
//         </div>
//
//         <div className="home__right--container">
//           <div className="home__right--image-column-1">
//             <img className="home__right--image-column-1__img-1" src="image-1.jpeg" alt="image" />
//             <img className="home__right--image-column-1__img-2" src="image-2.jpeg" alt="image" />
//             <img className="home__right--image-column-1__img-3" src="image-3.jpeg" alt="image" />
//             <video className="home__right--image-column-1__img-4" autoPlay="true">
//               <source src="https://app.coverr.co/s3/mp4/Fightclub.mp4" type="video/mp4" />
//             </video>
//             <img className="home__right--image-column-1__img-5" src="image-4.jpeg" alt="image" />
//           </div>
//           <div className="home__right--image-column-2">
//             <video className="home__right--image-column-2__img-1" autoPlay="true">
//               <source src="https://app.coverr.co/s3/mp4/Boxing-gym.mp4" type="video/mp4" />
//             </video>
//             <img className="home__right--image-column-2__img-2" src="image-5.jpeg" alt="image" />
//             <img className="home__right--image-column-2__img-3" src="image-6.jpeg" alt="image" />
//             <img className="home__right--image-column-2__img-4" src="image-7.jpeg" alt="image" />
//           </div>
//         </div>
//
//       </div>
//     );
//   }
// }
