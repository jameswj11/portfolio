import React, { Component } from 'react';
import Data from '../json/projects.json';
import './Projects.css'

class Projects extends Component {
    render() {
        let data = {
            professional: Data.professional,
            personal: Data.personal,
            all: Data.professional.concat(Data.personal)
        }
        let type = 'all';
        let query = this.props.location.search.substring(1);

        if (query === 'professional') {
            type = 'professional';
        } else if (query === 'personal') {
            type = 'personal';
        }

        return (
            <div className="projectsContainer">
                {data[type].map((project, i) => (
                    <div className="cardBody" key={i}>
                        <img src={project.img} alt="thumbnail" className="thumbnail" />
                        <h3 className="title">{project.name}</h3>
                        <p>{project.desc} <Link data={project}/></p>
                    </div>
                ))}
            </div>
        )
    }
}

function Link(project) {
    if (project.data.url) {
        return (
            <a href={project.data.url} className="visitLink" target="_blank" rel='noopener noreferrer'>Visit</a>
        )
    } else {
        return (null)
    }
}

export default Projects;