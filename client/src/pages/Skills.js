import React, { useState, useEffect } from 'react';
import SkillCard from '../components/SkillCard';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        import('../data/skills.json')
            .then((response) => response.default)
            .then((data) => setSkills(data))
            .catch((error) => console.error(error));

        import('../data/projects.json')
            .then((response) => response.default)
            .then((data) => setProjects(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className='skills-page'>
            <h1>Skills</h1>
            <div className='skills-grid'>
                {skills.map((skill) => {
                    const skillProjects = skill.projects.map(projectId => projects.find(project => project.id === projectId));
                    return <SkillCard key={skill.name} skill={skill} projects={skillProjects} />
                })}
            </div>
        </div>
    )
};

export default Skills;