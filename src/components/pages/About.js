import React from "react";
import image from "./thalia.jpg";
import "./style.css";

const About = () => (
  <div className="background">
    <div className="container container-about">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <img className="thaliajpg" src={image} alt="thalia" width="250" height="250" />
          <h2 className="name text-center">Thalia Rodriguez</h2>
         <p className="text-white text-center text-about">Full stack web developer leveraging a strong customer service background to build the best
          user experience on the web. Recently earned a certificate in full stack development from the Bootcamp Spot of the University of Miami, with newly developed skills in HTML, CSS, Bootstrap, JavaScript, jQuery, APIs, GitHub, Heroku, Materialize, JSON, NodeJS, ExpressJS, MySQL, MongoDb, ReactJS, ...and responsive web design. Characterized as a team worker, problem solver, fast learner, very organized and creative person, that enjoys and thinks that is a highly rewarding experience making web design and bringing it to life.</p>
        </div>
      </div>
    </div>
  </div>

);

export default About;
