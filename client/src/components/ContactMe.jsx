import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactMe() {
    return (
        <section className="flex flex-col items-center min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-serif">
            <header className="mb-8 text-center">
                <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">Contact Me</h1>
            </header>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-lg">
                <ul className="space-y-6">
                    <li className="flex items-center">
                        <MdEmail className="text-2xl mr-4 text-blue-600 dark:text-blue-400" />
                        <div>
                            <strong className="text-gray-800 dark:text-gray-200">Email:</strong> <a href="mailto:sirus.salari@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline transition duration-300">sirus.salari@gmail.com</a>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <FaLinkedin className="text-2xl mr-4 text-blue-600 dark:text-blue-400" />
                        <div>
                            <strong className="text-gray-800 dark:text-gray-200">LinkedIn:</strong> <a href="https://www.linkedin.com/in/salari-insite/" target="_blank" rel="noreferrer noopener" className="text-blue-600 dark:text-blue-400 hover:underline transition duration-300">linkedin.com/in/salari-insite</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}