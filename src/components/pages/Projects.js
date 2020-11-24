import React from "react";
import ProjectContainer from "../ProjectContainer";
import projectsjson from "../../projects.json";
import "./style.css";

const Projects = () => (

  <div className="">
    <div className="container">
      <h2 className="about-portfolio-contact">Projects</h2>
      <hr />
      <div className="card-body card card-projects">
        <div className="row row-cols-1 row-cols-md-2">
          {projectsjson.map((project) => <ProjectContainer key={project.id} image={project.image} alt={project.alt} title={project.title} github={project.github} deploy={project.deploy} screenshot={project.screenshot} />)}
        </div>
      </div>
    </div>
  </div>

);

export default Projects;
