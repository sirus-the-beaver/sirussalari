import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/documents/resume.pdf';
import ThemeSwitcher from './ThemeSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to remove the effect when the component is unmounted or isOpen changes
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <header className="bg-gray-900 dark:bg-gray-800">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between py-4 px-6 md:px-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link to='/' className="text-white text-2xl font-bold">Home</Link>
                        <button onClick={toggleMenu} className="md:hidden text-white" aria-label="Menu button">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                    <div className={`fixed inset-0 bg-gray-900 bg-opacity-90 z-50 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="flex justify-end p-4">
                            <button onClick={toggleMenu} className="text-white" aria-label="Close menu button">
                                <FaTimes size={24} />
                            </button>
                        </div>
                        <ul className="flex flex-col items-center space-y-4 mt-8">
                            <li>
                                <Link to='/about' onClick={toggleMenu} className="text-white font-semibold hover:text-gray-300 transition duration-300" aria-label="About page">About</Link>
                            </li>
                            <li>
                                <Link to='/skills' onClick={toggleMenu} className="text-white font-semibold hover:text-gray-300 transition duration-300" aria-label="Skills page">Skills</Link>
                            </li>
                            <li>
                                <Link to='/projects' onClick={toggleMenu} className="text-white font-semibold hover:text-gray-300 transition duration-300" aria-label="Projects page">Projects</Link>
                            </li>
                            <li>
                                <Link to='/blog' onClick={toggleMenu} className="text-white font-semibold hover:text-gray-300 transition duration-300" aria-label="Blog page">Blog</Link>
                            </li>
                            <li>
                                <Link to='/contact' onClick={toggleMenu} className="text-white font-semibold hover:text-gray-300 transition duration-300" aria-label="Contact page">Contact</Link>
                            </li>
                            <li>
                                <a href={resume} download onClick={toggleMenu} className="text-white font-semibold hover:text-gray-300 transition duration-300" aria-label="Download resume">Download Resume</a>
                            </li>
                            <li>
                                <ThemeSwitcher />
                            </li>
                        </ul>
                    </div>

                    <ul className="hidden md:flex md:flex-row md:items-center md:space-x-4">
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
                        <li>
                            <ThemeSwitcher />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
