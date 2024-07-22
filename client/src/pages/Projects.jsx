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
        <div className="container mx-auto dark:bg-gray-800">
            <p className="text-center text-xl font-bold mt-8 dark:text-white">Check out some of my projects!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {projects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        </div>
    )
}   