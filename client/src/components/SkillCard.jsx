import React from 'react';
import { importAllIcons } from '../utils/importIcons';

const SkillCard = ({ skill, projects }) => {
    const icons = importAllIcons();
    const icon = icons[`${skill.icon}`];

    return (
        <div className="flex flex-col items-center dark:bg-gray-800">
            <img src={icon} alt={skill.name} className="w-16 h-16" />
            <h4 className="text-lg font-bold text-white">{skill.name}</h4>
            <p className="mb-2 text-white"><strong>Category:</strong> {skill.category}</p>
            <p className="mb-2 text-white"><strong>Proficiency:</strong> {skill.proficiency}</p>
            {skill.projectIDs.length > 0 && (
                <div>
                    <strong className="text-white">Projects:</strong>
                    <ul>
                        {projects.map(project => (
                            <li key={project.id} className="text-white">{project.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SkillCard;