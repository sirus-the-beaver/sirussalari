import React from 'react';

export default function About() {
    return (
        <section className="flex flex-col items-center min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
            <header className="mb-8 text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">About Me</h1>
            </header>
            <div className="flex flex-col md:flex-row items-center max-w-4xl">
                <img className="w-48 h-48 rounded-full mb-4 md:mr-8" src='https://media.licdn.com/dms/image/D4D03AQEED4OAr8EZTQ/profile-displayphoto-shrink_400_400/0/1693712387025?e=1726704000&v=beta&t=xGg3doitMe92HMORyWa12w42pEwqx4ZE91kQhL3FBpI' alt='Sirus Salari' />
                <div className="flex flex-col space-y-6 text-lg leading-relaxed">
                    <p>
                        I’m a Computer Science student at Oregon State University with a passion for software engineering, music, sneakers, fashion, and cars. As I work towards my B.S. degree, I’m eagerly diving into the world of technology, seeking opportunities to apply my skills in innovative and impactful ways.
                    </p>
                    <p>
                        My ultimate goal is to become a full-time software engineer, contributing to projects that make a difference. I’m particularly interested in developing software that enhances user experiences and drives efficiency. I thrive in collaborative environments and enjoy tackling complex problems with creative solutions.
                    </p>
                    <p>
                        Outside of coding, you’ll find me exploring the latest trends in fashion and sneakers, staying updated with the automotive world, or unwinding with some music. These interests not only fuel my creativity but also help me maintain a balanced and dynamic lifestyle.
                    </p>
                    <p>
                        Looking ahead, I aim to build a successful career in software engineering, while also focusing on personal milestones like starting a family. I believe in the power of determination, continuous learning, and staying true to one’s passions.
                    </p>
                    <p>
                        I’m always open to connecting with like-minded professionals, whether to discuss tech innovations, share music recommendations, or talk about the latest in fashion and cars. Feel free to reach out – let’s inspire each other and grow together!
                    </p>
                </div>
            </div>
        </section>
    )
}