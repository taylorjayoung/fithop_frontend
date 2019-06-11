import React from "react";
import { BrowserRouter as Route, Router, Link} from "react-router-dom";
import ClassInfo from "./ClassInfo.js"
import './listCards.css'

// export default function ListCards() {
//   console.log('list cards')
//   return (
//       <div class="col-md-6 col-lg-4 mb-4">
//           <div className={"SkinnyCardContainer"}>
//             <div class="card listing-preview">
//               <img class="card-img-top" src="image-1.jpg" alt="" />
//               <div class="card-img-overlay">
//                 <h2>
//                   <span class="badge badge-secondary text-white">$12.00</span>
//                 </h2>
//               </div>
//               <div class="card-body">
//                 <div class="listing-heading text-center">
//                   <h4 class="text-primary">45 Drivewood Circle</h4>
//                   <p>
//                     <i class="fas fa-map-marker text-secondary"></i> Upper East Side</p>
//                 </div>
//                 <hr />
//                 <div class="row py-2 text-secondary">
//                   <div class="col-6">
//                     <i class="fas fa-th-large"></i> Gym: NYSC</div>
//                   <div class="col-6">
//                     <i class="fas fa-users"></i> Vacancies: 2</div>
//                 </div>
//                 <div class="row py-2 text-secondary">
//                   <div class="col-6">
//                     <i class="fas fa-heart"></i> Difficulty: 3</div>
//                   <div class="col-6">
//                     <i class="fas fa-star"></i> Rating: 2.5</div>
//                 </div>
//                 <hr />
//                 <div class="row py-2 text-secondary">
//                   <div class="col-6">
//                     <i class="fas fa-user"></i>Lead by Kyle Brown</div>
//                 </div>
//                 <div class="row text-secondary pb-2">
//                   <div class="col-6">
//                     <i class="fas fa-clock"></i> 10 minutes left</div>
//                 </div>
//                 <hr />
//                 <a href="listing.html" class="btn btn-primary btn-block">More Info</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
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
            <div className={"SkinnyCardInfo"} >
              <div className="SkinnyCardGymType">{fitness_class.class_type}</div>
              <div className="SkinnyCardGymName">{fitness_class.name}</div>
              <div className="SkinnyCardGymInstructor">{fitness_class.instructor}</div>
            </div>
            <div className="SkinnyCardDetailContainer">
              <div className="SkinnyCardGymDetail">gym details/description</div>
            </div>
            <div className="listCards-button-container">
              <input className="SkinnyCardButton" type="button" onClick={(event, id) => viewClass(event, fitness_class.id)} value="View Class" />
              <Link to={`/classes/${fitness_class.id}`}>View Class</Link>
              <input className="SkinnyCardButton2" type="button" onClick={(event, id) => bookNow(event, fitness_class.id)} value="Book Now" />
            </div>
          </div>
        </div>

        <Route path={`/classes/${fitness_class.id}`} component={ClassInfo}/>
        </>
      );
  });
}
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
