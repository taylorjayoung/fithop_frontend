import React from "react";
import { BrowserRouter as Route, Router, Link} from "react-router-dom";
import ClassInfo from "./ClassInfo.js"
import './listCards.css'

export default function listCards(
  fitness_classes,
  setCurrentClass,
  viewClass,
  bookNow
) {
  return fitness_classes.map(fitness_class => {
    console.log(fitness_class)
      return (
        <>
        <div
          key={fitness_class.id}
          className={"SkinnyCard"}
          id={fitness_class.id}
        >
          <div className="SkinnyCardImageContainer">
            <span className="SkinnyCardPrice">$12.00</span>
            <img className="SkinnyCardImage" src="image-3 copy.jpeg" alt="image"/>
          </div>
          <div className="SkinnyCardInfoContainer">
            <div className={"SkinnyCardInfo"}>
              <div className="SkinnyCardGymType">{fitness_class.class_type}</div>
              <div className="SkinnyCardGymName">{fitness_class.name}</div>
              <div className="SkinnyCardGymInstructor">{fitness_class.instructor}</div>
            </div>
            <div className="SkinnyCardDetailContainer">
              <div className="SkinnyCardGymDetail">gym details/description</div>
            </div>
            <div className="listCards-button-container">
              <Link className="SkinnyCardButton" onClick={(event, id) => viewClass(event, fitness_class.id)} to={`/classes/${fitness_class.id}`}>View Class</Link>
              <Link className="SkinnyCardButton2" onClick={(event, id) => bookNow(event, fitness_class.id)} to={`/classes/${fitness_class.id}`}>Book Now</Link>
            </div>
          </div>
        </div>
        <Route path={`/classes/${fitness_class.id}`} component={ClassInfo}/>
        </>
      );
  });
}
