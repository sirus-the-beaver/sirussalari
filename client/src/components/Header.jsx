import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/documents/resume.pdf';

export default function Header () {
    return (
        <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-md">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-6">
                    <div className="text-white text-2xl font-extrabold tracking-wide">
                        <Link to='/'>Home</Link>
                    </div>
                    <ul className="flex items-center space-x-8">
                        <li>
                            <Link to='/about' className="text-white font-semibold hover:text-gray-300 transition duration-300" aria-label="About page">About</Link>
                        </li>
                        <li>
                            <Link to='/skills' className="text-white font-semibold hover:text-gray-300 transition duration-300" aria-label="Skills page">Skills</Link>
                        </li>
                        <li>
                            <Link to='/projects' className="text-white font-semibold hover:text-gray-300 transition duration-300" aria-label="Projects page">Projects</Link>
                        </li>
                        <li>
                            <Link to='/blog' className="text-white font-semibold hover:text-gray-300 transition duration-300" aria-label="Blog page">Blog</Link>
                        </li>
                        <li>
                            <Link to='/contact' className="text-white font-semibold hover:text-gray-300 transition duration-300" aria-label="Contact page">Contact</Link>
                        </li>
                        <li>
                            <a href={resume} download className="text-white font-semibold hover:text-gray-300 transition duration-300" aria-label="Download resume">Download Resume</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}