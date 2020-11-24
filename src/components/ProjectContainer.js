import React from "react";

function ProjectContainer (props) {
    return (
        <div className="col mb-4">
            <div className="card">
                <img src={props.image} className="card-img-top" alt={props.alt} height="300px" width="300px"/>
                <div className="card-body card">
                    <h5 className="card-title">{props.title}</h5>
                    <a className="btn btn-dark shadow" href={props.github} target="_blank" rel="noopener noreferrer" role="button">Github repo</a>
                    <a className="btn btn-info shadow" href={props.deploy} target="_blank" rel="noopener noreferrer" role="button">Deployed app</a>
                    <a className="btn btn-light shadow" href={props.screenshot} target="_blank" rel="noopener noreferrer" role="button">Screenshot</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectContainer;