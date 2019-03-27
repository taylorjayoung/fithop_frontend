import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  state = {
    user: null
  };
  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.user.id}`)
      .then(res => res.json())
      .then(jsonData => {
        this.setState(
          {
            user: jsonData
          },
          () => console.log(this.state)
        );
      })
      .catch(e => console.log(e));
  }

  mapClasses = () => {
    return this.state.user.fitness_classes.map(c => {
      return (
        <div className="MyClass" key={c.id}>
          {c.name}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="ProfileDivWrapper">
        <div className="ProfileDiv">
          Profile Page
          <div className="PersonalInfo">
            <div className="ProfilePictureDiv">Picture Here</div>
          </div>
          <div className="MyClassesDiv">
            My Classes
            <div className="ClassesDiv">
              {this.state.user ? this.mapClasses() : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
