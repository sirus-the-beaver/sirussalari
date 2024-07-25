import React from 'react';
import { importAllImages } from '../utils/importImages';

const ProjectCard = ({ project }) => {
    const allImages = importAllImages();
    const images = [];
    project.images.forEach(image => {
        images.push(allImages[image]);
    });

    return (
        <section className="flex flex-col items-center dark:bg-gray-800 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <header className="text-center mb-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-serif mb-2">{project.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-serif">{project.tag}</p>
            </header>
            {project.collaborators.length > 0 && (
                <ul className="mb-4">
                    {project.collaborators.map((collaborator, index) => {
                        return <li key={index} className="text-gray-500 dark:text-gray-400 font-serif"><strong>Collaborators:</strong> {collaborator.name} | {collaborator.github}</li>
                    })}
                </ul>
            )}
            <div className="w-full max-h-48 mb-4 rounded-lg overflow-y-scroll border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 p-4 font-serif">{project.context}</p>
                <p className="text-gray-700 p-4 dark:text-gray-300 font-serif">{project.description}</p>
            </div>
            <p className="text-gray-700 mb-4 dark:text-gray-300 font-serif"><strong>Technologies:</strong> {project.technologies.join(' | ')}</p>
            <ul className="flex justify-center space-x-4 mb-4">
                {images.map((image, index) => {
                    return <li key={index}><img src={image} alt={project.title} className="object-cover rounded-lg shadow-md" /></li>
                })}
            </ul>
            <div className="flex space-x-6">
                {project.liveDemoURL && (
                    <a href={project.liveDemoURL} target='_blank' rel='noreferrer' className="text-blue-500 dark:text-blue-400 font-serif hover:underline">
                        View Project
                    </a>
                )}
                <a href={project.repoURL} target='_blank' rel='noreferrer' className="text-blue-500 dark:text-blue-400 font-serif hover:underline">
                    GitHub Repo
                </a>
            </div>
        </section>
    )
}

export default ProjectCard;