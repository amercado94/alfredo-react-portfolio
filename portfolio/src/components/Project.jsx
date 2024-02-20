import React from "react";
import "../style/Project.css"

function Project(props) {
    return (
        <div className="bg-dark">
            <h3 className="card-title text-white">{props.title}</h3>
            <a href={props.deployedLink} target="_blank" rel="noreferrer">
                <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
            </a>
            <div className="card-body">
                <p className="card-text text-white">{props.description}</p>
                <a
                    href={props.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-repo"
                 >
                    GitHub Repo
                </a>
            </div>
        </div>
    );
}

export default Project;