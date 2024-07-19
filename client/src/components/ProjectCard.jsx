import React from 'react';
import { importAllImages } from '../utils/importImages';

const ProjectCard = ({ project }) => {
    const allImages = importAllImages();
    const images = [];
    project.images.forEach(image => {
        images.push(allImages[image]);
    });

    return (
        <div className='project-card'>
            <h3>{project.title}</h3>
            <p>{project.tag}</p>
            <ul>
                {project.collaborators.map((collaborator, index) => {
                    return <li key={index}>Collaborators: {collaborator.name} | {collaborator.github}</li>

                })}
            </ul>
            <p>{project.context}</p>
            <p>{project.description}</p>
            <p>Features:</p>
            <ul>
                {project.features?.map((feature, index) => {
                    return <li key={index}>{feature}</li>
                })}
            </ul>
            <p>Technologies: {project.technologies.join(', ')}</p>
            <ul>
                {images.map((image, index) => {
                    return <li key={index}><img src={image} alt={project.title} /></li>
                })}
            </ul>
            <ul>
                <li><a href={project.liveDemoURL} target='_blank' rel='noreferrer'>View Project</a></li>
                <li><a href={project.repoURL} target='_blank' rel='noreferrer'>GitHub Repo</a></li>
            </ul>
        </div>
    )
}

export default ProjectCard;