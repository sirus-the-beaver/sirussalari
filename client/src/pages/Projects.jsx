import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await import('../data/projects.json');
                setProjects(projectsResponse.default);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    },[]);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    
    if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

    return (
        <section className="flex flex-col items-center min-h-screen py-8 px-4 dark:bg-gray-900 bg-gray-100">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-serif">Projects</h1>
            </header>
            <div className="flex flex-col gap-10 mt-8 items-center">
                {projects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        </section>
    )
}   