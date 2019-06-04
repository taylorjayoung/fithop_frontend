import React from 'react'
import aboutForm from './aboutForm'

const About = () => {
  return(
        <React.Fragment>
          <section id="showcase" style={backgroundStyle}>
          <div class="container text-center">
            <h1 class="about-header" id="about-header">
              Get To Know Us
            </h1>
          </div>
        </section>

        <div  class="about-main-text-section">
          <div class="about-text">
              <p>Hey!</p>
            <h3 class="about-text-center mb-3">Who Are We?</h3>
            <div id="about-description">
                <p>FitHop is a big next step for the fitness industry. We help fitness studios fill up vacancies in their classes and we help users save money on those classes by listing them at discounts.</p>
                <br></br>
                <p>There were a few very simple ideas behind making FitHop.</p>
                <ol style={{textAlign:"left"}}>
                  <li>Everybody should be able to work out.</li>
                  <li>Let small studios compete with big ones</li>
                  <li>Customers shouldn't have to wait days to book a class, they should be able to book one when they want</li>
                  <li>No contracts or recurring payments, you pay when you want to a book a class... that's it.</li>
                </ol>
                <p>We're a very young company and we're always looking for better ideas. If you have a suggestion, a complaint, or comment, please reach out. We would love to hear from you. </p>
            </div>
          </div>
        </div>

        <section id="services-about">
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

const backgroundStyle = {
  backgroundImage:'url("image-5 copy.jpeg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}
export default About
