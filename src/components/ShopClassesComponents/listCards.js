import React from "react";

export default function ListCards() {
  return (
      <div class="col-md-6 col-lg-4 mb-4">
          <div className={"SkinnyCardContainer"}>
            <div class="card listing-preview">
              <img class="card-img-top" src="image-1.jpg" alt="" />
              <div class="card-img-overlay">
                <h2>
                  <span class="badge badge-secondary text-white">$12.00</span>
                </h2>
              </div>
              <div class="card-body">
                <div class="listing-heading text-center">
                  <h4 class="text-primary">45 Drivewood Circle</h4>
                  <p>
                    <i class="fas fa-map-marker text-secondary"></i> Upper East Side</p>
                </div>
                <hr />
                <div class="row py-2 text-secondary">
                  <div class="col-6">
                    <i class="fas fa-th-large"></i> Gym: NYSC</div>
                  <div class="col-6">
                    <i class="fas fa-users"></i> Vacancies: 2</div>
                </div>
                <div class="row py-2 text-secondary">
                  <div class="col-6">
                    <i class="fas fa-heart"></i> Difficulty: 3</div>
                  <div class="col-6">
                    <i class="fas fa-star"></i> Rating: 2.5</div>
                </div>
                <hr />
                <div class="row py-2 text-secondary">
                  <div class="col-6">
                    <i class="fas fa-user"></i>Lead by Kyle Brown</div>
                </div>
                <div class="row text-secondary pb-2">
                  <div class="col-6">
                    <i class="fas fa-clock"></i> 10 minutes left</div>
                </div>
                <hr />
                <a href="listing.html" class="btn btn-primary btn-block">More Info</a>
              </div>
            </div>
          </div>
        </div>
      )
}

// function listClasses(classes){
//   return classes.map( c => {
//     return (
//       <div key={c.id} className={`class-listing gym-${c.gym_id} cl-${c.id}`} >
//         instructor: {c.instructor}
//         name: {c.name}
//         {`$${c.price}`}
//         spots left: {c.vacancies}
//       </div> )
//   })
// }
//
// export default function ListCards(
//   gyms,
//   setCurrentClass,
//   viewClass,
//   bookNow,
//   searchterm
// ) {
//   return gyms.map(gym => {
//       return (
//         <div
//           key={gym.id}
//           onClick={event => setCurrentClass(event)}
//           className={"SkinnyCard"}
//           id={gym.id}
//         >
//           <div className={"SkinnyCardInfo"} >
//             Gym: {gym.name}
//             Classes: {listClasses(gym.fitness_classes)}
//           </div>
//           <div className="listCards-button-container">
//             <div className="MoreInfoButtonDiv">
//               <input type="button" onClick={(event, id) => viewClass(event, gym.id)} value="View Class" />
//             </div>
//             <div className="BookButtonDiv">
//               <input type="button" onClick={(event, id) => bookNow(event, gym.id)} value="Book Now" />
//             </div>
//           </div>
//         </div>
//       );
//   });
// }
//
// function listClasses(classes){
//   return classes.map( c => {
//     return (
//       <div key={c.id} className={`class-listing gym-${c.gym_id} cl-${c.id}`} >
//         instructor: {c.instructor}
//         name: {c.name}
//         {`$${c.price}`}
//         spots left: {c.vacancies}
//       </div> )
//   })
// }
