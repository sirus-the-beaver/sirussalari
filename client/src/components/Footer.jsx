import React from 'react';
import { FaLinkedin, FaGithub, FaBlog } from 'react-icons/fa';

export default function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-4">&copy; {currentYear} Sirus Salari. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href='https://www.linkedin.com/in/salari-insite/' target='_blank' rel='noopener noreferrer' className="hover:text-blue-500 transition-colors duration-300" aria-label="LinkedIn">
                        <FaLinkedin size={24} />
                    </a>
                    <a href='https://github.com/sirus-the-beaver' target='_blank' rel='noopener noreferrer' className="hover:text-gray-400 transition-colors duration-300" aria-label="GitHub">
                        <FaGithub size={24} />
                    </a>
                    <a href='https://scrappedscript.com/' target='_blank' rel='noopener noreferrer' className="hover:text-yellow-500 transition-colors duration-300" aria-label="Blog">
                        <FaBlog size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}