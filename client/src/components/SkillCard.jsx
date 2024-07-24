import React from 'react';
import { importAllIcons } from '../utils/importIcons';

const SkillCard = ({ skill, projects }) => {
    const icons = importAllIcons();
    const icon = icons[`${skill.icon}`];

    return (
        <section className="flex flex-col items-center dark:bg-gray-800 font-serif">
            <img src={icon} alt={skill.name} className="w-16 h-16" />
            <header>
                <h4 className="text-lg font-bold text-white">{skill.name}</h4>
            </header>
            <p className="mb-2 text-white"><strong>Category:</strong> {skill.category}</p>
            <p className="mb-2 text-white"><strong>Proficiency:</strong> {skill.proficiency}</p>
            {skill.projectIDs.length > 0 && (
                <div className="flex flex-col justify-center items-center">
                    <strong className="text-white">Projects:</strong>
                    <ul className="flex flex-col justify-center items-center">
                        {projects.map(project => (
                            <li key={project.id} className="text-white">{project.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}

export default SkillCard;