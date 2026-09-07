import React from 'react';
import profilePicture from '../assets/images/sirus_salari.jpeg';

export default function About() {
    return (
        <section className="flex flex-col items-center min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
            <header className="mb-8 text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">Sirus Salari</h1>
            </header>
            <div className="flex flex-col items-center">
                <img src={profilePicture} alt="Sirus Salari" className="w-48 h-48 rounded-full mb-6 shadow-lg" />
                <div className="flex flex-col space-y-6 text-lg leading-relaxed">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">About Me</h1>
                    <p>
                        I have a B.S. in Computer Science from Oregon State University, and a B.A. in Psychology from the University of California, Irvine.
                    </p>
                    <p>
                        I have extensive knowledge in building web applications using various technologies, including React, Node.js, Express, and MongoDB. I have experience in developing both front-end and back-end components of web applications, as well as integrating third-party APIs and services.
                        I am passionate about creating user-friendly and responsive web applications that provide a seamless user experience. I am also interested in exploring new technologies and frameworks to enhance my skills and stay up-to-date with the latest trends in web development.
                    </p>
                </div>
            </div>
        </section>
    )
}