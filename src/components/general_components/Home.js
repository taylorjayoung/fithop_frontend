import React, { Component } from "react";
import homeSearch from "../search_components/home_search"
import InfoModal from "../modals/class_info_modal/InfoModal"

export default class Home extends Component {
  async componentDidMount(){
    const sponsored_classes = await fetch("http://localhost:3000/sponsored_classes")
          .then(res => res.json())
          .then(jsonData => jsonData)
          .catch(e => console.log(e));

      this.setState({
        sponsored_classes: sponsored_classes
      })
  }


  renderModal(event){
    const id = event.target.id
    const selectedClass = this.state.sponsored_classes[parseInt(id) - 1]
    const modal = document.getElementById('exampleModal')
    const modalHeader = document.getElementsByClassName('modal-header')[0].children[0]
    const modalBody = document.getElementsByClassName('modal-body')[0]
    modalHeader.innerText= selectedClass.name

    let classNode
    let class_info_header
    let gym_info_header
    let class_info_node
    let gym_info_node

    if(!document.getElementsByClassName('class_node')[0]){
      classNode = document.createElement('div')
      classNode.className = "class_node"
      class_info_header = document.createElement('h3')
      class_info_header.className = "info_modal_header"
      gym_info_header = document.createElement('h3')
      gym_info_header.className = "info_modal_header"
      gym_info_header.innerText = "Gym Info: "
      class_info_node = document.createElement('p')
      class_info_node.className = ('class_info_node')
      gym_info_node = document.createElement('p')
      gym_info_node.className = ('gym_info_node')
    } else {
      classNode = document.getElementsByClassName('class_node')[0]
      class_info_header = document.getElementsByClassName('info_modal_header')[0]
      gym_info_header = document.getElementsByClassName('info_modal_header')[1]
      class_info_node = document.getElementsByClassName('class_info_node')[0]
      gym_info_node = document.getElementsByClassName('gym_info_node')[0]
    }


    class_info_header.innerText = "Class Info: "
    class_info_node.innerText = (
      ` Type: ${selectedClass.class_type}
        Instructor: ${selectedClass.instructor}
        Vacanscies: ${selectedClass.vacancies}
        Price: $${selectedClass.price}`
      )
    gym_info_node.innerText = (`
        Name: ${selectedClass.gym.name}
        Neighborhood: ${selectedClass.gym.neighborhood}
        Address: ${selectedClass.gym.address}
      `)
    classNode.append(class_info_header)
    classNode.append(class_info_node)
    classNode.append(gym_info_header)
    classNode.append(gym_info_node)
    modalBody.appendChild(classNode)

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
              <div class="card listing-preview">
                <img class="card-img-top img " src="image-1 copy.jpg" alt="" />
                <div class="card-img-overlay" >
                  <h2>
                    <span class="badge badge-secondary text-white">$12.00</span>
                  </h2>
                </div>
                <div class="card-body">
                  <a value="See Class">
                    <div class="listing-heading text-center">
                      <h4 class="text-primary" id={1} data-toggle="modal" data-target="#exampleModal" onClick={(event) => this.renderModal(event)}>Insanity Workout</h4>
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
                  <a class="btn btn-primary btn-block">Book Now</a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card listing-preview" >
                <img class="card-img-top img" src="image-2 copy.jpeg" alt="" />
                <div class="card-img-overlay">
                  <h2>
                    <span class="badge badge-secondary text-white">$15.00</span>
                  </h2>
                </div>
                <div class="card-body">
                  <a  value="See Class">
                    <div class="listing-heading text-center">
                      <h4 class="text-primary" id={2} data-toggle="modal" data-target="#exampleModal" onClick={(event) => this.renderModal(event)}>Pilates Fury</h4>
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
                  <a class="btn btn-primary btn-block">Book Now</a>
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
                  <a value="See Class">
                    <div class="listing-heading text-center">
                      <h4 class="text-primary" id={3} data-toggle="modal" data-target="#exampleModal" onClick={(event) => this.renderModal(event)}>Band Stretches</h4>
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
                  <a class="btn btn-primary btn-block">Book Now</a>
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
