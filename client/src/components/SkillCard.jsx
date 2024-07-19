import React from 'react';
import { importAllIcons } from '../utils/importIcons';

const SkillCard = ({ skill, projects }) => {
    const icons = importAllIcons();
    const icon = icons[`${skill.icon}`];

    return (
        <div className="skill-card">
            <img src={icon} alt={skill.name} />
            <h4>{skill.name}</h4>
            <p><strong>Category:</strong> {skill.category}</p>
            <p><strong>Proficiency:</strong> {skill.proficiency}</p>
            {skill.projectIDs.length > 0 && (
                <div>
                    <strong>Projects:</strong>
                    <ul>
                        {projects.map(project => (
                            console.log(project),
                            <li key={project.id}>{project.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SkillCard;