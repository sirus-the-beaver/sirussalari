import React from 'react';
import { importAllImages } from '../utils/importImages';

const ProjectCard = ({ project }) => {
    const allImages = importAllImages();
    const images = [];
    project.images.forEach(image => {
        images.push(allImages[image]);
    });

    return (
        <div className="flex flex-col items-center dark:bg-gray-800 p-4">
            <h3 className="text-2xl font-bold dark:text-white font-serif">{project.title}</h3>
            <p className="text-gray-500 font-bold dark:text-gray-400 font-serif">{project.tag}</p>
            {project.collaborators.length > 0 && (
                <ul className="flex mb-4 flex-col">
                    {project.collaborators.map((collaborator, index) => {
                        return <li key={index} className="text-gray-500 dark:text-gray-400 font-serif"><strong>Collaborators:</strong> {collaborator.name} | {collaborator.github}</li>
                    })}
                </ul>
            )}
            <h4 className="text-gray-500 font-bold p-2 dark:text-gray-400 font-serif">Description:</h4>
            <div className="max-h-40 mb-2 border rounded overflow-y-scroll">
                <p className="text-gray-500 p-2 dark:text-gray-400 font-serif">{project.context}</p>
                <p className="text-gray-500 p-2 dark:text-gray-400 font-serif">{project.description}</p>
            </div>
            <p className="text-gray-500 mb-2 dark:text-gray-400 font-serif"><strong>Technologies:</strong> {project.technologies.join(' | ')}</p>
            <ul className="mb-4">
                {images.map((image, index) => {
                    return <li key={index}><img src={image} alt={project.title} /></li>
                })}
            </ul>
            <ul className="flex space-x-4">
                {project.liveDemoURL && <li><a href={project.liveDemoURL} target='_blank' rel='noreferrer' className="text-blue-500 dark:text-blue-400 font-serif">View Project</a></li>}
                <li><a href={project.repoURL} target='_blank' rel='noreferrer' className="text-blue-500 dark:text-blue-400 font-serif">GitHub Repo</a></li>
            </ul>
        </div>
    )
}

export default ProjectCard;