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
            <header>
                <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">My Projects</h1>
                <p className="text-center text-lg text-gray-700 dark:text-gray-300">Explore some of the projects I've worked on, showcasing my skills and creativity.</p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {projects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        </section>
    )
}   