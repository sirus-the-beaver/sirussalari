import React from 'react';
import { importAllIcons } from '../utils/importIcons';

const SkillCard = ({ skill, projects }) => {
    const icons = importAllIcons();
    const icon = icons[`${skill.icon}`];

    return (
        <div className="flex flex-col items-center">
            <img src={icon} alt={skill.name} className="w-16 h-16" />
            <h4 className="text-lg font-bold">{skill.name}</h4>
            <p className="mb-2"><strong>Category:</strong> {skill.category}</p>
            <p className="mb-2"><strong>Proficiency:</strong> {skill.proficiency}</p>
            {skill.projectIDs.length > 0 && (
                <div>
                    <strong>Projects:</strong>
                    <ul>
                        {projects.map(project => (
                            <li key={project.id}>{project.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SkillCard;