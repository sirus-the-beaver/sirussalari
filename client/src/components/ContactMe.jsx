import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactMe() {
    return (
        <section className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-serif p-6">
            <header className="mb-8 text-center">
                <h1 className="text-3xl font-extrabold">Contact Me</h1>
                <p className="text-lg text-gray-400">I'd love to hear from you! Feel free to reach out via the channels below.</p>
            </header>
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl w-full max-w-lg">
                <ul className="space-y-6">
                    <li className="flex items-center">
                        <MdEmail className="text-2xl mr-4 text-blue-400" />
                        <div>
                            <strong>Email:</strong> <a href="mailto:sirus.salari@gmail.com" className="text-blue-400 hover:underline transition duration-300">sirus.salari@gmail.com</a>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <FaLinkedin className="text-2xl mr-4 text-blue-400" />
                        <div>
                            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/salari-insite/" target="_blank" rel="noreferrer noopener" className="text-blue-400 hover:underline transition duration-300">linkedin.com/in/salari-insite</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}