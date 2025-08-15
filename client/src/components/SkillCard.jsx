import React from 'react';
import { importAllIcons } from '../utils/importIcons';

const SkillCard = ({ skill, projects }) => {
    const icons = importAllIcons();
    const icon = icons[`${skill.icon}`];

    return (
        <section className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <img src={icon} alt={skill.name} className="w-16 h-16 mb-4" />
            <header className="text-center mb-2">
                <h4 className="text-xl font-semibold">{skill.name}</h4>
            </header>
            <p className="mb-2"><strong>Category:</strong> {skill.category}</p>
            {skill.projectIDs.length > 0 && (
                <div className="w-full text-center">
                    <strong>Projects:</strong>
                    <ul className="list-disc list-inside mt-2">
                        {projects.map(project => (
                            <li key={project.id} className="text-sm">{project.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}

export default SkillCard;