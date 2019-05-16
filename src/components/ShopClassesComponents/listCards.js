import React from "react";

export default function ListCards(
  gyms,
  setCurrentClass,
  viewClass,
  bookNow,
  searchterm
) {
  return gyms.map(gym => {
      return (
        <div
          key={gym.id}
          onClick={event => setCurrentClass(event)}
          className={"SkinnyCard"}
          id={gym.id}
        >
          <div className={"SkinnyCardInfo"} >
            Gym: {gym.name}
            Classes: {listClasses(gym.fitness_classes)}
          </div>
          <div className="listCards-button-container">
            <div className="MoreInfoButtonDiv">
              <input type="button" onClick={(event, id) => viewClass(event, gym.id)} value="View Class" />
            </div>
            <div className="BookButtonDiv">
              <input type="button" onClick={(event, id) => bookNow(event, gym.id)} value="Book Now" />
            </div>
          </div>
        </div>
      );
  });
}

function listClasses(classes){
  return classes.map( c => {
    return (
      <div key={c.id} className={`class-listing gym-${c.gym_id} cl-${c.id}`} >
        instructor: {c.instructor}
        name: {c.name}
        {`$${c.price}`}
        spots left: {c.vacancies}
      </div> )
  })
}
