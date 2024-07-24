import React, { useState, useEffect } from 'react';
import SkillCard from '../components/SkillCard';

export default function Skills () {
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const skillsResponse = await import('../data/skills.json');
                const projectsResponse = await import('../data/projects.json');

                setSkills(skillsResponse.default);
                setProjects(projectsResponse.default);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <p className="text-center text-white">Loading...</p>;

    if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

    return (
        <section className="flex justify-center bg-gray-900">
            <div className="max-w-4xl w-full mt-4 mb-4">
                <header>
                    <h1 className="text-4xl font-bold mb-8 text-center font-serif text-white">Skills</h1>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    {skills.map((skill) => {
                        const skillProjects = skill.projectIDs.map(projectId => projects.find(project => project.id === projectId));
                        return <SkillCard key={skill.name} skill={skill} projects={skillProjects} />
                    })}
                </div>
            </div>
        </section>
    )
};