import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await import('../data/projects.json');
                setProjects(projectsResponse.default);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    },[]);

    return (
        <div className="flex flex-col dark:bg-gray-900 min-h-screen">
            <p className="text-center text-xl font-bold mt-4 dark:text-white font-serif">Check out some of my projects!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {projects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        </div>
    )
}   