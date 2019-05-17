import React, { Component } from "react";
import "./Profile.css";
import InfoContainer from './InfoContainer'

class Profile extends Component {
  state = {
    user: null
  };
  // componentDidMount() {
  //   fetch(`http://localhost:3000/users/${this.props.user.id}`)
  //     .then(res => res.json())
  //     .then(jsonData => {
  //       this.setState(
  //         {
  //           user: jsonData
  //         },
  //         () => console.log(this.state)
  //       );
  //     })
  //     .catch(e => console.log(e));
  // }
  //
  // mapClasses = () => {
  //   return this.state.user.fitness_classes.map(c => {
  //     return (
  //       <div className="MyClass" key={c.id}>
  //         {c.name}
  //       </div>
  //     );
  //   });
  // };

  render() {
    return (
      <div className="ProfileDivWrapper">

        <div className="ProfileDiv">
          <div className="ProfileInfoComponentContainer">
            <InfoContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
