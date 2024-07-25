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

    if (loading) return <p className="text-center text-white">Loading...</p>;
    
    if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

    return (
        <section className="flex flex-col dark:bg-gray-900 min-h-screen">
            <header>
                <h1 className="text-4xl mt-4 font-bold mb-8 text-center text-white font-serif">Check out some of my projects!</h1>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
                {projects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        </section>
    )
}   