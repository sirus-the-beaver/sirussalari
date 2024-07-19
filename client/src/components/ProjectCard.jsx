import React from 'react';
import { importAllImages } from '../utils/importImages';

const ProjectCard = ({ project }) => {
    const allImages = importAllImages();
    const images = [];
    project.images.forEach(image => {
        images.push(allImages[image]);
    });

    return (
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-500 mb-4">{project.tag}</p>
            <ul className="mb-4">
                {project.collaborators.map((collaborator, index) => {
                    return <li key={index} className="text-gray-500">Collaborators: {collaborator.name} | {collaborator.github}</li>
                })}
            </ul>
            <p className="text-gray-500 mb-4">{project.context}</p>
            <p className="text-gray-500 mb-4">{project.description}</p>
            <p className="text-gray-500 mb-2">Features:</p>
            <ul className="mb-4">
                {project.features?.map((feature, index) => {
                    return <li key={index} className="text-gray-500">{feature}</li>
                })}
            </ul>
            <p className="text-gray-500 mb-2">Technologies: {project.technologies.join(', ')}</p>
            <ul className="mb-4">
                {images.map((image, index) => {
                    return <li key={index}><img src={image} alt={project.title} /></li>
                })}
            </ul>
            <ul className="flex space-x-4">
                <li><a href={project.liveDemoURL} target='_blank' rel='noreferrer' className="text-blue-500">View Project</a></li>
                <li><a href={project.repoURL} target='_blank' rel='noreferrer' className="text-blue-500">GitHub Repo</a></li>
            </ul>
        </div>
    )
}

export default ProjectCard;