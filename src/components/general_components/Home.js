import React, { Component } from "react";
import homeSearch from "../search_components/home_search"


export default class Home extends Component {
  async componentDidMount(){
    const sponsored_classes = await fetch("http://localhost:3001/sponsored_classes")
          .then(res => res.json())
          .then(jsonData => jsonData)
          .catch(e => console.log(e));
  }



  render(){
    return(
      <React.Fragment>
        <section id="showcase">
        <div class="container text-center">
          <div class="home-search p-5">
            <div class="overlay p-5">
              <h1 class="display-4 mb-4">
                Working Out In NYC Just Got Affordable
              </h1>
              <p class="lead">Tired of overpaying for overbooked classes? Get last minute deals on the hottest workouts in the city!</p>
              <div class="search">
                  {homeSearch}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="listings" class="py-5">
        <div class="container">
          <h3 class="text-center mb-3">Latest Classes</h3>
          <div class="row">

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card listing-preview" href="http://localhost:3001/classes/1" >
                <img class="card-img-top img " src="image-1 copy.jpg" alt="" />
                <div class="card-img-overlay" >
                  <h2>
                    <span class="badge badge-secondary text-white">$12.00</span>
                  </h2>
                </div>
                <div class="card-body">
                  <a href="http://localhost:3001/classes/3" value="See Class">
                    <div class="listing-heading text-center">
                      <h4 class="text-primary">Insanity Workout</h4>
                      <p>
                        <i class="fas fa-map-marker text-secondary"></i> Upper East Side</p>
                    </div>
                  </a>
                  <hr />
                  <div class="row py-2 text-secondary">
                    <div class="col-6">
                      <i class="fas fa-th-large"></i> NYSC</div>
                    <div class="col-6">
                      <i class="fas fa-users"></i> Spots: 2</div>
                  </div>
                  <div class="row py-2 text-secondary">
                    <div class="col-6">
                      <i class="fas fa-heart"></i> Difficulty: 3</div>
                    <div class="col-6">
                      <i class="fas fa-star"></i> Rating: 4</div>
                  </div>
                  <hr />
                  <div class="row py-2 text-secondary">
                    <div class="col-6">
                      <i class="fas fa-user"></i>Lead by Kyle Brown</div>
                  </div>
                  <div class="row text-secondary pb-2">
                    <div class="col-6">
                      <i class="fas fa-clock"></i> 90 minutes</div>
                  </div>
                  <hr />
                  <a href="http://localhost:3001/classes/1/book" class="btn btn-primary btn-block">Book Now</a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card listing-preview" href="http://localhost:3001/classes/2">
                <img class="card-img-top img" src="image-2 copy.jpeg" alt="" />
                <div class="card-img-overlay">
                  <h2>
                    <span class="badge badge-secondary text-white">$15.00</span>
                  </h2>
                </div>
                <div class="card-body">
                  <a href="http://localhost:3001/classes/3" value="See Class">
                    <div class="listing-heading text-center">
                      <h4 class="text-primary">Pilates Fury</h4>
                      <p>
                        <i class="fas fa-map-marker text-secondary"></i> Alphabet City</p>
                    </div>
                  </a>
                  <hr />
                  <div class="row py-2 text-secondary">
                    <div class="col-6">
                      <i class="fas fa-th-large"></i> Barry's</div>
                    <div class="col-6">
                      <i class="fas fa-users"></i> Spots: 1</div>
                  </div>
                  <div class="row py-2 text-secondary">
                    <div class="col-6">
                      <i class="fas fa-heart"></i> Difficulty: 4</div>
                    <div class="col-6">
                      <i class="fas fa-star"></i> Rating: 2.5</div>
                    </div>
                  <hr />
                  <div class="row py-2 text-secondary">
                    <div class="col-6">
                      <i class="fas fa-user"></i> Lead by Mark Hudson</div>
                  </div>
                  <div class="row text-secondary pb-2">
                    <div class="col-6">
                      <i class="fas fa-clock"></i> 45 minutes</div>
                  </div>
                  <hr />
                  <a href="http://localhost:3001/classes/2/book" class="btn btn-primary btn-block">Book Now</a>
                </div>
              </div>
            </div>


            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card listing-preview" >
              <img class="card-img-top img" src="image-3 copy.jpeg" alt="see class" />
                <div class="card-img-overlay">
                  <h2>
                    <span class="badge badge-secondary text-white">$9.99</span>
                  </h2>
                </div>
                <div class="card-body">
                  <a href="http://localhost:3001/classes/3" value="See Class">
                    <div class="listing-heading text-center">
                      <h4 class="text-primary">Band Stretches</h4>
                      <p>
                        <i class="fas fa-map-marker text-secondary"></i> Upper West Side</p>
                    </div>
                  </a>

                  <hr />
                  <div class="row py-2 text-secondary">
                    <div class="col-6">
                      <i class="fas fa-th-large"></i> Soul Cycle</div>
                    <div class="col-6">
                      <i class="fas fa-users"></i> Spots: 0</div>
                  </div>
                  <div class="row py-2 text-secondary">
                    <div class="col-6">
                      <i class="fas fa-heart"></i> Difficulty: 4</div>
                    <div class="col-6">
                      <i class="fas fa-star"></i> Rating: 2.5</div>
                  </div>
                  <hr />
                  <div class="row py-2 text-secondary">
                    <div class="col-6">
                      <i class="fas fa-user"></i> Lead by Mark Hudson</div>
                  </div>
                  <div class="row text-secondary pb-2">
                    <div class="col-6">
                      <i class="fas fa-clock"></i> 60 minutes</div>
                  </div>
                  <hr />
                  <a href="http://localhost:3001/classes/3/book" class="btn btn-primary btn-block">Book Now</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="services" class="py-5 bg-secondary text-white">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-4">
              <i class="fas fa-dumbbell fa-4x mr-4"></i>
              <hr />
              <h3>Find Your Gym At Your Price</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur
                hic dignissimos ratione ea quae.</p>
            </div>
            <div class="col-md-4">
              <i class="fas fa-running fa-4x mr-4"></i>
              <hr />
              <h3>Get There Fast</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur
                hic dignissimos ratione ea quae.</p>
            </div>
            <div class="col-md-4">
              <i class="fas fa-seedling fa-4x mr-4"></i>
              <hr />
              <h3>Give Small Studios a Chance To Grow</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur
                hic dignissimos ratione ea quae.</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
    )
  }
}
