import React, { useState, useEffect } from 'react';
import SkillCard from '../components/SkillCard';

export default function Skills () {
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const skillsResponse = await import('../data/skills.json');
                const projectsResponse = await import('../data/projects.json');

                setSkills(skillsResponse.default);
                setProjects(projectsResponse.default);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="flex justify-center bg-gray-900">
            <div className="max-w-4xl w-full">
                {skills.map((skill) => {
                    const skillProjects = skill.projectIDs.map(projectId => projects.find(project => project.id === projectId));
                    return <SkillCard key={skill.name} skill={skill} projects={skillProjects} />
                })}
            </div>
        </div>
    )
};