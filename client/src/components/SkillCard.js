import React from 'react';

const SkillCard = ({ skill, projects }) => {
    const icon = require(`${skill.icon}`).default;

    return (
        <div className="skill-card">
            <img src={icon} alt={skill.name} />
            <h4>{skill.name}</h4>
            <p><strong>Category:</strong> {skill.category}</p>
            <p><strong>Proficiency:</strong> {skill.proficiency}</p>
            {projectIDs.length > 0 && (
                <div>
                    <strong>Projects:</strong>
                    <ul>
                        {projects.map(project => (
                            <li key={project.id}>{project.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SkillCard;