import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <header className="bg-gray-900 dark:bg-gray-800">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <Link to='/' className="text-white text-2xl font-bold">Home</Link>
                    </div>
                    <ul className="flex items-center space-x-4">
                        <li>
                            <Link to='/about' className="text-white hover:text-gray-300">About</Link>
                        </li>
                        <li>
                            <Link to='/skills' className="text-white hover:text-gray-300">Skills</Link>
                        </li>
                        <li>
                            <Link to='/projects' className="text-white hover:text-gray-300">Projects</Link>
                        </li>
                        <li>
                            <Link to='/blog' className="text-white hover:text-gray-300">Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}