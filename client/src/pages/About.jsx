import React from 'react';

export default function About() {
    return (
        <section className="flex flex-col items-center min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
            <header className="mb-8 text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">Sirus Salari</h1>
            </header>
            <div className="flex flex-col items-center">
                <img className="w-48 h-48 rounded-full md:mr-8" src="../assets/images/sirus_salari.jpeg" alt='Sirus Salari' />
                <div className="flex flex-col space-y-6 text-lg leading-relaxed">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">About Me</h1>
                    <p>
                        I have a B.S. in Computer Science from Oregon State University, and a B.A. in Psychology from the University of California, Irvine.
                    </p>
                    <p>
                        My ultimate goal is to become a full-time software engineer, contributing to projects that make a difference. I’m particularly interested in backend development, where I can leverage my skills in Python, JavaScript, and various frameworks to build robust applications.
                    </p>
                    <p>
                        Outside of coding, you’ll find me exploring the latest trends in fashion and sneakers, staying updated with the automotive world, or unwinding with some music. These interests not only fuel my creativity but also help me maintain a balanced and dynamic lifestyle.
                    </p>
                </div>
            </div>
        </section>
    )
}