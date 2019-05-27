import React, { Fragment, Component } from "react";
import "./App.css";
import SignUp from "./components/general_components/SignUp";
import Login from "./components/general_components/Login";
import ShopClasses from "./components/ShopClassesComponents/ShopClasses";
import Home from "./components/general_components/Home";
import Profile from "./components/profile_components/Profile";
import Toolbar from "./components/Toolbar";
import Footer from "./components/general_components/Footer";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import about from './components/about_components/About'


//App component holds the outermost functionality
// logging in, signing up, rendering the class page
class App extends Component {
  state = {
    home: true
  };

  render() {

    return (
      <Router>
        <React.Fragment>
          <Toolbar />
          <Route path="/" exact={true} component={Home}/>
          <Route path="/classes" exact={true} component={ShopClasses}/>
          <Route path="/classes/:id" exact strict render={
              ()=>{return<h1>Welcome To </h1>}
            }/>
          <Route path="/about" exact={true} component={about}/>


          <Footer />
        </React.Fragment>
      </Router>
    )

  }
}
export default App;
//
//   render() {
//     let backdrop;
//
//     if (this.state.sideDrawerOpen) {
//       backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
//     }
//     return (
//       <React.Fragment>
//         <div>
//           <Toolbar
//             drawerClickHandler={this.drawerToggleClickHandler}
//             handleClickLogin={this.handleClickLogin}
//             handleClickExplore={this.handleClickExplore}
//             renderProfile={this.renderProfile}
//             loggedIn={this.state.loggedIn}
//             handleClickClasses={this.handleClickClasses}
//           />
//           <SideDrawer show={this.state.sideDrawerOpen} />
//           {backdrop}
//           {this.state.home ? (
//             <Home
//               handleClickSignUp={this.handleClickSignUp}
//               handleClickExplore={this.handleClickExplore}
//             />
//           ) : null}
//           {this.state.showLogin || this.state.showSignUp ? (
//             <div id="login_background" />
//           ) : null}
//           {this.state.showLogin ? (
//             <Login
//               handleClickFalse={this.handleClickFalse}
//               setUser={this.setUser}
//             />
//           ) : null}
//
//           {this.state.showSignUp ? (
//             <SignUp
//               handleClickFalse={this.handleClickFalse}
//               setUser={this.setUser}
//             />
//           ) : null}
//           <div className="NavBar">
//             {this.state.loggedIn ? this.renderProfileLink() : null}
//           </div>
//           {this.state.exploreClasses ? <ShopClasses /> : null}
//           {this.state.renderProfile ? <Profile user={this.state.user} /> : null}
//         </div>
//       </React.Fragment>
//     );
//   }
// }
// export default App;
