import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <header>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/skills'>Skills</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}