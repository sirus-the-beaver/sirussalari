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
        <div className='projects-page'>
            <p>Check out some of my projects!</p>
            <div className='projects-grid'>
                {projects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        </div>
    )
}   